import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "Priyanshu",
    role: "Founder & CTO",
    img: "/assets/team/Priyanshu.png",
  },
  {
    name: "Sagar",
    role: "Founder & CEO",
    img: "/assets/team/Sagar.png",
  },
];

const FoundersSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Founders
        </motion.h2>

        {/* Founders Cards */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
  {founders.map((person, index) => (
    <motion.div
      key={index}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
    >
      {/* Image */}
      <img
        src={person.img}
        alt={person.name}
        className="w-full h-[500px] object-cover"
      />

      {/* Unique Name Section */}
      <div className="p-6 text-center bg-white text-black">
        <h3 className="text-2xl font-bold tracking-wide uppercase">
          {person.name}
        </h3>
        <p className="mt-1 text-sm font-medium opacity-90">
          {person.role}
        </p>
        <div className="mt-3 h-1 w-16 bg-white mx-auto rounded-full"></div>
      </div>
    </motion.div>
  ))}
</div>


        {/* Story Section */}
        <motion.div
          className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Their Journey ✨
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Priyanshu and Sagar have been childhood friends, always dreaming of
            building something together. After completing their studies, life
            took them on different paths – Sagar found himself stuck in the
            cycle of a demanding 9-to-5 job, while Priyanshu followed his passion
            for technology and problem solving.
            <br /> <br />
            During one of their conversations, they realized they could combine
            their strengths – Sagar’s leadership & business acumen and
            Priyanshu’s love for tech & innovation – to create something
            meaningful. That’s how{" "}
            <span className="font-semibold text-indigo-600">Takaro</span> was
            born, a Destination Management Company (DMC) with a mission to make
            global travel seamless, affordable, and unforgettable.
            <br /> <br />
            Today, they continue their journey together, turning their childhood
            bond into a shared vision that inspires thousands of travelers
            worldwide. 🌍
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FoundersSection;
