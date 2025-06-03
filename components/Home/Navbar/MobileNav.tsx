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
  const { language } = useLanguage();
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
