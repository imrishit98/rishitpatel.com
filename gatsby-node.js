const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postsTemplate = path.resolve("./src/templates/post.js")
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

  res.data.allMdx.edges.forEach(edge => {
    createPage({
      component: postsTemplate,
      path: edge.node.frontmatter.slug,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}
