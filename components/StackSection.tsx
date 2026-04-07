"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// 10 Items to perfectly form 5 pairs
const galleryItems = [
  {
    id: 1,
    title: "Empowering Creators",
    description: "Provide the ultimate toolkit for creators to manage, monetize, and scale their audience interactively."
  },
  {
    id: 2,
    title: "AI Interactions",
    description: "Automate your DMs and engagement using personalized AI trained precisely on your brand voice."
  },
  {
    id: 3,
    title: "Brand Collaborations",
    description: "Easily connect with top-tier brands and manage sponsorships natively within our seamless dashboard."
  },
  {
    id: 4,
    title: "Advanced Analytics",
    description: "Track your growth, understand your audience, and optimize your strategy with real-time insights."
  },
  {
    id: 5,
    title: "Automated Workflows",
    description: "Save time by automating repetitive tasks and focusing on what matters most: creating content."
  },
  {
    id: 6,
    title: "Global Reach",
    description: "Expand your audience globally with multi-language support and international payment processing."
  },
  {
    id: 7,
    title: "Instant Payouts",
    description: "Get paid faster with our instant payout system, ensuring you always have access to your funds."
  },
  {
    id: 8,
    title: "Custom Integrations",
    description: "Connect your favorite tools and platforms seamlessly with our extensive API and webhooks."
  },
  {
    id: 9,
    title: "Secure Vault",
    description: "Keep your data and your audience's data safe with enterprise-grade security and encryption."
  },
  {
    id: 10,
    title: "Community Hub",
    description: "Foster a loyal community with dedicated spaces for your fans to interact and engage."
  }
];

// Sub-component to handle the flying text elements linking exactly to scroll state
function ScrollText({ 
  item, 
  index, 
  scrollProgress,
  isRight = false
}: { 
  item: typeof galleryItems[0], 
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
      className={`absolute inset-x-0 w-full px-8 md:px-16 ${isRight ? 'text-right' : 'text-left'}`}
      style={{ opacity, y, willChange: "transform, opacity" }}
    >
        <span className="text-primary text-sm font-bold tracking-widest uppercase mb-3 block">Feature {item.id < 10 ? `0${item.id}` : item.id}</span>
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">{item.title}</h2>
        <p className={`text-gray-300 text-lg leading-relaxed max-w-md ${isRight ? 'ml-auto' : 'mr-auto'}`}>{item.description}</p>
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
          <div className="w-full md:w-1/2 flex items-center relative h-[40vh] md:h-auto min-h-[300px]">
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
          <div className="w-full md:w-1/2 flex items-center relative h-[40vh] md:h-auto min-h-[300px]">
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
