import React from 'react'
import './styles.css'

function Layout({ pageTitle, children }) {
  return (
    <>
      <h1>Pin Supply</h1>
      {children}
    </>
  )
}

export default Layout
