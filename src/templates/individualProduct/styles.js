import styled from 'styled-components'

export const Wrapper = styled.div`
  width: min(100% - 2rem, 400px);
  margin: auto;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  color: var(--gray-6);
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

export const Button = styled.button`
  appearance: button;
  background-color: #0e182b;
  border: 1px solid #0e182b;
  border-radius: 20px;
  box-shadow: #f8f9fa 4px 4px 0 0, #000 4px 4px 0 1px;
  color: #f8f9fa;
  cursor: pointer;
  display: inline-block;
  font-size: var(--font-size-1);
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
`
