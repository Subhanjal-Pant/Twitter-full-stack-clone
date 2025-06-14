import React from 'react'

const Subscribe = () => {
  return (
    <div className='p-4 flex flex-col gap-1 border w-80 rounded-lg'>
        <h1 className='font-bold text-2xl '>Subscribe to Premium</h1>
        <p>Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
        <button className='p-1 px-3 bg-blue-500 font-white font-bold active:scale-95 active:bg-blue-600 rounded-full my-3 text-lg w-30'>Subscribe</button>
    </div>
  )
}

export default Subscribe