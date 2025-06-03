"use client";

import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

// Props type definition
type Props = {
  service: {
    id: number;
    title: string;
    description: string;
    icon: string;
  };
};

const ExperienceCard = ({ service }: Props) => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  // Função para obter o título traduzido
  const getTranslatedTitle = (id: number) => {
    switch (id) {
      case 1:
        return t.experience.currentJobTitle;
      case 2:
        return t.experience.schoolTitle;
      case 3:
        return t.experience.degreeTitle;
      case 5:
        return t.experience.analyticalTitle;
      case 6:
        return t.experience.creativeTitle;
      case 7:
        return t.experience.adaptabilityTitle;
      case 8:
        return t.experience.detailOrientedTitle;
      default:
        return service.title;
    }
  };

  // Função para obter a descrição traduzida
  const getTranslatedDescription = (id: number) => {
    switch (id) {
      case 1:
        return t.experience.currentJobDesc;
      case 2:
        return t.experience.schoolDesc;
      case 3:
        return t.experience.degreeDesc;
      case 5:
        return t.experience.analyticalDesc;
      case 6:
        return t.experience.creativeDesc;
      case 7:
        return t.experience.adaptabilityDesc;
      case 8:
        return t.experience.detailOrientedDesc;
      default:
        return service.description;
    }
  };

  return (
    <Tilt className="shadow-2xl p-6 rounded-lg bg-[#814ced] h-full">
      <Image
        src={service.icon}
        alt={getTranslatedTitle(service.id)}
        width={50}
        height={50}
      />
      <h1 className="mt-4 text-lg font-bold text-gray-100">
        {getTranslatedTitle(service.id)}
      </h1>
      <p className="mt-3 text-sm text-white text-opacity-80">
        {getTranslatedDescription(service.id)}
      </p>
    </Tilt>
  );
};

export default ExperienceCard;
