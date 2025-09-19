import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) return;
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Background on scroll
  const navBg = isHome
    ? isScrolled
      ? "bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-md"
      : "bg-transparent"
    : "bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-md";

  const textColor = "text-white";

  const hoverColor = isHome
    ? "hover:text-cyan-400"
    : "hover:text-cyan-600";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${navBg}`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className={`text-2xl font-bold transition-colors duration-300 transform hover:scale-115 ${textColor}`}
        >
          Pathfy
        </Link>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/"
            className={`transition duration-300 transform hover:scale-115 font-bold ${textColor} ${hoverColor}`}
          >
            Home
          </Link>
          <Link
            to="/packages"
            className={`transition duration-300 transform hover:scale-115 font-bold ${textColor} ${hoverColor}`}
          >
            Packages
          </Link>
          <Link
            to="/gallery"
            className={`transition duration-300 transform hover:scale-115 font-bold ${textColor} ${hoverColor}`}
          >
            Gallery
          </Link>
          <Link
            to="/aboutus"
            className={`transition duration-300 transform hover:scale-115 font-bold ${textColor} ${hoverColor}`}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className={`transition duration-300 transform hover:scale-115 font-bold ${textColor} ${hoverColor}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] shadow-lg px-6 py-4 space-y-4">
          <Link
            to="/"
            className={`block font-bold ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/packages"
            className={`block font-bold ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen(false)}
          >
            Packages
          </Link>
          <Link
            to="/gallery"
            className={`block font-bold ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/aboutus"
            className={`block font-bold ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/contactus"
            className={`block font-bold ${textColor} ${hoverColor}`}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
