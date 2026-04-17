"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { Bebas_Neue } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default function StatsSection() {
  const stats = [
    {
      count: 20,
      suffix: "K+",
      label: "Creators",
    },
    {
      count: 10,
      suffix: "M+",
      label: "AI Interactions",
    },
    {
      count: 132,
      suffix: "",
      label: "Brands",
    },
    {
      count: 50,
      suffix: "+",
      label: "Brand Collabs",
    },
  ];

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
    <section id="features" className="relative py-8 lg:py-10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-[30px] md:text-[36px] tracking-wide text-center uppercase`}
          >
            <span className="text-white">Trusted by </span>
            <span className="text-[#b48cfa]">Creators </span>Across India.
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto px-4 lg:px-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Card content */}
              <div className="rounded-xl p-5 lg:p-6 bg-[#13111A] border border-white/5 text-center flex flex-col items-center justify-center min-h-[120px]">
                {/* Count */}
                <div className="flex items-baseline justify-center gap-[2px] mb-2">
                  <span className="text-2xl lg:text-[28px] font-bold text-[#b48cfa] leading-none">
                    <CountUp
                      to={stat.count}
                      duration={2.5}
                      separator=","
                      className="inline-block"
                    />
                    {stat.suffix && (
                      <span>{stat.suffix}</span>
                    )}
                  </span>
                </div>

                {/* Label */}
                <p className="text-[#84828a] text-[10px] lg:text-[11px] font-medium tracking-[0.02em]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
