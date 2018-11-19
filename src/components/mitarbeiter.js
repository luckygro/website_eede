import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// Styled Components

const PersonBox = styled.div`
  float: left;
  margin-right: 40px;
`

const PersonImg = styled(Img)`
  border-radius: 50%;
`

const PersonName = styled.p`
  font-weight: bold;
  color: #666;
  text-align: center;
`

// Render
const Person = ({ data }) => (
  <PersonBox>
    <PersonImg fixed={data.image.fixed} />
    <PersonName>{data.name}</PersonName>
  </PersonBox>
)

const List = ({ persons }) => (
  <div>
    {persons.map(singlePerson => (
      <Person key={singlePerson.node.name} data={singlePerson.node} />
    ))}
  </div>
)

export default ({ slug }) => (
  <StaticQuery
    query={graphql`
      query modulMitarbeiterQuery {
        contentfulModule(slug: { eq: "unseremitarbeiter" }) {
          title
          slug
          text {
            text
          }
        }
        allContentfulPerson {
          edges {
            node {
              name
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
      }
    `}
    render={data => (
      <div>
        <h3>{data.contentfulModule.title}</h3>
        <ReactMarkdown source={data.contentfulModule.text.text} />
        <List persons={data.allContentfulPerson.edges} />
      </div>
    )}
  />
)
