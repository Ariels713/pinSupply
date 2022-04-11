import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import ProductCard from '../../../components/productCard'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from './styles.js'

function Product({ data }) {
  const productData = data.contentfulProduct
  console.log(productData)
  return (
    <>
      <Layout>
        <Wrapper>
          <CardGrid>
            <ImageWrapper>
              <GatsbyImage
                image={getImage(productData.mainImage)}
                alt={productData.title}
              />
            </ImageWrapper>
            <CollectionTitle>{productData.title}</CollectionTitle>
            <CollectionDescription>
              {productData.description}
            </CollectionDescription>
          </CardGrid>
        </Wrapper>
      </Layout>
    </>
  )
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
      mainImage {
        gatsbyImageData(placeholder: DOMINANT_COLOR, height: 280, width: 420)
      }
    }
  }
`