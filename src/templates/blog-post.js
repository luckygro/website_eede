import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby"


class BlogPost extends Component {
  render() {

    const {
      title,
      body
    } = this.props.data.contentfulBlogPost

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}/>
      </div>
    )
  }
}

BlogPost.PropTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
    }
  }
`
