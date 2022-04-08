import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
} from './style.js'

function Collection({ data }) {
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
                <h4>{collection.collectionTitle.name}</h4>
                <CollectionDescription>
                  {collection.collectionTitle.description}
                </CollectionDescription>
              </ImageWrapper>
            </>
          )
        })}
      </CardGrid>
    </Wrapper>
  )
}

export default Collection
