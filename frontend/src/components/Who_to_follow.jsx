import React from 'react'
import Avatar from './Avatar'

const Who_to_follow = () => {
  return (
    <div className=' w-[95%] flex flex-col my-2 mx-2 px-2 '>
        <div className='flex items-center justify-between'>
            <div className='flex items-center '>
                <Avatar />
                <div>
                    <p>NameOfPerson</p>
                    <p>@NameOfPerson</p>
                </div>
            </div>
            <button className="bg-white p-1 px-3 rounded-full text-black active:scale-95 font-bold">Follow</button>
        </div>
    </div>
  )
}

export default Who_to_follow