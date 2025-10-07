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
    <div
      className="relative w-full text-gray-900 font-[Comic_Sans_MS,'Segoe_UI',sans-serif] overflow-x-hidden"
      style={{ backgroundColor: "#FFF8F0" }}
    >
      {/* === Animated Blobs Background === */}
      <div className="absolute top-[20%] -left-20 w-96 h-96 bg-[#ffffff] rounded-[60%] blur-3xl opacity-50 animate-softMove z-0"></div>
      <div className="absolute bottom-[15%] -right-20 w-96 h-96 bg-[#D4E9FF] rounded-[70%] blur-3xl opacity-50 animate-softMove2 z-0"></div>

      {/* === Video Section === */}
      <div className="relative w-full h-screen z-10">
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

        {/* === Hero Text === */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4 text-center bg-black/40">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 
                       bg-gradient-to-r from-[#FF8C42] via-[#FFB26B] to-[#2B7FD9]
                       bg-clip-text text-transparent drop-shadow-lg"
          >
            Your Travel Story Begins Here
          </h1>
          <TypingLoop lines={typingLines} />
        </div>
      </div>

      {/* === SearchBar === */}
      <div className="relative mt-10 px-4 md:px-20 z-10">
        <SearchBar />
      </div>

      {/* === Carousels === */}
      <div className="relative px-4 md:px-20 space-y-10 mt-10 z-10">
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

      {/* === Customer Form === */}
      <div className="relative px-4 md:px-20 mt-10 z-10">
        <CustomerForm />
      </div>

      {/* === Extra floating pastel circles for subtle animation === */}
      <div className="absolute top-[40%] left-[30%] w-40 h-40 bg-[#FF8C42]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-[70%] right-[25%] w-52 h-52 bg-[#2B7FD9]/20 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

// === Typing Loop ===
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
    <p className="text-xl md:text-2xl font-semibold text-[#FF8C42] border-r-2 border-[#FF8C42] pr-1 animate-blink">
      {displayedText}
    </p>
  );
};

export default Home;
