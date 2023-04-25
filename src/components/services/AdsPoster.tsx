import React from "react";

import Image from "next/image";

const hospitalData = [
  { index: 0, image: "london-bridge-hospital-white" },
  { index: 1, image: "imperial-private-healthcare-white" },
  { index: 2, image: "portland-hospital-white" },
  { index: 3, image: "moorfields-private-eye-hospital-white" },
];

const serviceData = [
  {
    index: 0,
    image: "cart-icon",
    title: "Strong follow-up service capabilities",
  },
  { index: 1, image: "global-search-icon", title: "Arrange Medical" },
  {
    index: 0,
    image: "email-icon",
    title: "Believe in Evidence-Based Medicine",
  },
];
function AdsPoster() {
  return (
    <div className="md:py-5">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Image
            src="/images/services/cheer-up-poster.png"
            height="624"
            width="1111"
            alt="cheer-up-poster"
          />
          <div className="flex flex-col gap-2 mb-6 md:mb-2">
            <div className="p-10 border md:absolute top-1/2 left-28 border-[#E6E6E9] backdrop-blur-6 bg-white rounded-xl shadow-btn-shadow">
              <div className="flex text-[#004A42] flex-col gap-4  justify-center items-center">
                <h3 className="text-3xl font-bold">Suitable is the best</h3>
                <Image
                  src="/images/services/calendar-icon.svg"
                  height="49"
                  width="52"
                  alt="calendar"
                />
                <span className="font-medium">5-7 business days to report</span>
              </div>
            </div>
            <div className="p-10 border md:absolute top-[15%] right-28 border-[#E6E6E9] backdrop-blur-6 bg-white rounded-xl flex flex-col gap-8 shadow-btn-shadow">
              {serviceData.map((item, index) => {
                const { image, title } = item;
                return (
                  <div
                    key={index}
                    className="flex text-[#3A7065] md:max-w-[250px] gap-4 justify-start items-center"
                  >
                    <Image
                      src={`/images/services/${image ?? ""}.svg`}
                      height="40"
                      width="40"
                      alt={image}
                    />
                    <span className="font-bold text-base tracking-[0.2px]">
                      {title ?? ""}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="relative  container text-white max-w-[970px] bg-gradient-to-b from-[#419886] to-[#004A42] p-16 rounded-2xl flex flex-col justify-center items-center shadow-btn-shadow">
          <h2 className="text-4xl font-bold max-w-[600px] text-center leading-[54px]">
            We work with best private hospitals in the UK
          </h2>
          <div className="flex flex-col items-center justify-between w-full gap-8 md:flex-row md:px-16 pt-11">
            {hospitalData.map((imageItem, index) => {
              return (
                <Image
                  key={index}
                  src={`/images/icons/hospital-names/${imageItem.image}.svg`}
                  height="100"
                  width="100"
                  alt="medii-logo"
                  className="w-full h-full xs:w-1/2 sm:w-1/3 md:h-auto md:w-auto"
                />
              );
            })}
          </div>
          <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-3 rounded-b-[20px] w-full absolute left-0 bottom-0"></div>
        </div>
      </div>
    </div>
  );
}

export default AdsPoster;
