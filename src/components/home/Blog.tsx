import React from "react";
import Image from "next/image";

const blogData = [
  {
    index: 0,
    title: "Review Of Healthy Breakfast Meals For Energy Boost",
    time: "20:45",
    duration: " 2 years ago ",
    description:
      "To help you out, we’ve looked through some of the best offerings on the market  and compiled a list",
    image: "blog-image-1",
  },
  {
    index: 1,
    title: "Review Of Healthy Breakfast Meals For Energy Boost",
    time: "20:45",
    duration: " 2 years ago ",
    description:
      "To help you out, we’ve looked through some of the best offerings on the market  and compiled a list",
    image: "blog-image-2",
  },
];
function Blog() {
  return (
    <div className="flex flex-col py-8 gap-8">
      <div className="z-50 flex flex-col items-center justify-center w-full md:pt-16 sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-5xl leading-[70px] font-bold text-primary text-center md:text-start">
          Last News
        </h1>
        <span className="block max-w-md text-base font-medium text-center text-secondary font-Quicksand">
          We deliver quality healthcare service in clinics and at your doorstep
        </span>
      </div>
      <div className="flex flex-col gap-14 md:gap-0 items-center justify-between h-full lg:flex-row relative">
        <div className="flex items-center justify-center max-h-[480px] max-w-[700px] flex-1 relative">
          <div className="h-full w-full bg-gradient-to-b from-transparent to-[#081420] absolute rounded-[20px] opacity-70"></div>
          <Image
            src="/images/home/big-blog-image.png"
            height="566"
            width="773"
            alt="medii-logo"
            className="rounded-[20px]"
          />
          <div className="absolute px-3  md:px-0 w-full max-w-[617px] top-2 md:top-auto bottom-10">
            <div className="flex flex-col gap-4">
              <span className="block font-bold text-2xl text-white">
                10 Casting Decisions That Hurt The Star Wars Prequels (And 10
                That Saved It)
              </span>
              <div className="flex items-center gap-3 text-sm font-medium text-white">
                <span className="block font-Quicksand">1 years ago</span>
                <span className="block w-px h-[12px]  bg-[#ABAFC7]"></span>
                <span className="bloc font-Quicksand">20:45</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col justify-center flex-1 h-full gap-6 md:gap-2 center md:flex-row">
          <div className="absolute flex items-center justify-center gap-1 md:gap-3 right-5 md:right-8 -top-11 md:-top-20">
            <span className="block text-[#70798B] text-sm font-medium capitalize">
              More
            </span>
            <Image
              src={`/images/home/small-circles.svg`}
              height="100"
              width="100"
              className="top-0 left-0 w-6 h-10"
              alt="circle"
            />
          </div>
          {/* small blog 1 */}
          {blogData.map((blogItem, index) => {
            const { title, time, duration, description, image } = blogItem;
            return (
              <div key={index}>
                <Image
                  src={`/images/home/${image ?? ""}.png`}
                  height="209"
                  width="274"
                  alt="medii-logo"
                  className="rounded-[20px]"
                />
                <div className="p-2">
                  <div className="flex items-center gap-3 text-sm font-medium text-[#ABAFC7]">
                    <span className="block font-Quicksand">
                      {duration ?? ""}
                    </span>
                    <span className="block w-px h-[12px]  bg-[#ABAFC7]"></span>
                    <span className="bloc font-Quicksand">{time ?? ""}</span>
                  </div>
                  <h2 className="text-[#004842] text-xl font-bold max-w-[280px] pt-2">
                    {title ?? ""}
                  </h2>
                  <span className="block font-medium text-sm text-[#7079BB] pt-2 max-w-[280px]">
                    {description ?? ""}
                  </span>
                </div>
              </div>
            );
          })}
          {/* small blog 2 */}
        </div>
      </div>
    </div>
  );
}

export default Blog;
