import React from 'react';
import { FaCheck } from "react-icons/fa";
import CypressSimulation from "@/components/CypressSimulation/CypressSimulation";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const About = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div id="about" className="w-full py-20 md:py-28 bg-[#0f0715]">
      <div className="w-[90%] xl:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            {t.about.title}
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
            {t.about.heading}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-8">
            {t.about.paragraph}
          </p>

          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {t.about.frontEnd}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {t.about.backEnd}
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-purple-900 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                {t.about.qa}
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <CypressSimulation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;