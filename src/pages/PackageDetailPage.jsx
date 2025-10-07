import React from "react";
import { useParams, Link } from "react-router-dom";
import { packageDetails } from "../datahome/packageDataDetails";
import { indiaPackages, internationalPackages, adventurePackages, romanticPackages } from "../datahome/packageData";

const allPackages = [...indiaPackages, ...internationalPackages, ...adventurePackages, ...romanticPackages];

const PackageDetailPage = () => {
  const { slug } = useParams();
  const details = packageDetails[slug];
  const pkg = allPackages.find(p => p.slug === slug);

  if (!pkg || !details) 
    return <p className="text-center mt-10 text-gray-500 text-lg">Package not found</p>;

  return (
    <div className="bg-white text-gray-800 min-h-screen px-4 md:px-8 py-12">
      
      {/* Package Header */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/40 to-transparent w-full p-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">{pkg.name}</h1>
          <p className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            ₹{pkg.price}
          </p>
          <p className="text-gray-100">{pkg.duration}</p>
        </div>
      </div>

      {/* Package Description */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          About the Package
        </h2>
        <p className="text-gray-700 leading-relaxed">{details.description}</p>
      </div>

      {/* Itinerary */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Itinerary
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {details.itinerary.map((day, i) => (
            <li key={i}>
              <span className="font-semibold text-gray-800">{day.day}:</span> {day.details}
            </li>
          ))}
        </ul>
      </div>

      {/* Includes & Excludes */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Includes
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.includes.map((inc, i) => <li key={i}>{inc}</li>)}
          </ul>
        </div>
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Excludes
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.excludes.map((exc, i) => <li key={i}>{exc}</li>)}
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Contact
        </h2>
        <p className="text-gray-700">
          {details.contact.phone1} | {details.contact.phone2} | {details.contact.phone3} | {details.contact.email}
        </p>
      </div>

      {/* Similar Packages */}
      <div className="bg-gray-50 shadow-lg rounded-2xl p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
          Similar Packages
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {details.similarPackages.map((sim, i) => {
            const simPkg = allPackages.find(p => p.slug === sim);
            if (!simPkg) return null;

            return (
              <Link
                key={i}
                to={`/packages/${simPkg.slug}`}
                className="block bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img 
                  src={simPkg.image} 
                  alt={simPkg.name} 
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{simPkg.name}</h3>
                  <p className="font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    ₹{simPkg.price}
                  </p>
                  <p className="text-gray-500 text-sm">{simPkg.duration}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Back Button */}
      <div className="text-center mt-6">
        <Link 
          to="/packages" 
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Back to Packages
        </Link>
      </div>
    </div>
  );
};

export default PackageDetailPage;
