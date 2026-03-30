"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

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
      <div className="flex items-center gap-3 border border-white/5 bg-white/2 rounded-full px-6 py-3 transition-colors hover:border-primary/30 hover:bg-white/5 mx-2 w-max">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 shrink-0">
          <CheckIcon className="w-3.5 h-3.5 text-primary shrink-0" />
        </div>
        <span className="text-sm md:text-base text-gray-300 font-medium whitespace-nowrap">{feature}</span>
      </div>
    )
  }));

  const bottomFeatures = features.slice(4, 8).map((feature) => ({
    node: (
      <div className="flex items-center gap-3 border border-white/5 bg-white/2 rounded-full px-6 py-3 transition-colors hover:border-primary/30 hover:bg-white/5 mx-2 w-max">
        <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/20 shrink-0">
          <CheckIcon className="w-3.5 h-3.5 text-primary shrink-0" />
        </div>
        <span className="text-sm md:text-base text-gray-300 font-medium whitespace-nowrap">{feature}</span>
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
    <section id="pricing" className="relative py-12 lg:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-4xl font-bold text-white tracking-tight"
          >
            Monetize Your Audience. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Scale Without Limits.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base mt-4"
          >
            Turn conversations into consistent revenue.
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
            <div className="h-full rounded-2xl p-8 border border-white/5 bg-white/2 flex flex-col items-center hover:border-primary/30 hover:bg-white/5 transition-all">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-white">Starter</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">1 Month</p>
              <div className="text-4xl lg:text-5xl font-bold mb-2 flex items-start text-white">
                <span className="text-2xl mt-1">&#8377;</span>299
              </div>
              <p className="text-primary text-sm font-medium mb-8">&#8377;10/day</p>
              <p className="text-gray-400 text-sm mb-8 flex-grow">Unlimited All Features</p>
              <button className="w-full py-3 px-6 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm font-semibold hover:bg-white/10 transition-colors">
                Start Free Trial
              </button>
            </div>
          </motion.div>

          {/* Growth Card - Highlighted */}
          <motion.div variants={itemVariants} className="relative transition-all duration-300 hover:-translate-y-2 mt-8 md:mt-0 md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg whitespace-nowrap z-10">
              Limited Time
            </div>
            <div className="h-full rounded-2xl p-8 border border-primary/50 bg-white/5 flex flex-col items-center shadow-[0_0_40px_-10px_rgba(124,58,237,0.2)]">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 mt-2 text-white">Growth</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">3 Months</p>
              <div className="text-4xl lg:text-5xl font-bold mb-2 flex items-start text-white">
                <span className="text-2xl mt-1">&#8377;</span>599
              </div>
              <p className="text-primary text-sm font-medium mb-8">&#8377;6.7/day</p>
              <p className="text-gray-400 text-sm mb-8 flex-grow">Unlimited All Features</p>
              <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg">
                Get Early Access
              </button>
            </div>
          </motion.div>

          {/* Pro Yearly Card */}
          <motion.div variants={itemVariants} className="relative transition-all duration-300 hover:-translate-y-2 mt-8 md:mt-0">
            <div className="h-full rounded-2xl p-8 border border-white/5 bg-white/2 flex flex-col items-center hover:border-primary/30 hover:bg-white/5 transition-all">
              <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-white">Pro Yearly</h3>
              <p className="text-gray-400 text-xs uppercase tracking-widest mb-6">12 Months</p>
              <div className="text-4xl lg:text-5xl font-bold mb-2 flex items-start text-white">
                <span className="text-2xl mt-1">&#8377;</span>2999
              </div>
              <p className="text-primary text-sm font-medium mb-8">&#8377;8.2/day</p>
              <p className="text-gray-400 text-sm mb-8 flex-grow">Unlimited All Features</p>
              <button className="w-full py-3 px-6 rounded-xl border border-white/10 bg-white/5 text-gray-300 text-sm font-semibold hover:bg-white/10 transition-colors">
                Get Early Access
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
          className="text-center mt-12 text-xs text-gray-500 uppercase tracking-widest"
        >
          No hidden charges <span className="mx-2 text-white/20">|</span> Instant activation
        </motion.div>

      </div>
    </section>
  );
}