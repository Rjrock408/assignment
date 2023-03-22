import React from "react";
import { MdOutlineQuestionMark } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
const Body = (props) => {
  const taskDescription = props.data.tasks[0].task_description;
  return (
    <>
      {/* Text Box */}
      <div className="absolute top-[187px] left-[187px] w-[1066px] h-[135px] bg-[#E9ECEF] rounded-[5px]">
        <h3 className="absolute top-6 left-5 w-[374px] h-[30px] text-lg font-bold font-sans tracking-wide">
          Explore the world Management
        </h3>
        <p className="absolute top-14 left-5 w-[1012px] h-[42px] text-[14px] font-normal text-black">
          {taskDescription}
        </p>
      </div>
      {/* Icons */}
      <div className="">
        <div className="absolute top-[1490px] right-[30px] w-[85px] h-[85px] rounded-full bg-[#0029FF] flex justify-center items-center">
          <MdOutlineQuestionMark className="absolute  w-[46px] h-[46px] text-white" />
        </div>
        <div className="absolute top-[1596px] right-[30px] w-[85px] h-[85px] rounded-full bg-[#0029FF] flex justify-center items-center">
          <FaPeopleCarry className="absolute w-[46px] h-[46px] text-white" />
        </div>
        <div className="absolute top-[1702px] right-[30px] bottom-1 w-[85px] h-[85px] rounded-full bg-[#0029FF] flex justify-center items-center">
          <FaCalendarAlt className="absolute w-[46px] h-[46px] text-white" />
        </div>
      </div>
    </>
  );
};

export default Body;
