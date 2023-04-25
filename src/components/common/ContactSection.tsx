import Image from "next/image";
import React from "react";

function ContactSection() {
  return (
    <div className="md:py-12">
      <div className="z-50 flex flex-col items-center justify-center w-full  sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-[42px] leading-[65px] font-bold text-primary text-center md:text-start">
          We are here to assist you.
        </h1>
      </div>
      <div className="flex h-full flex-col md:flex-row gap-7 justify-center w-full">
        <div
          className="flex-grow max-w-[500px] px-8 w-full flex flex-col justify-center items-center gap-4 py-10 rounded-[20px] 
        bg-gradient-to-b from-[#419886] to-[#004A42] md:max-h-[230px] shadow-[-15px_20px_40px_0px_#00000029] text-white"
        >
          <Image
            src="/images/icons/email-icon.svg"
            height="50"
            width="50"
            alt="medii-logo"
          />
          <h2 className="text-[36px] text-center md:text-[42px] leading-[50px] md:leading-[65px] font-bold text-cente">
            I would like to Email
          </h2>
          <span className="block text-sm text-center">
            Reply to you as soon as possible
          </span>
        </div>
        <div className="flex-grow max-w-[500px] px-8 flex flex-col justify-center items-center gap-4 py-10 rounded-[20px] bg-gradient-to-b from-[#FFD669] to-[#F4B723] md:max-h-[230px] shadow-[-15px_20px_40px_0px_#00000029] text-white">
          <Image
            src="/images/icons/customer care-icon.svg"
            height="58"
            width="58"
            alt="medii-logo"
          />
          <h2 className="text-[36px] text-center md:text-[36px] md:leading-[40px] font-bold text-cente">
            I would like to speak with someone
          </h2>
          <span className="block text-sm text-center">
            Monday to Friday from 9am to 5pm
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
