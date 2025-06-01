// Layout.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Layout = () => {
  return (
    <div className='flex flex-row justify-between w-[80%] min-h-screen mx-[8%] px-2 bg-[#000000] text-gray-300'>
      <LeftSidebar />
      <main className='flex-1'>
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  )
}

export default Layout
