import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { AiFillBulb } from "react-icons/ai";
import { GiDiamonds } from "react-icons/gi";
import { MdMessage } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const Threadbuilder = (props) => {
  const assetTitle = props.data.tasks[0].assets[1].asset_title;
  const assetDescription = props.data.tasks[0].assets[1].asset_description;

  return (
    <>
      <div className="">
        <div>
          <div className="absolute  top-[397px] left-[746px] w-[480px] h-[580px] rounded-[1.5rem] shadow-lg shadow-gray-500/50">
            <div className="absolute w-[453px] h-[83px]"></div>
            <p className="absolute left-8 top-16 ">
              <b>Description:</b> {assetDescription}
            </p>
            <div className="absolute top-[150px] w-[480px] h-[40px] bg-gray-500/5 flex justify-center items-center">
              <MdKeyboardArrowUp className="absolute left-2 text-3xl " />
              <p className="absolute left-[80px] font-sans font-bold text-xl">
                Thread A
              </p>
            </div>
            {/* Sub thread 1 */}
            <div className="absolute top-[220px] left-5 w-[199px] h-[95px] shadow-lg rounded-[10px] bg-gray-500/10">
              <div className="">
                <p className="absolute text-sans left-2 top-1 h-[25] w-[199] text-[12px] font-normal rounded-[10px]">
                  <b>Sub thread 1</b>
                </p>
              </div>
              <div className="absolute top-[25px] shadow-lg shadow-gray-100 rounded-[10px]">
                <input
                  type="text"
                  placeholder="Enter Text here"
                  className="h-[70px] w-[199px] rounded-[10px] shadow-lg shadow-gray-100"
                />
              </div>
            </div>
            {/* Sbthread 2 */}
            <div className="absolute top-[220px] right-5 w-[199px] h-[95px] shadow-lg rounded-[10px] bg-gray-500/10">
              <div className="">
                <p className="absolute text-sans left-2 top-1 h-[25] w-[199] text-[12px] font-normal rounded-[10px]">
                  <b>Sub thread 2</b>
                </p>
              </div>
              <div className="absolute top-[25px] shadow-lg shadow-gray-100 rounded-[10px]">
                <input
                  type="text"
                  placeholder="Enter Text here"
                  className="h-[70px] w-[199px] rounded-[10px] shadow-lg shadow-gray-100"
                />
              </div>
            </div>
          </div>
          {/* Icons and Dropdowns */}

          <div className="flex justify-center items-center">
            {/* Icons */}
            <div className="absolute top-[726px] left-[855px] flex justify-center items-center space-x-3">
              <AiFillBulb className="text-2xl" />
              <MdMessage className="text-2xl" />
              <BsFillQuestionSquareFill className="text-xl" />
              <GiDiamonds className="text-2xl" />
            </div>
            {/* Dropdowns */}
            <div className="absolute top-[726px] left-[990px]">
              <select
                name="option"
                className="absolute h-[32] w-[85] shadow-lg shadow-gray-200 rounded-md whitespace-normal"
              >
                <option value="select" className="absolute whitespace-normal ">
                  Select Catego
                </option>
              </select>
              <select
                name="option"
                className="absolute h-[32] left-[120px] w-[91] shadow-lg shadow-gray-200 rounded-md "
              >
                <option value="select" className="absolute">
                  Select proces
                </option>
              </select>
            </div>
          </div>
          {/* Sub thread */}
          <div className="absolute top-[780px] left-[770px]">
            <button className="absolute w-[97px] h-[36px] bg-[#0029FF] rounded-lg text-white font-sans text-[12px] font-medium  flex justify-center items-center space-x-3">
              <AiOutlinePlus className="absolute left-1" />
              <p className="absolute ">Sub thread</p>
            </button>
          </div>

          {/* Summery of Thread */}

          <div className="absolute top-[830px] left-[770px] w-[430px] h-[95px] shadow-lg rounded-[10px] bg-gray-500/10">
            <div className="">
              <p className="absolute text-sans left-2 top-1 h-[25] w-[430] text-[12px] font-normal rounded-[10px]">
                <b>Sumery of Thread</b>
              </p>
            </div>
            <div className="absolute top-[25px] shadow-lg shadow-gray-100 rounded-[10px]">
              <input
                type="text"
                placeholder="Enter Text here"
                className="h-[70px] w-[430px] rounded-[10px] shadow-lg shadow-gray-100"
              />
            </div>
          </div>

          {/* Black stripe */}
          <div className="absolute  top-[397px] left-[746px] w-[480px] h-[50px] bg-black rounded-t-[1.5rem] flex justify-center items-center">
            <p className="absolute w-[100px] h-[22px] text-white">
              {assetTitle}
            </p>
            <IoInformationCircle className="absolute right-5 text-white text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Threadbuilder;
