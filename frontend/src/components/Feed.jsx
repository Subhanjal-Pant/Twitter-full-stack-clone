import React from 'react'
import CreatePost from './CreatePost'
import Tweet from './Tweet'


const Feed = () => {
  return (
    <div className='flex flex-col border-t-0 border-gray-600 border-[1px] h-screen w-[620px] ml-82 items-center' >
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