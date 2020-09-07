import React, { Component } from "react"
import { Helmet } from "react-helmet"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"

import Adsense from "../components/adsense"

class PostTags extends Component {
  render() {
    const { tags } = this.props

    return (
      <>
        <Helmet
          title="Tags - RishitPatel.com"
          desc="Find all the tags from posts at RishitPatel.com"
        />
        <div className="tag-container">
          {tags &&
            tags.map(tag => (
              <Link key={tag} to={`/tags/${kebabCase(tag)}/`}>
                <span className="oneTag">{tag}</span>
              </Link>
            ))}
        </div>
        <Adsense client="ca-pub-1201474411749621" slot="9205903697" />
      </>
    )
  }
}

export default PostTags
