import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../../components/layout'
import ProductCard from '../../../components/productCard'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Wrapper,
  DescriptionWrapper,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
  Price,
  ImageStackWrapper,
  Button,
} from './styles.js'

function Product({ data, children }) {
  const productData = data.contentfulProduct
  return (
    <>
      <Layout>
        <div className='wrapper' style={{ '--bg': '#0e172c' }}>
          <h3 className='title' style={{ '--color': '#fff' }}>
            {children ?? <p>Collection</p>}
          </h3>
        </div>
        <Wrapper>
          <ImageStackWrapper>
            <GatsbyImage
              image={getImage(productData.mainImage)}
              alt={productData.title}
              style={{
                borderTopLeftRadius: '20px',
                borderTopRightRadius: '20px',
                overflow: 'hidden',
              }}
            />
            <DescriptionWrapper place='end center'>
              <CollectionTitle>{productData.title}</CollectionTitle>
              <Price>&#36;{productData.price}</Price>
            </DescriptionWrapper>
          </ImageStackWrapper>

          <CollectionDescription>
            {productData.description}
          </CollectionDescription>
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
