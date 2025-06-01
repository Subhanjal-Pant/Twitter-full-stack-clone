import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "./Avatar";
const Profile = () => {
  const navigate = useNavigate();
  const handleBack = ()=> navigate("/home")

  const [noOfPosts, setNoOfPosts] = useState(0)

  return (
    <div className="border-t-0 border-gray-600 border-[1px] h-screen w-[620px] ml-100 items-center">
      <div className="p-2">
        <div className="h-16 flex items-center gap-2">
          <button 
          onClick={handleBack}
          className="text-white font-bold cursor-pointer rounded-full border-[1px] border-black p-1 hover:border-[1px] hover:bg-gray-800 active:bg-gray-900"><MdArrowBack size={25}/></button>
          <div>
            <h1 className="text-xl font-bold">User Name</h1>
            <p className="text-gray-500 text-sm"> {noOfPosts} posts</p>
          </div>
        </div>
        <div className="relative">
          <img
          className="w-[100%]"
            src="https://pbs.twimg.com/profile_banners/1581707412922200067/1693248932/1080x360"
            alt="banner"
          />
          <div className="border-2 ">
            <Avatar width="30"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
