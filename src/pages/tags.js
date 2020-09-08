import React from "react"
import { Helmet } from "react-helmet"
import AdSense from "react-adsense"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title, description },
    },
  },
}) => (
  <>
    <Layout>
      <div className="cContainer">
        <Helmet title={`Tags - ${title}`} desc={description} />
        <div className="allTags">
          <h1>Tags</h1>
          <ul className="tagList">
            {group.map(tag => (
              <li key={tag.fieldValue} style={{}}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}{" "}
                  <span className="tagCount">{tag.totalCount}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
