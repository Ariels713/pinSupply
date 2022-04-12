import styled from 'styled-components'

export const Nav = styled.nav`
  display: grid;
  place-content: center;
  padding: 1rem;
`

export const OrderedList = styled.ol`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`

export const Anchor = styled.a`
  cursor: pointer;
  list-style: none;
  color: var(--color-secondary);
  margin-inline-start: 1rem;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    opacity: 0.75;
  }
`

export const AnchorWrapper = styled.div`
  display: flex;
  align-items: center;
`
