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
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden relative cursor-pointer 
                   h-[380px] flex flex-col"
      >
        {/* Image Section */}
        <div className="relative w-full h-[220px]">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col justify-between p-5 flex-grow">
          <div>
            <h3 className="text-gray-900 text-lg md:text-xl font-bold truncate">
              {pkg.name}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">{pkg.duration}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-indigo-600 font-semibold text-base md:text-lg">
              ₹{pkg.price}
            </p>
            <span className="px-4 py-2 bg-indigo-600 text-white text-sm md:text-base rounded-lg shadow hover:bg-indigo-700 transition hover:scale-110">
              Explore
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarouselCard;
