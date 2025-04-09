import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    title: "WhatsApp",
    content: contactData.whatsapp,
    href: `https://wa.me/55${contactData.whatsapp}`,
    icon: <FaWhatsapp />,
  },
  {
    title: "E-mail",
    content: contactData.email,
    href: `mailto:${contactData.email}`,
    icon: <FaEnvelope />,
  },
  {
    title: "Address",
    content: contactData.address,
    href: null,
    icon: <FaMap />,
  },
  {
    title: "LinkedIn",
    content: "linkedin.com/in/emanuelmaiadev",
    href: "https://www.linkedin.com/in/emanuelmaiadev",
    icon: <FaLinkedin />,
  },
  {
    title: "GitHub",
    content: "github.com/emanuelmaiadev",
    href: "https://github.com/emanuelmaiadev",
    icon: <FaGithub />,
  },
];

const ContactInfo = () => {
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
