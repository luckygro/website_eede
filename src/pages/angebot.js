import React, { Component } from 'react';
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'


// Styled Components

const AngebotImg = styled(Img)`
  float: left;
  margin-bottom: 10px;
`;


const Heading = styled.h1`
  font-size: 40px;
  color: #666;
  font-family: Roboto, Arial;
  font-weight: normal;
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
      ? <AngebotImg style={{float: "left", marginRight: "20px"}} fixed={image.fixed} />
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
