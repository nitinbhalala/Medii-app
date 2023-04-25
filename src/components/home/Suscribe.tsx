import React, { useState } from "react";

function Suscribe() {
  const [emailAddress, setEmailAddress] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(emailAddress);
  };
  return (
    <div className="flex flex-col md:flex-row gap-7 md:py-10">
      <div className="flex justify-center md:justify-end w-full h-full">
        <div className="flex flex-col gap-4 py-10 px-8 md:px-16 w-[474px] max-h-[228px] self-end justify-around rounded-[20px] bg-gradient-to-b from-[#419886] to-[#004A42] shadow-[-15px_20px_40px_0px_#00000029]">
          <div className="text-white flex flex-col justify-center items-center">
            <span className="block text-sm font-bold text-center">
              Get Notified About MEDii
            </span>
            <h2 className="text-[36px] md:text-[42px] leading-[50px] md:leading-[65px] font-bold text-cente">
              Subscribe Now
            </h2>
          </div>
          <form className="relative " onSubmit={(e) => handleSubmit(e)}>
            <span className="bg-white absolute -bottom-1 left-0 w-full h-11 opacity-20 rounded-full"></span>
            <input
              className="block placeholder-white px-6 max-w-[72%] md:max-w-full py-2 text-base font-medium text-white bg-transparent rounded-full outline-none relative z-10"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="Enter Your Email"
              required
            />
            <button className="absolute right-5 bottom-2 text-base font-bold text-white font-Quicksand">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center md:justify-start w-full h-full">
        <div className="flex flex-col gap-4 py-10 px-8 md:px-16 w-[474px] max-h-[228px] self-end justify-around rounded-[20px] bg-gradient-to-b from-[#FFD669] to-[#F4B723] shadow-[-15px_20px_40px_0px_#00000029]">
          <div className="text-white flex flex-col items-center justify-center">
            <span className="block text-sm font-bold text-center">
              Are You Ready For
            </span>
            <h2 className="text-[32px] md:text-[39px] leading-[50px] md:leading-[65px] font-bold text-cente">
              Start Chat With Us
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <button className="flex w-28 md:w-36 gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-7 md:px-11 rounded-full text-[14px] md:text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
              Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suscribe;
