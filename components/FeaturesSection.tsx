"use client";

import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { Bebas_Neue, Roboto } from 'next/font/google';
import { ParticleCard, GlobalSpotlight } from './MagicBentoEffect';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const FeatureCard = ({
  title,
  description,
  icon,
  className = "",
  soon = false,
  variants,
}: {
  title: string;
  description: string;
  icon: string;
  className?: string;
  soon?: boolean;
  variants?: Variants;
}) => (
  <motion.div
    variants={variants}
    className={className}
  >
    <ParticleCard
      className={`bg-[#0A0A0A] border border-[#2B2E3B] rounded-2xl p-8 flex flex-col items-start relative group transition-colors duration-300 h-full w-full`}
      enableTilt={true}
      glowColor="159, 124, 255"
      particleCount={15}
    >
      {soon && (
        <div className="absolute top-6 right-6 border border-[#9F7CFF]/30 text-[#9F7CFF] text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-transparent tracking-widest z-10">
          Coming Soon
        </div>
      )}
      <div className="w-20 h-20 rounded-xl bg-[#9F7CFF]/10 flex items-center justify-center mb-6 shrink-0 relative z-10">
        <div
          className="w-10 h-10 bg-[#9F7CFF]"
          style={{
            WebkitMaskImage: `url('${icon}')`,
            maskImage: `url('${icon}')`,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      </div>
      <div className="mt-auto pt-6 w-full relative z-10">
        <h3 className={`${bebasNeue.className} text-[24px] text-white tracking-wider uppercase mb-2`}>
          {title}
        </h3>
        <p className={`${roboto.className} text-[20px] text-[#818898] leading-tight`}>
          {description}
        </p>
      </div>
    </ParticleCard>
  </motion.div>
);

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section ref={containerRef} className="py-12 sm:py-16 w-full relative overflow-hidden">
      <GlobalSpotlight gridRef={containerRef} glowColor="159, 124, 255" />
      {/* Background decoration */}
      <div className="absolute inset-0 bg-transparent pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-[30px] md:text-[36px] tracking-wide text-white uppercase mb-4`}
          >
            <span className="text-[#9F7CFF]">ONE PLATFORM.</span> EVERY TOOL YOUR CREATOR BUSINESS NEEDS.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${roboto.className} text-[20px] text-[#818898] max-w-3xl`}
          >
            From DMs to deals to rupees — OneInfo runs your business while you create.
          </motion.p>
        </div>

        {/* CSS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <FeatureCard
            variants={itemVariants}
            title="AUTO DM"
            description="Replies to every comment and DM instantly. Personalized, on-brand, 24/7."
            icon="/icons/message.svg"
            className="md:col-span-2 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="SCHEDULING"
            description="Plan once. Posts go live at peak hours automatically."
            icon="/icons/schedule2.svg"
            className="md:col-span-1 min-h-[220px]"
          />

          <FeatureCard
            variants={itemVariants}
            title="PRIORITY DM"
            description="Detects buying intent and puts your hottest leads first."
            icon="/icons/prio.svg"
            className="md:col-span-1 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="ANALYTICS"
            description="Track growth, DM conversions, and affiliate revenue in one view."
            icon="/icons/analy.svg"
            className="md:col-span-2 min-h-[220px]"
          />

          <FeatureCard
            variants={itemVariants}
            title="AFFILIATED STORE"
            description="132 brands. Your own storefront. Commissions auto-tracked every sale."
            icon="/icons/store.svg"
            className="md:col-span-1 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="AI HASHTAGS"
            description="Auto-generated, niche-specific hashtags for every post."
            icon="/icons/hash.svg"
            className="md:col-span-1 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="BRAND COLLABS"
            description="AI matches you with the right brands. Deals come to you."
            icon="/icons/collab.svg"
            className="md:col-span-1 min-h-[220px]"
          />
        </motion.div>

        {/* DIVIDER: COMING SOON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="flex items-center gap-6 my-16"
        >
          <div className="h-px bg-white/10 flex-1" />
          <h3 className={`${bebasNeue.className} text-[20px] tracking-widest text-white/50 uppercase`}>
            COMING <span className="text-[#9F7CFF]">SOON</span>
          </h3>
          <div className="h-px bg-white/10 flex-1" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <FeatureCard
            variants={itemVariants}
            title="TREND DETECTION"
            description="Spot viral trends before they peak."
            icon="/icons/trendy.svg"
            soon={true}
            className="md:col-span-1 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="VIDEO EDITING"
            description="Raw footage to ready-to-post Reels — automatically."
            icon="/icons/videoo.svg"
            soon={true}
            className="md:col-span-1 min-h-[220px]"
          />
          <FeatureCard
            variants={itemVariants}
            title="AI SCRIPTING"
            description="Reel scripts and captions written by AI in seconds."
            icon="/icons/aiscr.svg"
            soon={true}
            className="md:col-span-1 min-h-[220px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
