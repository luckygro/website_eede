import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './normalize.css'
import './layout.css'
import styled, { ThemeProvider } from 'styled-components'

// styled Components
const Footer = styled.div`
  margin-top: 60px;
  background-color: ${props => props.theme.darkBackground};
  padding: 60px 0;
  overflow: auto;
  width: 100%;

  p {
    color: ${props => props.theme.darkText};
  }
`

const Container = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;

  color: #999;
  font-family: Roboto, Arial;
  font-weight: normal;

  @media only screen and (max-width 1024px) {
    width: 95%;
  }
`

const Separator = styled.hr`
  background-color: #bbb;
  height: 1px;
  text-align: left;
  display: inline-block;
  width: 50%;
  max-width: 150px;
  border: 0;
  margin-bottom: 1em;
`

const ExternalLink = styled.a`
  color: #999;
  text-decoration: none;

  :hover {
    color: #bbb;
    text-decoration: underline;
  }
`

const Content = styled(Container)`
  color: #333;
`

const ModuleBox = styled.div`
  background-color: #eee;
  color: #999;
  margin-top: 40px;
  float: left;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`
const HeroImage = styled.div`
  width: 100%;
  max-height: 300px;
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    img {
      top: -35% !important;
    }
  }
`

// theme

const theme = {
  primaryColor: '#E31718',
  brightText: '#fff',
  darkText: '#999',
  brightBackground: '#eee',
  darkBackground: '#333',
}

// render

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <ThemeProvider theme={theme}>
          <>
            <Header siteTitle={data.site.siteMetadata.title} />

            <HeroImage>{props.heroimage}</HeroImage>

            <Content>{props.children}</Content>

            <ModuleBox>
              <Container>{props.bottom}</Container>
            </ModuleBox>

            <Footer>
              <Container>
                <p>© Evangelisation Explosiv e.V. 2018</p>
                <Separator />
                <p>
                  Layout &amp; Design: <br /> Lukas Großmann -{' '}
                  <ExternalLink href="http://www.luckyg.design" target="_blanc">
                    www.luckyg.design
                  </ExternalLink>
                </p>
              </Container>
            </Footer>
          </>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: propTypes.node.isRequired,
  module: propTypes.node,
}

export default Layout
