import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import Moment from 'react-moment'
import moment from 'moment'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCalendarAlt,
  faMapMarker,
  faChalkboardTeacher,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons'

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
  color: ${props => props.theme.brightText};
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

class Termin extends React.Component {
  state = {
    status: '',
  }

  render() {
    let termin = this.props.node.node

    let now = moment()

    if (now.isAfter(termin.endDate)) {
      return null
    }

    let hasKurs = termin.kurs
    let hasOrt = termin.ort
    let hasContact = termin.schulungsleiter

    return (
      <TerminBox>
        <TerminHeader>
          <TerminTitle>{termin.title}</TerminTitle>
          {hasKurs ? <KursImage fixed={termin.kurs.image.fixed} /> : null}
        </TerminHeader>

        <TerminContent>
          <ReactMarkdown source={termin.text.text} />
        </TerminContent>

        <TerminInfo>
          <p>
            <Icon icon={faCalendarAlt} />
            <Moment format="D. MMMM YYYY hh:mm">{termin.dateTime}</Moment> Uhr
            <br />
            <small>
              bis <Moment format="D. MMMM YYYY hh:mm">{termin.endDate}</Moment>{' '}
              Uhr
            </small>
          </p>

          {hasOrt ? (
            <p>
              <Icon icon={faMapMarker} />
              Ort: {termin.ort}
            </p>
          ) : null}

          {hasContact ? (
            <p>
              <Icon icon={faChalkboardTeacher} />
              Schulungsleiter: {termin.schulungsleiter.name}
            </p>
          ) : null}

          {hasKurs ? (
            <p>
              <Icon icon={faBookOpen} />
              Kurs: {termin.kurs.title}
            </p>
          ) : null}
        </TerminInfo>
      </TerminBox>
    )
  }
}

export default Termin
