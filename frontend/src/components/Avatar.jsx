import React from 'react'

const Avatar = ({width ='12'}) => {
  return (
    <div className={`border-[100%] rounded-full w-${width} m-2`}>
        
        <img className='rounded-full' src="./no_image_avatar.png" alt="Hello" />
    </div>
  )
}

export default Avatar