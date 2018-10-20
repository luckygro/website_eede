import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'



// Styled Components


const ContactBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  max-width: 500px;
  overflow: hidden;
  background-color: #ddd;
  padding: 20px;
  border-radius: 10px;
  color: #999;
  margin: 10px;
  float: left;
`;

const ContactHeading = styled.h3`
  padding: 0;
  margin: 0;
  margin-bottom: 0.5em;
  color: #666;
`;

const ContactButton = styled.a`
  float: left;
  display: inline-block;
  color: #999;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #999;
  border-radius: 3px;
  text-decoration: None;
  transiton: border-color 1s, color 1s;
  margin-top: 0.5em;

  :hover {
    color: #666;
    border-color: #666;
  }
`;

const ContactPosition = styled.span`
  display: block;
`;

const ContactCity = styled.span`
  display: block;
`;

const ContactImage = styled(Img)`
  float: left;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  float: left;
  margin-left: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;




// render

const Contact = ({node}) => {
  return (
    <ContactBox>
      <ContactImage fixed={node.image.fixed} />
      <ContactInfo>
        <ContactHeading>{node.name}</ContactHeading>
        <ContactPosition>{node.position}</ContactPosition>
        <ContactCity>{node.city}</ContactCity>
        <ContactButton href={"mailto:" + node.email}>Email</ContactButton>
      </ContactInfo>
    </ContactBox>
  )
}

export default Contact
