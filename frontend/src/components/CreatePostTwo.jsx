import React from 'react'
import Avatar from './Avatar'
import { FaGlobeAmericas } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { PiGifFill } from "react-icons/pi";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GrSchedules } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const CreatePostTwo = () => {
  return (
    <div className='border border-t-0 border-b-0 '>
      <div className='flex flex-row items-center'>
          <div className='h-16 w-16 ml-3'>
            <Avatar scale={75} />
          </div>
          <input className='px-1 flex-grow h-10 border-none focus:outline-none focus:ring-0 text-xl' type="text" placeholder="What's happening?"/>
      </div>
      <p className='text-[#2B9BF0] flex gap-2 items-center pb-2 ml-20 font-bold cursor-pointer  border-t-0 border-r-0 border-l-0 w-[80%] border-[1px] border-gray-400'>
          <FaGlobeAmericas />   
          Everyone can reply     
      </p>
      <div className='flex justify-between items-center px-20  h-16  border-t-0 border-l-0 border-r-0 border-[0.5px]'>
        <div className='text-[#2B9BF0] text-xl flex flex-row gap-2 mt-3 '>
          <div className='group relative inline-block'>
            <CiImageOn className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-xs text-white'>
              Image
            </div>
          </div>
        
          <div className='group relative inline-block'>
            <PiGifFill className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-white text-xs'>
              GIF
            </div>
          </div>
          <div className='group relative inline-block'>
             <img className='cursor-pointer' src="./grok_blue.png" alt="" width={"24px"}/>
            <div className='absolute hidden group-hover:block text-white text-xs'>
              grok
            </div>
          </div>
          <div className='group relative inline-block'>
            <BiPoll className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-white text-xs'>
              Poll
            </div>
          </div>
          <div className='group relative inline-block'>
            <MdOutlineEmojiEmotions className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-white text-xs'>
              Emoji
            </div>
          </div>
          <div className='group relative inline-block'>
            <GrSchedules className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-white text-xs'>
              Schedule
            </div>
          </div>
          <div className='group relative inline-block'>
            <IoLocationSharp className='cursor-pointer' />
            <div className='absolute hidden group-hover:block text-white text-xs'>
              Location
            </div>
          </div>
        </div>
        <button className='p-1 bg-white text-black rounded-full w-18 active:scale-95 mt-3'>Post</button>
      </div>
    </div>
  )
}

export default CreatePostTwo