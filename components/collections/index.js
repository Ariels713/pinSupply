import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Wrapper, CardGrid, ImageWrapper } from './style.js'

function Collection({ data }) {
  console.log('data from collections', data)
  return (
    <Wrapper>
      <CardGrid>
        <ImageWrapper>
          <GatsbyImage
            image={getImage(data[0].collectionImage.bannerImage)}
            alt='image test'
          />
        </ImageWrapper>
      </CardGrid>
    </Wrapper>
  )
}

export default Collection
