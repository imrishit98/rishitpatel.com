import React from "react"
import PropTypes from "prop-types"
import AdSense from "react-adsense"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <>
      <Helmet title={`Posts tagged with ${tag} - RishitPatel.com`} />
      <Layout>
        <div className="cContainer oneTagPage">
          <h1>{tagHeader}</h1>
          <ul className="tagPostList">
            {edges.map(({ node }) => {
              const { slug } = node.frontmatter
              const { title } = node.frontmatter
              const { date } = node.frontmatter
              const { author } = node.frontmatter
              return (
                <li key={slug}>
                  <Link to={slug}>
                    <h4>{title}</h4>
                    <span>
                      {date} &nbsp; {author}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link to="/tags/">All tags</Link>
        </div>
        <AdSense.Google
          client="ca-pub-1201474411749621"
          slot="9205903697"
          responsive="true"
          style={{ maxWidth: "100%" }}
        />
      </Layout>
    </>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              slug: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
          }
        }
      }
    }
  }
`
