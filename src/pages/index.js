import React, { Component } from 'react';
import Contact from '../components/contact'
import Img from 'gatsby-image'
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
`

// render

var md = new Remarkable({
  html: true,
  breaks: true
});

const Contacts = ({contacts}) => (
  <div>
    {contacts.map(singlecontact => (
      <Contact key={singlecontact.name} node={singlecontact} />
    ))}
  </div>
);

class IndexPage extends Component {

  render() {

    const {
      hauptslogan,
      unterslogan,
      heroImage,
    } = this.props.data.contentfulStartPage


    return (

      <Layout>

        <Heading>{hauptslogan}</Heading>
        <h2>{unterslogan}</h2>

        <Img sizes={heroImage.sizes} />

      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    contentfulStartPage(slug: {eq: "index"}) {
      hauptslogan
      unterslogan
      heroImage {
        file {
          fileName
          url
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
    }
  }
`
