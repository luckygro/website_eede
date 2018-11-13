import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Remarkable from 'remarkable'
import { Heading , Article } from '../components/layoutStyles'


// render

var md = new Remarkable({
  html: true,
  breaks: true
})

class DefaultPage extends Component {

  render() {

    const {
      title,
      body,
      bodyhtml = md.render(body.body),
    } = this.props.data.contentfulDefaultPage


    return (

      <Layout>

        <Heading>{title}</Heading>

        <Article dangerouslySetInnerHTML={{__html: bodyhtml}}/>

      </Layout>
    )
  }
}

export default DefaultPage

export const pageQuery = graphql`
  query impressumPageQuery {
    contentfulDefaultPage(slug: {eq: "impressum"}) {
      title
      slug
      body {
        body
      }
    }
  }
`
