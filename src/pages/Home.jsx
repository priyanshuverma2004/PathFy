import React, { useState, useEffect,Suspense, lazy } from "react";

import SearchBar from "../components/SearchBar";
import CustomerForm from "../components/CustomerForm";
import Carousel from "../components/Carousel"
import { featuredSections, internationalPackages, romanticPackages, adventurePackages, indiaPackages, groupPackages } from "../datahome/packageData";

const typingLines = [
  "One trip, endless memories.",
  "Trips that stay forever.",
  "Stories born on the road."
];







const Home = () => {
  return (
    <div className="w-full">

      {/* Video Section */}
      <div className="relative w-full h-screen">
        <video 
          autoPlay
          loop
          muted
          playsInline
          preload="none"   // don’t load until user interacts or scrolls
          poster="/assets/traveler.jpg"  // show image while video loads
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/assets/homevid.mp4" type="video/mp4" />
        </video>

        {/* Black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Hero text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Your Travel Story Begins Here
          </h1>
          <TypingLoop lines={typingLines} />
        </div>
      </div>

      {/* SearchBar below video */}
      <div className="mt-10 px-4 md:px-20">
        <SearchBar />
      </div>

      {/* Carousel Sections */}
      <div className="px-4 md:px-20 space-y-10 mt-10">
        <Carousel featured={featuredSections.india} packages={indiaPackages} />
        <Carousel featured={featuredSections.international} packages={internationalPackages} />
        <Carousel featured={featuredSections.adventure} packages={adventurePackages} />
        <Carousel featured={featuredSections.romantic} packages={romanticPackages} />
        <Carousel featured={featuredSections.group} packages={groupPackages} />
      </div>

      {/* Customer Form */}
      <div className="mt-16 px-4 md:px-20">
        <CustomerForm />
      </div>
    </div>
  );
};

// Typing loop component
const TypingLoop = ({ lines }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const line = lines[currentLine];
    const speed = deleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayedText(prev => 
        deleting ? line.substring(0, prev.length - 1) : line.substring(0, prev.length + 1)
      );

      if (!deleting && displayedText === line) {
        setTimeout(() => setDeleting(true), 1000); // pause at full line
      } else if (deleting && displayedText === "") {
        setDeleting(false);
        setCurrentLine((currentLine + 1) % lines.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, deleting, currentLine, lines]);

  return (
    <p className="text-xl md:text-2xl font-medium text-white border-r-2 border-white pr-1 animate-blink">
      {displayedText}
    </p>
  );
};

export default Home;
