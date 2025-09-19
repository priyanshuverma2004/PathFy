import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappFloat = () => {
  const phoneNumber = "918237996407"; // replace with your WhatsApp number (without +)
  const message = "Hi, I want to know more about your packages!";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="fixed bottom-12 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={35} />
    </a>
  );
};

export default WhatsappFloat;
