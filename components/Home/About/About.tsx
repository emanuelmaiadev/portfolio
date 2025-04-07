"use client"

import SectionHeading from "@components/Helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";
import CypressSimulation from "@/components/CypressSimulation/CypressSimulation";


const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
      <SectionHeading>About Me</SectionHeading>
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
        <div>
          <h1 className="text-bg text[26ox] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">{aboutInfo.description}</p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Front-End Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-orange-800 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                Back-End Development
              </p>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <div className="w-7 h-7 bg-purple-900 flex flex-col items-center justify-center">
                <FaCheck className="text-white" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold text-gray-300">
                QA Analisys and Automation
              </p>
            </div>
          </div>
        </div>
        <div>
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
