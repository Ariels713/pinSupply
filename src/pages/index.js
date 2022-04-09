import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Collection from '../../components/collections'

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
  {
    allContentfulCollections {
      nodes {
        id
        collectionTitle {
          name
          alt
          description
          bannerImage {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              width: 420
              height: 280
            )
          }
          slug
        }
      }
    }
  }
`
