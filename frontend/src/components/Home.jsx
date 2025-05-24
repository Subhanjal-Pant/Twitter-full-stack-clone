import React from 'react'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Feed from './Feed'

const Home = () => {
  return (
    <div className='flex flex-row justify-between border-3 w-full h-screen mx-[10%] p-2 bg-[#000000] text-gray-300 '>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )
}

export default Home