import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
    { link: "Services", path: "services" },
    { link: "Testimonial", path: "testimonial" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="flex justify-between items-center gap-4 bg-black lg:px-10 px-4 py-6 sticky top-0 z-30 border-[8px] border-[#a39446]">
      <div id="logo">
        <h1 className="text-white font-bold text-5xl">
          Barber <span className="italic text-themeyellow">Shop</span>
        </h1>
      </div>

      {/* Menu for large screens */}
      <ul className="hidden lg:flex justify-center items-center gap-6 ">
        {navItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-themeyellow hover:text-black"
            to={path}
            spy={true}
            offset={-100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* Mobile menu */}
      <div
        className="flex lg:hidden justify-center items-center"
        onClick={toggleMenu}
      >
        <div>
          {isMenuOpen ? (
            <FaXmark
              className="text-white text-2xl cursor-pointer"
              onClick={closeMenu}
            />
          ) : (
            <FaBars className="text-white text-2xl cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile menu links */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-black text-white text-center">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              className="block py-3 border-b border-gray-700 hover:bg-gray-800"
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
