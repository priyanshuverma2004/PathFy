import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CarouselCard = ({ pkg }) => {
  // Fallback slug if not provided in data
  const safeSlug =
    pkg.slug || pkg.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

  return (
    <Link to={`/packages/${safeSlug}`}>
      <motion.div
        whileHover={{ scale: 1.08, y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="min-w-[250px] md:min-w-[195px] bg-white rounded-2xl shadow-2xl overflow-hidden relative cursor-pointer
                   w-1/2 sm:w-1/3 md:w-auto"
      >
        {/* Image as background */}
        <div className="relative w-full h-72 md:h-80">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />

          {/* Overlay for text */}
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-5 space-y-2 rounded-2xl">
            <h3 className="text-white text-lg md:text-xl font-bold">
              {pkg.name}
            </h3>
            <p className="text-gray-200 text-sm md:text-base">{pkg.duration}</p>
            <div className="flex items-center justify-between mt-3">
              <p className="text-indigo-400 font-semibold text-base md:text-lg">
                ₹{pkg.price}
              </p>
              <span className="px-4 py-2 bg-indigo-600 text-white text-sm md:text-base rounded-lg shadow hover:bg-indigo-700 transition hover:scale-110">
                Explore
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarouselCard;
