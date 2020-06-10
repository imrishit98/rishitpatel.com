import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const Blog = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
              date(formatString: "MMMM DD, YYYY")
              author
            }
            id
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="cContainer">
        <section className="posts">
          {posts.allMdx.edges.map(edge => {
            return (
              <div className="onePost" key={edge.node.frontmatter.title}>
                <Link
                  to={`/${edge.node.frontmatter.slug}/`}
                  key={edge.node.frontmatter.slug}
                  className="postLink"
                >
                  <h3 className="postTitle">{edge.node.frontmatter.title}</h3>
                  <p className="postData">
                    {edge.node.frontmatter.date} &nbsp;{" "}
                    {edge.node.frontmatter.author}
                  </p>
                </Link>
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export default Blog
