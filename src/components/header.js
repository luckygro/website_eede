import React from 'react'
import { Link } from 'gatsby'
import Nav from './nav'
import styled from 'styled-components'

// styling
const HeaderBar = styled.div`
  position: fixed;
  width: 100%;
  right: 0;
  z-index: 100;
  background: #eee;
  padding-top: 15px;
  padding-bottom: 0px;
  box-shadow: 0px 0px 10px 5px #bbb;
`

const LogoImg = styled.img`
`

const Container = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`


// render

// Logo
function Logo(props) {
  return (
    <Link to="/">
      {props.alt}

    </Link>
  )
}

class Header extends React.Component {
  render() {

    return (
      <HeaderBar>
        <Container>
          <Logo alt={this.props.siteTitle} />

          <Nav />
        </Container>
      </HeaderBar>
    )
  }
}

export default Header
