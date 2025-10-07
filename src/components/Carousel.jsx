import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "../components/CarouseCard";
import FeaturedCard from "../components/FeatureCard";

const Carousel = ({ featured, packages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [packages.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.querySelector("div")?.offsetWidth || 0;
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full px-4 mt-10">
      {/* Featured Card */}
      <div className="rounded-2xl border border-blue-300/40 hover:border-indigo-400/50 shadow-lg hover:shadow-blue-300/40 transition mb-10">
        <FeaturedCard title={featured.title} image={featured.image} />
      </div>

      {/* Carousel Packages */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto py-32 md:py-40 scroll-smooth scrollbar-hide"
      >
        {packages.map((pkg, index) => (
          <div key={index} className="flex-shrink-0 px-2 w-[280px]">
            <CarouselCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
