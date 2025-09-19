import React from "react";

const FeaturedCard = ({ title, image }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-56 md:h-70">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
      <h2 className="absolute left-8 top-1/3 -translate-y-1/2 text-white text-3xl md:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
};

export default FeaturedCard;
