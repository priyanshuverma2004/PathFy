import React, { useState } from "react";
import { motion } from "framer-motion";
import CarouselCard from "../components/CarouseCard";
import {
  indiaPackages,
  internationalPackages,
  adventurePackages,
  romanticPackages,
} from "../datahome/packageData";

const PackagePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Combine all packages
  const allPackages = [
    ...indiaPackages,
    ...internationalPackages,
    ...adventurePackages,
    ...romanticPackages,
  ];

  const categories = ["all", "india", "international", "adventure", "romantic"];

  // Filter packages
  const getPackages = () => {
    let filtered = [];

    switch (selectedCategory) {
      case "all":
        filtered = allPackages;
        break;
      case "india":
        filtered = indiaPackages;
        break;
      case "international":
        filtered = internationalPackages;
        break;
      case "adventure":
        filtered = adventurePackages;
        break;
      case "romantic":
        filtered = romanticPackages;
        break;
      default:
        filtered = allPackages;
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        pkg =>
          pkg.name?.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
          pkg.slug // Only packages with valid slug
      );
    } else {
      filtered = filtered.filter(pkg => pkg.slug); // also filter non-slug packages
    }

    return filtered;
  };

  return (
    <div className="py-10 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-600 mb-12">
        Explore Our Packages ✈️
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex justify-center space-x-4 mb-10 flex-wrap">
        {categories.map(cat => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium shadow-md transition ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-800 hover:bg-indigo-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Packages Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getPackages().length > 0 ? (
          getPackages().map(pkg => <CarouselCard key={pkg.slug} pkg={pkg} />)
        ) : (
          <p className="text-center text-gray-600 col-span-full">No packages found 😔</p>
        )}
      </div>
    </div>
  );
};

export default PackagePage;
