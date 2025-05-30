import React from "react";
import Avatar from "./Avatar";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { MdOutlinePoll } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Tweet = () => {
  const [liked, setLiked] = useState(false);
  const toggleClicked = () => {
    console.log("Clicked!");
    setLiked((prev) => !prev);
  };

  return (
    <div className="py-3 p-3 border border-b-0">
      <div>
        <div className="flex flex-col ">
          <div className="flex  items-center gap-1  h-12">
            <Avatar />
            <h1 className="font-bold text-lg">Username</h1>
            <p className="text-gray-400 text-[13px]">@userName .@time</p>
          </div>
          <div className="">
            <div className="px-2 ml-3 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              optio!
            </div>
            <div className="w-[90%] flex justify-center mt-2 px-1 ml-4">
              <img className="w-[100%] object-cover" src="./post.png" alt="" />
            </div>
            <div className="flex justify-between mt-2 items-center">
              <FaRegComment className="text-2xl" />
              <BiRepost size={24} />
              <div className="h-8 ">
                {liked ? (
                  <button 
                   onClick={toggleClicked} 
                  className="flex min-h-8 min-w-8 items-center bg-green-300">
                    <FcLike size={24} />
                  </button>
                ) : (
                  <button
                    className="flex min-h-8 min-w-8 items-center bg-blue-300"
                     onClick={toggleClicked} 
                  >
                     <CiHeart size={24} />
                  </button>
                )}
              </div>
              <MdOutlinePoll size={24} />

              <div>
                <CiBookmark />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
