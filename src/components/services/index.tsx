import React from "react";
import Image from "next/image";

import HealthScreeningTabBar from "./HealthScreeningTabBar";
import ServiceQualification from "./ServiceQualification";
import HealthScreening from "../home/HealthScreening";
import AdsPoster from "./AdsPoster";
import Hero from "../common/Hero";
import FAQ from "./FAQ";

function ServicePage() {
  return (
    <div>
      <Hero
        image="services-hero-poster"
        title="Book Your Health Screening"
        description=" We deliver quality healthcare service in clinics and at your doorstep"
        isNavigator={true}
        isDark={false}
      />
      <div className="container mx-auto px-3 sm:px-0">
        <HealthScreening />
      </div>
      <div className="relative px-3 sm:px-0">
        <Image
          src="/images/services/health-screening-tab-blob.svg"
          height="300"
          width="240"
          alt="line-shape"
          className="absolute left-0 inline-block -z-20 top-1/3"
        />
        <div className="container z-30 mx-auto px-3 sm:px-0">
          <HealthScreeningTabBar />
        </div>
      </div>
      <div className="container mx-auto my-2 px-3 sm:px-0">
        <AdsPoster />
      </div>
      <div className="container mx-auto my-2 px-3 sm:px-0">
        <ServiceQualification />
      </div>
      <div className="container mx-auto my-5 px-3 sm:px-0">
        <FAQ />
      </div>
    </div>
  );
}

export default ServicePage;
