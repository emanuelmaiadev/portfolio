import React from "react";
import { BaseInfo } from "@/Data/data";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";  
import { getTranslations } from "@/Data/translations"; 

const Hero = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = getTranslations(language);

  const resumeFile = language === 'en' ? '/resume.pdf' : '/curriculo.pdf'; // Conditional resume file

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative">
      {/* Language Toggle Button - Position it as needed */}
      <button 
        onClick={toggleLanguage}
        className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1 rounded z-10"
      >
        {language === 'en' ? 'Português' : 'English'}
      </button>

      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              {t.greeting} {/* Use translation */}
            </h1>

            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {t.position} {/* Use translation (or BaseInfo directly if not translated) */}
            </h1>

            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {t.description} {/* Use translation */}
            </p>

            <a
              href={resumeFile} 
              download
              data-aos="zoom-in"
              data-aos-delay="300"
              className="inline-flex items-center space-x-2 md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-blue-700 hover:bg-blue-900"
            >
              <span>{t.downloadButton}</span> {/* Use translation */}
              <FaDownload />
            </a>
          </div>

          {/* Circular Image Content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name} 
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

