import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";

const Method = (props) => {
  const assetTitle = props.data.tasks[0].assets[3].asset_title;
  const assetDescription = props.data.tasks[0].assets[3].asset_description;

  return (
    <>
      <div className="">
        <div>
          <div className="absolute  top-[1034px] left-[745px] w-[480px] h-[580px] rounded-[1.5rem] shadow-lg shadow-gray-500/50">
            <div>
              <div className="absolute w-[453px] h-[83px]"></div>
              <p className="absolute left-8 top-20 ">
                <b>Description:</b> {assetDescription}
              </p>
            </div>
            <div className="absolute top-[152px] w-[480px] h-[428px] ring-1 rounded-[1.5rem] shadow-lg shadow-gray-500/50">
              <div className="absolute top-[0px] left-4 w-[434px] h-[43px] bg-gray-500/5 flex justify-center items-center">
                <MdKeyboardArrowUp className="absolute left-2 text-3xl " />
                <p className="absolute left-[50px] font-sans font-semibold text-[16px]">
                  Introduction
                </p>
                <div className="absolute top-16 left-[34]">
                  <p>The 4SA Method, How to bring a idea into progress</p>
                  <p className="absolute top-[50px] left-[330px] w-[71px]">
                    See More
                  </p>
                </div>
                {/* Thread A */}
                <div className="absolute w-[434px] h-[43px] top-[168px] left-[10px] shadow-lg shadow-gray-500/30 flex items-center ring-1 space-x-10">
                  <MdKeyboardArrowUp className="absolute text-3xl " />
                  <p className="font-sans font-semibold text-[16px]">
                    Thread A
                  </p>
                </div>
                <div className="absolute left-[39px] right-[17px] top-[217px] w-[424px] h-[67px]">
                  <p className="text-[14px] font-normal font-sans tracking-wide ">
                    How are you going to develop your stratergy ? Which method
                    are you going to use to develop a stratergy ? What if the
                    project is lengthy?
                  </p>
                  <p className="absolute top-[70px] left-[330px]">See More</p>
                </div>
                <div className="absolute top-[349px] left-[40px] h-[43px] w-[394px] ring-1 shadow-md shadow-gray-500 flex items-center">
                  <p className="absolute left-[12px] text-[16px] font-semibold font-sans text-black tracking-wide">
                    Example
                  </p>
                </div>
                <p className="absolute top-[404px] left-[50px] text-[14px] font-sans font-normal">
                  You have a concept, How will you put into progress?{" "}
                </p>
              </div>
            </div>
          </div>

          {/* Black Stripe*/}
          <div className="absolute  top-[1035px] left-[745px] w-[480px] h-[50px] bg-black rounded-t-[1.5rem] flex justify-center items-center">
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

export default Method;
