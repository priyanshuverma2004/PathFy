import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CarouselCard = ({ pkg }) => {
  const safeSlug =
    pkg.slug ||
    pkg.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <Link to={`/packages/${safeSlug}`}>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden relative cursor-pointer h-[380px] flex flex-col
                   border border-gray-200 hover:border-gray-300 hover:shadow-xl transition"
      >
        {/* Full image background */}
        <div className="absolute inset-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Optional subtle overlay for contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Info Section */}
        <div className="relative flex flex-col justify-between p-5 flex-grow z-10">
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold truncate">
              {pkg.name}
            </h3>
            <p className="text-blue-500 text-sm md:text-base">{pkg.duration}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-indigo-600 font-semibold text-base md:text-lg">
              ₹{pkg.price}
            </p>
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm md:text-base rounded-lg shadow hover:scale-105 transition">
              Explore
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarouselCard;
