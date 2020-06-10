import React, { Component } from "react"
import kebabCase from "lodash.kebabcase"
import { Link } from "gatsby"

class PostTags extends Component {
  render() {
    const { tags } = this.props

    return (
      <div className="tag-container">
        {tags &&
          tags.map(tag => (
            <Link key={tag} to={`/tags/${kebabCase(tag)}/`}>
              <span className="oneTag">{tag}</span>
            </Link>
          ))}
      </div>
    )
  }
}

export default PostTags
