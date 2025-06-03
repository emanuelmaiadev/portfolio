import SectionHeading from "@/components/Helper/SectionHeading";
import { servicesData } from "@/Data/data";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const Experience = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div id="experience" className="pt-16 pb-16 bg-[#0f0715]">
      <SectionHeading>{t.experience.title}</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-[90%] sm:w-[80%] mx-auto items-strech mt-20">
        {servicesData.map((service, i) => {
          return (
            <div
              data-aos="fade-left"
              data-aos-anchor-placement="top-center"
              data-aos-delay={`${i * 100}`}
              key={service.id}
            >
              <ExperienceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;