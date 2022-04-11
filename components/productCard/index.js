import React, { useState, useRef } from 'react'
import useCardData from '../../utils/useCardData'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from '../collections/style'
import { TitleWrapper, Price } from './styles'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function ProductCard({ cardAssets = [], variant }) {
  const [card, setCardData] = useState(cardAssets)
  const [openModal, setOpenModal] = useState(false)
  const modalRef = useRef()
  //   Custom Hooks filters Data
  const [cardData, sortedData] = useCardData(card, variant)
  console.log(sortedData)
  return (
    <>
      <Wrapper>
        <CardGrid>
          {sortedData.map((card) => {
            return (
              <>
                <ImageWrapper key={card.id}>
                  <GatsbyImage
                    image={getImage(card.mainImage)}
                    alt={card.title}
                  />
                  <TitleWrapper>
                    <CollectionTitle>{card.title}</CollectionTitle>
                    <Price>&#36;{card.price}</Price>
                  </TitleWrapper>
                  <CollectionDescription>
                    {card.description}
                  </CollectionDescription>
                  <button
                    onClick={() => {
                      setOpenModal(true)
                    }}
                  >
                    Buy Now!
                  </button>
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
