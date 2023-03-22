import React from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const Sidebaropen = (props) => {
  const assets = props.data.tasks.flatMap((task) =>
    task.assets.map((asset) => asset.asset_title)
  );
  const taskTitle = props.data.tasks[0].task_title;
  return (
    <>
      <div className="ease-in-out duration-1000">
        {/* Black Stripe */}
        <div className="absolute  top-[90px] w-[392px] h-[50px] bg-black rounded-tr-[1.5rem]">
          <h1 className="absolute left-[40px] top-3 text-white text-base font-semibold bg-black">
            Journey Board
          </h1>
          <FaArrowCircleLeft
            onClick={props.toggle}
            className="absolute left-[300px] top-3 text-white text-2xl cursor-pointer"
          />
        </div>
        {/* White box */}
        <div className="absolute top-[140px] w-[392px] h-[692px] bg-[#FDFDFD] rounded-b-[1rem] shadow-lg shadow-gray-500/50">
          <div className="absolute">
            <h2 className="absolute top-[30px] left-6 w-[309px] h-[24px] text-[16px] text-base font-semibold">
              {taskTitle}
            </h2>
            <div className="absolute top-[70px] left-[30px]">
              <ul>
                {assets.map((asset, index) => (
                  <li
                    className="flex items-center w-[300px] text-[16px] font-normal font-sans"
                    key={index}
                  >
                    <BsDot className="text-[30px]" />
                    {asset}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebaropen;
