"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const navLinks = [
  { id: "home", url: "#home" },
  { id: "about", url: "#about" },
  { id: "experience", url: "#experience" },
  { id: "skills", url: "#skills" },
  { id: "contacts", url: "#contacts" },
];

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = getTranslations(language);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "bg-transparent"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full w-full px-4 max-w-[2000px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 ml-2">
          <Image
            src="/images/logo.png"
            alt="LOGO"
            width={120}
            height={120}
            className="h-[8vh] w-auto object-contain sm:h-[10vh]"
          />
        </div>

        {/* Nav Links & Buttons */}
        <div className="flex items-center justify-end flex-1">
          {/* Central Navigation */}
          <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <a key={link.id} href={link.url} className="nav__link mx-4">
                {t.navbar[link.id as keyof typeof t.navbar]}
              </a>
            ))}
          </nav>

          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="relative w-[120px] h-[40px] bg-gray-800 rounded-full flex items-center cursor-pointer overflow-hidden">
              <div
                className={`absolute w-[60px] h-full ${
                  language === "pt" ? "translate-x-[60px]" : "translate-x-0"
                } bg-gradient-to-r from-purple-600 to-blue-600 transition-transform duration-300 ease-in-out`}
              />
              <div
                className="relative w-full h-full flex items-center justify-between px-4 text-sm font-medium"
                onClick={toggleLanguage}
              >
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

            <a
              href="#contact"
              className="hidden md:block bg-blue-700 hover:bg-blue-900 text-white px-6 py-2 rounded-lg transition-all duration-200 mr-2"
            >
              {t.navbar.hireMe}
            </a>

            <button
              onClick={openNav}
              className="block md:hidden text-white text-2xl mr-2"
            >
              <HiBars3BottomRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
