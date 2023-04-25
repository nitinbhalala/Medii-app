import React from "react";

import HeroOptionBar from "./HeroOptionBar";

interface HeroProps {
  image: string;
  title: string;
  description: string;
  isNavigator: boolean;
  isDark: boolean;
}
function Hero({ image, title, description, isNavigator, isDark }: HeroProps) {
  return (
    <div>
      <div
        className="relative bg-cover bg-center w-full h-[398px] "
        style={{
          backgroundImage: `url('/images/${image ?? ""}.png')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full md:h-auto md:w-auto md:absolute md:bottom-10 md:right-16">
          <div className="py-8 px-11 bg-white rounded-[20px] m-5 md:m-auto shadow-hero-shadow w-full sm:max-w-[478px] relative">
            <h2 className="text-start text-[#3A7065] text-[20px] xs:text-[36px] md:text-[42px] leading-[47px] font-bold">
              {title ?? ""}
            </h2>
            <span className="block text-base font-medium text-[#70798B] font-Quicksand py-2">
              {description ?? ""}
            </span>
            {isNavigator && (
              <div className="flex justify-end pt-3">
                <button className="flex w-36 gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
                  Booking
                </button>
              </div>
            )}
            <div className="bg-gradient-to-b from-[#C3996B] to-[#EAE2B6] h-3 rounded-b-[20px] w-full absolute left-0 bottom-0"></div>
          </div>
        </div>
      </div>
      <HeroOptionBar isDark={isDark} />
    </div>
  );
}

export default Hero;
