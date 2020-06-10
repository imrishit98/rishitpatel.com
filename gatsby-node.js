const path = require("path")
const kebabCase = require("lodash.kebabcase")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postsTemplate = path.resolve("./src/templates/post.js")
  const tagTemplate = path.resolve("./src/templates/tags.js")

  const res = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
            id
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
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

  // Extract tag data from query
  const tags = res.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
