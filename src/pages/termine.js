import React, { Component } from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout'
import Termin from '../components/termin'
import { Heading } from '../components/layoutStyles'


// render

const TermineList = ({list}) => (
  <div>
    {list.map(singleitem => (
      <Termin
        node={singleitem}
        key={singleitem.node.title} />
    ))}
  </div>
);


class TerminePage extends Component {

  render() {

    const {
      edges
    } = this.props.data.allContentfulTermine


    return (

      <Layout>

        <Heading>Termine</Heading>

        <TermineList list={edges} />

      </Layout>
    )
  }
}

export default TerminePage

export const pageQuery = graphql`
  query termineQuery {
    allContentfulTermine {
      edges {
        node {
          title
          dateTime
          endDate
          text {
            text
          }
          ort
          schulungsleiter {
            name
            image {
              fixed(width: 100) {
                width
                height
                src
                srcSet
              }
            }
          }
          kurs {
            title
            image {
              fixed(width: 100) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
`
