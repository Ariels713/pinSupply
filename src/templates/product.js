import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { HeroTitle, HeroWrapper, ImageWrapper } from './styles'

import ProductCard from '../../components/productCard'

function Products({ data }) {
  const headerAsset = data.contentfulCollections
  const cardAssets = data.allContentfulProduct.nodes

  return (
    <Layout>
      {/* Hero Styles / Data */}
      <HeroWrapper>
        <ImageWrapper>
          <GatsbyImage
            image={getImage(headerAsset.collectionImage.bannerImage)}
            alt={headerAsset.collectionTitle.name}
          />
        </ImageWrapper>
        <HeroTitle>{headerAsset.collectionTitle.name}</HeroTitle>
      </HeroWrapper>
      <ProductCard
        cardAssets={cardAssets}
        variant={headerAsset.collectionTitle.name}
      />
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
    allContentfulProduct {
      nodes {
        title
        description
        price
        compareAtPrice
        slug
        id
        variant
        mainImage {
          gatsbyImageData(placeholder: DOMINANT_COLOR, width: 420, height: 260)
        }
      }
    }
  }
`
