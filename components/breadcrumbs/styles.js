import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
`

const OrderedList = styled.ol`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`

const Anchor = styled.a`
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

const AnchorWrapper = styled.div`
  display: flex;
  align-items: center;
`
