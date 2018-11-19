import styled from 'styled-components'

// styled Components
const Article = styled.div`
  margin: 20px 0;
`

const Heading = styled.h1`
  font-size: 40px;
  color: #666;
  font-family: Roboto, Arial;
  font-weight: normal;
`
const Button = styled.button`
  display: block;
  color: #fff;
  font-size: 1em;
  padding: 10px;
  text-decoration: None;
  margin-top: 30px;
  background: #999;

  :hover,
  :focus,
  :active {
    background-color: #666;
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

export { Article, Heading, Button, Separator }
