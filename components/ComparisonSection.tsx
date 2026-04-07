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

const oldWayItems = [
  "Miss hundreds of DMs daily while you sleep",
  "Manually reply to every comment and question",
  "Lose leads because response was too slow",
  "Spend hours finding and applying to brand deals",
  "No analytics — guessing what content works",
  "Affiliate links shared manually, inconsistently",
  "Burnout from doing everything yourself",
];

const newWayItems = [
  "AI replies to every DM instantly, 24/7",
  "Smart auto-comments with keyword triggers",
  "Zero response lag — capture every lead",
  "AI matches and delivers brand deals to you",
  "Real-time analytics on every post and campaign",
  "Affiliate links auto-sent in personalized DMs",
  "Full creator OS — focus on creativity, AI handles the rest",
];

export default function ComparisonSection() {
  return (
    <section className="hidden md:block relative w-full py-12 lg:py-24 overflow-hidden z-10">
      <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center gap-12">
          
          {/* Header */}
          <div className="mb-8 lg:mb-12 text-center flex flex-col items-center gap-3">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 uppercase tracking-wider"
            >
              Why OneInfo
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl font-bold text-white tracking-tight"
            >
              CHAOS VS THE <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ONEINFO WAY</span>
            </motion.h2>
          </div>

          {/* Content */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          
          {/* Old Way Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full p-8 md:p-12 rounded-3xl border border-red-500/10 bg-red-500/5 flex flex-col gap-8 shadow-lg"
          >
            <h3 className={`${bebasNeue.className} text-white text-3xl tracking-[1.54px]`}>
              ✕ The Old Way
            </h3>
            <div className="flex flex-col gap-6">
              {oldWayItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <span className={`${roboto.className} text-red-400 text-xs font-bold leading-none`}>✗</span>
                  </div>
                  <p className={`${roboto.className} text-gray-300 text-base leading-relaxed`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* New Way Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 flex flex-col gap-8 shadow-xl shadow-primary/5"
          >
            <h3 className={`${bebasNeue.className} text-white text-3xl tracking-[1.54px]`}>
              ✓ The OneInfo Way
            </h3>
            <div className="flex flex-col gap-6">
              {newWayItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 shrink-0 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                    <span className={`${roboto.className} text-primary text-xs font-bold leading-none`}>✓</span>
                  </div>
                  <p className={`${roboto.className} text-gray-300 text-base leading-relaxed`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      </div>
    </section>
  );
}
