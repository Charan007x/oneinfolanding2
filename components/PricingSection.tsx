"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const features = [
  "Unlimited DMs & Auto Replies",
  "Schedule Reel",
  "Unlimited Captions & Hashtags",
  "Auto Comments",
  "Analytics Dashboard",
  "Ask to Follow",
  "Brand Collaborations",
  "Affiliate Store Access",
];

const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53-1.72-1.72a.75.75 0 10-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

export default function PricingSection() {
  const topFeatures = features.slice(0, 4).map((feature) => ({
    node: (
      <div className="flex items-center gap-3 border border-[#2B2E3B] bg-[#0A0A0A] rounded-full px-6 py-3 transition-colors hover:border-[#9F7CFF] hover:bg-[#0A0A0A]/80 mx-2 w-max">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9F7CFF]/20 shrink-0">
          <CheckIcon className="w-3.5 h-3.5 text-[#9F7CFF] shrink-0" />
        </div>
        <span className={`${roboto.className} text-[#818898] text-[20px] whitespace-nowrap`}>{feature}</span>
      </div>
    )
  }));

  const bottomFeatures = features.slice(4, 8).map((feature) => ({
    node: (
      <div className="flex items-center gap-3 border border-[#2B2E3B] bg-[#0A0A0A] rounded-full px-6 py-3 transition-colors hover:border-[#9F7CFF] hover:bg-[#0A0A0A]/80 mx-2 w-max">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9F7CFF]/20 shrink-0">
          <CheckIcon className="w-3.5 h-3.5 text-[#9F7CFF] shrink-0" />
        </div>
        <span className={`${roboto.className} text-[#818898] text-[20px] whitespace-nowrap`}>{feature}</span>
      </div>
    )
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="relative py-8 lg:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-[30px] md:text-[36px] tracking-wide text-center`}
          >
            <span className="text-white uppercase">Simple pricing. </span>
            <span className="text-[#9F7CFF] uppercase">Serious results.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${roboto.className} text-[16px] md:text-[20px] leading-relaxed text-[#818898] max-w-2xl mt-4`}
          >
            Under ₹10/day. Full access. No hidden fees.
          </motion.p>
        </div>

        {/* Features Scroll */}
        <div className="flex flex-col gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <LogoLoop
              logos={topFeatures}
              speed={40}
              direction="left"
              gap={0}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#0b0b0f"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <LogoLoop
              logos={bottomFeatures}
              speed={40}
              direction="right"
              gap={0}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#0b0b0f"
            />
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
        >
          {/* Starter Card */}
          <motion.div variants={itemVariants} className="relative transition-all duration-300 hover:-translate-y-2">
            <div className="h-full rounded-2xl p-8 border border-[#2B2E3B] bg-[#0A0A0A] flex flex-col items-center hover:border-[#9F7CFF] transition-all">
              <h3 className={`${bebasNeue.className} text-[36px] tracking-wide text-white uppercase mb-2`}>Starter</h3>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-6`}>1 Month</p>
              <div className={`${bebasNeue.className} text-[48px] text-white flex items-start mb-2`}>
                <span className="text-[28px] mt-2">&#8377;</span>349
              </div>
              <p className={`${roboto.className} text-[#9F7CFF] text-[20px] mb-8`}>&#8377;11.6/day</p>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-8 flex-grow`}>Unlimited All Features</p>
              <button className={`${roboto.className} w-full py-3 px-6 rounded-xl border border-[#2B2E3B] bg-[#0b0b0f] text-white text-[20px] font-medium hover:bg-[#1a1a24] transition-colors`}>
                START FREE TRIAL
              </button>
            </div>
          </motion.div>

          {/* Growth Card - Highlighted */}
          <motion.div variants={itemVariants} className="relative transition-all duration-300 hover:-translate-y-2 mt-8 md:mt-0 md:-translate-y-4">
            <div className={`${roboto.className} absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9F7CFF] text-white px-4 py-1.5 rounded-full text-[14px] font-medium tracking-wide whitespace-nowrap z-10`}>
              Limited Time
            </div>
            <div className="h-full rounded-2xl p-8 border border-[#9F7CFF] bg-[#0A0A0A] flex flex-col items-center shadow-[0_0_40px_-10px_rgba(159,124,255,0.3)]">
              <h3 className={`${bebasNeue.className} text-[36px] tracking-wide text-[#9F7CFF] uppercase mb-2 mt-2`}>Growth</h3>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-6`}>3 Months</p>
              <div className={`${bebasNeue.className} text-[48px] text-white flex items-start mb-2`}>
                <span className="text-[28px] mt-2">&#8377;</span>799
              </div>
              <p className={`${roboto.className} text-[#9F7CFF] text-[20px] mb-8`}>&#8377;8.9/day</p>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-8 flex-grow`}>Unlimited All Features</p>
              <button className={`${roboto.className} w-full py-3 px-6 rounded-xl bg-[#9F7CFF] text-white text-[20px] font-medium hover:opacity-90 transition-opacity shadow-lg`}>
                GET EARLY ACCESS
              </button>
            </div>
          </motion.div>

          {/* Pro Yearly Card */}
          <motion.div variants={itemVariants} className="relative transition-all duration-300 hover:-translate-y-2 mt-8 md:mt-0">
            <div className="h-full rounded-2xl p-8 border border-[#2B2E3B] bg-[#0A0A0A] flex flex-col items-center hover:border-[#9F7CFF] transition-all">
              <h3 className={`${bebasNeue.className} text-[36px] tracking-wide text-white uppercase mb-2`}>Pro Yearly</h3>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-6`}>12 Months</p>
              <div className={`${bebasNeue.className} text-[48px] text-white flex items-start mb-2`}>
                <span className="text-[28px] mt-2">&#8377;</span>3499
              </div>
              <p className={`${roboto.className} text-[#9F7CFF] text-[20px] mb-8`}>&#8377;9.6/day</p>
              <p className={`${roboto.className} text-[#818898] text-[20px] mb-8 flex-grow`}>Unlimited All Features</p>
              <button className={`${roboto.className} w-full py-3 px-6 rounded-xl border border-[#2B2E3B] bg-[#0b0b0f] text-white text-[20px] font-medium hover:bg-[#1a1a24] transition-colors`}>
                GET EARLY ACCESS
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className={`${roboto.className} text-center mt-12 text-[14px] text-[#818898] tracking-widest uppercase`}
        >
          No hidden charges <span className="mx-2 text-[#2B2E3B]">|</span> Instant activation
        </motion.div>

      </div>
    </section>
  );
}
