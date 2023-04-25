import Image from "next/image";
import React, { useState } from "react";

import HospitalImageSlider from "../common/HospitalImageSlider";
import ClientSlider from "./ClientSlider";
import WebLinkComponent from "./WebLink";
import Advantages from "./Advantages";
import Suscribe from "./Suscribe";
import MediiAdd from "./MediiAdd";
import Process from "./Process";
import Service from "./Service";
import Banner from "./Banner";
import Blog from "./Blog";

const hospitaLogoImages = [
  { index: 0, image: "london-bridge-hospital" },
  { index: 1, image: "imperial-private-healthcare" },
  { index: 2, image: "portland-hospital" },
  { index: 3, image: "moorfields-private-eye-hospital" },
  { index: 4, image: "harley-street-clinic" },
  { index: 5, image: "london-clinic" },
];

const socialMediaLinks = [
  { index: 0, image: "facebook-dark", linkTo: "facebook.com" },
  { index: 0, image: "twitter-dark", linkTo: "twitter.com" },
  { index: 0, image: "chat", linkTo: "example.com" },
  { index: 0, image: "youtube-dark", linkTo: "youtube.com" },
];
function Homepage() {
  const [ratingStars] = useState(5);
  return (
    <>
      <div className="container px-4 py-8 mx-auto">
        <div className="flex gap-5 md:gap-0 flex-col-reverse items-center justify-between flex-grow lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full mt-5 sm:mt-auto md:items-start">
            <span className="text-sm font-bold text-yellow_light font-Quicksand">
              Get Startted
            </span>
            <h1 className="text-5xl leading-[70px] font-bold text-primary text-center md:text-start">
              Cross-border Healthcare Consultancy
            </h1>

            <h3 className="text-3xl text-[#70798B] font-medium text-center md:text-start font-Quicksand">
              premiun British private healthcare
            </h3>
            <div className="pt-5 sm:pt-10">
              <div className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                <span className="block text-[18px] leading-10 font-bold">
                  Patient feedback
                </span>
                <div className="flex">
                  {Array.from({ length: ratingStars }, () => null).map(
                    (v, i) => {
                      return (
                        <Image
                          key={i}
                          src="/images/home/star.svg"
                          height="25"
                          width="25"
                          alt="medii-logo"
                        />
                      );
                    }
                  )}
                </div>
                <Image
                  src="/images/home/google-logo.svg"
                  height="56"
                  width="94"
                  alt="medii-logo"
                />
              </div>
            </div>
            <span className="text-sm font-medium leading-6 text-secondary font-Quicksand">
              Score based on patients’ feedback to recommend Medi Healthcare on
            </span>
            <div className="flex gap-5 pt-10">
              <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-r w-36 from-[#F4B723] to-[#F9CB44]  capitalize shadow-btn-shadow font-Quicksand">
                Video
              </button>
              <button className="flex w-36 gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
                Booking
              </button>
            </div>
          </div>
          <div className="relative flex-grow ">
            <div className="relative">
              <Image
                src={`/images/home/small-circles.svg`}
                height="100"
                width="100"
                className="absolute w-6 h-10 right-10 -top-6 md:top-0"
                alt="circle"
              />
              <Image
                src="/images/home/doctor-image.png"
                height="543"
                width="600"
                alt="medii-logo"
              />
            </div>
            <Image
              src="/images/home/half-golden-circle.svg"
              height="100"
              width="70"
              alt="medii-logo"
              className="absolute bottom-[30%] left-4"
            />
            <Image
              src="/images/home/half-green-circle.svg"
              height="100"
              width="150"
              alt="medii-logo"
              className="absolute bottom-0 right-10"
            />
            <div className="absolute top-24  -right-[6.5rem] md:top-[22%] md:-right-28 rotate-90">
              <div className="text-[12px] flex justify-center items-center text-[#707070] font-bold">
                <span className="block">Follow Us &nbsp;</span>
                <span className="block w-10 h-0 border border-black"></span>
                <div className="flex gap-3">
                  &nbsp;
                  {socialMediaLinks.map((link, index) => {
                    const { image, linkTo } = link;
                    return (
                      <a
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://${linkTo ?? ""}`}
                      >
                        <Image
                          src={`/images/icons/social-media/${image ?? ""}.svg`}
                          height="14"
                          width="14"
                          alt="medii-logo"
                          className="w-4 h-4 -rotate-90"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E4EFE1] pt-12 pb-8 mt-11 px-3 xs:px-0">
        <div className="container mx-auto">
          <HospitalImageSlider imageData={hospitaLogoImages} />
        </div>
      </div>
      <div className="container mx-auto px-3 xs:px-0">
        <Service />
      </div>
      <div className="relative md:my-16 px-3 xs:px-0">
        <Image
          src="/images/home/services/path-shape.png"
          height="400"
          width="1400"
          alt="line-shape"
          className="w-full h-[35rem]  -z-10 absolute"
        />
        <div className="container mx-auto">
          <WebLinkComponent />
          <Advantages />
          <MediiAdd />
        </div>
        <div className="relative">
          <Image
            src="/images/icons/process-blob.svg"
            height="400"
            width="500"
            alt="line-shape"
            className="h-[35rem]  -z-10 absolute bottom-0 right-0 inline-block"
          />
          <div className="container mx-auto">
            <Process />
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/home/clients/client-blob.svg"
            height="300"
            width="240"
            alt="line-shape"
            className="absolute bottom-0 left-0 inline-block -z-10"
          />
          <div className="container mx-auto">
            <ClientSlider />
          </div>
        </div>
        <div className="container mx-auto px-2 md:px-0">
          <Banner />
          <Blog />
        </div>
        <div className="relative mb-16 md:my-20">
          <Image
            src="/images/home/suscribe-path-shape.svg"
            height="200"
            width="1400"
            alt="line-shape"
            className="w-full h-[17rem] -z-10 absolute"
          />
          <div className="container mx-auto  md:px-0 px-3 xs:px-2">
            <Suscribe />
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
