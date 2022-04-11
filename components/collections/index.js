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
  return (
    <>
      {/* Usning Inline styles in order to overwrite CSS Variables in global styles */}
      <div className='wrapper' style={{ '--bg': '#0e172c' }}>
        <h3 className='title' style={{ '--color': '#fff' }}>
          Collections
        </h3>
      </div>
      <Wrapper>
        <CardGrid>
          {data.map((collection) => {
            console.log(
              'collection.collectionTitle.slug',
              collection.collectionTitle.slug
            )
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
    </>
  )
}

export default Collection
