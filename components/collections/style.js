import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 80rem;
  margin: auto;
  padding-block: 2rem;
  padding-start: 1rem;
  overflow: hidden;
  background-color: goldenrod;
`
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
`
export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
`
