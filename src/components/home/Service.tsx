import Image from "next/image";
import React from "react";

import ServiceCard from "./ServiceCard";

const serviceData = [
  { index: 0, name: "Covid-19 Travel Test", image: "covid-test" },
  { index: 1, name: "Health Screening", image: "health-screening" },
  { index: 2, name: "Diagnosic Test", image: "dignosis-test" },
  { index: 3, name: "Doctor’s Appointment", image: "doctors-appointment" },
  { index: 4, name: "Doctor Traning", image: "doctor-training" },
  { index: 5, name: "Treatment Abroad", image: "treatment-abroad" },
  { index: 6, name: "Health & Wellbeing", image: "health" },
  { index: 7, name: "Members Scheme", image: "members-scheme" },
];
function Service() {
  return (
    <div className="relative">
      <div className="z-50 flex flex-col items-center justify-center w-full md:pt-[59px] sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-5xl leading-[70px] font-bold text-primary text-center md:text-start">
          Our Services
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="relative z-50 grid grid-cols-1 px-3 md:px-0 gap-6 mt-14 card-data sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Image
          src={`/images/home/small-circles.svg`}
          height="100"
          width="100"
          className="absolute w-6 h-10 -top-20 -left-0"
          alt="circle"
        />
        {serviceData.map((serviceCardDetail, index) => {
          const { name, image } = serviceCardDetail;
          return <ServiceCard key={index} name={name} image={image} />;
        })}
      </div>
      <div className="absolute -bottom-8 -left-[20%]">
        <Image
          src={`/images/home/service-blob.png`}
          height="100"
          width="100"
          className="w-[20rem] h-[25rem] -z-10"
          alt="health-screening"
        />
      </div>
    </div>
  );
}

export default Service;
