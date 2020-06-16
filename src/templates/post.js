import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import PostTags from "../components/postTags"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        author
        featureImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
      body
    }
  }
`

const Post = props => {
  return (
    <Layout>
      <div className="cContainer">
        <article className="post">
          {/* <Img
            fluid={
              props.data.mdx.frontmatter.featureImage.childImageSharp.fluid
            }
          /> */}
          <h1 className="postTitle">{props.data.mdx.frontmatter.title}</h1>
          <p className="postData">
            {props.data.mdx.frontmatter.date} &nbsp;{" "}
            {props.data.mdx.frontmatter.author}
          </p>
          <PostTags tags={props.data.mdx.frontmatter.tags} />
          <div className="postBody">
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default Post
