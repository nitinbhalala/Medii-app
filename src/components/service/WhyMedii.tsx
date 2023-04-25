import React from "react";

import Image from "next/image";

function WhyMedii() {
  return (
    <div className="md:py-5">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-[42px] leading-[70px] font-bold text-primary text-center md:text-start">
          Why clients choose MEDii
        </h1>
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="my-7 flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-center items-center max-w-5xl h-full">
          <div className="h-full w-full flex justify-center items-center">
            <Image
              src="/images/why-medii-poster.png"
              height="476"
              width="558"
              alt="medii-logo"
              className="rounded-[30px]"
            />
          </div>
          <div className="h-full w-full relative md:-translate-x-16 rounded-[40px] pb-2 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6]">
            <div
              className="py-12 px-9  bg-gradient-to-b from-[#004A42] to-[#419886] text-white rounded-[30px] font-medium text-xl
            "
            >
              <div className="pt-1 pb-6">
                <Image
                  src="/images/icons/quate-dark.svg"
                  height="19"
                  width="22"
                  alt="quate"
                />
              </div>
              <span className="block">
                She hadn’t smoked for 40 years. It came as a shock. Luckily, she
                was able to have an operation in time. And I turned out to have
                a large cyst on my liver. That was dealt with a few years later.
              </span>
              <div className="py-6">
                {
                  <div className="flex ">
                    {Array.from({ length: 5 }, () => null).map((v, i) => {
                      return (
                        <Image
                          key={i}
                          src="/images/home/star.svg"
                          height="25"
                          width="25"
                          alt="medii-logo"
                        />
                      );
                    })}
                  </div>
                }
              </div>
              <span className="block ">Mdad ADSDS</span>
            </div>
            {/*  <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-6 rounded-b-[30px] w-full absolute left-0 bottom-0"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyMedii;
