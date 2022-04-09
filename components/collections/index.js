import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
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
                <Link to={collection.collectionTitle.slug}>
                  <GatsbyImage
                    image={getImage(collection.collectionTitle.bannerImage)}
                    alt={collection.collectionTitle.alt}
                  />
                </Link>
                <CollectionTitle>
                  {collection.collectionTitle.name}
                </CollectionTitle>
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
