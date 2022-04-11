import React from 'react'
import { graphql } from 'gatsby'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function Product({ data }) {
  console.log('Data for Product', data)
  return <div>Product test</div>
}

export default Product

export const query = graphql`
  query MyQuery($slug: String) {
    contentfulProduct(slug: { eq: $slug }) {
      slug
      compareAtPrice
      description
      price
      title
    }
  }
`
