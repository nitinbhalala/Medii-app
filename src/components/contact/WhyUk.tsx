import React from "react";

import Image from "next/image";
const features = [
  {
    index: 0,
    title: "World-renowned medical standards and exceptional clinical outcomes",
  },
  {
    index: 1,
    title: "Most advanced medical infrastructure and pharmacological options",
  },
  {
    index: 2,
    title: "Personalised management plans for each individual client",
  },
  {
    index: 3,
    title: "Excellent cost-effectiveness in numerous treatment options",
  },
];
function WhyUk() {
  return (
    <div className="md:py-9 ">
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row">
        <div className="flex flex-col  justify-center w-full">
          <span className="block w-full text-sm font-bold text-center md:text-start md:w-auto text-yellow_light font-Quicksand">
            Our Advantages
          </span>
          <h1 className="text-[42px] leading-[48 px] font-bold text-primary text-center md:text-start">
            Why choose the UK?
          </h1>
          <span className="block w-full text-base font-medium text-center md:max-w-md text-secondary md:text-start font-Quicksand">
            The UK is a world leader in the healthcare, life sciences and
            bio-economy cluster, finding solutions to the world’s biggest
            challenges. The UK offers:
          </span>
          <div className="md:max-w-[438px] px-3 md:px-0">
            {features.map((feature, index) => {
              const { title } = feature;
              return (
                <div
                  key={index}
                  className="flex gap-5 items-center justify-start py-3"
                >
                  <Image
                    src="/images/icons/yellow-right-icon.svg"
                    height="11"
                    width="15"
                    alt="right"
                  />
                  <span className="text-base font-bold text-[#70798B] ">
                    {title ?? ""}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-grow flex items-center w-full">
          <div className="relative flex flex-col items-center justify-center gap-8 md:gap-0">
            <Image
              src="/images/why-uk-poster.png"
              height="429"
              width="471"
              alt="why-uk-poster"
              className="rounded-[20px] pb-1.5 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6]"
            />
            <Image
              src="/images/why-uk-doctor-poster.png"
              height="329"
              width="346"
              alt="why-uk-poster"
              className="rounded-[20px] pb-1.5 bg-gradient-to-l from-[#C3996B] to-[#EAE2B6] md:absolute -bottom-[5.5rem] -right-[6.5rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUk;
