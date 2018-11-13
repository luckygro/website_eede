import React from 'react';
import styled from 'styled-components'

// Styled Components

const InputGroupBig = styled.div`
  float: left;
  width: 100%;
`

const InputGroupSmall = styled.div`
  float: left;
  width: 100%;

  @media (min-width: 1024px) {
    width: 47%;
    margin-left: 6%;
  }
  :nth-child(2) {
    margin-left: 0%;
  }

`

const Label = styled.label`
  margin-top: 30px;
  display: block;
`

const TextBox = styled.input`
  display: block;
  width: 100%;
  background-color: #fff;
  font-size: 16px;
  padding: 10px;
  margin: 10px 0px;
  :focus {
    border-left: #666 2px solid;
  }
  :invalid {
    border-left: #a00 2px solid;
  }
  :valid {
    border-left: #0a0 2px solid;
  }
`

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  background-color: #fff;
  border-left: #666 1px solid;
  font-size: 16px;
  padding: 10px 10px;
  margin: 10px 0px;
  :focus {
    border-left: #666 2px solid;
  }
  :invalid {
    border-left: #a00 2px solid;
  }
  :valid {
    border-left: #0a0 2px solid;
  }
`

const FormButton = styled.button`
  display: block;
  color: #fff;
  font-size: 1em;
  padding: 10px;
  text-decoration: None;
  margin-top: 30px;
  background: #999;

  :hover, :focus, :active {
    background-color: #666;
  }
`;


const Contactform = () => {
  return(
    <form id="contactForm" action="https://us-central1-eede-d8ccf.cloudfunctions.net/addMessage">

      <h3>Senden Sie uns eine E-Mail!</h3>
      <InputGroupSmall className="small">
        <Label>Name</Label>
        <TextBox type="text" name="name" required="true" placeholder="Vorname Nachname" />
      </InputGroupSmall>

      <InputGroupSmall className="small">
        <Label>Email</Label>
        <TextBox type="email" name="email" required="true" placeholder="ich@example.de"/>
      </InputGroupSmall>

      <InputGroupBig className="big">
        <Label>Nachricht</Label>
        <TextArea name="message" required="true" placeholder="Hallo..." rows="7"/>
      </InputGroupBig>

      <InputGroupBig>
        <FormButton type="submit">Absenden</FormButton>
      </InputGroupBig>
    </form>
  )
}

// tbd

export default Contactform
