import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
  ImageStackWrapper,
} from './styles.js'

function CollectionCard({ data }) {
  return (
    <Wrapper>
      <CardGrid>
        {data.map((collection) => {
          console.log(collection.icon)
          const { slug, bannerImage, alt, name, description } =
            collection.collectionTitle
          return (
            <>
              <ImageWrapper key={collection.id}>
                <ImageStackWrapper>
                  <Link to={slug}>
                    <GatsbyImage
                      style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        overflow: 'hidden',
                      }}
                      image={getImage(bannerImage)}
                      alt={alt}
                    />
                  </Link>

                  <CollectionTitle place='end'>{name}</CollectionTitle>
                </ImageStackWrapper>
                <CollectionDescription>{description}</CollectionDescription>
              </ImageWrapper>
            </>
          )
        })}
      </CardGrid>
    </Wrapper>
  )
}

export default CollectionCard
