import React, { Component } from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { SubHeading, ButtonLink } from '../components/layoutStyles'
import styled from 'styled-components'

// Styled Components

const HomeTitle = styled.h1`
  font-size: 40px;
  color: #e31718;
  font-family: Roboto, Arial;
  font-weight: normal;
  text-align: center;
  margin-top: 60px;
`

const ModuleImg = styled(Img)`
  float: left;
  margin-bottom: 10px;
  margin-right: 20px;
`

const HomeSeparator = styled.hr`
  background-color: #e31718;
  height: 2px;
  text-align: left;
  display: block;
  width: 50%;
  max-width: 150px;
  border: 0;
  margin-bottom: 1em;
  text-align: center;
`

const HomeSubtitle = styled.h2`
  font-size: 32px;
  color: #e31718;
  font-family: Roboto, Arial;
  font-weight: normal;
  text-align: center;
  margin-bottom: 60px;
`

const ModuleButton = styled(ButtonLink)`
  float: left;
  display: inline-block;
  margin-top: 0.5em;
`

const ModuleTitle = styled(SubHeading)`
  margin-top: 0px;
`

const ModuleText = styled.p``

const StartseiteModuleBox = styled.div`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  float: left;
`

// render

const StartseiteModule = ({ node }) => (
  <StartseiteModuleBox>
    <ModuleImg fixed={node.node.bild.fixed} />
    <ModuleTitle>{node.node.title}</ModuleTitle>
    <ModuleText>{node.node.text}</ModuleText>
    <ModuleButton to={node.node.buttonLink}>
      {node.node.buttonText}
    </ModuleButton>
  </StartseiteModuleBox>
)

const StartseiteModules = ({ modules }) => (
  <div>
    {modules.map(singlemodule => (
      <StartseiteModule key={singlemodule.node.title} node={singlemodule} />
    ))}
  </div>
)

class IndexPage extends Component {
  render() {
    const {
      hauptslogan,
      unterslogan,
      heroImage,
    } = this.props.data.contentfulStartPage

    const { edges } = this.props.data.allContentfulStartseiteModul

    return (
      <Layout heroimage={<Img sizes={heroImage.sizes} />}>
        <HomeTitle>{hauptslogan}</HomeTitle>
        <HomeSeparator />
        <HomeSubtitle>{unterslogan}</HomeSubtitle>

        <StartseiteModules modules={edges} />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query indexPageQuery {
    contentfulStartPage(slug: { eq: "index" }) {
      hauptslogan
      unterslogan
      heroImage {
        file {
          fileName
          url
        }
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes
        }
      }
    }
    allContentfulStartseiteModul {
      edges {
        node {
          id
          title
          slug
          text
          buttonText
          buttonLink
          bild {
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
