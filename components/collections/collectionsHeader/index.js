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

function CollectionsHeader({ data, children }) {
  return (
    <>
      {/* Usning Inline styles in order to overwrite CSS Variables in global styles */}
      <div className='wrapper' style={{ '--bg': '#0e172c' }}>
        <h3 className='title' style={{ '--color': '#fff' }}>
          {children ?? <p>Collection</p>}
        </h3>
      </div>
      <CollectionCard data={data} />
    </>
  )
}

export default CollectionsHeader
