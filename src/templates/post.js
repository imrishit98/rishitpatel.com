import React from "react"
import { graphql } from "gatsby"
//import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import PostTags from "../components/postTags"
import SEO from "../components/seo/seo"
import Ads from "../components/ads"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        dateModified(formatString: "YYYY-MM-DD")
        author
        description
        featureImage {
          childImageSharp {
            fixed {
              src
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
    <>
      <SEO
        title={`${props.data.mdx.frontmatter.title} - Rishit Patel`}
        desc={props.data.mdx.frontmatter.description}
        image={
          props.data.mdx.frontmatter.featureImage.childImageSharp.fixed.src
        }
        datePub={props.data.mdx.frontmatter.date}
        dateMod={props.data.mdx.frontmatter.dateModified}
        pathname={props.location.pathname}
        article
      />
      <Layout>
        <div className="cContainer">
          <article className="post">
            {/* <Img
              fluid={
                props.data.mdx.frontmatter.featureImage.childImageSharp.fluid
              }
              alt={props.data.mdx.frontmatter.title}
            /> */}
            <div className="postUpArea">
              <h1 className="postTitle">{props.data.mdx.frontmatter.title}</h1>
              <p className="postData">
                {props.data.mdx.frontmatter.date} &nbsp;{" "}
                {props.data.mdx.frontmatter.author}
              </p>
              <PostTags tags={props.data.mdx.frontmatter.tags} />
            </div>
            <div className="postBody">
              <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
            </div>
            <div className="ad">
              <Ads />
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}

export default Post
