"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type GalleryItem = {
  id: number;
  title: string;
  description: string;
  isComingSoon?: boolean;
  icon?: string; // Path to the icon image
};

// 10 Items to perfectly form 5 pairs
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Affiliated Store",
    description: "Earn commissions by connecting with top affiliated brands seamlessly.",
    isComingSoon: false,
    icon: "/icons/store.svg" // Replace with your actual icon path
  },
  {
    id: 2,
    title: "BRAND COLLABS",
    description: "AI - Matched brand partnership sent directly to you",
    isComingSoon: false,
    icon: "/icons/collab.svg"
  },
  {
    id: 3,
    title: "Priority DM",
    description: "High-value leads get instant priority responses.",
    isComingSoon: false,
    icon: "/icons/dm.svg"
  },
  {
    id: 4,
    title: "AI HASHTAGS",
    description: "Auto-generate trending hashtags for maximum reach.",
    isComingSoon: false,
    icon: "/icons/hash.svg"
  },
  {
    id: 5,
    title: "SCHEDULING",
    description: "Schedule reels and posts at peak engagement times. Your content goes live automatically — no manual work needed.",
    isComingSoon: false,
    icon: "/icons/schedule.svg"
  },
  {
    id: 6,
    title: "AUTO DM",
    description: "Instantly reply to every comment with AI-powered personalized DMs.",
    isComingSoon: false,
    icon: "/icons/autodm.svg"
  },
  {
    id: 7,
    title: "ANALYTICS",
    description: "Track growth, conversions, and campaign performance.",
    isComingSoon: false,
    icon: "/icons/analytics.svg"
  },
  {
    id: 8,
    title: "AI SCRIPTING",
    description: "Auto-generate viral scripts and captions.",
    isComingSoon: true,
    icon: "/icons/aiscr.svg"
  },
  {
    id: 9,
    title: "TREND DETECTION",
    description: "Spot viral trends before they peak.",
    isComingSoon: true,
    icon: "/icons/trend.svg"
  },
  {
    id: 10,
    title: "VIDEO EDITING",
    description: "AI-assisted editing for Reels and Shorts.",
    isComingSoon: true,
    icon: "/icons/video.svg"
  }
];

// Sub-component to handle the flying text elements linking exactly to scroll state
function ScrollText({ 
  item, 
  index, 
  scrollProgress,
  isRight = false
}: { 
  item: GalleryItem, 
  index: number, 
  scrollProgress: MotionValue<number>;
  isRight?: boolean;
}) {
  // Center is active when progress == index. It fades in 0.5 steps before and out 0.5 steps after.
  const opacity = useTransform(scrollProgress, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  
  // Opposite Y motion based on side
  const startY = isRight ? -40 : 40;
  const endY = isRight ? 40 : -40;
  const y = useTransform(scrollProgress, [index - 0.5, index, index + 0.5], [startY, 0, endY]);

  return (
    <motion.div 
      className={`absolute inset-x-0 w-full px-4 md:px-12 flex ${isRight ? 'flex-row-reverse' : 'flex-row'} items-center gap-4 md:gap-5`}
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
      {/* Icon Box */}
      <div className="flex-shrink-0 flex items-center justify-center overflow-hidden">
        {item.icon && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={item.icon} alt={item.title} className="w-20 h-20 md:w-32 md:h-32 object-contain opacity-90" />
        )}
      </div>

      {/* Text Area */}
      <div className={`flex flex-col ${isRight ? 'text-right' : 'text-left'}`}>
        {item.isComingSoon && (
          <span className={`${roboto.className} text-[#a57bd0] border border-[#a57bd0] rounded-full px-3 py-1 text-[11px] font-bold tracking-widest uppercase mb-3 w-fit ${isRight ? 'ml-auto' : 'mr-auto'}`}>
            Coming Soon
          </span>
        )}
        <h2 className={`${bebasNeue.className} text-4xl md:text-5xl lg:text-6xl mb-3 leading-none uppercase tracking-wide text-white`}>
          {item.title}
        </h2>
        <p className={`${roboto.className} text-gray-400 text-base md:text-lg font-normal leading-relaxed max-w-sm ${isRight ? 'ml-auto' : 'mr-auto'}`}>
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function StackSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate pairs
  const contentPairs = [];
  for (let i = 0; i < galleryItems.length; i += 2) {
    contentPairs.push({
      left: galleryItems[i],
      right: galleryItems[i + 1]
    });
  }

  const totalSteps = contentPairs.length;
  const mappedScroll = useTransform(scrollYProgress, [0, 1], [0, totalSteps - 1]);
  const sectionHeight = `${totalSteps * 100}vh`;

  return (
    <section ref={containerRef} className="relative z-10 bg-black/50 text-white border-y border-white/5" style={{ height: sectionHeight }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full mx-auto">
        
        {/* Header - Fixed at the top of the sticky container */}
        <div className="absolute top-32 md:top-24 lg:top-32 w-full px-4 text-center z-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`${roboto.className} text-sm font-medium text-gray-400 uppercase tracking-wider mb-3`}
          >
            Our Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-4xl lg:text-6xl tracking-wide text-white max-w-2xl mx-auto`}
          >
            Discover What&apos;s <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Possible</span>
          </motion.h2>
        </div>

        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center pt-24 md:pt-32 lg:pt-40">
          {/* Left Side: Animated Context Text */}
          <div className="w-full md:w-1/2 flex items-center relative h-[21vh] md:h-[40vh] lg:h-auto min-h-[170px] md:min-h-[300px]">
             {contentPairs.map((pair, i) => (
               <ScrollText 
                 key={`left-${pair.left.id}`} 
                 item={pair.left} 
                 index={i} 
                 scrollProgress={mappedScroll} 
               />
             ))}
          </div>
          
          {/* Right Side: Animated Context Text (Opposite Effect) */}
          <div className="w-full md:w-1/2 flex items-center relative h-[21vh] md:h-[40vh] lg:h-auto min-h-[170px] md:min-h-[300px]">
            {contentPairs.map((pair, i) => (
              pair.right && (
                <ScrollText 
                  key={`right-${pair.right.id}`} 
                  item={pair.right} 
                  index={i} 
                  scrollProgress={mappedScroll}
                  isRight={true}
                />
              )
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
