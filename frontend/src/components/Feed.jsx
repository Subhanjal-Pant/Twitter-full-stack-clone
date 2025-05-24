import React from 'react'
import CreatePost from './CreatePost'


const Feed = () => {
  return (
    <div className='w-full border-[1px] border-t-0 border-gray-300'>
      <div>
        <CreatePost />
      </div>
    </div>
  )
}

export default Feed