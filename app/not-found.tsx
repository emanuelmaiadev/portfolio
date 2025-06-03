'use client';

import React from 'react';
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

export default function NotFound() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="min-h-screen bg-[#0f0715] flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl">{t.navbar.home}</p>
        <p className="text-xl">{language === 'pt' ? 'Página não encontrada' : 'Page not found'}</p>
      </div>
    </div>
  );
}