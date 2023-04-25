import Image from "next/image";
import React, { useState } from "react";

interface serviceCardPropData {
  name: string;
  image: string;
}
function ServiceCard({ name, image }: serviceCardPropData) {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div
      // bg-gradient-to-r from-teal-500 to-teal-900
      onMouseEnter={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
      className={`px-6 py-8 transition-all duration-500 text-[22px] leading-7 font-bold text-white rounded-xl  w-full h-full shadow-[20px_20px_40px_0px_#ABAFC74D] capitalize flex gap-3 items-center hover:cursor-pointer md:hover:scale-125 md:hover:transform md:hover:translate-x-[-40px] 
      ${
        hoverState
          ? "bg-gradient-to-b from-[#EAE3B6] to-[#C3996B]"
          : "bg-gradient-to-b from-[#419886] to-[#004842]"
      }
      md:hover:translate-y-[-40px]`}
    >
      <div
        className={`h-16 w-16 ${
          hoverState ? "bg-[#E4EFE1] text-[#004842]" : "bg-[#80a287] text-white"
        } rounded-full p-4`}
      >
        <Image
          src={`/images/icons/services/${
            hoverState ? `${image}-dark` : image ?? ""
          }.svg`}
          height="100"
          width="100"
          className="h-full w-full"
          alt="health-screening"
        />
      </div>
      <span className={`${hoverState ? "text-[#004842]" : "text-white"}`}>
        {name ?? ""}
      </span>
    </div>
  );
}

export default ServiceCard;
