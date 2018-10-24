import React, { Component } from 'react';
import propTypes from 'prop-types';
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
`;


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

class DefaultPage extends Component {

  render() {

    const {
      title,
      body,
      contact,
      heroImage,
      bodyhtml = md.render(body.body),
      isContact = contact && contact.length,
      isImage = heroImage,
    } = this.props.data.contentfulDefaultPage


    return (

      <Layout>

        <Heading>{title}</Heading>

        { isImage
          ? <Img sizes={heroImage.sizes} />
          : null
        }

        <Article dangerouslySetInnerHTML={{__html: bodyhtml}}/>

        { isContact
          ? <Contacts contacts={contact} />
          : null
        }

      </Layout>
    )
  }
}

DefaultPage.propTypes = {
  data: propTypes.object.isRequired
}

export default DefaultPage

export const pageQuery = graphql`
  query defaultPageQuery($slug: String!){
    contentfulDefaultPage(slug: {eq: $slug}) {
      title
      slug
      body {
        body
      }
      heroImage {
        file {
          fileName
          url
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      contact {
        name
        position
        street
        city
        phone
        email
        image {
					fixed(width: 150) {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
`
