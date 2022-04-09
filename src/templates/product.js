import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

function Products({ data }) {
  console.log('product data', data)
  return (
    <Layout>
      <h1>Product Page</h1>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query ProductDetails($slug: String) {
    contentfulCollections(slug: { eq: $slug }) {
      collectionTitle {
        name
      }
      collectionImage {
        bannerImage {
          gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH)
        }
      }
    }
  }
`
