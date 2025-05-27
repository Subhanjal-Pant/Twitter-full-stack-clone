import React from "react";
import Avatar from "./Avatar";

const Tweet = () => {
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio!
              </div>
              <div className="w-[90%] flex justify-center mt-2 px-1 ml-4">
                
                <img className="w-[100%] object-cover" src="./post.png" alt="" />
              </div>
              <div className="flex justify-between">
                <p>Like</p>
                <p>Comment</p>
                <p>Share</p>
                <p>Save</p>
                <p>Repost</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
