'use client'
import Image from "next/image"
import { useState } from "react";

const Header = (): JSX.Element => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`py-4 z-50 ${isMenuOpen ? 'bg-blue-200 ' : 'bg-blue-100 '}`}>
      <div className="container mx-auto flex flex-row items-center justify-around">
        <Image src="/logo.svg" alt="Linker" width={214} height={67} />
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className={`space-y-1.5 ${isMenuOpen ? "transform rotate-45" : ""}`}>
            <div
              className={`h-0.5 w-6 bg-current transition duration-500 ease-in-out ${isMenuOpen ? "translate-y-2.5" : ""}`}
            />
            <div
              className={`h-0.5 w-6 bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <div
              className={`h-0.5 w-6 bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-translate-y-1.5 rotate-90" : ""}`}
            />
          </div>
        </button>
        <ul className={`absolute md:relative bg-blue-100 w-full md:w-auto md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-xl font-bold ${isMenuOpen ? 'bg-blue-200 top-24 py-10 text-center left-0' : 'hidden'}`}>          <li>
          <a className="text-white hover:text-blue-200" href="#" onClick={() => { scrollToSection('about') }}>
            À PROPOS
          </a>
        </li>
          <li>
            <a className="text-white hover:text-blue-200" href="#" onClick={() => { scrollToSection('features') }}>
              FONCTIONNALITÉS
            </a>
          </li>
          <li>
            <a className="text-white hover:text-blue-200" href="#" onClick={() => { scrollToSection('team') }}>
              L'ÉQUIPE
            </a>
          </li>
          <li>
            <a className="text-white hover:text-blue-200" href="#" onClick={() => { scrollToSection('contact') }}>
              CONTACT
            </a>
          </li>
          <li>
            <a className="text-white hover:text-blue-200" href="#" onClick={() => { scrollToSection('timeline') }}>
              TIMELINE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header