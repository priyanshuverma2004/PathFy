import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="bg-gray-100 shadow-xl rounded-2xl p-8 max-w-4xl mx-auto space-y-6 border border-gray-300">
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Get in Touch ✨
        </h2>

        <div className="flex flex-col md:flex-row justify-between gap-8 text-gray-800">
          {/* Left Side: Email & Instagram */}
          <div className="flex flex-col space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">📧</div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:info.pathfy.com"
                  className="text-lg font-semibold text-blue-700 hover:underline"
                >
                  info.pathfy.com
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">📷</div>
              <div>
                <p className="text-sm text-gray-500">Instagram</p>
                <a
                  href="https://www.instagram.com/pathfy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-700 hover:underline"
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
              <div className="bg-blue-600 p-3 rounded-full text-white">📱</div>
              <div>
                <p className="text-sm text-gray-500">Mobile 1</p>
                <a
                  href="https://wa.me/918237996407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-700 hover:underline"
                >
                  +91 82379 96407
                </a>
              </div>
            </div>

            {/* Mobile 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">📞</div>
              <div>
                <p className="text-sm text-gray-500">Mobile 2</p>
                <a
                  href="https://wa.me/919131095875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-700 hover:underline"
                >
                  +91 91310 95875
                </a>
              </div>
            </div>

            {/* Mobile 3 */}
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-full text-white">📲</div>
              <div>
                <p className="text-sm text-gray-500">Mobile 3</p>
                <a
                  href="https://wa.me/91940783056"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-blue-700 hover:underline"
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
