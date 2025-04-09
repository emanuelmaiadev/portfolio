import Image from 'next/image'
import React from 'react'

const Footer = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-[#0f0715] text-white text-center flex flex-col items-center">

      {/* Navigation */}
      <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium mb-4">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </nav>

      {/* Copyright */}
      <p className="text-white text-opacity-50 text-xs mt-2">
        © {currentYear} All Rights Reserved by Emanuel Maia
      </p>
    </footer>
  );
};

export default Footer;
