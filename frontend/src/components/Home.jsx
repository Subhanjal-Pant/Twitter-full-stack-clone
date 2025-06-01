import React from 'react'

import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Feed from './Feed'

const Home = () => {
  return (
    <div className='flex flex-row justify-between w-[80%] min-h-screen mx-[8%] px-2 bg-[#000000] text-gray-300 '>
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  )

  
}

export default Home