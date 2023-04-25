import React from "react";

import Image from "next/image";

import BilingualMedicalConcultant from "./BilingualMedicalConsultant";
import SpecialistConsultant from "./SpecialistConsultant";
import CustomerCareTeam from "./CustomerCareTeam";
import ManagementTeam from "./ManagementTeam";

function AboutPage() {
  return (
    <div>
      <div className="container mx-auto my-6">
        <ManagementTeam />
      </div>
      <div className="container mx-auto my-6">
        <BilingualMedicalConcultant />
      </div>
      <div className="relative">
        <Image
          src="/images/about/blob.svg"
          height="570"
          width="290"
          alt="blob"
          className="-z-20 absolute top-[15%] right-0 inline-block"
        />
        <div className="container mx-auto my-6">
          <SpecialistConsultant />
        </div>
      </div>
      <div className="container mx-auto my-6">
        <CustomerCareTeam />
      </div>
    </div>
  );
}

export default AboutPage;
