import styled from 'styled-components'

export const Wrapper = styled.div`
  width: min(100% - 2rem, 400px);
  margin: auto;
  padding: 1rem;
  overflow: hidden;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  place-self: ${(props) => props.place};
`

export const ImageWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  overflow: hidden;
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
  background: #f8f9fa;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 20px;
  margin-bottom: -28px;
  margin-left: 10px;
`

export const Price = styled.h4`
  font-weight: var(--font-weight-7);
  color: var(--gray-7);
  background: #f8f9fa;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  border-radius: 20px;
  margin-block-end: -28px;
  margin-inline-end: 0.5rem;
`

export const ImageStackWrapper = styled.div`
  display: grid;
  grid-template-areas: 'Stack';
  place-items: center;
  margin-block-end: 2rem;

  & > * {
    grid-area: Stack;
  }
`
