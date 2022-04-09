import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
} from './style.js'
import { createGlobalStyle } from 'styled-components'

function Collection({ data }) {
  console.log('%cData', 'color:dodgerblue', data)
  return (
    <Wrapper>
      <CardGrid>
        {data.map((collection) => {
          return (
            <>
              <ImageWrapper key={collection.id}>
                <Link to='/stickers'>
                  <GatsbyImage
                    image={getImage(collection.collectionTitle.bannerImage)}
                    alt={collection.collectionTitle.alt}
                  />
                  <h4>{collection.collectionTitle.name}</h4>
                  <CollectionDescription>
                    {collection.collectionTitle.description}
                  </CollectionDescription>
                </Link>
              </ImageWrapper>
            </>
          )
        })}
      </CardGrid>
    </Wrapper>
  )
}

export default Collection
