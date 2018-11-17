import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

// Styled Components

const ContactBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  max-width: 500px;
  overflow: hidden;
  background-color: #eee;
  color: #666;
  margin: 10px 30px 10px 0px;
  float: left;
`

const ContactHeading = styled.p`
  color: #666;
  font-weight: bold;
  padding: 0;
  margin: 0;
`

const ContactButton = styled.a`
  display: inline-block;
  color: #fff;
  font-size: 1em;
  padding: 10px;
  text-decoration: None;
  margin-top: 10px;
  background: #999;

  :hover,
  :focus,
  :active {
    background-color: #666;
  }
`

const ContactPosition = styled.span`
  display: block;
`

const ContactCity = styled.span`
  display: block;
`

const ContactImage = styled(Img)`
  float: left;
`

const ContactInfo = styled.div`
  float: left;
  padding: 20px;
  margin-top: auto;
  margin-bottom: auto;
  width: 250px;
`

// render

const Contact = contacts => {
  /*let showContacts = contact && contact.length

  if (!showContacts) {
    return null
  }*/

  let { node } = contacts

  return (
    <ContactBox>
      <ContactImage fixed={node.image.fixed} />
      <ContactInfo>
        <ContactHeading>{node.name}</ContactHeading>
        <ContactPosition>{node.position}</ContactPosition>
        <ContactCity>{node.city}</ContactCity>
        <ContactButton href={'mailto:' + node.email}>Email</ContactButton>
      </ContactInfo>
    </ContactBox>
  )
}

export default Contact
