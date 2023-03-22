import React from "react";
import { IoInformationCircle } from "react-icons/io5";

const Technical = (props) => {
  const assetTitle = props.data.tasks[0].assets[0].asset_title;
  const assetDescription = props.data.tasks[0].assets[0].asset_description;
  const assetContent = props.data.tasks[0].assets[0].asset_content;

  return (
    <>
      <div className="">
        <div>
          <div className="absolute  top-[397px] left-[214px] w-[480px] h-[580px] rounded-[1.5rem] shadow-lg shadow-gray-500/50">
            <div className="absolute w-[453px] h-[83px]"></div>
            <p className="absolute left-8 top-16 ">
              <b>Description:</b> {assetDescription}
            </p>
            <div className="absolute top-[160px]">
              <iframe
                width="480"
                height="280"
                title="youtube"
                src={assetContent}
              />
            </div>
          </div>
          <div className="absolute  top-[397px] left-[214px] w-[480px] h-[50px] bg-black rounded-t-[1.5rem] flex justify-center items-center">
            <p className="absolute w-[220px] h-[22px] text-white">
              {assetTitle}
            </p>
            <IoInformationCircle className="absolute right-5 text-white text-3xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Technical;
