import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="flex flex-col gap-11 md:gap-0 justify-center lg:flex-row pt-14 md:py-14">
      <div className="px-10 max-w-xl text-white py-11 bg-gradient-to-r from-[#419886] to-[#004A42] rounded-[20px] flex flex-col justify-around">
        <h1 className="text-5xl font-bold leading-[48px]">
          Need help choosing the right clinic ?
        </h1>
        <h3 className="py-5 my-2 text-base font-medium leading-6 md:p-auto">
          The MEDii Health Team is here to help you with any questions you have.
        </h3>
        <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-r w-36 from-[#F4B723] to-[#F9CB44]  capitalize shadow-btn-shadow font-Quicksand">
          Chat
        </button>
      </div>
      <div className="w-full -translate-y-8 lg:translate-y-0 md:-translate-x-8 -z-10">
        <Image
          src="/images/home/banner.png"
          height="318"
          width="772"
          alt="banner"
          className="rounded-[20px] h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
