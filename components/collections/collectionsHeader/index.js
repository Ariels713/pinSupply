import React from 'react'
import {
  Wrapper,
  CardGrid,
  ImageWrapper,
  CollectionDescription,
  CollectionTitle,
} from './styles.js'
import { createGlobalStyle } from 'styled-components'
import CollectionCard from '../collectionsCard/index.js'

function CollectionsHeader({ data }) {
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

export default CollectionsHeader
