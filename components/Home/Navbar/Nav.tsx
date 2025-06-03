"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const navLinks = [
  { id: 'home', url: '#home' },
  { id: 'about', url: '#about' },
  { id: 'experience', url: '#experience' },
  { id: 'skills', url: '#skills' },
  { id: 'contacts', url: '#contacts' },
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
      className={`fixed ${navBg ? "bg-[#240b39]" : "bg-transparent"} h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="LOGO" 
          width={120}
          height={120}
          className="h-[8vh] w-auto object-contain sm:h-[10vh]"
        />

        {/* Nav Links & Buttons */}
        <div className="flex items-center space-x-10">
          {/* Nav Links - Translated */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                {/* Use translation based on navlink.id */}
                <p className="nav__link">{t.navbar[navlink.id as keyof typeof t.navbar]}</p>
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Switch Button */}
            <button
              onClick={toggleLanguage} // Call the toggle function from context
              className="px-4 py-2 text-white font-medium text-sm bg-purple-600 hover:bg-purple-700 transition-all duration-200 rounded-lg"
            >
              {/* Show the label for the *other* language */} 
              {t.navbar.toggleLang} 
            </button>

            {/* Hire Me Button - Translated */}
            <a
              href="#contact"
              className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg"
            >
              {t.navbar.hireMe} {/* Use translated text */}
            </a>

            {/* Burger Menu */}
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

