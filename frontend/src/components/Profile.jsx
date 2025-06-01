import React from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Avatar from "./Avatar";
import { TiTick } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";

const Profile = () => {
  const navigate = useNavigate();
  const handleBack = () => navigate("/home");

  const [noOfPosts, setNoOfPosts] = useState(0);
  const [following, setFollowing] = useState(0);
  const [followers, setFollowers] = useState(0);
  return (
    <div className="border-t-0 border-gray-600 border-[1px] h-screen w-[620px] ml-100 items-center">
      <div className="p-2">
        <div className="h-16 flex items-center gap-2">
          <button
            onClick={handleBack}
            className="text-white font-bold cursor-pointer rounded-full border-[1px] border-black p-1 hover:border-[1px] hover:bg-gray-800 active:bg-gray-900"
          >
            <MdArrowBack size={25} />
          </button>
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
          <div className="border-[4px] border-black rounded-full p-0 absolute top-30 left-2">
            <Avatar width='30' scale='100' />
          </div>
          <button className="p-2 px-3 font-bold absolute right-10 mt-3 border rounded-3xl hover:bg-gray-900">
            Edit Profile
          </button>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <h1 className="mt-15 font-bold text-xl ml-5">User Name</h1>
            <button className="border rounded-xl p-[2px] px-3 flex gap-2 items-center mt-15 hover:bg-gray-900 ">
              <TiTick className="text-blue-500" size={22} />
              Get Verified
            </button>
          </div>
          <p className="ml-5 text-gray-500">@NameUser</p>
          <p className="flex gap-2 ml-5 items-center text-gray-500 mt-2 ">
            <SlCalender />
            Joined @month @Year
          </p>
          <div className="ml-5 mt-2 flex gap-4">
            <div className="flex gap-1"><p className="font-bold">{following}</p> <p className="text-gray-500">Following</p></div>
            <div className="flex gap-1"><p className="font-bold">{followers}</p> <p className="text-gray-500">Followers</p></div>
          </div>
          <div className="flex justify-between text-gray-500 mt-5">
              <button className="hover:bg-gray-900 w-30 h-12">Posts</button>
              <button className="hover:bg-gray-900 w-30 h-12">Replies</button>
              <button className="hover:bg-gray-900 w-30 h-12">Highlists</button>
              <button className="hover:bg-gray-900 w-30 h-12">Articles</button>
              <button className="hover:bg-gray-900 w-30 h-12">Media</button>
              <button className="hover:bg-gray-900 w-30 h-12">Likes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
