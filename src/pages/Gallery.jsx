import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryData } from "../datahome/galleryData";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 250, damping: 20 },
  },
};

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const allImages = galleryData.flatMap((cat) => cat.images);

  const imagesToShow =
    selectedCategory === "All"
      ? allImages
      : galleryData.find((cat) => cat.category === selectedCategory)?.images ||
        [];

  return (
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden text-gray-800">
      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-600">
        Gallery
      </h1>

      {/* Category Filter */}
      <div className="flex justify-center space-x-4 mb-12 flex-wrap">
        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2 rounded-full font-semibold transition ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white shadow-lg"
              : "bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        {galleryData.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat.category)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              selectedCategory === cat.category
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300"
            }`}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {imagesToShow.map((img, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            onMouseEnter={() => setHoveredImage(img)}
            onMouseLeave={() => setHoveredImage(null)}
            onClick={() => setActiveImage(img)}
            whileHover={{
              scale: 1.08,
              rotateY: hoveredImage === img ? 15 : 0,
              rotateX: hoveredImage === img ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className={`bg-gray-100 rounded-2xl shadow-lg overflow-hidden cursor-pointer relative transition-all duration-300 ${
              activeImage ? "opacity-30" : "opacity-100"
            }`}
          >
            <img
              src={img}
              alt="gallery"
              loading="lazy"
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Full Screen Image */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/90 flex justify-center items-center z-50"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden cursor-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="fullscreen"
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
