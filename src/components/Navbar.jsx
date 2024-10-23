import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger menu

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 p-4 flex items-center justify-between">
      {/* Left: Branding */}
      <div className="text-white text-2xl font-normal nunito cursor-pointer">
        <a href="#hero" className="hover:text-neutral-400 transition duration-150">
          Mukti Gupta
        </a>
      </div>

      {/* Right: Links to Sections */}
      <div className="hidden md:flex items-center space-x-6">
        <a
          href="#about"
          className="text-white hover:text-neutral-400 transition duration-150 cursor-pointer"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-white hover:text-neutral-400 transition duration-150 cursor-pointer"
        >
          Projects
        </a>
        
        <a
          href="#contact"
          className="text-white hover:text-neutral-400 transition duration-150 cursor-pointer"
        >
          Contact
        </a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleNav}
          className="text-white focus:outline-none cursor-pointer"
        >
          {navOpen ? (
            <FaTimes className="w-4 h-4" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          navOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-black bg-opacity-95 md:hidden`}
      >
        <a
          href="#about"
          onClick={toggleNav}
          className="block text-center py-4 text-white hover:bg-neutral-800 transition duration-150 cursor-pointer"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={toggleNav}
          className="block text-center py-4 text-white hover:bg-neutral-800 transition duration-150 cursor-pointer"
        >
          Projects
        </a>
        <a
          href="#experience"
          onClick={toggleNav}
          className="block text-center py-4 text-white hover:bg-neutral-800 transition duration-150 cursor-pointer"
        >
          Experience
        </a>
        <a
          href="#contact"
          onClick={toggleNav}
          className="block text-center py-4 text-white hover:bg-neutral-800 transition duration-150 cursor-pointer"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
