import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const navBarData = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    dropdownItems: [
      { name: "Royal Certified", linkTo: "services/royal-certified" },
      {
        name: "Cooperative hospitals",
        linkTo: "services/private-hospital",
      },
      { name: "Cost Effective", linkTo: "services/cost-effective" },
      { name: "Health Screening", linkTo: "services/health-screening" },
      { name: "Distinguished", linkTo: "services/distinguished" },
      { name: "Medical Reports", linkTo: "services/medical-report" },
    ],
  },
  {
    name: "About Medii",
    href: "/about",
    dropdownItems: [
      { name: "MEDii Journey", linkTo: "about" },
      {
        name: "Team",
        linkTo: "about",
      },
    ],
  },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const router = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
  }, []);

  return (
    <header className="p-4 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col xs:flex-row items-center justify-between w-full">
            <Link href="/" className="flex items-center px-2 py-4 -ml-4">
              <Image
                src="/images/icons/medii-logo.png"
                height="100"
                width="100"
                alt="medii-logo"
              />
            </Link>
            <div className="items-center flex-grow hidden ml-2 space-x-4 md:flex">
              {/* links */}
              {navBarData.map((navItem, index): any => {
                const { name, href, dropdownItems } = navItem;
                return (
                  <div
                    key={index}
                    className="relative mx-4"
                    onMouseEnter={() => setOpenMenuIndex(index)}
                    onMouseLeave={() => setOpenMenuIndex(null)}
                  >
                    <Link href={href}>
                      <span
                        className={`block px-4 py-2 text-sm font-medium ${
                          router.pathname === href
                            ? "text-[#3A7065]"
                            : "text-gray-700 hover:text-[#3A7065]"
                        }`}
                      >
                        {name}
                      </span>
                    </Link>
                    {dropdownItems && openMenuIndex === index && (
                      <div className="absolute flex flex-col jus top-full  left-0  shadow-hero-shadow rounded-sm py-2.5 bg-white text-gray-700 w-56 z-10">
                        {dropdownItems.map((dropdownItem, i) => (
                          <button
                            className="text-start"
                            key={i}
                            onClick={() => {
                              router.push(`/${dropdownItem.linkTo}`);
                              setOpenMenuIndex(null);
                            }}
                          >
                            <span className="block px-4 py-2 text-sm hover:bg-gray-100">
                              {dropdownItem.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* login section */}
            <div className="flex items-center space-x-4">
              <button className="flex gap-3 shrink-0 justify-center items-center border-none py-3 px-4 md:px-8 rounded-full text-[16px] font-bold text-white bg-gradient-to-b from-[#004A42] to-[#419886] capitalize shadow-btn-shadow">
                sigh in
                {/* user icon */}
                <Image
                  src="/images/icons/user-icon.svg"
                  height="20"
                  width="20"
                  alt="user-icon"
                />
              </button>

              <Image
                src="/images/icons/theme-icon.svg"
                height="38"
                width="38"
                alt="theme"
                className="hidden md:block hover:cursor-pointer"
              />
              <Image
                src="/images/icons/Cosmetology-icon.svg"
                height="38"
                className="hidden md:block  border-[#2e5049] border-2 rounded-full hover:cursor-pointer"
                width="38"
                alt="face"
              />
              <div className="block md:hidden" id="mobile-navigator">
                <button
                  className="flex items-center flex-shrink-0 text-gray-800 hover:text-gray-600 focus:outline-none"
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                  <Image
                    src={`/images/icons/${
                      isMobileNavOpen
                        ? "mobile-navigator-close"
                        : "mobile-navigator-line"
                    }.svg`}
                    height="40"
                    width="35"
                    alt="navigator"
                    className="flex-grow flex-shrink"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-start py-2 space-y-1">
            {navBarData.map((navItem, index): any => {
              const { name, href, dropdownItems } = navItem;
              return (
                <div
                  key={index}
                  className="relative w-full"
                  onMouseEnter={() => !isMobile && setOpenMenuIndex(index)}
                  onMouseLeave={() => !isMobile && setOpenMenuIndex(null)}
                >
                  <button
                    onClick={() => {
                      router.push(`/${href}`);
                      setIsMobileNavOpen(false);
                    }}
                    className="flex w-full justify-between items-center"
                  >
                    <span
                      className={`block px-4 py-2 text-base font-medium ${
                        router.pathname === href
                          ? "text-[#3A7065]"
                          : "text-gray-700 hover:text-[#3A7065]"
                      }`}
                    >
                      {name}
                    </span>
                    {dropdownItems && (
                      <Image
                        src="/images/icons/chevron-right.svg"
                        height="6"
                        width="10"
                        alt="chevron-right"
                        className={`flex-shrink h-3 mr-4 ${
                          openMenuIndex === index && "rotate-90"
                        }`}
                        onClick={(event) => {
                          openMenuIndex === index
                            ? setOpenMenuIndex(null)
                            : setOpenMenuIndex(index);
                          event.stopPropagation();
                        }}
                      />
                    )}
                  </button>
                  {dropdownItems && openMenuIndex === index && (
                    <div className="flex w-full justify-center px-5">
                      <div className="flex flex-col  top-full shadow-hero-shadow rounded-lg my-3 py-2.5 bg-white text-gray-700 w-full z-10">
                        {dropdownItems.map((dropdownItem, i) => (
                          <button
                            className="text-start"
                            key={i}
                            onClick={() => {
                              router.push(`/${dropdownItem.linkTo}`);
                              setOpenMenuIndex(null);
                              setIsMobileNavOpen(false);
                            }}
                          >
                            <span className="block px-4 py-2 text-sm hover:bg-gray-100">
                              {dropdownItem.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
