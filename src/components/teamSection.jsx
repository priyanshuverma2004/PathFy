import React from "react";

const teamMembers = [
  {
    name: "Priyanshu Verma",
    role: "CTO & Founder",
    image: "/assets/team/Priyanshu.png",
  },
  {
    name: "Sagar Jain",
    role: "CEO & Founder",
    image: "/assets/team/Sagar.png",
  },
  {
    name: "Vayu Jain",
    role: "CMO",
    image: "/assets/team/Vayu.png",
  },
  {
    name: "Harjeet",
    role: "Content Writer",
    image: "/assets/team/Harjeet.png",
  }
];

const TeamSection = () => {
  return (
    <section className="bg-slate-950 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <p className="text-slate-400 mb-12">
          The creative minds behind our success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center transition transform hover:scale-105"
            >
              {/* Circular Image */}
              <div className="w-40 h-40 rounded-full shadow-xl overflow-hidden ring-4 ring-orange-500/40">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className="mt-4 text-center">
                <p className="font-bold text-white">{member.name}</p>
                <p className="text-slate-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
