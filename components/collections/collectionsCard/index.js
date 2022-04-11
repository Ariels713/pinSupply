import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from './styles.js'

function CollectionCard({ data }) {
  return (
    <Wrapper>
      <CardGrid>
        {data.map((collection) => {
          const { slug, bannerImage, alt, name, description } =
            collection.collectionTitle
          return (
            <>
              <ImageWrapper key={collection.id}>
                <Link to={slug}>
                  <GatsbyImage image={getImage(bannerImage)} alt={alt} />
                </Link>
                <CollectionTitle>{name}</CollectionTitle>
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
