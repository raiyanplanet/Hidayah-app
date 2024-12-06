// components/Navber.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faTimes } from "@fortawesome/free-solid-svg-icons";
import icon from "../assets/png/koran.png";

interface NavberProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const Navber: React.FC<NavberProps> = ({ darkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`w-full py-6 shadow-md flex items-center justify-between px-6 max-sm:px-6 max-sm:py-3 ${
        darkMode ? "bg-[#1E2A47]" : "bg-[#FDE7BB]"
      } sticky top-0 z-50`} // Sticky position added
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={icon} // Replace with your app logo path
          alt="App Logo"
          className="w-12 h-auto max-sm:w-10 "
        />
        <h1
          className={`text-3xl font-bold max-sm:text-xl ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          }`}
        >
          Hidayah App
        </h1>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center gap-4">
        <FontAwesomeIcon
          icon={faMoon}
          className={`text-xl cursor-pointer ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          }`}
        />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider round bg-slate-600"></span>
        </label>
        <FontAwesomeIcon
          icon={faSun}
          className={`text-xl cursor-pointer ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          }`}
        />

        <button
          className={`text-2xl  focus:outline-none ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          } hover:underline`}
          onClick={toggleMobileMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:flex ${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 right-0 left-0 bg-[#1E2A47] lg:static lg:bg-transparent lg:flex-row lg:gap-8 lg:items-center lg:w-auto lg:px-6 py-4 px-6`}
      >
        {/* Close Icon */}
        <div className="lg:hidden flex justify-end w-full">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-3xl text-[#FDE7BB] cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>

        <nav className="flex flex-col gap-4 lg:flex-row lg:gap-8">
          <a
            href="#"
            className={`text-xl font-semibold ${
              darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
            } hover:underline`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-xl font-semibold ${
              darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
            } hover:underline`}
          >
            About
          </a>
        </nav>

        {/* Download App Button */}
        <div className="lg:hidden mt-4">
          <a
            href="https://expo.dev/artifacts/eas/g6HXQ5XXKwFYopYbjneG8B.apk"
            className={`bg-[#FDE7BB] text-[#1E2A47] px-6 py-2 rounded-full font-semibold text-lg hover:bg-[#F1D67D] transition duration-300`}
          >
            Download App
          </a>
        </div>
      </div>

      {/* Dark Mode Switcher with Moon and Sun Icons for Desktop */}
      <div className="hidden lg:flex items-center gap-4">
        <FontAwesomeIcon
          icon={faMoon}
          className={`text-xl cursor-pointer ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          }`}
        />
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <FontAwesomeIcon
          icon={faSun}
          className={`text-xl cursor-pointer ${
            darkMode ? "text-[#FDE7BB]" : "text-[#1E2A47]"
          }`}
        />
      </div>
    </header>
  );
};

export default Navber;
