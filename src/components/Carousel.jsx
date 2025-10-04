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
      <div className="rounded-2xl border border-orange-500/30 hover:border-pink-500/50 shadow-lg hover:shadow-orange-500/50 transition">
        <FeaturedCard title={featured.title} image={featured.image} />
      </div>

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
