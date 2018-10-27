import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faMapMarker } from '@fortawesome/free-solid-svg-icons'

// Styled Components

const TerminBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  overflow: hidden;
  background-color: #eee;
  padding: 5%;
  border-radius: 0;
  color: #999;
  margin: 10px;
  float: left;
  width: 100%;
`

const TerminTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  width: 90%
  float: left;
`

const TerminText = styled.div`
  width: 90%;
  float: left;
  margin-bottom: 20px;
`

const TerminInfo = styled.div`
  width: 90%;
  float: left;

  p {
    color: #666;
  }

  b {
    color: #000;
  }
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
  margin-left: 1em;
`

// contact

const ContactImage = styled(Img)`
  border-radius: 50%;
`

const ContactBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  overflow: hidden;
  color: #999;
  float: left;
  margin-right: 60px;
`

const ContactInfo = styled.p`
  margin-right: 1em;
  clear: right;

`

// contact

const KursImage = styled(Img)`
`

const KursBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  overflow: hidden;
  color: #999;
  float: left;
  margin-right: 30px;
`

const KursInfo = styled.p`
  margin-right: 1em;
`


const Schulungsleiter = ({node}) => {
  return (
    <ContactBox>
      <ContactInfo>
        <b>Schulungsleiter:</b><br />
        {node.name}
      </ContactInfo>
      <ContactImage fixed={node.image.fixed} />
    </ContactBox>
  )
}

const Kurs = ({node}) => {
  return (
    <KursBox>
      <KursInfo>
        <b>Kurs:</b><br />
        {node.title}
      </KursInfo>
      <KursImage fixed={node.image.fixed} />
    </KursBox>
  )
}


// render

export default function Termin(props) {

  const {
      title,
      text,
      dateTime,
      schulungsleiter,
      endDate,
      kurs,
      ort,
      hasKurs = kurs,
      hasContact = schulungsleiter,
  }  = props.node.node

  return (
    <TerminBox>

      <TerminTitle>{title}</TerminTitle>

      <TerminInfo>

        <p><b>Beginn:</b>
          <Icon icon={faCalendarAlt} />
          <Moment format="D MMM YYYY">{dateTime}</Moment>

          <Icon icon={faClock} />
          <Moment format="hh:mm">{dateTime}</Moment>
        </p>

        <p><b>Ende:</b>
          <Icon icon={faCalendarAlt} />
          <Moment format="D MMM YYYY">{endDate}</Moment>

          <Icon icon={faClock} />
          <Moment format="hh:mm">{endDate}</Moment>
        </p>

        <p><b>Ort:</b>
          <Icon icon={faMapMarker} />
          {ort}

        </p>

      </TerminInfo>

      <TerminText><ReactMarkdown source={text.text} /></TerminText>

      { hasContact
        ? <Schulungsleiter node={schulungsleiter} />
        : null
      }

      { hasKurs
        ? <Kurs node={kurs} />
        : null
      }


    </TerminBox>
  )
}
