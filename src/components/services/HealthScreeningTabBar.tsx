import React, { useState } from "react";

import CustomTabBar from "../common/CustomTabBar";

const tabData = [
  { label: "Health Screening", content: "Health Screening" },
  {
    label: "Well Woman/man",
    content: "Well Woman/man",
  },
  { label: "Enrolment Health", content: "Enrolment Health" },
  { label: "Cancer Screening", content: "Cancer Screening" },
  { label: "Cancer Screening", content: "Cancer Screening" },
];
function HealthScreeningTabBar() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="md:py-8">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-8 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-4xl leading-[50px] py-2 md:py-0 md:text-5xl md:leading-[70px] font-bold text-primary text-center md:text-start">
          MEDii Health screening
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <CustomTabBar
          tabData={tabData}
          selectedTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <div className="flex flex-col items-center justify-center w-full h-full py-8 md:py-16 gap-7 md:gap-0 md:flex-row md:items-stretch">
          <div className="p-12  flex flex-col justify-between text-[#3A7065] max-w-md shadow-[0px_4px_40px_0px_#ABAFC74D] rounded-[20px] md:rounded-[0px] md:rounded-l-[20px]">
            <div>
              <h2 className="text-3xl font-bold ">
                {tabData[activeTab].content}
              </h2>
              <p className="text-[#004A42] text-base pt-3">Who is it for?</p>
              <p className="text-[#004A42] text-base py-6">
                It is suitable for healthy people to customize routine/special
                examinations. On the basis of the comprehensive package,
                preferred items and targeted screening can be added. More
                precise medical examination items require doctor's advice
              </p>
            </div>
            <div>
              <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
                Find More
              </button>
            </div>
          </div>
          <div className="p-12  bg-gradient-to-b from-[#004A42] to-[#419886] text-white max-w-md shadow-[0px_4px_40px_0px_#ABAFC74D] rounded-[20px] md:rounded-[0px] md:rounded-r-[20px] w-full h-full">
            <h2 className="py-3 text-lg fiont-bold ">Avaliable Pacakges</h2>
            <div className="">
              <div className="flex gap-2">
                <span className="inline-blockblock rounded-full flex h-6 w-6 bg-[#E4EFE1] text-[#396E63] justify-center items-center">
                  A
                </span>
                <h3 className="text-base font-medium ">Packages A</h3>
              </div>
              <p className="py-2 text-sm font-normal">
                It is suitable for healthy people to customize routine/special
                examinations. On the basis of the comprehensive
              </p>
            </div>
            <div className="py-2 ">
              <div className="flex gap-2">
                <span className="inline-blockblock rounded-full flex h-6 w-6 bg-[#E4EFE1] text-[#396E63] justify-center items-center">
                  B
                </span>
                <h3 className="text-base font-medium ">Packages B</h3>
              </div>
              <p className="py-2 text-sm font-normal">
                It is suitable for healthy people to customize routine/special
                examinations. On the basis of the comprehensive
              </p>
            </div>
            <div className="py-2 ">
              <div className="flex gap-2">
                <span className="inline-blockblock rounded-full flex h-6 w-6 bg-[#E4EFE1] text-[#396E63] justify-center items-center">
                  C
                </span>
                <h3 className="text-base font-medium ">Packages C</h3>
              </div>
              <p className="py-2 text-sm font-normal">
                It is suitable for healthy people to customize routine/special
                examinations. On the basis of the comprehensive
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthScreeningTabBar;
