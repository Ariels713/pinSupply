import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Wrapper, CardGrid, ImageWrapper } from './style.js'

function Collection({ data }) {
  console.log('data from collections', data)
  return (
    <Wrapper>
      <CardGrid>
        {data.map((collection) => {
          return (
            <>
              <ImageWrapper key={collection.id}>
                <GatsbyImage
                  image={getImage(collection.collectionTitle.bannerImage)}
                  alt={collection.collectionTitle.alt}
                />
                <h3>{collection.collectionTitle.name}</h3>
                <p>{collection.collectionTitle.description}</p>
              </ImageWrapper>
            </>
          )
        })}
      </CardGrid>
    </Wrapper>
  )
}

export default Collection
