import React from 'react'
import { Outlet } from 'react-router-dom'

const BrowseBooks = () => {
  return (
    <div>BrowseBooks
        <Outlet />
    </div>

  )
}

export default BrowseBooks