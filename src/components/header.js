import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { UnmountClosed } from 'react-collapse'
import MediaQuery from 'react-responsive'
import logo from '../images/logo.png'

// styling

const HeaderBar = styled.div`
  width: 100%;
  right: 0;
  z-index: 100;
  background: #eee;
  padding-top: 15px;
  padding-bottom: 0px;
`

const LogoImg = styled.img`
  height: 60px;
  margin-bottom: 15px;
`

const Container = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`

const MenuToggle = styled.button`
  float: right;
  display: inline-block;
  color: #999;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #999;
  border-radius: 3px;
  text-decoration: None;
  transiton: border-color 1s, color 1s;
  margin-top: 0.5em;
  background-color: none;

  :hover,
  :focus {
    color: #666;
    border-color: #666;
  }
`

const MenuLink = styled(Link)`
  display: block;
  color: #666;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 10px;
  border-top: solid 2px transparent;
  -webkit-transition: border-top 0.25s, color 0.25s;
  transition: border-top 0.25s, color 0.25s;

  :hover,
  :focus {
    color: #333;
    border-top-color: #e31718;
  }
`
const MenuItem = styled.li`
  padding-left: 8px;
  padding-rigth: 8px;
  list-style-type: none;
  float: left;
  padding: 20px;
  padding-top: 0;
  padding-left: 8px;
  display: block;
`

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  font: normal normal normal 1em/1.25 Arial, Helvetica, sans-serif;
  overflow-y: hidden;
`

// render

function ListItem(props) {
  return (
    <MenuItem style={{ paddingLeft: '8px', paddingRight: '8px' }}>
      <MenuLink to={props.link}>{props.value}</MenuLink>
    </MenuItem>
  )
}

function List() {
  return (
    <nav style={{ display: 'block' }}>
      <MenuList>
        <ListItem link="ueber-uns" value="Über uns" />
        <ListItem link="termine" value="Termine" />
        <ListItem link="angebot" value="Angebot" />
        <ListItem link="material" value="Material" />
        <ListItem link="kontakt" value="Kontakt" />
        <ListItem link="spenden" value="Spenden" />
        <ListItem link="impressum" value="Impressum" />
      </MenuList>
    </nav>
  )
}

// Logo
function Logo(props) {
  return (
    <Link to="/">
      <LogoImg src={logo} alt={props.alt} />
    </Link>
  )
}

// render class
export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.closeNavbar = this.closeNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  closeNavbar() {
    if (this.state.collapsed !== true) {
      this.toggleNavbar()
    }
  }

  render() {
    return (
      <HeaderBar>
        <Container>
          <Logo alt={this.props.siteTitle} />

          <MediaQuery maxWidth={1024}>
            <MenuToggle onClick={this.toggleNavbar} className="mr-2">
              Menü
            </MenuToggle>
          </MediaQuery>

          <div style={{ float: 'right', display: 'block' }}>
            <MediaQuery minWidth={1025}>
              <List />
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
              <UnmountClosed isOpened={!this.state.collapsed}>
                <List />
              </UnmountClosed>
            </MediaQuery>
          </div>
        </Container>
      </HeaderBar>
    )
  }
}
