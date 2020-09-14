import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import AdContainer from "../components/adContainer"

const TagsPage = ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title, description },
    },
  },
}) => (
  <>
    <Helmet
      title="Tags - RishitPatel.com"
      desc="Find all the tags from posts at RishitPatel.com"
    />
    <Layout>
      <div className="cContainer">
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
      <AdContainer />
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
