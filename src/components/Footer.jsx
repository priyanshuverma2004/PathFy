import React from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 pt-12 pb-6">
      {/* Logo */}
      <div className="h-20 w-20 relative -mt-12 mx-auto">
        <img src="/assets/Logo.jpg" alt="Logo" className="rounded-full" />
      </div>

      {/* Footer Sections */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {/* International Trips */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            International Trips
          </h3>
          <ul className="space-y-2">
            {["Europe", "Bali", "Vietnam", "Thailand", "Singapore", "Bhutan", "Maldives", "Dubai", "Malaysia"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* India Trips */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">India Trips</h3>
          <ul className="space-y-2">
            {["Ladakh", "Spiti Valley", "Meghalaya", "Kashmir", "Himachal Pradesh", "Andaman", "Kerala", "Rajasthan"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* WanderOn Special */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">WanderOn Special</h3>
          <ul className="space-y-2">
            {["Community Trips", "Honeymoon Trips", "Corporate Trips", "Weekend Getaways", "School Trips"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/aboutus" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/packages" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 transition">
                Packages
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Contact Info */}
      <div className="mt-8 pt-8 text-slate-200 text-sm px-6 md:px-12 flex flex-col md:flex-row items-center gap-4 justify-center">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" /> info.pathfy@gmail.com
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 gap-1">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 8237994607</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9407830506</div>
          <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9131095875</div>
        </div>
        <div className="mt-1">www.pathfy.in</div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center mt-6 space-x-4">
        <a href="https://www.instagram.com/pathfy.in" target="_blank" rel="noopener noreferrer">
          <img className="w-10 h-10" src="/assets/social/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noopener noreferrer">
          <img className="w-10 h-10" src="/assets/social/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://youtube.com/@pathyfy?si=DiaQGkaTyRM-UX0F" target="_blank" rel="noopener noreferrer">
          <img className="w-10 h-10" src="/assets/social/youtube.svg" alt="YouTube" />
        </a>
      </div>

      {/* Footer Image */}
      <div className="my-4 w-full">
        <img src="/assets/footer-desktop.avif" alt="Footer" className="w-full h-auto rounded-2xl" />
      </div>

      {/* Terms & Privacy */}
      <div className="border-t border-slate-700 pt-3 flex flex-col md:flex-row items-center justify-center md:justify-between text-slate-400 text-sm px-6 md:px-12 gap-2">
        <p>© {new Date().getFullYear()} Pathfy. All rights reserved. | Pathfy.in</p>
        <div className="flex flex-col md:flex-row md:space-x-6 gap-1">
          <Link to="/terms-and-conditions" className="hover:text-orange-500 transition">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="hover:text-orange-500 transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
