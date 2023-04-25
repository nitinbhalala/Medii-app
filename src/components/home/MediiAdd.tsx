import Image from "next/image";
import React from "react";

function MediiAdd() {
  return (
    <div className="flex flex-col items-center justify-center my-8 md:my-40">
      <div className="relative flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary w-full lg:w-[70%] text-center">
          MEDii is one of the designated covid testing agents by the Chinese
          embassy in the UK
        </h2>
        <Image
          src={`/images/home/small-circles.svg`}
          height="100"
          width="100"
          className="absolute top-0 left-0 w-6 h-10"
          alt="circle"
        />

        <Image
          src="/images/home/add-blob.svg"
          height="225"
          width="415"
          alt="medii-logo"
          className="absolute -z-10 -top-8"
        />
      </div>
      <span className="block w-full px-4 py-2 md:py-4 text-base font-medium text-center text-primary md:1/2 lg:w-1/4 font-Quicksand">
        for any traveller who would wish to travel to China from UK
      </span>
      <button className="flex gap-3 shrink-0 my-2 md:my-5 justify-center items-center bg-primary border-none py-2 px-5 rounded-full text-[16px] font-bold text-white bg-gradient-to-r  from-[#F4B723] to-[#F9CB44]  capitalize shadow-btn-shadow font-Quicksand">
        Get Started
      </button>

      <div className="px-4 md:px-0 py-4 md:py-8">
        <Image
          src="/images/home/add-hero-poster.png"
          height="637"
          width="953"
          alt="medii-logo"
          className="rounded-sm"
        />
      </div>
    </div>
  );
}

export default MediiAdd;
