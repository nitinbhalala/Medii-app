import React from "react";
import Image from "next/image";

import MedicalTravelService from "./MedicalTravelService";
import ContactSection from "../common/ContactSection";
import RemoteConsultant from "./RemoteConsultant";
import PatientsSeeking from "./PatientsSeeking";
import WhyChooseMedii from "./WhyChooseMedii";
import Hero from "../common/Hero";
import WhyUk from "./WhyUk";

function ContactPage() {
  return (
    <div>
      <Hero
        image="contact-hero"
        title="TREATMENT ABROARD"
        description="Enjoy the hospitality of our local bilingual service team, bringing you the warmth and familiarity of home with an exceptional standard of attention and care"
        isNavigator={false}
        isDark={true}
      />

      <div className="container mx-auto my-6">
        <PatientsSeeking />
      </div>
      <div className="relative">
        <Image
          src="/images/patients-seeking/blob.svg"
          height="100"
          width="100"
          alt="blob"
          className="absolute w-full h-full md:h-[60vh] -z-10"
        />
        <div className="container mx-auto my-6">
          <RemoteConsultant />
        </div>
        <div className="relative">
          <Image
            src="/images/icons/why-uk-blob.svg"
            height="100"
            width="250"
            alt="blob"
            className="absolute h-full left-0 top-0 -z-10"
          />
          <div className="container mx-auto mt-6 mb-16 px-3 sm:px-0">
            <WhyUk />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/icons/why-medi-blob.svg"
            height="100"
            width="250"
            alt="blob"
            className="absolute h-full right-0 top-0 -z-10"
          />
          <div className="container mx-auto mt-6 ">
            <WhyChooseMedii />
          </div>
        </div>
        <div className="container mx-auto mt-6 px-3 sm:px-0">
          <MedicalTravelService />
        </div>
        <div className="container mx-auto my-6 px-3 sm:px-0">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
