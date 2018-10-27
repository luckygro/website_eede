import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import Remarkable from 'remarkable'
// Styled Components


const Article = styled.div`
  margin: 20px 0;
`;

const Heading = styled.h1`
  font-size: 40px;
  color: #666;
  font-family: Roboto, Arial;
  font-weight: normal;
`;

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
