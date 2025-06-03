"use client";

import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const { language, toggleLanguage } = useLanguage();
  const t = getTranslations(language);

  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const navLinks = [
    { id: "home", url: "#home" },
    { id: "about", url: "#about" },
    { id: "experience", url: "#experience" },
    { id: "skills", url: "#skills" },
    { id: "contacts", url: "#contacts" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}
      />

      {/* Nav Links */}
      <div
        className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000]`}
      >
        {/* Language Switch */}
        <div className="relative flex items-center mt-12 justify-center">
          <div
            className="relative w-[120px] h-[40px] bg-gray-800 rounded-full flex items-center cursor-pointer overflow-hidden"
            onClick={toggleLanguage}
          >
            <div
              className={`absolute w-[60px] h-full ${
                language === "pt" ? "translate-x-[60px]" : "translate-x-0"
              } bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-300 ease-in-out`}
            />
            <div className="relative w-full h-full flex items-center justify-between px-4 text-sm font-medium">
              <span
                className={`${
                  language === "en" ? "text-white" : "text-gray-400"
                }`}
              >
                EN
              </span>
              <span
                className={`${
                  language === "pt" ? "text-white" : "text-gray-400"
                }`}
              >
                PT
              </span>
            </div>
          </div>
        </div>

        {navLinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav__link text-[20px] border-b-[1.5px] pb-2 border-white sm:text-[30px]">
              {t.navbar[navlink.id as keyof typeof t.navbar]}
            </p>
          </Link>
        ))}

        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white cursor-pointer"
        />
      </div>
    </>
  );
};

export default MobileNav;
