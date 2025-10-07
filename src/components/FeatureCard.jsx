import React from "react";

const FeaturedCard = ({ title, image }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-56 md:h-70 rounded-2xl overflow-hidden shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl"
      />
      {/* Light overlay for contrast */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      <h2 className="absolute left-8 top-1/3 -translate-y-1/2 text-3xl md:text-5xl font-bold
                     bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500
                     bg-clip-text text-transparent drop-shadow-md">
        {title}
      </h2>
    </div>
  );
};

export default FeaturedCard;
