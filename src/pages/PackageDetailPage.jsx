import React from "react";
import { useParams, Link } from "react-router-dom";
import { packageDetails } from "../datahome/packageDataDetails";
import { indiaPackages, internationalPackages, adventurePackages, romanticPackages } from "../datahome/packageData";

const allPackages = [...indiaPackages, ...internationalPackages, ...adventurePackages, ...romanticPackages];

const PackageDetailPage = () => {
  const { slug } = useParams();
  const details = packageDetails[slug];
  const pkg = allPackages.find(p => p.slug === slug);

  if (!pkg || !details) return <p className="text-center mt-10 text-gray-500 text-lg">Package not found</p>;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-8 mt-20">
      
      {/* Package Header */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg">
        <img 
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-6 text-white">
          <h1 className="text-4xl font-bold">{pkg.name}</h1>
          <p className="text-xl font-semibold">Rs {pkg.price}</p>
          <p className="text-gray-300">{pkg.duration}</p>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">About the Package</h2>
        <p className="text-gray-700 leading-relaxed">{details.description}</p>
      </div>

      {/* Itinerary */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-indigo-600">Itinerary</h2>
        <ul className="list-disc list-inside space-y-2">
          {details.itinerary.map((day, i) => (
            <li key={i} className="text-gray-700">
              <span className="font-semibold">{day.day}:</span> {day.details}
            </li>
          ))}
        </ul>
      </div>

      {/* Includes & Excludes */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Includes</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.includes.map((inc, i) => <li key={i}>{inc}</li>)}
          </ul>
        </div>
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-3">Excludes</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {details.excludes.map((exc, i) => <li key={i}>{exc}</li>)}
          </ul>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Contact</h2>
        <p className="text-gray-700">{details.contact.phone1} | {details.contact.phone2} |{details.contact.phone3} |{details.contact.email}</p>
      </div>

      {/* Similar Packages */}
<div className="bg-white shadow-md rounded-2xl p-6">
  <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Similar Packages</h2>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    {details.similarPackages.map((sim, i) => {
      const simPkg = allPackages.find(p => p.slug === sim);
      if (!simPkg) return null;

      return (
        <Link
          key={i}
          to={`/packages/${simPkg.slug}`}
          className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition shadow-gray-200"
        >
          <img 
            src={simPkg.image} 
            alt={simPkg.name} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{simPkg.name}</h3>
            <p className="text-indigo-600 font-semibold">Rs {simPkg.price}</p>
            <p className="text-gray-500 text-sm">{simPkg.duration}</p>
          </div>
        </Link>
      );
    })}
  </div>
</div>


      {/* Back Button */}
      <div className="text-center">
        <Link 
          to="/packages" 
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          Back to Packages
        </Link>
      </div>
    </div>
  );
};

export default PackageDetailPage;
