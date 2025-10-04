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

  const allPackages = [
    ...indiaPackages,
    ...internationalPackages,
    ...adventurePackages,
    ...romanticPackages,
  ];

  const categories = ["all", "india", "international", "adventure", "romantic"];

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

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (pkg) =>
          pkg.name?.toLowerCase().includes(searchTerm.toLowerCase().trim()) &&
          pkg.slug
      );
    } else {
      filtered = filtered.filter((pkg) => pkg.slug);
    }

    return filtered;
  };

  const packages = getPackages();

  return (
    <div className="pt-24 px-6 mb-10 md:px-12 min-h-screen bg-slate-950 text-gray-200">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
        Explore Our Packages ✈️
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search packages..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80 bg-slate-800/50 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full text-sm md:text-base font-medium shadow-md transition ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                : "bg-slate-900/50 text-gray-200 hover:bg-slate-800/70"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Packages Grid */}
      {packages.length > 0 ? (
        packages.length === 1 ? (
          <div className="flex justify-center">
            <div className="w-[280px]">
              <CarouselCard pkg={packages[0]} />
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {packages.map((pkg) => (
              <div key={pkg.slug} className="w-[280px]">
                <CarouselCard pkg={pkg} />
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-gray-400 col-span-full">
          No packages found 😔
        </p>
      )}
    </div>
  );
};

export default PackagePage;
