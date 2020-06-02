module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //const postsTemplate = path.resolve("./src/templates/posts.js")
  const res = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: postsTemplate,
      path: `/${edge.node.fields.slug}`,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
