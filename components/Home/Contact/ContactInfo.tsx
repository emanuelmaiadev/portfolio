import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Phone</h1>
          <h2 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.phone}
          </h2>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-green-500 to-green-900 flex items-center justify-center flex-col">
          <FaWhatsapp className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">WhatsApp</h1>
          <a
            href={`https://wa.me/55${contactData.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base sm:text-lg text-white text-opacity-70 hover:underline"
          >
            Send me a message
          </a>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">E-Mail</h1>
          <h2 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.email}
          </h2>
        </div>
      </div>
      <div className="flex items-center space-x-8 mt-8">
        <div className="w-10 h-10 md:w-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col">
          <FaMap className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg sm:text-xl text-white font-bold">Address</h1>
          <h2 className="text-base sm:text-lg text-white text-opacity-70">
            {contactData.address}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
