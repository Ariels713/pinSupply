import styled from 'styled-components'

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-areas: 'Stack';
  place-items: center;
  height: max(40vh, 15rem);
  overflow: hidden;
  margin-block-end: 2rem;

  & > * {
    grid-area: Stack;
  }
`

export const ImageWrapper = styled.div`
  z-index: 1;
  width: 100%;
`

export const HeroTitle = styled.h2`
  z-index: 2;
  place-self: ${(props) => props.place};
  text-transform: uppercase;
  margin-block-start: 20vh;
  font-size: var(--font-size-8);
`
