import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CustomerForm from "../components/CustomerForm";
import Carousel from "../components/Carousel";
import {
  featuredSections,
  internationalPackages,
  romanticPackages,
  adventurePackages,
  indiaPackages,
  groupPackages,
} from "../datahome/packageData";

const typingLines = [
  "One trip, endless memories.",
  "Trips that stay forever.",
  "Stories born on the road.",
];

const Home = () => {
  return (
    <div className="w-full bg-slate-950 text-white">
      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster="/assets/traveler.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/homevid.mp4" type="video/mp4" />
        </video>

        {/* Hero text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in 
                         bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
                         bg-clip-text text-transparent drop-shadow-lg">
            Your Travel Story Begins Here
          </h1>
          <TypingLoop lines={typingLines} />
        </div>
      </div>

      {/* SearchBar */}
      <div className="mt-10 px-4 md:px-20">
        <SearchBar />
      </div>

      {/* Carousels */}
      <div className="px-4 md:px-20 space-y-10 mt-10">
        <Carousel featured={featuredSections.india} packages={indiaPackages} />
        <Carousel
          featured={featuredSections.international}
          packages={internationalPackages}
        />
        <Carousel
          featured={featuredSections.adventure}
          packages={adventurePackages}
        />
        <Carousel
          featured={featuredSections.romantic}
          packages={romanticPackages}
        />
        <Carousel featured={featuredSections.group} packages={groupPackages} />
      </div>

      {/* Customer Form */}
      <div className="px-4 md:px-20 mt-10">
        <CustomerForm />
      </div>
    </div>
  );
};

// Typing loop
const TypingLoop = ({ lines }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const line = lines[currentLine];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        deleting
          ? line.substring(0, prev.length - 1)
          : line.substring(0, prev.length + 1)
      );

      if (!deleting && displayedText === line) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayedText === "") {
        setDeleting(false);
        setCurrentLine((currentLine + 1) % lines.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, deleting, currentLine, lines]);

  return (
    <p className="text-xl md:text-2xl font-medium text-orange-400 border-r-2 border-orange-400 pr-1 animate-blink">
      {displayedText}
    </p>
  );
};

export default Home;
