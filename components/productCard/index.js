import React, { useState, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import useCardData from '../../utils/useCardData'
import { CardGrid } from '../layout/styles'
import {
  Wrapper,
  TitleWrapper,
  Price,
  ImageStackWrapper,
  DescriptionWrapper,
  CollectionTitle,
  CollectionDescription,
  Button,
} from './styles'
function ProductCard({ cardAssets = [], variant }) {
  const [card, setCardData] = useState(cardAssets)

  //   Custom Hooks filters Data
  const [cardData, sortedData] = useCardData(card, variant)

  return (
    <>
      <CardGrid>
        {sortedData.map((card) => {
          const { id, slug, title, price, description, compareAt, mainImage } =
            card
          return (
            <>
              <Wrapper>
                <ImageStackWrapper key={id}>
                  <Link to={`/${slug}`}>
                    <GatsbyImage
                      image={getImage(mainImage)}
                      alt={title}
                      style={{
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        overflow: 'hidden',
                      }}
                    />
                  </Link>
                  <DescriptionWrapper place='end center'>
                    <CollectionTitle>{title}</CollectionTitle>
                    <Price>&#36;{price}</Price>
                  </DescriptionWrapper>
                </ImageStackWrapper>
                <CollectionDescription>{description}</CollectionDescription>
                <Link to={`/${slug}`}>
                  <Button>Details</Button>
                </Link>
              </Wrapper>
            </>
          )
        })}
      </CardGrid>
    </>
  )
}

export default ProductCard
