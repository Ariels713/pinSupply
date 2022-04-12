import React, { useState, useRef } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import useCardData from '../../utils/useCardData'
import { CardGrid, SaleTag } from '../layout/styles'
import {
  GridWrapper,
  Wrapper,
  TitleWrapper,
  Price,
  SalePrice,
  ImageStackWrapper,
  DescriptionWrapper,
  CollectionTitle,
  CollectionDescription,
  Button,
} from './styles'
import Breadcrumbs from '../breadcrumbs'
function ProductCard({ cardAssets = [], variant }) {
  const [card, setCardData] = useState(cardAssets)

  //   Custom Hooks filters Data
  const [cardData, sortedData] = useCardData(card, variant)

  return (
    <>
      <Breadcrumbs slug={variant} />
      <GridWrapper>
        <CardGrid>
          {sortedData.map((card) => {
            console.log('card', card)
            const {
              id,
              slug,
              title,
              price,
              description,
              compareAtPrice,
              mainImage,
            } = card

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
                      {!compareAtPrice ? (
                        <Price>&#36;{price}</Price>
                      ) : (
                        <SalePrice>&#36;{price}</SalePrice>
                      )}
                    </DescriptionWrapper>
                    {!compareAtPrice ? null : (
                      <SaleTag place='start end'>Sale</SaleTag>
                    )}
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
      </GridWrapper>
    </>
  )
}

export default ProductCard
