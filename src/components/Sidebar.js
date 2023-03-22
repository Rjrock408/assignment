import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const Sidebar = (props) => {
  // function handleClick() {

  // }
  return (
    <>
      <div className="">
        <div>
          <div className="absolute  top-[90px] w-[132px] h-[50px] bg-black rounded-tr-[1.5rem]">
            <FaArrowCircleRight
              onClick={props.toggle}
              className="absolute left-20 top-3 text-white text-2xl cursor-pointer"
            />
          </div>
        </div>
        <div className="absolute top-[140px] w-[132px] h-[692px] bg-white rounded-b-[1rem] shadow-lg shadow-gray-500/50">
          <div className="">
            <div className=" flex justify-center items-center absolute top-[166px] left-8  w-[68px] h-[68px] rounded-[1.2rem] ring-2">
              <div>
                <h1 className="text-[#0029FF]  text-4xl">1</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
