import React from "react";

const remoteConsultantData = [
  {
    index: 0,
    title: "3000+ UK Hospital",
    description:
      "Hand-picking the most suitable field experts from renowned UK hospitals",
  },
  {
    index: 1,
    title: "Shortlisted Consultant",
    description: "Securing a rapid appointment with the shortlisted consultant",
  },
  {
    index: 2,
    title: "World-leading Medical Experts",
    description:
      "Consulting with world-leading medical experts in the comfort of your home",
  },
  {
    index: 3,
    title: "Professional Medical Translation",
    description:
      "Professional medical translation, optimising the quality of communication",
  },
];
function RemoteConsultant() {
  return (
    <div className="md:py-9">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-[42px] leading-[65px] font-bold text-primary text-center md:text-start">
          Remote medical consultations
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          Our Bilingual medical team empowers you with insights of the
          healthcare choices and helps you fully understand your treatment plan
        </span>
      </div>
      <div className="py-16">
        <div className="flex justify-center gap-5 md:gap-0 md:justify-between flex-wrap">
          {remoteConsultantData.map((item, index) => {
            const { title, description } = item;
            return (
              <div key={index} className="flex flex-col ">
                <span className="bg-gradient-to-b from-[#419886] to-[#004A42] rounded-full shadow-[-10px_15px_30px_0px_#ABAFC74D] h-[52px] w-[52px] flex text-[30px] leading-[41px] font-bold text-white justify-center items-center">
                  {index + 1 ?? 0}
                </span>
                <div className="max-w-[247px]">
                  <span
                    className={`text-2xl  py-6 font-bold text-[#396E63]  block ${
                      title.length < 30 && "max-w-[200px]"
                    }`}
                  >
                    {title ?? ""}
                  </span>
                  <span className="text-base font-medium text-[#70798B] block">
                    {description ?? ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RemoteConsultant;
