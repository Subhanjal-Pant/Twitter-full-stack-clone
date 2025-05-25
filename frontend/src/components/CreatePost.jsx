import React from "react";
import { IoMdSettings } from "react-icons/io";
import CreatePostTwo from "./CreatePostTwo";


const CreatePost = () => {
  return (
    <div>
      <div className=" text-white border w-full h-12 flex justify-between">
        <div className="flex justify-between items-center w-full ">
          <div className="w-1/2 text-center hover:bg-[#181818] h-full flex items-center justify-center">For you</div>
          <div className="w-1/2 text-center hover:bg-[#181818] h-full flex items-center justify-center">Following</div>
      
        </div>
      </div>
      <CreatePostTwo />

    </div>
  );
};

export default CreatePost;
