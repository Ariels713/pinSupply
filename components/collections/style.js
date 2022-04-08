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
  column-gap: 1rem;

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
  overflow: hidden;
`
export const CollectionDescription = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`
