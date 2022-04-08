import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Collection from '../../components/collections'
// markup

const IndexPage = ({ data }) => {
  const collectionData = data.allContentfulCollections.nodes
  return (
    <>
      <Layout>
        <Collection data={collectionData} />
      </Layout>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allContentfulCollections {
      nodes {
        collectionTitle {
          name
        }
        collectionImage {
          bannerImage {
            gatsbyImageData(
              layout: FIXED
              placeholder: DOMINANT_COLOR
              width: 400
            )
          }
        }
        description {
          description
        }
      }
    }
  }
`
