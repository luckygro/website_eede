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

const Contact = ({ contacts }) => {
  let showContacts = contacts && contacts.length

  if (!showContacts) {
    return null
  }

  return (
    <div>
      {contacts.map(contact => (
        <ContactBox key={contact.name}>
          <ContactImage fixed={contact.image.fixed} />
          <ContactInfo>
            <ContactHeading>{contact.name}</ContactHeading>
            <ContactPosition>{contact.position}</ContactPosition>
            <ContactCity>{contact.city}</ContactCity>
            <ContactButton href={'mailto:' + contact.email}>
              Email
            </ContactButton>
          </ContactInfo>
        </ContactBox>
      ))}
    </div>
  )
}

export default Contact
