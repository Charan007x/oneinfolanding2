"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

const partnerLogos = [
  { src: "/mobile-logos/image 140.png", alt: "Startup India", title: "Startup India" },
  { src: "/mobile-logos/image 141.png", alt: "RazorpayRize", title: "RazorpayRize" },
  { src: "/mobile-logos/image 142.png", alt: "Trustpilot", title: "Trustpilot" },
  { src: "/mobile-logos/image 144.png", alt: "Tie50", title: "Tie50 Hyderabad" },
  { src: "/mobile-logos/image 145.png", alt: "Meta Verified", title: "Meta Verified" },
];

export default function PartnerLogoLoopSection() {
  return (
    <section className="relative py-8 lg:py-10 overflow-hidden bg-[#0A0A0A]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 lg:mb-8">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs lg:text-sm text-gray-400 uppercase tracking-wider mb-2"
          >
            Recognized & Verified By
          </motion.p>
        </div>

        {/* Logo Loop */}
        <div className="relative py-4 lg:py-6" style={{ minHeight: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <LogoLoop
              logos={partnerLogos}
              speed={40}
              direction="left"
              logoHeight={45}
              gap={240}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#0A0A0A"
              ariaLabel="Partner logos"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
