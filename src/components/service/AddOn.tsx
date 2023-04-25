import React, { useState } from "react";
import GreenSwitch from "../common/GreenSwitch";
import Image from "next/image";

const AddOnData = [
  {
    index: 0,
    title: "Cardiovascular Disease Screening",
    description:
      "Screen the risk of cardiovascular disease through comprehensive methods such as blood tests, outpatient questions and answers, and ECG testing",
    status: false,
  },
  {
    index: 1,
    title: "Vitamin screening",
    description:
      "Understand the level of vitamin A, B6, B12, vitamin D 25-OH, vitamin E, Folate in the body",
    status: false,
  },
  {
    index: 2,
    title: "Allergy test",
    description:
      "Blood test for 30 daily food and inhalant allergens, 92% accuracy",
    status: false,
  },
  {
    index: 3,
    title: "Infectious Disease Screening",
    description:
      "Accurate and safe rapid blood test: 7 screenings including AIDS, syphilis, hepatitis A, hepatitis B, hepatitis C",
    status: false,
  },
  {
    index: 4,
    title: "Infectious Disease Screening",
    description:
      "Accurate and safe rapid blood test: 7 screenings including AIDS, syphilis, hepatitis A, hepatitis B, hepatitis C",
    status: false,
  },
  {
    index: 5,
    title: "Infectious Disease Screening",
    description:
      "Accurate and safe rapid blood test: 7 screenings including AIDS, syphilis, hepatitis A, hepatitis B, hepatitis C",
    status: false,
  },
  {
    index: 6,
    title: "Infectious Disease Screening",
    description:
      "Accurate and safe rapid blood test: 7 screenings including AIDS, syphilis, hepatitis A, hepatitis B, hepatitis C",
    status: false,
  },
];
function AddOn() {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? AddOnData.length : 4;
  const [selectedSwitches, setSelectedSwitches] = useState(AddOnData);

  /* handle when click on show-more */
  const handleShowMore = () => {
    setShowAll(true);
  };

  /* handleWhwn click on show less */
  const handleShowLess = () => {
    setShowAll(false);
  };

  /* handle switch data */
  const handleSwitchChange = (index: number, isSelected: boolean) => {
    setSelectedSwitches((prevState: any) => {
      const newState = [...prevState];
      newState[index].status = isSelected;
      return newState;
    });
  };
  return (
    <div className="md:py-5">
      <div className="z-50 flex flex-col items-center justify-center w-full sm:mt-auto">
        <span className="text-sm font-bold text-yellow_light font-Quicksand">
          Our Services
        </span>
        <h1 className="text-4xl leading-[65px] sm:text-5xl md:leading-[70px] font-bold text-primary text-center md:text-start">
          Other Add On
        </h1>
        <span className="block max-w-[430px] text-base font-medium text-center text-secondary font-Quicksand">
          Our Bilingual medical team empowers you with insights of the
          healthcare choices and helps you fully understand your treatment plan
        </span>
      </div>
      <div className="flex items-center justify-center pt-7 md:py-4">
        <span className="rounded-[30px] py-2 text-center bg-gradient-to-b from-[#004A42] to-[#419886] px-[8%] flex justify-center items-center text-white text-sm md:text-base font-bold max-w-5xl">
          The following single/multiple services can be selected independently,
          or combined with the above packages
        </span>
      </div>
      <div className="flex justify-center w-full h-full">
        <div className="my-7 flex flex-col w-full justify-center items-center bg-[#FAFAFA] max-w-5xl rounded-[20px] h-full">
          {AddOnData.slice(0, itemsToShow).map((item, index) => {
            const { title, description, status } = item;
            return (
              <div
                key={index}
                className={`relative w-full h-full py-3 px-5 pr-11 md:px-11 ${
                  index % 2 !== 0 && "bg-[#E4EFE1]"
                }
                    ${index + 1 === itemsToShow && "rounded-b-[20px]"}`}
              >
                <div className="flex flex-col items-center justify-between h-full sm:flex-row">
                  <div>
                    <h3 className="text-[22px]  font-bold font-Quicksand text-[#004A42]">
                      {title ?? ""}
                    </h3>
                    <span className="block pt-2  text-base font-medium text-[#70798B] max-w-[537px]">
                      {description ?? ""}
                    </span>
                  </div>
                  <div className="absolute right-2 md:static md:block">
                    <GreenSwitch
                      index={index}
                      onColor="bg-[#3A7065]"
                      closeColor="bg-[#bbbbbb]"
                      onChange={handleSwitchChange}
                      isSelected={status}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {!showAll && (
        <button
          className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
          onClick={handleShowMore}
        >
          <Image
            src="/images/icons/chevron-right.svg"
            height="6"
            width="8"
            alt="chevron-right"
            className="flex-shrink h-6 rotate-90"
          />
          Show More
        </button>
      )}
      {showAll && (
        <button
          className="text-[#3A7065] text-sm font-bold font-Quicksand w-full flex justify-center items-center gap-5"
          onClick={handleShowLess}
        >
          <Image
            src="/images/icons/chevron-right.svg"
            height="6"
            width="8"
            alt="chevron-right"
            className="flex-shrink h-6 -rotate-90"
          />
          Show Less
        </button>
      )}

      <div className="flex justify-center pt-8">
        <button className="flex gap-3 shrink-0 justify-center items-center bg-primary border-none py-2 px-11 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow font-Quicksand">
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOn;
