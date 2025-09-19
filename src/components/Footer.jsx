import React from "react";
import {Mail, Phone} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      {/*Logo*/}
        <div className="h-20 w-20 relative -mt-12 ">
          <img src="/assets/Logo.jpg" alt="Not Found" />
        </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        {/* International Trips */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            International Trips
          </h3>
          <ul className="space-y-2">
            {[
              "Europe",
              "Bali",
              "Vietnam",
              "Thailand",
              "Singapore",
              "Bhutan",
              "Maldives",
              "Dubai",
              "Malaysia",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
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
            {[
              "Ladakh",
              "Spiti Valley",
              "Meghalaya",
              "Kashmir",
              "Himachal Pradesh",
              "Andaman",
              "Kerala",
              "Rajasthan",
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* WanderOn Special */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            WanderOn Special
          </h3>
          <ul className="space-y-2">
            {[
              "Community Trips",
              "Honeymoon Trips",
              "Corporate Trips",
              "Weekend Getaways",
              "School Trips"
            ].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="/aboutus" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                Our Story
              </a>
            </li>
            <li>
              <a href="/contactus" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/tours" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                Tours
              </a>
            </li>
            <li>
              <a href="/packages" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 transition">
                Packages
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">

        <div item-center ><h2 className="text-5xl font-semibold text-white ">Pathfy</h2> </div>
        <div className="flex items-center justify-center">
          <div className="mx-10 mt-5 flex text-white text-sm"><Mail className="w-4 h-4 mx-1 mt-1"/> info.pathfy@gmail.com</div>
          <div className="mx-10 mt-5 text-white text-sm">
          <div className="flex my-1"><Phone className="h-4 w-4 mx-1 my-1"/>+91 8237994607</div> 
          <div className="flex my-1"><Phone className="h-4 w-4 mx-1 my-1"/>+91 9407830506</div> 
          <div className="flex"><Phone className="h-4 w-4 mx-1 my-1"/>+91 9131095875</div>
       </div>
          <div className="mx-10 mt-5 text-white text-sm">www.pathfy.in</div>
        </div>

        {/*Social card*/}
            <div className="flex  justify-center my-6 ">
        <div className="flex items-center">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/pathfy.in?igsh=MXB2bzN0MDljYW9lMA=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="mx-2" src="/assets/social/instagram.svg" alt="Instagram" />
  </a>

  {/* Facebook */}
  <a
    href="fb://page/YourPageID"   // 👉 deep link for app
    onClick={(e) => {
      // fallback if app is not installed
      window.location.href = "https://www.facebook.com/YourPageName";
    }}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="mx-2" src="/assets/social/facebook.svg" alt="Facebook" />
  </a>

  {/* YouTube */}
  <a
    href="https://youtube.com/@pathyfy?si=DiaQGkaTyRM-UX0F"   // 👉 deep link for app
    
    target="_blank"
    rel="noopener noreferrer"
  >
    <img className="mx-2" src="/assets/social/youtube.svg" alt="YouTube" />
  </a>
</div>

            </div>
        {/* Footer image*/}
        <div className="mb-1">
          <img src="/assets/footer-desktop.avif" alt="Oops" />
        </div>
      <div className="border-t border-gray-300 pt-3 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
  {/* Left side */}
  <p>
    © {new Date().getFullYear()} Pathfy. All rights reserved. | Pathfy.in 
  </p>

  {/* Right side */}
  <div className="flex space-x-6 mt-2 md:mt-0 mr-3">
    <a
      href="/terms-and-conditions"
      className="hover:text-indigo-600 transition"
    >
      Terms & Conditions
    </a>
    <a
      href="/privacy-policy"
      className="hover:text-indigo-600 transition"
    >
      Privacy Policy
    </a>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
