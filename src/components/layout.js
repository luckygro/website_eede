import React from 'react'
import propTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import styled from 'styled-components'



// styled Components
const Footer = styled.div`
  margin-top: 60px;
  background-color: #333;
  padding: 60px 0;
  overflow: auto;
`;

const Container = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;

  color: #999;
  font-family: Roboto, Arial;
  font-weight: normal;
`;

const Separator = styled.hr `
  background-color: #bbb;
  height: 1px;
  text-align: left;
  display: inline-block;
  width: 50%;
  max-width: 150px;
  border: 0;
  margin-bottom: 1em;
`;

const ExternalLink = styled.a`
  color: #999;
  text-decoration: none;

  :hover {
    color: #bbb;
    text-decoration: underline;
  }
`;

const Content = styled(Container)`
  color: #333;
`;





// render


const Layout = ({ children }) => (
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



        <Header siteTitle={data.site.siteMetadata.title} />

        <Content>
          {children}
        </Content>

        <Footer>
          <Container>
            <p>© Evangelisation Explosiv e.V. 2018</p>
            <Separator />
            <p>Layout &amp; Design: <br /> Lukas Großmann - <ExternalLink href="http://www.luckyg.design" target="_blanc">www.luckyg.de</ExternalLink></p>
          </Container>
        </Footer>

      </>
    )}
  />
)

Layout.propTypes = {
  children: propTypes.node.isRequired,
}

export default Layout
