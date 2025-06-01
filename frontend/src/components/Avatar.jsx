import React from 'react'

const Avatar = ({width =16, scale = 100}) => {
  return (
    <div className={`scale-${scale} rounded-full w-${width}`}>
        
        <img className='rounded-full' src="./no_image_avatar.png" alt="Hello" />
    </div>
  )
}

export default Avatar