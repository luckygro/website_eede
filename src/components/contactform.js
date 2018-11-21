import React from 'react'
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
    margin-left: 0%;
    :nth-of-type(2) {
      margin-left: 6%;
    }
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

const FormBanner = styled.span`
  width: 100%;
  float: left;
  margin-top: 10px;
`

const FormButton = styled.button`
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

class Contactform extends React.Component {
  state = {
    status: '',
    data: {
      name: '',
      email: '',
      message: '',
    },
  }

  submit = e => {
    e.preventDefault()

    let {
      data: { name, email, message },
    } = this.state

    fetch('http://localhost:5001/eede-d8ccf/us-central1/addMessage/', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).then(res => {
      this.setState({ status: 'Email wurde erfolgreich versandt.' })
    })
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(state => ({
      data: Object.assign({}, state.data, { [name]: value }),
    }))
  }

  render() {
    let { data } = this.state

    return (
      <form
        id="contactForm"
        action="http://localhost:5001/eede-d8ccf/us-central1/addMessage"
        onSubmit={this.submit}
      >
        <h3>Senden Sie uns eine E-Mail!</h3>
        <FormBanner>{this.state.status}</FormBanner>
        <InputGroupSmall className="small">
          <Label>Name</Label>
          <TextBox
            type="text"
            name="name"
            required
            placeholder="Vorname Nachname"
            value={data.name}
            onChange={this.handleChange}
          />
        </InputGroupSmall>

        <InputGroupSmall className="small">
          <Label>Email</Label>
          <TextBox
            type="email"
            name="email"
            required
            placeholder="ich@example.de"
            value={data.email}
            onChange={this.handleChange}
          />
        </InputGroupSmall>

        <InputGroupBig className="big">
          <Label>Nachricht</Label>
          <TextArea
            name="message"
            required
            placeholder="Hallo..."
            rows="7"
            value={data.message}
            onChange={this.handleChange}
          />
        </InputGroupBig>

        <InputGroupBig>
          <FormButton type="submit">Absenden</FormButton>
        </InputGroupBig>
      </form>
    )
  }
}

// tbd

export default Contactform
