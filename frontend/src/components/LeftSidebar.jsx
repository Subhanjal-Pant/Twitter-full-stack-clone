import React from "react";
import { CiHome, CiSearch,  } from "react-icons/ci";
import { IoNotificationsSharp, IoPeople } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { PiBookmarkSimple } from "react-icons/pi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";
import { useNavigate } from "react-router-dom";


const LeftSidebar = () => {
  const navigate = useNavigate();

  const handleRouteProfile =()=>navigate('/profile');
  const handleHomeNavigate = ()=> navigate('/');
  const handleGrokRoute = ()=> navigate("/grok")

  return (
    <div className="w-[250px] pt-8 fixed left-[300px]">
      <div className="flex flex-col gap-0">

        <div className="twitter-logo invert mx-3 mb-8">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ width: 45, height: 45, fill: "black" }}
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]"
          onClick={handleHomeNavigate}>
            <CiHome className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Home</h2>

          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <CiSearch className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Explore</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <IoNotificationsSharp className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Notifications</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <MdMessage className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Messages</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-1  w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]"
          onClick={handleGrokRoute}>
            <img src="./grok.png" alt="Error" width={"46px"} className="ml-[4px]" />
            <h2 className="text-xl font-bold mt-1">Grok</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <PiBookmarkSimple className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Bookmarks</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <IoPeople className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Communities</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <svg className="invert ml-[6px]"
            viewBox="0 0 24 24"
            aria-hidden="true"
            style={{ width: 35, height: 40, fill: "black" }}
          >
            <g>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
            <h2 className="text-xl font-bold mt-1">Premium</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <AiOutlineThunderbolt className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Verified Orgs</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]"
          onClick={handleRouteProfile}>
            <IoMdPerson className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">Profile</h2>

          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 w-56 h-14 cursor-pointer hover:border-2 hover:border-white rounded-full box-border border-2 border-[#0000]">
            <CiCircleMore className="text-4xl ml-1"/>
            <h2 className="text-xl font-bold mt-1">More</h2>

          </div>
        </div>

        <div className="flex items-center justify-center w-62"><button className="w-55 bg-white text-black h-12 rounded-full font-bold text-xl mt-4 active:scale-95">Post</button></div>

      </div>
    </div>
  );
};

export default LeftSidebar;
