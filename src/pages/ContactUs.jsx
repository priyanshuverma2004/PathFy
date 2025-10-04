import React from "react";
import CustomerForm from "../components/CustomerForm";
import ContactCard from "../components/ContactCard";

const ContactUs = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      {/* Header */}
      <div className="relative">
        <div
          className="relative bg-cover bg-center h-80 md:h-96"
          style={{ backgroundImage: "url('/assets/contacthead.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mr-2">
                Contact
              </span>
              with us
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-3">
              What Are You{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
                Waiting For?
              </span>
            </h1>
            <p className="text-white/90 mt-2 md:mt-4 text-base md:text-lg">
              Send us a message now and start your journey with TravelX!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-4 md:px-0  relative z-10">
        <ContactCard />
      </div>

      {/* Customer Text + Form */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-0  pb-2">
        {/* Left Text */}
        <div className="bg-slate-900/70 shadow-2xl rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 mb-6">
            Let’s Plan Your Journey
          </h3>
          <p className="text-white/90 text-base md:text-lg mb-5">
            Have a destination in mind or just exploring options? Let us know
            your details, and we’ll help plan your trip with the best deals and
            experiences tailored just for you.
          </p>
          <p className="text-white/90 text-base md:text-lg">
            Connect with us today and unlock the best travel packages designed
            just for you — because every journey deserves the perfect beginning.
          </p>
        </div>

        {/* Right Form */}
        <div className="relative z-10">
          <CustomerForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
