import React from 'react'
import CreatePost from './CreatePost'


const Feed = () => {
  return (
    <div className='w-full border-[0.1px] border-gray-300'>
      <div>
        <CreatePost />
      </div>
    </div>
  )
}

export default Feed