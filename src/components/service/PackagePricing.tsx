import React, { useState } from "react";
import Image from "next/image";

import PackageCompare from "./PackageCompare";

const planData = [
  {
    index: 0,
    name: "package A",
    description:
      "Our Advanced Health Screening is our premium and detailed screening service.",
    price: "£199",
    features: [
      "11 Biochemical tests",
      "Medical 12-lead ECG",
      "English report and bilingual prompt",
    ],
    isMostPopuler: false,
  },
  {
    index: 1,
    name: "package B",
    description:
      "Our Advanced Health Screening is our premium and detailed screening service.",
    price: "£439",
    features: [
      "11 Biochemical tests",
      "Doctor's clinic",
      "Medical 12-lead ECG",
      "English report and bilingual prompt",
      "Specialist outpatient appointment service",
    ],
    isMostPopuler: false,
  },
];

const planCfeatures = [
  "11 Biochemical tests",
  "Doctor's clinic",
  "Affect judgment",
  "Medical 12-lead ECG",
  "English report and bilingual prompt",
  "Specialist outpatient appointment service",
];

function PackagePricing() {
  const [isPackageSelected, setisPackageSelected] = useState(true);
  return (
    <div className="md:py-9">
      <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-5xl leading-[70px] font-bold text-primary text-center md:text-start">
          Package & Pricing
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          For full package details, please click Compare.
        </span>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 mt-5 md:gap-16">
        <div className="bg-[#E4EFE1] w-full max-w-[220px] h-[44px] rounded-[22px] flex items-center text-base font-bold">
          <button
            onClick={() => setisPackageSelected(true)}
            className={`capitalize rounded-[22px] h-full transition-all duration-200 w-full flex justify-center items-center hover:cursor-pointer ${
              isPackageSelected
                ? "text-[#EBB817] bg-[#3A7065]"
                : "text-[#3A7065]"
            }`}
          >
            package
          </button>
          <button
            onClick={() => setisPackageSelected(false)}
            className={`capitalize h-full w-full flex transition-all duration-200 justify-center items-center  hover:cursor-pointer rounded-[22px] ${
              isPackageSelected
                ? "text-[#3A7065]"
                : "text-[#EBB817] bg-[#3A7065]"
            }`}
          >
            Compare
          </button>
        </div>
        {isPackageSelected ? (
          <>
            <div className="bg-gradient-to-b from-[#E4EFE1] to-transparent pt-10 md:py-10 md:px-16 w-full h-full max-w-[970px] flex-wrap md:flex-nowrap gap-10 rounded-[26px] flex justify-between items-center md:items-stretch relative">
              {planData.map((plan, index) => {
                const { name, description, price, features, isMostPopuler } =
                  plan;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between w-full gap-10 md:items-baseline"
                  >
                    <div>
                      <h2 className="text-[28px] leading-[39px] font-bold text-[#004A42] uppercase">
                        {name}
                      </h2>
                      <span className="block text-[15px] leading-5 text-[#848199] max-w-[235px] py-2.5">
                        {description ?? ""}
                      </span>
                      <h3 className="text-3xl text-[#004A42]">{price ?? ""}</h3>
                      <div className="flex flex-col gap-3 py-4">
                        {features.map((feature, index) => {
                          return (
                            <div
                              key={index}
                              className="flex gap-[10px] items-center"
                            >
                              <Image
                                src="/images/icons/right-icon.svg"
                                height="20"
                                width="20"
                                alt="right-icon"
                              />
                              <span className="block text-[#848199] text-xs">
                                {feature ?? ""}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand ">
                      Choose plan
                    </button>
                  </div>
                );
              })}
              <div className="hidden md:block md:w-full"></div>
              <div className="relative mt-6 md:mt-0 items-center md:items-baseline flex flex-col justify-between gap-10 w-full bg-gradient-to-b from-[#004A42] to-[#419886]  md:absolute md:right-20  md:max-w-[280px] md:gap-8  md:-translate-y-24 md:translate-x-8 p-8 md:p-[2.50rem] rounded-[20px]">
                <div className="absolute left-0 flex items-center justify-center w-full -top-4">
                  <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[10px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand  md:left-[22%]">
                    MOST POPULAR
                  </button>
                </div>
                <div>
                  <h2 className="text-[28px] leading-[39px] font-bold text-white uppercase">
                    {"package C"}
                  </h2>
                  <span className="block text-[15px] leading-5 text-white max-w-[235px] py-2.5">
                    {
                      "Our Advanced Health Screening is our premium and detailed screening service."
                    }
                  </span>
                  <h3 className="text-3xl text-white">{"£859"}</h3>
                  <div className="flex flex-col gap-3 pt-4 md:pt-0">
                    {planCfeatures.map((feature, index) => {
                      return (
                        <div
                          key={index}
                          className="flex gap-[10px] items-center"
                        >
                          <Image
                            src="/images/icons/right-icon.svg"
                            height="20"
                            width="20"
                            alt="right-icon"
                          />
                          <span className="block text-xs text-white">
                            {feature ?? ""}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <button className="flex gap-3 max-w-[207px] whitespace-nowrap justify-center items-center border-none py-2 px-11 rounded-full text-[16px] font-bold text-[#004A42] bg-[#EBB817] capitalize shadow-btn-shadow font-Quicksand ">
                  Choose plan
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <span className="text-base font-Quicksand text-center text-[#70798B] md:max-w-5xl block w-full">
                Please note that physical examination/disease screening cannot
                replace doctor's diagnosis and treatment, and is only used as a
                means to deepen understanding of one's own health status and
                assist medical judgment. A normal physical examination result
                only means that the detected items have no obvious disease point
                at the time of detection. If the test results are abnormal,
                please seek medical treatment in time.
              </span>
            </div>
          </>
        ) : (
          <PackageCompare />
        )}
      </div>
    </div>
  );
}

export default PackagePricing;
