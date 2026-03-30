"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function StatsSection() {
  const stats = [
    {
      count: 20,
      suffix: "K+",
      label: "Creators",
    },
    {
      count: 1,
      suffix: "M+",
      label: "AI Interactions",
    },
    {
      count: 150,
      suffix: "+",
      label: "Affiliated Brands",
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
    <section id="features" className="relative py-12 lg:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

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
            className="text-2xl lg:text-3xl font-bold text-white"
          >
            Growing By The <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Numbers</span>
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Card content */}
              <div className="rounded-xl p-6 lg:p-8 border border-white/5 bg-white/2 text-center transition-all duration-300 hover:border-primary/30 hover:bg-white/5">
                {/* Count */}
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    <CountUp
                      to={stat.count}
                      duration={2.5}
                      separator=","
                      className="inline-block"
                    />
                  </span>
                  <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm lg:text-base mt-4">
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
