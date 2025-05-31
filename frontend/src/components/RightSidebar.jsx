import React from 'react'
import Who_to_follow from './Who_to_follow'
import Subscribe from './Subscribe'

const RightSidebar = () => {
  return (
    <div className='w-[30%] px-4 flex flex-col gap-4' >
      <div>
        <h1 className='text-2xl font-bold left-0 my-3'>Who to follow</h1>
        <div className='border rounded-lg  w-[85%]'>
          <Who_to_follow />
          <Who_to_follow />
          <Who_to_follow />
          <Who_to_follow />
          <Who_to_follow />
        </div>
      </div>
      <Subscribe />
    </div>
  )
}

export default RightSidebar