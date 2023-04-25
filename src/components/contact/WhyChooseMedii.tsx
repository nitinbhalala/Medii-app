import React from "react";

import MediiPackageCard from "./MediiPackageCard";

function WhyChooseMedii() {
  return (
    <div className="md:py-9 ">
      <div className="flex flex-col-reverse gap-6 md:gap-16 md:flex-row">
        <div className="flex-grow flex-col md:flex-row flex px-10 md:px-0 items-center pt-4 md:pt-20">
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto ">
            <div className="flex w-full h-full flex-col justify-center md:pt-20">
              <MediiPackageCard
                title="Access to 3000+ UK medical consultants"
                isDark={true}
              />
            </div>
            <div className="flex flex-col gap-4">
              <MediiPackageCard
                title="Bilingual medical advisory teams ensuring highest standards at the core"
                isDark={true}
              />
              <MediiPackageCard
                title="An experienced triage and services team"
                isDark={false}
              />
            </div>
            <div className="flex flex-col gap-4 md:-translate-y-20">
              <MediiPackageCard
                title="Accredited and approved by premium hospitals and clinics"
                isDark={false}
              />
              <MediiPackageCard
                title="Visiting services which improve efficiency and offer a personalised experience"
                isDark={true}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center w-[90%]">
          <span className="block w-full text-sm font-bold text-center md:text-start md:w-auto text-yellow_light font-Quicksand">
            Our Advantages
          </span>
          <h1 className="text-[42px] leading-[48 px] font-bold text-primary text-center md:text-start">
            Why choose the MEDii?
          </h1>
          <span className="block w-full text-base font-medium text-center md:max-w-md text-secondary md:text-start font-Quicksand">
            The UK is a world leader in the healthcare, life sciences and
            bio-economy cluster, finding solutions to the world’s biggest
            challenges. The UK offers:
          </span>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseMedii;
