"use client";

import { motion } from "framer-motion";

const team = [
  {
    id: "niranjan",
    name: "Niranjan Vojja",
    role: "Founder & CEO",
    description:
      "Building the AI Operating System for the Creator Economy — empowering every creator to run their business on autopilot.",
  },
  {
    id: "murthy",
    name: "G. Shashidhara Murthy",
    role: "Business Innovator & Strategic Mentor",
    description:
      "Seasoned entrepreneur driving strategic vision and business growth across India's digital economy.",
  },
  {
    id: "mohan",
    name: "Srinivas Kumar Mohan",
    role: "Senior Technology Strategist & Mentor",
    description:
      "Deep tech leader with decades of experience shaping scalable platforms and guiding next-gen product strategy.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 lg:py-24 overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="mb-12 lg:mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OneInfo</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              Building The AI Operating System For Creators
            </h3>

            <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              <p>
                OneInfo.ai helps creators scale their businesses and transform into entrepreneurs. We empower influencers and content creators to build stronger relationships with their audiences, streamline collaborations with brands, and unlock new revenue streams through automation and AI.
              </p>
              <p>
                With OneInfo.ai, creators no longer have to worry about missed DMs, overlooked brand deals, or lost opportunities. Our AI agent automates engagement, manages collaborations, and integrates affiliate partnerships — allowing creators to focus on what they do best: creating impactful content.
              </p>
            </div>

            {/* Mission Card */}
            <div className="mt-auto bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 relative overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-base md:text-lg mb-3 tracking-wide">Our Mission</h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                To democratize growth in the creator economy by providing simple, powerful, and affordable AI tools that enable creators of all sizes to monetize smarter and grow faster.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Team) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6"
          >
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-xl flex flex-col sm:flex-row overflow-hidden hover:bg-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl"
              >
                <div className="sm:w-[140px] md:w-[160px] shrink-0 relative min-h-[180px] bg-white/5 flex items-center justify-center">
                  <span className="text-white/20 font-bold text-4xl uppercase">{member.name.charAt(0)}</span>
                  {/* Standard img tag used to avoid Next.js Image caching crash on missing file */}
                  <img
                    src={`/${member.id}.png`}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h4 className="text-white font-bold text-sm md:text-base mb-1">{member.name}</h4>
                  <p className="text-[#a855f7] text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}