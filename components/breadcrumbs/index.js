import React from 'react'
import Slash from './Slash'
import { Nav, OrderedList, Anchor, AnchorWrapper } from './styles.js'
import { Link } from 'gatsby'
function Breadcrumbs() {
  return (
    <>
      <Nav>
        <OrderedList role='list'>
          <li>
            <AnchorWrapper>
              <Link href='/'>
                <Anchor>Home</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href='/'>
                <Anchor>Stickers</Anchor>
              </Link>
            </AnchorWrapper>
          </li>
        </OrderedList>
      </Nav>
    </>
  )
}

export default Breadcrumbs
