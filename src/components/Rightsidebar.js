import React from "react";
import { RxCross1 } from "react-icons/rx";

const Rightsidebar = () => {
  return (
    <>
      <div>
        <div className="absolute w-[95px] h-[394px] right-[0px] top-[108px] bg-[#FFFFFF] shadow-lg shadow-gray-500/50 rounded-l-[30px]"></div>
        <div className="absolute flex justify-center items-center top-[108px] right-[45px] w-[50px] h-[394px] bg-[#000000] rounded-l-[30px] z-10 space-y-4">
          <RxCross1 className="absolute top-5 text-white text-2xl" />
          <p className="absolute w-[12px] h-[288px] text-[16px] text-sans space-y-3 text-white">
            N o t i c e B o a r d
          </p>
        </div>
      </div>
    </>
  );
};

export default Rightsidebar;
