import React from 'react'
import Slash from './Slash'
import {Nav, OrderedList, Anchor, AnchorWrapper} from './styles.js'

function Breadcrumbs() {
  return (
    <>
            <Nav>
        <OrderedList role="list">
          <li>
            <AnchorWrapper>
              <Link href="/apparel" passHref>
                <Anchor>Apparel</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/shoes" passHref>
                <Anchor>Shoes</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/socks" passHref>
                <Anchor>Socks</Anchor>
              </Link>
              <Slash />
            </AnchorWrapper>
          </li>
          <li>
            <AnchorWrapper>
              <Link href="/underwear" passHref>
                <Anchor>Underwear</Anchor>
              </Link>
            </AnchorWrapper>
          </li>
        </OrderedList>
      </Nav>
    </>
    </>
  )
}

export default Breadcrumbs
