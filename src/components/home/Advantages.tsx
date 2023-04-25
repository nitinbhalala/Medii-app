import React from "react";

import Image from "next/image";

const cardData = [
  {
    index: 0,
    title: "Personalised Care",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    icon: "personal-care",
    isDark: true,
  },
  {
    index: 1,
    title: "Responsive Solutions",
    description:
      "Prompt specialist appointments, diagnostic tests and prescriptions. On time, every time.",
    icon: "responsive-solution",
    isDark: false,
  },
  {
    index: 2,
    title: "Remote Consultations",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    icon: "remote-consultant",
    isDark: false,
  },
  {
    index: 3,
    title: "Home-visit Service",
    description:
      "There are many variations passages of Lorem Ipsum  majority some by injected or randomised .",
    icon: "home-visit",
    isDark: true,
  },
];
function Advantages() {
  return (
    <div className="my-16 md:my-20">
      <div className="flex flex-col gap-5 md:gap-0 justify-between w-full mt-6 lg:flex-row lg:mt-0 lg:pl-12">
        <div className="flex flex-col justify-center w-full">
          <span className="block w-full text-sm font-bold text-center md:text-start md:w-auto text-yellow_light font-Quicksand">
            Our Advantages
          </span>
          <h1 className="text-4xl leading-[65px] font-bold text-primary text-center md:text-start">
            How We Can Help
          </h1>
          <span className="block w-full text-base font-medium text-center md:max-w-sm text-secondary md:text-start font-Quicksand">
            MEDii Health is dedicated to providing accessible private healthcare
            service timely.
          </span>
        </div>
        <div className="flex justify-center sm:justify-normal sm:items-stretch items-center flex-wrap w-full gap-3">
          {cardData.map((cardItem, i) => {
            const { isDark, title, description, icon } = cardItem;
            return (
              <div
                key={i}
                className={`relative  shadow-[-10px_40px_70px_0px_#ABAFC74D] rounded-3xl max-w-xs p-6 text-white flex flex-col ${
                  isDark
                    ? "bg-gradient-to-b from-[#419886] to-[#004A42]"
                    : "bg-gradient-to-b from-[#EAE2B6] to-[#C3996B]"
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <Image
                      src={`/images/icons/advantages/${icon ?? ""}.svg`}
                      height="40"
                      width="40"
                      alt="medii-logo"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-end">{title ?? ""}</h3>
                </div>
                <span className="text-end text-[15px] pt-5 pb-8  font-medium ">
                  {description ?? ""}
                </span>

                <Image
                  src="/images/icons/advantages/arrow-icon.svg"
                  height="30"
                  width="30"
                  alt="medii-logo"
                  className="absolute hover:animate-pulse hover:cursor-pointer bottom-4"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Advantages;
