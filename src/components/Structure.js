import React from "react";
import { IoInformationCircle } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";
import { GrUndo } from "react-icons/gr";
import { GrRedo } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";

const Structure = (props) => {
  const assetTitle = props.data.tasks[0].assets[2].asset_title;
  const assetDescription = props.data.tasks[0].assets[2].asset_description;

  return (
    <>
      <div className="">
        <div>
          <div className="absolute  top-[1034px] left-[214px] w-[480px] h-[580px] rounded-[1.5rem] shadow-lg shadow-gray-500/50">
            <div className="absolute  top-[70px] left-[30px] w-[460px] h-[580px] rounded-[1.5rem]">
              <div className="absolute"></div>
              <p className="absolute  w-[450px] h-[83px]">
                <b>Description:</b> {assetDescription}
              </p>
            </div>
            {/* Title and Content */}
            <div className="absolute w-[479px] h-[399px] top-[179px] shadow-lg shadow-gray-100 ring-1 rounded-[1.5rem]">
              {/* Title */}
              <h3 className="absolute left-7 top-4 text-sans h-[33px] text-[16px] font-semibold">
                Title
              </h3>
              <div className="absolute left-7 top-12 w-[422px] h-[43px] ring-1 rounded-[5px] shadow-lg shadow-gray-200"></div>
              {/* Content */}
              <div>
                <h3 className="absolute left-7 top-[115px] text-sans text-[16px] font-semibold">
                  Content
                </h3>
                <div className="absolute left-7 top-[165px] w-[422px] h-[85px] rounded-[5px] shadow-lg shadow-gray-200">
                  <div className="absolute left-4 top-4 space-x-4 flex justify-center items-center">
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      File
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Edit
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      View
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Insert
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Format
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Tools
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Tablet
                    </h4>
                    <h4 className="font-normal text-[12px] font-sans text-[#616161]">
                      Help
                    </h4>
                  </div>
                  <div className="absolute flex justify-center items-center top-10 left-4 space-x-5">
                    <GrUndo />
                    <GrRedo />
                    <BsArrowsFullscreen className="text-[12px]" />
                    <p className="font-sans text-[12px] font-normal bg-gray-300 text-[#616161]">
                      Paragraph
                    </p>
                    <BsThreeDots />
                  </div>
                </div>
                <div className="absolute left-7 top-[242px] w-[422px] h-[160px] rounded-[5px] shadow-lg shadow-gray-200"></div>
              </div>
            </div>
          </div>
          {/* Black stripe */}
          <div className="absolute  top-[1035px] left-[214px] w-[480px] h-[50px] bg-black rounded-t-[1.5rem] flex justify-center items-center">
            <p className="absolute w-[180px] h-[22px] text-white">
              {assetTitle}
            </p>
            <IoInformationCircle className="absolute right-5 text-white text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Structure;
