import React from 'react'
import CollectionCard from '../collectionsCard/index.js'

function CollectionsHeader({ data, children }) {
  return (
    <>
      {/* Usning Inline styles in order to overwrite CSS Variables in global styles */}
      <div className='wrapper' style={{ '--bg': '#0e172c' }}>
        <h3 className='title' style={{ '--color': '#fff' }}>
          {children ?? <p>Collections</p>}
        </h3>
      </div>
      <CollectionCard data={data} />
    </>
  )
}

export default CollectionsHeader
