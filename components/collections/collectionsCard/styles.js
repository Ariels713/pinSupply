import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  padding-block: 2rem;
  padding-start: 1rem;
  overflow: hidden;
`
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(, minmax(0, 1fr));
  row-gap: 1rem;
  column-gap: 3rem;
  padding-inline: 1rem;


  @media (min-width: 640px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 1024px){
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

`
export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  /* overflow: hidden; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`
export const CollectionDescription = styled.div`
  color: var(--gray-7);
  cursor: default;
  font-size: 0.875rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`
export const CollectionTitle = styled.h4`
  color: #0e172c;
  cursor: default;
  text-transform: capitalize;
  z-index: 2;
  place-self: ${(props) => props.place};
  display: inline-block;
  margin-right: 10px;
  background: #f8f9fa;
  padding-inline: 1rem;
  padding-block-start: 0.25rem;
  border-radius: 20px;
`

export const ImageStackWrapper = styled.div`
  display: grid;
  grid-template-areas: 'Stack';
  place-items: center;
  /* height: max(40vh, 15rem); */
  overflow: hidden;
  margin-block-end: 2rem;

  & > * {
    grid-area: Stack;
  }
`
