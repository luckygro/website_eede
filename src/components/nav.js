import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'



// styling

const MenuLink = styled(Link)`
  display: block;
  color: #666;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 10px;
  border-top: solid 2px transparent;
  -webkit-transition: border-top 0.25s, color 0.25s;
  transition: border-top 0.25s, color 0.25s;

  :hover {
    color: #333;
    border-top-color: #E31718;
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
`

const MenuContainer = styled.div`
  float: right;
  display: block;
`



// render

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return (
    <MenuItem style={{paddingLeft: '8px', paddingRight: '8px'}}>
      <MenuLink to={props.link}>
      {props.value}
      </MenuLink>
    </MenuItem>
  );
}

// render
const Navbar = ({list}) => (
  <MenuList>
    {list.map(item => (
      <ListItem
        key={item.node.slug}
        link={item.node.slug}
        value={item.node.title} />
    ))}
  </MenuList>
);

const Nav = () => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        allContentfulNavigation {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}

    render={data => (
      <div style={{float: 'right', display: 'block'}}>
        <nav style={{display: 'block'}}>
          <Navbar list={data.allContentfulNavigation.edges} />
        </nav>
      </div>
    )}
  />
)

export default Nav
