import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'


const Feed = () => {
  return (
    <div className='border-t-0 border-gray-300 h-screen bg-[#000000] w-220 ml-60' >
      <div>
        <CreatePost />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </div>
  )
}

export default Feed