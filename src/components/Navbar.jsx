import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (isHome && window.scrollY < 10) setIsScrolled(false);
      else setIsScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] md:w-[85%] 
      transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-slate-900/60 border border-orange-500/30 shadow-lg shadow-orange-500/20 backdrop-blur-xl"
          : "bg-slate-900/40 border border-orange-500/20 backdrop-blur-lg"
      } rounded-full`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Pathfy
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {["Home", "Packages", "Gallery", "About Us", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                className="text-white font-semibold hover:text-orange-400 transition-all duration-300 hover:scale-105"
              >
                {item}
              </Link>
            )
          )}
        </div>

        {/* Hamburger for Mobile */}
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
        <div className="md:hidden bg-slate-900/90 backdrop-blur-xl border-t border-orange-500/20 px-6 py-4 rounded-b-3xl space-y-4">
          {["Home", "Packages", "Gallery", "About Us", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Home"
                    ? "/"
                    : `/${item.toLowerCase().replace(/\s+/g, "")}`
                }
                className="block text-white font-semibold hover:text-orange-400 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
