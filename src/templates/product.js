import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { HeroTitle, HeroWrapper, ImageWrapper } from './styles'

function Products({ data }) {
  console.log('product data', data.contentfulCollections)
  const productAssets = data.contentfulCollections
  return (
    <Layout>
      <HeroWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={getImage(productAssets.collectionImage.bannerImage)}
          />
        </ImageWrapper>
        <HeroTitle>{productAssets.collectionTitle.name}</HeroTitle>
      </HeroWrapper>
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
