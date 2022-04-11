import React, { useState } from 'react'
import useCardData from '../../utils/useCardData'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from '../collections/style'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

function ProductCard({ cardAssets = [], variant }) {
  const [card, setCardData] = useState(cardAssets)

  //   Custom Hooks filters Data
  const [cardData, sortedData] = useCardData(card, variant)

  return (
    <>
      <Wrapper>
        <CardGrid>
          {sortedData.map((card) => {
            return (
              <>
                <ImageWrapper key={card.id}>
                  <Link to={card.slug}>
                    <GatsbyImage
                      image={getImage(card.mainImage)}
                      alt={card.title}
                    />
                    <CollectionTitle>{card.title}</CollectionTitle>
                    <CollectionDescription>
                      {card.description}
                    </CollectionDescription>
                  </Link>
                </ImageWrapper>
              </>
            )
          })}
        </CardGrid>
      </Wrapper>
    </>
  )
}

export default ProductCard
