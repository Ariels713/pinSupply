import React from 'react'
import './styles.css'
import { Link } from 'gatsby'
function Layout({ pageTitle, children }) {
  return (
    <>
      <div className='wrapper'>
        <Link to='/'>
          <h1 className='title'>Pin Supply</h1>
        </Link>
      </div>
      {children}
    </>
  )
}

export default Layout
