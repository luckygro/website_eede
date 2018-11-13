import React from 'react';
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faMapMarker, faChalkboardTeacher, faBookOpen } from '@fortawesome/free-solid-svg-icons'

// Styled Components

const TerminBox = styled.div`
  font-family: 'Roboto', 'Arial' !important;
  overflow: hidden;
  background-color: #eee;
  border-radius: 0;
  color: #999;
  margin: 20px 0px;
  float: left;
  width: 100%;
`

const TerminHeader = styled.div`
  padding: 2%;
  background-color: #ccc;
  overflow: hidden;
  height: 50px;
`

const TerminInfo = styled.div`
  padding: 30px 2%;
  float: left;
  width: 40%;
  p {
    color: #666;
    font-size: 18px;
    margin-top: 0px;

    small {
      margin-left: 1.75em;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 5%;
    width: 90%;
  }
`

const TerminContent = styled.div`
  padding: 30px 2%;
  float: left;
  width: 52%;
  p {
    margin-top: 0px;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    padding: 30px 5% 0px 5%;
    width: 90%;
  }
`

const TerminTitle = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  color: ${(props) => props.theme.brightText};
  float: left;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`

const KursImage = styled(Img)`
  display: none;
  float: right;
  max-height: 50px;
`


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
      hasOrt = ort,
      hasKurs = kurs,
      hasContact = schulungsleiter,
  }  = props.node.node

  return (
    <TerminBox>

      <TerminHeader>
        <TerminTitle>{title}</TerminTitle>
        { hasKurs
          ? <KursImage fixed={kurs.image.fixed} />
          : null
        }
      </TerminHeader>

      <TerminContent>

        <ReactMarkdown source={text.text} />

      </TerminContent>

      <TerminInfo>

        <p>
          <Icon icon={faCalendarAlt} />
          <Moment format="D. MMMM YYYY hh:mm">{dateTime}</Moment> Uhr
          <br />
          <small>
            bis <Moment format="D. MMMM YYYY hh:mm">{endDate}</Moment> Uhr
          </small>
        </p>

        { hasOrt
          ? <p><Icon icon={faMapMarker} />Ort: {ort}</p>
          : null
        }

        { hasContact
          ? <p><Icon icon={faChalkboardTeacher} />Schulungsleiter: {schulungsleiter.name}</p>
          : null
        }

        { hasKurs
          ? <p><Icon icon={faBookOpen} />Kurs: {kurs.title}</p>
          : null
        }

      </TerminInfo>


    </TerminBox>
  )
}
