import React, { Component } from 'react';
import Contact from '../components/contact'
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Remarkable from 'remarkable'
import { Heading , Article } from '../components/layoutStyles'

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
    } = this.props.data.contentfulDefaultPage


    return (

      <Layout
        heroimage={<Img sizes={heroImage.sizes} />}
        >

        <Heading>{title}</Heading>

        <Article dangerouslySetInnerHTML={{__html: bodyhtml}}/>

        { isContact
          ? <Contacts contacts={contact} />
          : null
        }

      </Layout>
    )
  }
}

export default DefaultPage

export const pageQuery = graphql`
  query spendenPageQuery {
    contentfulDefaultPage(slug: {eq: "spenden"}) {
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
          ...GatsbyContentfulSizes
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
