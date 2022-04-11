import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from './style.js'
import { createGlobalStyle } from 'styled-components'
import CollectionCard from './collectionsCard/index.js'

function Collection({ data }) {
  return (
    <>
      {/* Usning Inline styles in order to overwrite CSS Variables in global styles */}
      <div className='wrapper' style={{ '--bg': '#0e172c' }}>
        <h3 className='title' style={{ '--color': '#fff' }}>
          Collections
        </h3>
      </div>
      <CollectionCard data={data} />
    </>
  )
}

export default Collection
