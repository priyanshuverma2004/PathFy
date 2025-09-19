import React from "react";
import CustomerForm from "../components/CustomerForm";
import ContactCard from "../components/ContactCard";

const ContactUs = () => {
  return (
    <div>
      {/* Header */}
      <div className="relative">
        {/* Top Banner Image */}
        <div
          className="relative bg-cover bg-center h-72"
          style={{ backgroundImage: "url('/assets/contacthead.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col px-4 text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mt-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mr-2">
                Contact
              </span>
              with us
            </h2>
            <h1 className="font-bold text-3xl md:text-5xl text-white mt-3">
              What Are You{" "}
              <span className="mx-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
                Waiting For?
              </span>
            </h1>
            <h2 className="text-white text-base md:text-lg py-2">
              Send us a message now and start your journey with TravelX!
            </h2>
          </div>
        </div>
      </div>

      {/* Contact Cards */}
      <ContactCard />

      {/* Customer Text + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 mb-10 px-4 md:px-8">
        {/* Left Text */}
        <div className="bg-white shadow-2xl rounded-lg p-6 md:p-10">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 mb-6">
            Let’s Plan Your Journey
          </h3>
          <p className="text-base md:text-lg text-blue-950 mb-5">
            Have a destination in mind or just exploring options? Let us know
            your details, and we’ll help plan your trip with the best deals and
            experiences tailored just for you.
          </p>
          <p className="text-base md:text-lg text-blue-950">
            Connect with us today and unlock the best travel packages designed
            just for you — because every journey deserves the perfect beginning.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full">
          <CustomerForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
