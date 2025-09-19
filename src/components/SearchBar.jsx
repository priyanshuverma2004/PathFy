import React, { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
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
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:scale-105 duration-300">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="font-bold text-lg text-gray-800">{pkg.name}</h3>
          <p className="text-sm text-gray-600">{pkg.duration}</p>
          <p className="text-sm text-gray-600">📍 {pkg.location}</p>
          <p className="font-semibold text-indigo-600">Rs {pkg.price}</p>
        </div>
      </div>
    </Link>
  );
};

const PackageSearchPage = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
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
    <div className="bg-white px-4">
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Destination */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter city or package"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Check-out Date */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <Calendar className="w-4 h-4" /> Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <Users className="w-4 h-4" /> Guests
            </label>
            <input
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="mt-4 text-right">
          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition flex items-center justify-center"
          >
            <Search className="w-4 h-4 mr-2" /> Search
          </button>
        </div>
      </div>

      {/* Results Section */}
      {searched && searchResults.length > 0 && (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          {searchResults.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} />
          ))}
        </div>
      )}

      {/* No Results */}
      {searched && searchResults.length === 0 && (
        <div className="max-w-6xl mx-auto text-center py-10 text-gray-600">
          No packages found for "{destination}"
        </div>
      )}
    </div>
  );
};

export default PackageSearchPage;
