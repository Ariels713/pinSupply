import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
// markup
const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <h3>testing</h3>
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
