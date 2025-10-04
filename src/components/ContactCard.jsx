import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-slate-950 min-h-screen py-16 px-6">
      <div className="bg-slate-900/60 shadow-2xl rounded-2xl p-8 max-w-4xl mx-auto space-y-6 border border-slate-800">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 text-center">
          Get in Touch ✨
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-gray-300">
          {/* Left Side: Email & Instagram */}
          <div className="flex flex-col space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-full text-white">
                📧
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:info.pathfy.com"
                  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:underline"
                >
                  info.pathfy.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-full text-white">
                📷
              </div>
              <div>
                <p className="text-sm text-gray-400">Instagram</p>
                <a
                  href="https://www.instagram.com/pathfy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:underline"
                >
                  @pathfy.in
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Mobile Numbers */}
          <div className="flex flex-col space-y-4">
            {/* Mobile 1 */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-full text-white">
                📱
              </div>
              <div>
                <p className="text-sm text-gray-400">Mobile 1</p>
                <a
                  href="https://wa.me/918237996407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:underline"
                >
                  +91 82379 96407
                </a>
              </div>
            </div>

            {/* Mobile 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-full text-white">
                📞
              </div>
              <div>
                <p className="text-sm text-gray-400">Mobile 2</p>
                <a
                  href="https://wa.me/919131095875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:underline"
                >
                  +91 91310 95875
                </a>
              </div>
            </div>

            {/* Mobile 3 */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-orange-500 to-pink-600 p-3 rounded-full text-white">
                📲
              </div>
              <div>
                <p className="text-sm text-gray-400">Mobile 3</p>
                <a
                  href="https://wa.me/91940783056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 hover:underline"
                >
                  +91 94078 3056
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
