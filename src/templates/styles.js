import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: grid;
  height: max(40vh, 15rem);
  overflow: hidden;
`

export const ImageWrapper = styled.div`
  width: 100%;
`

export const HeroTitle = styled.h2`
  place-self: ${(props) => props.placeTitle};
`
