import React from "react";
import Avatar from "./Avatar";
import { FaRegComment } from "react-icons/fa6";
import { BiRepost } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import { MdOutlinePoll } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Tweet = () => {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmarked = () => {
    console.log("Bookmarked");
    setBookmarked((prev) => !prev);
  };

  const toggleClicked = () => {
    console.log("Clicked!");
    setLiked((prev) => !prev);
  };

  return (
    <div className="py-3 p-3 border-gray-400 border-[1px] border-b-0">
      <div>
        <div className="flex flex-col ">
          <div className="flex  items-center gap-1 h-12">
            <Avatar scale={75}/>
            <h1 className="font-bold text-lg">Username</h1>
            <p className="text-gray-400 text-[13px]">@userName .@time</p>
          </div>
          <div className="">
            <div className="px-2 ml-3 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
              optio!
            </div>
            <div className="flex mt-2 px-2 ml-4 h-[400px] w-full">
              <img
                className="h-[400px] w-[720px] mx-2 object-cover"
                src="./post.png"
                alt=""
              />
            </div>
            <div className="flex justify-between mt-2 items-center px-6">
              <div className="group relative inline-block">
                <FaRegComment className="text-2xl cursor-pointer" />
                <div className="absolute hidden group-hover:block text-white text-xs">
                  Comment
                </div>
              </div>
              <div className="group relative inline-block">
                <BiRepost className="text-2xl cursor-pointer" size={30} />
                <div className="absolute hidden group-hover:block text-white text-xs">
                  Repost
                </div>
              </div>
              <div className="w-10 h-10 items-center justify-between ">
                {liked ? (
                  <div
                    onClick={toggleClicked}
                    className=" h-8 w-8 items-center justify-centers active:scale-95 cursor-pointer group relative inline-block"
                  >
                    <FcLike className="cursor-pointer" size={30} />
                    <div className="absolute hidden group-hover:block text-white text-xs">
                      Unlike
                    </div>
                  </div>
                ) : (
                  <div
                    className="min-h-8 min-w-8 items-center active:scale-95 group relative inline-block"
                    onClick={toggleClicked}
                  >
                    <CiHeart size={30} />
                    <div className="absolute hidden group-hover:block text-white text-xs">
                      Like
                    </div>
                  </div>
                )}
              </div>
              <div className="group relative inline-block">
                <MdOutlinePoll size={30} />
                <div className="absolute hidden group-hover:block text-white text-xs">
                  View
                </div>
              </div>

              <div className="group relative inline-block">
                {bookmarked ? (
                  <div
                    onClick={toggleBookmarked}
                    className="h-8 w-8 items-center justify-center active:scale-95 cursor-pointer group relative inline-block"
                  >
                    <FaBookmark className="text-white" size={30}/>
                    <div className="absolute hidden group-hover:block text-white text-xs">
                      Unbookmark
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={toggleBookmarked}
                    className="h-8 w-8 items-center justify-center active:scale-95 cursor-pointer group relative inline-block"
                  >
                    <CiBookmark size={30}/>
                    <div className="absolute hidden group-hover:block text-white text-xs">
                      Bookmark
                    </div>
                  </div>
                )}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
