import React from 'react'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Feed from './Feed'

const Home = () => {
  return (
    <div className='flex flex-row justify-between border-[1px] w-full h-screen mx-[15%] px-2 bg-[#000000] text-gray-300 '>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )
}

export default Home