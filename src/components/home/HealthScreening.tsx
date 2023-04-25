import React, { useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";

const healthScreeningData = [
  {
    index: 0,
    name: "Royal Certified 1v1 Service",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    image: "royal-certifieded",
    isDark: true,
    linkTo: "royal-certified",
  },
  {
    index: 1,
    name: "Cooperative With top private hospitals",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "cooperative",
    isDark: false,
    linkTo: "private-hospital",
  },
  {
    index: 2,
    name: "Cost-effective services",
    description:
      "Bespoke treatment plans, designed and recommended according to your individual needs.",
    image: "cost-effective",
    isDark: true,
    linkTo: "cost-effective",
  },
  {
    index: 3,
    name: "Customize Health Screening",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "customize-health",
    isDark: false,
    linkTo: "health-screening",
  },
  {
    index: 4,
    name: "Distinguished Service",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "distinguished-service",
    isDark: true,
    linkTo: "distinguished",
  },
  {
    index: 5,
    name: "Bilingual Medical Reports",
    description:
      "Consultations with experts with a click, accessing world-class care, wherever you are",
    image: "bilingual-medical",
    isDark: false,
    linkTo: "medical-report",
  },
];
function HealthScreening() {
  const router = useRouter();

  const handleServiceClick = (name: string) => {
    router.push(`/services/${name}`);
  };
  const [isDark, setisDark] = useState(true);
  return (
    <div className="md:py-8 flex flex-col gap-4 md:gap-16">
      <div className="z-50 flex flex-col items-center justify-center w-full pt-8 md:pt-7 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-5xl leading-[70px] font-bold text-primary text-center md:text-start">
          MEDii Health screening
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="grid grid-cols-1 gap-5 pt-8 md:pt-0 md:py-16 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {healthScreeningData.map((item, index) => {
          const { name, description, image, isDark, linkTo } = item;
          return (
            <button
              onClick={() => handleServiceClick(`${linkTo}`)}
              key={index}
              className={`shadow-medium-btn-shadow hover:scale-105 transition-all duration-300 rounded-[20px] p-6 bg-gradient-to-b  h-[201px] max-w-[377px] max-h-[201px] flex flex-col gap-6 
             ${
               isDark
                 ? "from-[#419886] to-[#004A42] text-white"
                 : "from-[#EAE2B6] to-[#C3996B] text-[#3A7065]"
             }
             `}
            >
              <div className="flex items-center justify-between w-full">
                <Image
                  src={`/images/icons/health-screening/${image}.svg`}
                  height="50"
                  width="50"
                  alt="medii-logo"
                />

                <span className="block text-xl font-bold text-end">
                  {name ?? ""}
                </span>
              </div>
              <div
                /* #3A7065 */
                className={`text-sm font-medium text-end`}
              >
                {description ?? ""}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default HealthScreening;
