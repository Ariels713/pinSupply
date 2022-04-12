import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import ProductCard from '../../../components/productCard'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { SaleTag } from '../../../components/layout/styles'
import {
  Wrapper,
  DescriptionWrapper,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
  Price,
  ImageStackWrapper,
  Button,
  SalePrice,
} from './styles.js'
import Breadcrumbs from '../../../components/breadcrumbs'

function Product({ data, children }) {
  console.log('data', data)
  const { mainImage, title, price, description, compareAtPrice } =
    data.contentfulProduct
  return (
    <>
      <Layout>
        <div className='wrapper' style={{ '--bg': '#0e172c' }}>
          <h3 className='title' style={{ '--color': '#fff' }}>
            {children ?? <p>Collection</p>}
          </h3>
        </div>
        <Breadcrumbs />
        <Wrapper>
          <ImageStackWrapper>
            <GatsbyImage
              image={getImage(mainImage)}
              alt={title}
              style={{
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                overflow: 'hidden',
              }}
            />
            <DescriptionWrapper place='end center'>
              <CollectionTitle>{title}</CollectionTitle>
              {!compareAtPrice ? (
                <Price>&#36;{price}</Price>
              ) : (
                <SalePrice>&#36;{price}</SalePrice>
              )}
            </DescriptionWrapper>
            {!compareAtPrice ? null : <SaleTag place='start end'>Sale</SaleTag>}
          </ImageStackWrapper>

          <CollectionDescription>{description}</CollectionDescription>
          <Button>Add to Cart</Button>
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
