import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from "gatsby"


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

const Contactform = () => {return(null)}

// tbd

export default Contactform
