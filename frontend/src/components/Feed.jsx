import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'


const Feed = () => {
  return (
    <div className='flex flex-col border-t-0 border-gray-300 h-screen w-[700px] ml-100 items-center' >
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