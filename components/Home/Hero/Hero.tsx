'use client'

import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const resumeFile = language === 'en' ? '/resume.pdf' : '/curriculo.pdf'; 

  return (
    <div className="w-full h-screen bg-[#0f0715] flex items-center justify-center overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              {t.hero.greeting}
            </h1>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]"
            >
              {t.hero.position}
            </h1>

            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60 max-w-2xl mx-auto lg:mx-0"
            >
              {t.hero.description}
            </p>

            <a
              href={resumeFile}
              download
              data-aos="zoom-in"
              data-aos-delay="300"
              className="inline-flex items-center space-x-2 md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900"
            >
              <span>{t.hero.downloadButton}</span>
              <FaDownload />
            </a>
          </div>

          {/* Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="hidden lg:block"
          >
            <div className="relative w-full max-w-[500px] mx-auto">
              <Image
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                className="rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;