import React, { Component } from 'react';
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { Heading } from '../components/layoutStyles'


// Styled Components

const AngebotImg = styled(Img)`
  float: left;
  margin-bottom: 10px;
  margin-right: 20px;
`;

const AngebotItem = styled.div`
  overflow: hidden;
  padding-bottom: 60px;
`


// render components

function Item(props) {

  const {
      title,
      image,
      text,
      isImage = (image),
  }  = props.node.node

  return (
    <AngebotItem>
      <h3>{title}</h3>

      { isImage
      ? <AngebotImg fixed={image.fixed} />
      : null
      }

      <div><ReactMarkdown source={text.text} /></div>

    </AngebotItem>
  )
}


const AngebotList = ({list}) => (
  <div>
    {list.map(singleitem => (
      <Item
        node={singleitem}
        key={singleitem.node.title} />
    ))}
  </div>
);


// render class

class AngebotPage extends Component {

  render() {

    const {
      edges
    } = this.props.data.allContentfulAngebot

    return (

      <Layout>

        <Heading>Angebote</Heading>

        <AngebotList list={edges} />

      </Layout>
    )
  }
}

export default AngebotPage


// get query

export const pageQuery = graphql`
  query angebotQuery {
    allContentfulAngebot(sort: {fields: [title]}) {
      edges {
        node {
          title
          text {
            text
          }
          image {
            fixed(width: 240) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
