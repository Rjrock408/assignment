import React from "react";
import logo from "../assets/logo.svg";
import { FaHome } from "react-icons/fa";
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { VscBellDot } from "react-icons/vsc";
import { BsThreeDotsVertical } from "react-icons/bs";
import profile from "../assets/profile3.jpg";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center absolute w-full h-[90px] left-0 top-0 bg-[#f0f0f0] shadow-lg shadow-gray-500/20">
        <div className="">
          <img src={logo} alt="Logo" className="" />
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <div className="flex flex-row space-x-2 ">
            <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#3683F0]">
              <FaHome className="absolute text-white w-[17px] h-[18px]" />
            </div>
            <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#3683F0]">
              <MdOutlineSettingsSuggest className="text-white bg-[#3683F0] rounded-full" />
            </div>
            <div className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-[#3683F0]">
              <VscBellDot className="text-white bg-[#3683F0] rounded-full" />
            </div>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile"
              className=" object-cover w-[37px] h-[37px] rounded-full cursor-pointer"
            />
          </div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </>
  );
};

export default Navbar;
