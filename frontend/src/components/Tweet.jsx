import React from "react";
import Avatar from "./Avatar";

const Tweet = () => {
  return (
    <div className="py-3  border-white border-[1px]">
      <div>
        <div className="flex flex-col ">
          <div className="flex  items-center gap-1  h-12">
            <Avatar />
            <h1 className="font-bold text-lg">Username</h1>
            <p className="text-gray-400 text-[13px]">@userName</p>
          </div>
          <div className="">
              <div className="px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, optio!
              </div>
              <div className="w-[90%] flex justify-center mt-2 px-1">
                <img className="w-[100%] " src="./post.png" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
