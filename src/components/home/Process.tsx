import React from "react";
import Image from "next/image";

const checkList = [
  { index: 0, data: "30+UK MedicalConsultant Group" },
  { index: 1, data: "Chinese and English bilingual" },
  { index: 2, data: "Deliver quality healthcare service" },
];
function Process() {
  return (
    <div className="z-50  flex flex-col items-center justify-center w-full  sm:mt-auto">
      <div className="w-ful flex flex-col justify-center items-center md:items-stretch  md:justify-stretch">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Process
        </span>
        <h1 className="text-4xl leading-[70px] md:text-5xl md:leading-[70px] font-bold text-primary text-start">
          Why Choose Us
        </h1>
        <div className="min-w-[8rem] w-[9vw] h-px border border-primary my-2"></div>
        <div className="flex flex-col gap-5 mt-5 mx-4 md:mx-0 md:my-10">
          <span className="block text-base font-bold text-start text-[#525252] ">
            We have an extensive track record of successful case outcomes,
            having facilitated the care of hundreds of international patients
          </span>
          <span className="block w-full text-base font-bold text-start text-[#525252] md:w-2/3 ">
            We have an established network of trusted relationships with
            numerous premium UK private hospital groups as an official referral
            partner, connecting 3000+ consultants across the UK.
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full h-full lg:flex-row pt-6 md:pt-14 px-4 md:px-0">
        {/* image */}
        <div className="flex justify-center flex-1">
          <Image
            src="/images/home/process-poster.png"
            height="431"
            width="574"
            alt="process-poster"
            className="rounded-3xl"
          />
        </div>
        {/* check list */}
        <div className="flex flex-col justify-between flex-1 flex-grow ">
          <div className="flex flex-col flex-1 mt-5 lg:mt-auto">
            {checkList.map((title, index) => {
              return (
                <div key={index} className="flex gap-4 py-1">
                  <Image
                    src="/images/icons/right-yellow-check.svg"
                    height="15"
                    width="15"
                    alt="check"
                  />
                  <span className="block text-base font-medium text-secondary">
                    {title.data ?? ""}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="relative flex-1">
            <div className="px-16 py-8 flex justify-between gap-5 shadow-[0px_5px_50px_0px_#00000029]  bg-gradient-to-b from-[#004A42] to-[#419886] max-w-2xl rounded-[20px] mt-5 lg:mt-auto lg:-translate-x-52 flex-col md:flex-row">
              <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-yellow_light">3000+</h1>
                <span className="block max-w-xs text-base font-bold text-center text-white">
                  UK Medical Expert Database
                </span>
                <hr className="hidden md:block absolute w-[35%] rotate-90 border-px bottom-1/2 -right-8 border-[#ABAFC7]" />
              </div>
              <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-yellow_light">60+</h1>
                <span className="text-base font-bold text-center text-white">
                  UK Medical Expert Database
                </span>
                <hr className="hidden md:block absolute w-[35%] rotate-90 border-px bottom-1/2 -right-8 border-[#ABAFC7]" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold text-yellow_light">50+</h1>
                <span className="text-base font-bold text-center text-white">
                  UK Medical Expert Database
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
