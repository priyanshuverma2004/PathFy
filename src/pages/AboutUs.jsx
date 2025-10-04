import React from "react";
import { motion } from "framer-motion";
import TeamSection from "../components/teamSection";

const AboutUs = () => {
  return (
    <div className="w-full bg-slate-950 ">
      {/* Hero Section with Background Video */}
      <div className="relative h-[70vh] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="assets/aboutimg/topab.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="relative z-10 flex items-center justify-center h-full flex-col px-4 text-center">
          <h1 className="text-5xl md:text-4xl font-bold text-white flex flex-col mb-1">
            Get to Know Us
            <span className="mt-2 text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Who We Are Matters
            </span>
          </h1>
          <span className="text-lg text-slate-200 mt-2">
            Discover the story behind PathFy - where passion for travel meets unforgettable experiences!
          </span>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-slate-200 leading-relaxed">
            At <span className="font-semibold text-orange-500">PathFy</span>, we are more than just a travel company - we are your global journey partner. As a Destination Management Company (DMC), we specialize in providing seamless travel, comfortable stays, and authentic food experiences all over the world.
          </p>
          <p className="mt-4 text-slate-200 leading-relaxed">
            Our goal is simple: to make travel affordable, meaningful, and unforgettable for everyone between 18 to 45 - whether you're a student exploring the world, a young couple seeking adventure, or a corporate team planning a retreat.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/levo127/image/upload/v1758297013/Packages/59c540dae066454cb301a7fac6c3229e_n2zmot.jpg"
            alt="Travelers"
            className="rounded-2xl shadow-2xl h-120 w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Our Philosophy */}
      <section className="bg-slate-900/50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            🌱 Our Philosophy
          </h2>
          <ul className="space-y-3 text-slate-200">
            <li>Inspire Curiosity - with every journey, new doors of discovery will be opened.</li>
            <li>Connect Cultures - relationship connects you with people and communities around the globe.</li>
            <li>Protect Mother Earth - by traveling thoughtfully, intentionally, and sustainably.</li>
            <li>Simplify Traveling - one-stop shopping for all things travel related to create a seamless experience.</li>
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-slate-200 mb-4">
            At Pathfy, we think every trip should feel wonderfully unique. For that reason, we curate experiences that fit your needs, your pace, and your fantasies. From affordable student trips to romantic getaways for couples, or corporate retreats focused on team building, to luxury adventures for your young APKs - We create trips that go beyond travel; we create memories.
          </p>
          <ul className="space-y-2 text-slate-200">
            <li><b>Travel</b> - Easy flights, comfortable transfers & trustworthy local transport</li>
            <li><b>Stay</b> - Options of hostels, boutique hotels, quiet resorts, luxury villas & premium corporate spaces</li>
            <li><b>Food</b> - Authentic local food, food options 'from home', curated dining experiences - to take home, memories of place & people.</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/levo127/image/upload/v1758297014/Packages/c36a28ca1de648c8ba0ddf67d794f6fa_x4t0iz.jpg"
            alt="What We Do"
            className="rounded-2xl shadow-lg h-120 w-full object-cover"
          />
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900/50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            🌏 Why Choose PathFY?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Global Reach, Local Heart",
              "One-Stop Travel Partner",
              "Youth-Focused Experiences",
              "Affordable & Flexible Packages",
              "Responsible & Eco-Friendly Travel",
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 shadow-lg p-6 rounded-xl hover:scale-105 transform transition duration-300"
              >
                <p className="text-white font-medium">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Mission
        </motion.h2>
        <motion.p
          className="text-lg text-slate-200 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          “To make global travel accessible, sustainable, and memorable - where
          every journey is as easy as booking a meal and as enriching as living
          a dream.”
        </motion.p>
      </section>
    </div>
  );
};

export default AboutUs;
