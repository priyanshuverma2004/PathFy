import React, { useState } from "react";
import { Search, MapPin, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import {
  indiaPackages,
  internationalPackages,
  groupPackages,
  romanticPackages,
  adventurePackages,
} from "../datahome/packageData";

// Package Card Component
const PackageCard = ({ pkg }) => {
  return (
    <Link to={`/packages/${pkg.slug}`}>
      <div className="bg-slate-900/70 rounded-xl shadow-lg overflow-hidden hover:shadow-orange-500/30 transition transform hover:scale-105 duration-300">
        <div className="relative">
          <img
            src={pkg.image}
            alt={pkg.name}
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="p-4 space-y-2 text-white">
          <h3 className="font-bold text-lg">{pkg.name}</h3>
          <p className="text-sm text-gray-300">{pkg.duration}</p>
          <p className="text-sm text-gray-300">📍 {pkg.location}</p>
          <p className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
            Rs {pkg.price}
          </p>
        </div>
      </div>
    </Link>
  );
};

const PackageSearchPage = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = () => {
    const allPackages = [
      ...indiaPackages,
      ...internationalPackages,
      ...groupPackages,
      ...romanticPackages,
      ...adventurePackages,
    ];

    const searchValue = destination.trim().toLowerCase();

    const filtered = allPackages.filter((pkg) => {
      const nameMatch = pkg?.name?.toLowerCase().includes(searchValue);
      const locationMatch = pkg?.location?.toLowerCase().includes(searchValue);
      const categoryMatch = pkg?.category
        ? pkg.category.toLowerCase().includes(searchValue)
        : false;

      return nameMatch || locationMatch || categoryMatch;
    });

    setSearchResults(filtered);
    setSearched(true);
  };

  return (
    <div className="bg-slate-950 text-white px-4 pt-12">
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-2xl border border-orange-500/30 p-8 mt-12 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-400" /> Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter city or package"
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-slate-500"
            />
          </div>

          {/* Check-in */}
          <div className="space-y-2">
            <label className="text-sm text-gray-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-pink-400" /> Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-6 text-center">
          <button
            onClick={handleSearch}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center mx-auto gap-2"
          >
            <Search className="w-5 h-5" /> Search Packages
          </button>
        </div>
      </div>

      {/* Only show results if searched */}
      {searched && (
        <>
          {searchResults.length > 0 ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
              {searchResults.map((pkg, index) => (
                <PackageCard key={index} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="max-w-6xl mx-auto text-center py-10 text-gray-400">
              No packages found for "{destination}"
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PackageSearchPage;
