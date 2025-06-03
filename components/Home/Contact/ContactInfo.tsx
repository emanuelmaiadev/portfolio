import React from 'react';
import { useLanguage } from "@/components/LanguageContext/LanguageContext";
import { getTranslations } from "@/Data/translations";
import { FaWhatsapp, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ContactInfo = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);

  const contacts = [
    {
      title: t.contact.whatsappLabel,
      content: "+55 (85) 9XXXX-XXXX",
      href: "https://wa.me/5585986",
      icon: <FaWhatsapp />
    },
    {
      title: t.contact.emailLabel,
      content: "emanuel@example.com",
      href: "mailto:emanuel@example.com",
      icon: <MdEmail />
    },
    {
      title: t.contact.addressLabel,
      content: "Fortaleza, CE - Brazil",
      icon: <FaMapMarkerAlt />
    },
    {
      title: t.contact.linkedinLabel,
      content: "linkedin.com/in/emanuel",
      href: "https://linkedin.com/in/emanuel",
      icon: <FaLinkedin />
    },
    {
      title: t.contact.githubLabel,
      content: "github.com/emanuel",
      href: "https://github.com/emanuel",
      icon: <FaGithub />
    }
  ];

  return (
    <div className="flex flex-col space-y-6">
      {contacts.map(({ title, content, href, icon }, idx) => (
        <div key={idx} className="flex items-start space-x-4">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:brightness-110"
            >
              {React.cloneElement(icon, { className: "w-5 h-5 text-white" })}
            </a>
          ) : (
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 flex items-center justify-center">
              {React.cloneElement(icon, { className: "w-5 h-5 text-white" })}
            </div>
          )}
          <div>
            <p className="text-sm text-white/70">{title}</p>
            <p className="text-base text-white break-all">{content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;