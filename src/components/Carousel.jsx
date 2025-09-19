import React, { useEffect, useRef, useState } from "react";
import CarouselCard from "../components/CarouseCard";
import FeaturedCard from "../components/FeatureCard";

const Carousel = ({ featured, packages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % packages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [packages.length]);

  // Scroll to one card at a time
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
      {/* Featured Background Card */}
      <FeaturedCard title={featured.title} image={featured.image} />

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto py-32 md:py-40 scroll-smooth scrollbar-hide"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2 w-1/2 sm:w-1/3 lg:w-1/5" 
            // mobile: 2 cards → 50% | tablet: 3 cards → 33% | desktop: 5 cards → 20%
          >
            <CarouselCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
