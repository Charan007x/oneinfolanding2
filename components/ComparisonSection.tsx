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

const comparisonData = [
  { old: "Miss DMs while you sleep", new: "AI replies 24/7, zero lag" },
  { old: "Manually reply to every comment", new: "Auto-comments with smart triggers" },      
  { old: "Lose leads to slow responses", new: "Every lead captured instantly" },
  { old: "Chase brand deals yourself", new: "Brand deals delivered to you" },
  { old: "No idea what content works", new: "Real-time analytics on everything" },
  { old: "Share affiliate links manually", new: "Affiliate links sent automatically" },      
  { old: "Burn out doing everything alone", new: "Full autopilot — you just create" },       
];

export default function ComparisonSection() {
  return (
    <section className="relative w-full py-8 lg:py-16 overflow-hidden z-10">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">

        {/* Header */}
        <div className="mb-8 md:mb-12 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-[30px] md:text-[36px] tracking-wide`}    
          >
            <span className="text-white lg:text-[#F0F1F5] uppercase">Stop doing it the </span>
            <span className="text-[#9F7CFF] uppercase">hard way.</span>
          </motion.h2>
        </div>

        {/* Content */}
        <div className="w-full max-w-[768px] mx-auto">
          <div className="flex flex-col gap-4">

            {/* Column Headers */}
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 mb-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${bebasNeue.className} text-center uppercase tracking-widest text-[#818898] text-[14px]`}
              >
                Without OneInfo
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`${bebasNeue.className} text-center uppercase tracking-widest text-[#7847EB] text-[14px]`}
              >
                With OneInfo
              </motion.div>
            </div>

            {/* Rows */}
            <div className="flex flex-col gap-4">
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-x-4 md:gap-x-8"
                >
                  {/* Left Card */}
                  <div className="min-h-[54px] w-full flex items-center gap-3 p-3 md:p-4 rounded-xl border border-[#2B2E3B] bg-[#0A0A0A]">
                    <span className={`${roboto.className} text-[#EF4343] text-[14px] shrink-0 font-bold`}>✗</span>
                    <span className={`${roboto.className} text-[#818898] text-[12px] md:text-[14px] leading-tight`}>
                      {row.old}
                    </span>
                  </div>

                  {/* Right Card */}
                  <div className="min-h-[54px] w-full flex items-center gap-3 p-3 md:p-4 rounded-xl border border-[#2B2E3B] shadow-[0_0_20px_rgba(120,71,235,0.10)] bg-[#0A0A0A]">        
                    <span className={`${roboto.className} text-[#7847EB] text-[14px] shrink-0 font-bold`}>✓</span>
                    <span className={`${roboto.className} text-[#F0F1F5] text-[12px] md:text-[14px] leading-tight`}>
                      {row.new}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
