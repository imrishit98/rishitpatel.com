import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
      }
      body
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <article className="post">
        <h1 className="postTitle">{props.data.mdx.frontmatter.title}</h1>
        <p className="postData">
          {props.data.mdx.frontmatter.date} &nbsp;{" "}
          {props.data.mdx.frontmatter.author}
        </p>
        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export default Post
