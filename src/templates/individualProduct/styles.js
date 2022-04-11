import styled from 'styled-components'

export const Wrapper = styled.div`
  width: min(100% - 2rem, 450px);
  margin: auto;
  padding: 1rem;
  overflow: hidden;
  background: goldenrod;
`
export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-block: 1rem;
  margin-block-end: 0.5rem;
  color: #0e172c;
  cursor: default;
  text-transform: capitalize;
`

export const Price = styled.h4`
  font-weight: var(--font-weight-9);
  color: var(--gray-7);
`
