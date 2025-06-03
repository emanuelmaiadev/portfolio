import React from 'react';
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const Footer = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <footer className="py-10 px-4 bg-[#0f0715] text-white text-center flex flex-col items-center">
      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-4">
        <a href="#home" className="hover:text-purple-400 transition">{t.footer.home}</a>
        <a href="#experience" className="hover:text-purple-400 transition">{t.footer.experience}</a>
        <a href="#skills" className="hover:text-purple-400 transition">{t.footer.skills}</a>
        <a href="#contact" className="hover:text-purple-400 transition">{t.footer.contact}</a>
      </nav>

      {/* Copyright */}
      <p className="text-white text-opacity-50 text-xs mt-2">
        {t.footer.copyright}
      </p>
    </footer>
  );
};

export default Footer;