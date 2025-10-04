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
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden relative cursor-pointer h-[380px] flex flex-col
                   border border-slate-800/50 hover:border-slate-700/50 hover:shadow-slate-800/50 transition"
      >
        {/* Full image background */}
        <div className="absolute inset-0">
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Optional black overlay for contrast */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Info Section */}
        <div className="relative flex flex-col justify-between p-5 flex-grow z-10">
          <div>
            <h3 className="text-white text-lg md:text-xl font-bold truncate">
              {pkg.name}
            </h3>
            <p className="text-orange-400 text-sm md:text-base">{pkg.duration}</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <p className="text-orange-500 font-semibold text-base md:text-lg">
              ₹{pkg.price}
            </p>
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-sm md:text-base rounded-lg shadow hover:scale-110 transition">
              Explore
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default CarouselCard;
