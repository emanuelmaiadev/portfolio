'use client'

import React from 'react';
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";

const ContactForm = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div className="w-full">
      <form className="w-full">
        {/* === Name Fields === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <input
            type="text"
            name="firstName"
            required
            placeholder={t.contact.firstNamePlaceholder}
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="text"
            name="lastName"
            required
            placeholder={t.contact.lastNamePlaceholder}
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
        </div>

        {/* === Contact Fields === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          <input
            type="email"
            name="email"
            required
            placeholder={t.contact.emailPlaceholder}
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
          <input
            type="tel"
            name="phone"
            required
            placeholder={t.contact.phonePlaceholder}
            className="w-full bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          />
        </div>

        {/* === Message === */}
        <textarea
          name="message"
          rows={10}
          required
          placeholder={t.contact.messagePlaceholder}
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>

        {/* === Submit Button === */}
        <div className="mt-3">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            {t.contact.sendButton}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;