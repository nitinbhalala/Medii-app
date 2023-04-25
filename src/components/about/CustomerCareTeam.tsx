import React from "react";

import Image from "next/image";

const customerCareTeamData = [
  {
    index: 0,
    name: "Rong SUE",
    designation: "Lead nurse",
    image: "team-member-1",
  },
  {
    index: 0,
    name: "Ian Zhang",
    designation: "Client Relation Manager",
    image: "team-member-2",
  },
  {
    index: 0,
    name: "Kim Alberti",
    designation: "Referral Manager",
    image: "team-member-3",
  },
];
function CustomerCareTeam() {
  return (
    <div className="py-4 md:py-14">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center ">
        <div className="relative z-50 flex flex-col items-center justify-center w-full h-full gap-3 md:items-start sm:mt-auto">
          <Image
            src={`/images/home/small-circles.svg`}
            height="100"
            width="100"
            className="absolute top-0 left-0 w-6 h-10"
            alt="circle"
          />
          <span className="text-sm font-bold text-yellow_light font-Quicksand">
            Our Services
          </span>
          <h1 className="text-5xl  font-bold text-[#3A7065] text-center md:text-start">
            Customer Care Team
          </h1>
          <span className="block text-base text-start text-[#70798B] font-medium font-Quicksand w-full md:max-w-[200px]">
            We are here to help! Proudly providing MEDii service and care with
            professionalism and sincerity
          </span>
        </div>
        {customerCareTeamData.map((teamMember, index) => {
          const { name, designation, image } = teamMember;
          const isFlexCol = index % 2 === 0;
          return (
            <div
              key={index}
              className={`h-full w-full flex  justify-center items-center md:items-start ${
                isFlexCol ? "flex-col" : "flex-col-reverse"
              }`}
            >
              <Image
                src={`/images/about/customer-care/${image ?? ""}.png`}
                height="320"
                width="270"
                alt="medii-logo"
                className="rounded-[20px]"
              />
              <div className={`${isFlexCol ? "pt-5" : "pb-5"}`}>
                <h2 className="text-[#3A7065] font-bold text-xl capitalize">
                  {name ?? ""}
                </h2>
                <span className="text-base font-medium text-[#70798B] capitalize">
                  {designation ?? ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CustomerCareTeam;
