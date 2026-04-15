"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

const brandLogos = [
  { src: "/logos/amazon2.png", alt: "Amazon", title: "Amazon" },
  { src: "/logos/flipkart2.png", alt: "Flipkart", title: "Flipkart" },
  { src: "/logos/meesho.png", alt: "Meesho", title: "Meesho" },
  { src: "/logos/myntra.png", alt: "Myntra", title: "Myntra" },
  { src: "/logos/nykaa.svg", alt: "Nykaa", title: "Nykaa" },
  { src: "/logos/plum.png", alt: "Plum", title: "Plum Goodness" },
  { src: "/logos/shopsy.png", alt: "Shopsy", title: "Shopsy" },
  { src: "/logos/ajio.png", alt: "AJIO", title: "AJIO" },
];

export default function LogoLoopSection() {
  return (
    <section className="relative py-8 lg:py-10 overflow-hidden">
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
            Trusted By Sellers On
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold text-white"
          >
            Leading E-Commerce <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Platforms</span>
          </motion.h2>
        </div>

        {/* Logo Loop */}
        <div className="relative py-6" style={{ minHeight: '110px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LogoLoop
              logos={brandLogos}
              speed={50}
              direction="left"
              logoHeight={45}
              gap={120}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0b0b0b"
              ariaLabel="E-commerce platform partners"
            />
          </motion.div>
        </div>

        {/* Stats or description */}
        <div className="mt-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm max-w-2xl mx-auto"
          >
            {/* OneInfo.ai seamlessly integrates with all major platforms, helping thousands of sellers automate their customer engagement and boost conversions across channels. */}
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
