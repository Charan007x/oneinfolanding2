"use client";

import { motion } from "framer-motion";
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

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
    <section id="about" className="relative py-12 sm:py-16 overflow-hidden z-10 w-full">
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-12 lg:mb-16 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} tracking-wide text-[30px] md:text-[36px] text-center uppercase`}
          >
            <span className="text-white">ABOUT </span>
            <span className="text-[#b48cfa]">ONEINFO</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 flex flex-col max-w-[550px] pt-4"
          >
            <h2 className={`${bebasNeue.className} tracking-wide text-[32px] sm:text-[38px] lg:text-[40px] leading-[1.1] text-white uppercase mb-6`}>
              BUILT FOR CREATORS. DESIGNED TO <span className="text-[#b48cfa]">GROW WITH YOU.</span>
            </h2>

            <div className={`${roboto.className} space-y-6 text-[#A1A1AA] text-[15px] lg:text-[16px] leading-[1.6] mb-10`}>
              <p>
                OneInfo.ai is the AI assistant powering India's creator economy. We automate the work that
                slows creators down — so you can earn more, grow faster, and build a real business around
                your content.
              </p>
              <p className="font-bold text-white tracking-wide text-[15px] lg:text-[16px]">
                Backed by Startup India. Recognized by TiE50. Trusted by thousands.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-[#13111A] border border-[#2B2E3B] rounded-2xl p-6 relative overflow-hidden transition-all duration-300">
              <h4 className={`${bebasNeue.className} tracking-widest text-[#b48cfa] text-[20px] mb-3 uppercase`}>OUR MISSION</h4>
              <p className={`${roboto.className} text-[#A1A1AA] text-[14px] lg:text-[15px] leading-[1.6]`}>
                To democratize growth in the creator economy — giving every creator, big or small, the AI
                tools to earn more and grow faster.
              </p>
            </div>
          </motion.div>

          {/* Right Column (Team) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex-1 space-y-5 w-full"
          >
            {team.map((member, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={idx}
                className="bg-[#0b0b0f] border border-[#1A1A24] rounded-2xl flex flex-row overflow-hidden hover:border-[#2B2E3B] transition-all duration-300 shadow-md min-h-[120px] md:min-h-[140px]"
              >
                <div className="w-[100px] sm:w-[120px] shrink-0 relative bg-[#1A1A24] flex items-center justify-center">
                  <span className={`${bebasNeue.className} text-white/10 text-4xl uppercase`}>{member.name.charAt(0)}</span>
                  {/* Standard img tag used to avoid Next.js Image caching crash on missing file */}
                  <img
                    src={`/${member.id}.png`}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `/${member.id}.png`;
                    }}
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col justify-center flex-1">
                  <h4 className={`${bebasNeue.className} tracking-widest text-white text-[18px] md:text-[20px] mb-1 uppercase`}>{member.name}</h4>
                  <p className={`${roboto.className} text-[#b48cfa] text-[12px] md:text-[13px] font-bold mb-2 tracking-wide`}>{member.role}</p>
                  <p className={`${roboto.className} text-[#A1A1AA] text-[12px] md:text-[13px] leading-[1.5]`}>
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}