"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// Placeholders for your cards and their associated text content.
// Replace the images and text with your own content!
const galleryItems = [
  {
    id: 1,
    title: "Empowering Creators",
    description: "Provide the ultimate toolkit for creators to manage, monetize, and scale their audience interactively.",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"
  },
  {
    id: 2,
    title: "AI Interactions",
    description: "Automate your DMs and engagement using personalized AI trained precisely on your brand voice.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"
  },
  {
    id: 3,
    title: "Brand Collaborations",
    description: "Easily connect with top-tier brands and manage sponsorships natively within our seamless dashboard.",
    image: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description: "Track your growth, understand your audience, and optimize your strategy with real-time insights.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
  },
  {
    id: 5,
    title: "Advanced Analytics",
    description: "Track your growth, understand your audience, and optimize your strategy with real-time insights.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"
  }
];

function ScrollCard({ 
  src, 
  index, 
  totalCards, 
  scrollProgress 
}: { 
  src: string; 
  index: number; 
  totalCards: number; 
  scrollProgress: MotionValue<number>; 
}) {
  // Define precise keyframes relative to this card's specific target step
  const input = [
    index - 3,   // Buried deep
    index - 2,   // Two steps behind
    index - 1,   // One step behind
    index,       // Front card (fully focused)
    index + 0.5, // Flipping away (swiping right)
    index + 0.8, // Fading out
    index + 1    // Gone
  ];

  const scaleOut = [0.85, 0.90, 0.95, 1, 1, 1, 1];
  const yOut = [60, 40, 20, 0, 0, 0, 0]; // Simulates depth drop
  const rotOut = [0, -4, 4, 0, 20, 20, 20]; // Natural alternating tilt for stacked cards
  const xOut = [0, 0, 0, 0, 300, 400, 400]; // Swipe distance
  const opacityOut = [0, 1, 1, 1, 1, 0, 0];

  const scale = useTransform(scrollProgress, input, scaleOut);
  const x = useTransform(scrollProgress, input, xOut);
  const y = useTransform(scrollProgress, input, yOut);
  const rotateZ = useTransform(scrollProgress, input, rotOut);
  const opacity = useTransform(scrollProgress, input, opacityOut);
  
  // Cards earlier in the array sit on top 
  const zIndex = totalCards - index;

  return (
    <motion.div
      className="absolute inset-0 rounded-[20px] overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.4)] border border-white/10 bg-[#111116]"
      style={{
        scale,
        x,
        y,
        rotateZ,
        opacity,
        zIndex,
        transformOrigin: "bottom center",
        willChange: "transform, opacity"
      }}
    >
      <img 
        src={src} 
        alt={`card-${index}`} 
        className="w-full h-full object-cover pointer-events-none"
      />
    </motion.div>
  );
}

// Sub-component to handle the flying text elements linking exactly to scroll state
function ScrollText({ 
  item, 
  index, 
  scrollProgress 
}: { 
  item: typeof galleryItems[0], 
  index: number, 
  scrollProgress: MotionValue<number> 
}) {
  // Center is active when progress == index. It fades in 0.5 steps before and out 0.5 steps after.
  const opacity = useTransform(scrollProgress, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const y = useTransform(scrollProgress, [index - 0.5, index, index + 0.5], [40, 0, -40]);

  return (
    <motion.div 
      className="absolute inset-x-0 w-full px-8 md:px-16"
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Feature 0{index + 1}</span>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">{item.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-md">{item.description}</p>
    </motion.div>
  );
}

export default function StackSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate strict heights based on how many cards are passed in
  const totalCards = galleryItems.length;
  const mappedScroll = useTransform(scrollYProgress, [0, 1], [0, totalCards - 1]);
  const sectionHeight = `${totalCards * 100}vh`;

  return (
    <section ref={containerRef} className="relative z-10 bg-black/50 text-white border-y border-white/5" style={{ height: sectionHeight }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden w-full mx-auto">
        
        {/* Header - Fixed at the top of the sticky container */}
        <div className="absolute top-12 lg:top-24 w-full px-4 text-center z-20">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Our Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-white max-w-2xl mx-auto"
          >
            Discover What&apos;s <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Possible</span>
          </motion.h2>
        </div>

        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center pt-24 lg:pt-32">
          {/* Left Side: Animated Context Text */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative h-[40vh] md:h-auto min-h-[300px]">
             {galleryItems.map((item, i) => (
               <ScrollText 
                 key={`text-${item.id}`} 
                 item={item} 
                 index={i} 
                 scrollProgress={mappedScroll} 
               />
             ))}
          </div>
          
          {/* Right Side: The Animated Card Stack */}
          <div className="w-full md:w-1/2 flex items-center justify-center pb-12 md:pb-0">
            <div className="relative" style={{ width: 280, height: 380, perspective: 1200 }}>
              {galleryItems.map((item, i) => (
                <ScrollCard 
                  key={`card-${item.id}`} 
                  src={item.image} 
                  index={i} 
                  totalCards={totalCards} 
                  scrollProgress={mappedScroll} 
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
