import React, { useState, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import useCardData from '../../utils/useCardData'

import {
  CardWrapper,
  CardGrid,
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
      <CardWrapper>
        <CardGrid>
          {sortedData.map((card) => {
            return (
              <>
                <Wrapper>
                  <ImageStackWrapper key={card.id}>
                    <Link to={`/${card.slug}`}>
                      <GatsbyImage
                        image={getImage(card.mainImage)}
                        alt={card.title}
                        style={{
                          borderTopLeftRadius: '20px',
                          borderTopRightRadius: '20px',
                          overflow: 'hidden',
                        }}
                      />
                    </Link>
                    <DescriptionWrapper place='end center'>
                      <CollectionTitle>{card.title}</CollectionTitle>
                      <Price>&#36;{card.price}</Price>
                    </DescriptionWrapper>
                  </ImageStackWrapper>
                  <CollectionDescription>
                    {card.description}
                  </CollectionDescription>
                  <Button>Details</Button>
                </Wrapper>
              </>
            )
          })}
        </CardGrid>
      </CardWrapper>
    </>
  )
}

export default ProductCard
