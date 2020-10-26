import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
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
              date(formatString: "YYYY-MM-DD")
              author
            }
            id
          }
        }
      }
    }
  `)

  return (
    <>
      <SEO
        title={`Blog - Rishit Patel`}
        desc={`Personal blog of Rishit Patel. This is the place where I write about things I like, make and learn about tech!`}
        dateMod={`2020-06-17`}
        pathname={`/blog`}
      />
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
                      {new Date(edge.node.frontmatter.date)
                        .toDateString()
                        .slice(4)}{" "}
                      &nbsp; {edge.node.frontmatter.author}
                    </p>
                  </Link>
                </div>
              )
            })}
          </section>
        </div>
      </Layout>
    </>
  )
}

export default Blog
