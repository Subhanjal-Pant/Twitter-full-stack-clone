import React from 'react'
import Who_to_follow from './Who_to_follow'
import Subscribe from './Subscribe'
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className='w-[23%] px-4 flex flex-col gap-4 py-4 fixed right-60' >
      <div className='flex flex-row relative items-center'>
        <CiSearch className='relative left-8 text-2xl'/>
        <input className='border h-10 rounded-lg w-[300px] pl-10' placeholder='Search' type="text" />
      </div>
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