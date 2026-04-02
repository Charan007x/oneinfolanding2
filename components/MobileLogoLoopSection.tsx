"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

const mobileLogos = [
  { src: "/mobile-logos/image 140.png", alt: "Startup India", title: "Startup India" },
  { src: "/mobile-logos/image 141.png", alt: "RazorpayRize", title: "RazorpayRize" },
  { src: "/mobile-logos/image 142.png", alt: "Trustpilot", title: "Trustpilot" },
  { src: "/mobile-logos/image 144.png", alt: "Tie50", title: "Tie50 Hyderabad" },
  { src: "/mobile-logos/image 145.png", alt: "Meta Verified", title: "Meta Verified" },
  { src: "/mobile-logos/image 140.png", alt: "Startup India", title: "Startup India" },
];

export default function MobileLogoLoopSection() {
  return (
    <section className="relative py-8 lg:py-16 overflow-hidden block lg:hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 block lg:hidden">
        {/* Header */}
        <div className="text-center mb-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs text-gray-400 uppercase tracking-wider mb-2"
          >
            Recognized & Verified By
          </motion.p>
        </div>

        {/* Logo Loop */}
        <div className="relative py-4" style={{ minHeight: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LogoLoop
              logos={mobileLogos}
              speed={40}
              direction="left"
              logoHeight={35}
              gap={80}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0B0B0F"
              ariaLabel="Mobile platform partners"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
