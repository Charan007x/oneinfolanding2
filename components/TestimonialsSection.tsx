"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

const testimonials = [
  {
    quote: "OneInfo.ai changed everything. I went from manually replying to 200 DMs/day to zero. My earnings tripled in 2 months!",
    handle: "azhar_edutok",
    followers: "1.22M",
    image: "/assets/testimonials/azhar.png",
    bgGradient: "from-[#13A8A8] to-[#074242]"
  },
  {
    quote: "OneInfo.ai took over my entire workflow. Content, DMs, sales — everything runs on autopilot now.",
    handle: "pavanedition",
    followers: "1.02M",
    image: "/assets/testimonials/pavan.png",
    bgGradient: "from-[#8B5A2B] to-[#4A2511]",
    imageClassName: "scale-[1.15] translate-y-2" // Example: slightly larger, pushed down
  },
  {
    quote: "My DMs turned into a sales machine. OneInfo handles conversations better than I did.",
    handle: "muddhugumma_",
    followers: "102k",
    image: "/assets/testimonials/muddugumma.png",
    bgGradient: "from-[#4169E1] to-[#00008B]",
    imageClassName: "scale-[1.85] -translate-x-2" // Example: larger, pushed right 
  },
  {
    quote: "I went from managing everything manually to letting OneInfo handle it all. Growth feels effortless now.",
    handle: "tech.boy.deepak",
    followers: "494K",
    image: "/assets/testimonials/deepak.png",
    bgGradient: "from-[#CD5C5C] to-[#8B0000]",
    imageClassName: "scale-[1.45] translate-y-4" // Example: normal size, pushed further down
  },
  {
    quote: "I stopped losing leads. OneInfo captures and converts everything automatically.",
    handle: "actorguru_official",
    followers: "283K",
    image: "/assets/testimonials/guru.png",
    bgGradient: "from-[#9370DB] to-[#4B0082]",
    imageClassName: "scale-[1.85]" // No changes for this one
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-[#111116] rounded-2xl flex flex-col shadow-2xl w-[280px] md:w-[350px] lg:w-[380px] mx-2 md:mx-3 flex-shrink-0 overflow-hidden border border-white/5 snap-center">
    {/* Top Image Section with specific gradient background */}
    <div className={`w-full h-[160px] md:h-[200px] bg-gradient-to-br ${testimonial.bgGradient || 'from-gray-700 to-gray-900'} relative flex items-end justify-center overflow-hidden`}>
      {testimonial.image && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img 
          src={testimonial.image} 
          alt={testimonial.handle} 
          className={`w-auto h-full md:h-[95%] object-contain object-bottom drop-shadow-xl ${testimonial.imageClassName || ''}`} 
        />
      )}
    </div>
    
    {/* Content Section */}
    <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
      <div className="mb-4">
        <span className="text-[#FBBF24] text-[13px] md:text-[15px] tracking-[3px]">★★★★★</span>
      </div>
      
      <p className="text-white/80 text-[14px] md:text-[16px] font-normal leading-relaxed md:leading-[1.7] mb-8 text-left font-sans">
        "{testimonial.quote}"
      </p>
      
      <div className="mt-auto flex items-center gap-6">
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span className="text-white text-[15px] md:text-[16px] font-medium font-sans">{testimonial.handle}</span>
        </div>
        
        <div className="flex items-center gap-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span className="text-white text-[15px] md:text-[16px] font-medium font-sans">{testimonial.followers}</span>
        </div>
      </div>
    </div>
  </div>
);

const DesktopTestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="relative w-[600px] h-[260px] mx-4 flex-shrink-0">
    {/* Text Description Block */}
    <div className="absolute w-[315px] h-[260px] left-0 top-0 p-7 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-start items-start gap-4">
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-[#FBBF24] text-[13px] tracking-[3px] font-sans">
          ★★★★★
        </div>
      </div>
      <div className="flex flex-col justify-start items-start w-full">
        <div className="text-white/80 text-[14px] font-sans leading-relaxed">
          "{testimonial.quote}"
        </div>
      </div>
      <div className="flex items-center gap-3 pt-1.5 mt-auto w-full">
        <div className="text-white text-[14px] font-sans">
          @{testimonial.handle}
        </div>
      </div>
    </div>

    {/* Image Block with 3D Flip on Hover */}
    <div className="absolute w-[260px] h-[260px] left-[333px] top-0 group" style={{ perspective: '1000px' }}>
      
      {/* 3D Container */}
      <div 
        className="relative w-full h-full transition-transform duration-700" 
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Helper class added via global CSS or inline styles for hover state; we'll use Tailwind's arbitrary variants for group-hover */}
        <style>{`
          .group:hover .transition-transform {
            transform: rotateY(180deg);
          }
        `}</style>
        
        {/* FRONT FACE (Original Image Card) */}
        <div 
          className={`absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-gradient-to-br ${testimonial.bgGradient || 'from-[#202727] to-[#101515]'}`} 
          style={{ backfaceVisibility: 'hidden' }}
        >
          
          {/* Dark gradient mapping from origin background vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-0 pointer-events-none" />

          {/* Floating Meta Block (z-10, sits behind transparent cutout images) */}
          <div className="absolute left-3 bottom-3 w-[234px] flex flex-col justify-start items-start z-10">
            <div className="relative w-full p-3 bg-white/10 rounded-lg border border-white/10 backdrop-blur-md flex flex-col justify-start items-start gap-1 overflow-hidden">
              {/* Main info row */}
              <div className="flex items-center justify-start gap-1 w-full overflow-hidden">
                {/* Instagram Icon */}
                <div className="shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                
                <div className="text-[#F3F7F7] text-lg font-bold font-sans uppercase tracking-wide leading-none truncate flex-1 min-w-0">
                  {testimonial.handle}
                </div>
                
                {/* Verified badge */}
                <div className="shrink-0 flex items-center justify-center ml-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="#925EF1">
                    <path d="M12.0001 2.25L14.7337 4.23847L18.0674 3.5232L19.0664 6.74558L22.1818 7.74719L21.464 11.0805L23.4503 13.8155L20.8986 15.9333L20.1808 19.2666L16.8488 18.2618L14.7337 20.248L12.0001 18.0526L9.26653 20.248L7.1514 18.2618L3.81938 19.2666L3.10156 15.9333L0.549881 13.8155L2.53616 11.0805L1.81836 7.74719L4.9338 6.74558L5.93278 3.5232L9.26653 4.23847L12.0001 2.25Z" />
                    <path d="M16 10L11 15L8 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                
                {/* External link / Redirect icon */}
                <div className="shrink-0 ml-auto flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
              </div>
              
              {/* Followers count */}
              <div className="flex items-center gap-1.5 w-full mt-1 overflow-hidden text-[#F3F7F7]">
                <div className="shrink-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="text-[11px] font-bold font-sans truncate min-w-0">
                  {testimonial.followers} followers
                </div>
              </div>
              
              {/* Category */}
              <div className="text-[#A7ACAB] text-[10px] font-medium font-sans uppercase mt-0.5 truncate min-w-0 w-full flex-1">
                Premium Reels & Growth Assets
              </div>
            </div>
          </div>
          
          {/* The Image (Person cutout - z-20 so it overlaps the frosted glass properly!) */}
          <div className="absolute inset-0 z-20 flex flex-col justify-end items-center pointer-events-none">
            <img 
              src={testimonial.image} 
              alt={testimonial.handle} 
              className={`w-full h-full object-contain object-bottom drop-shadow-2xl ${testimonial.imageClassName || ''}`}
            />
          </div>
        </div>

        {/* BACK FACE (White Card placeholder) */}
        <div 
          className="absolute inset-0 rounded-xl bg-white shadow-2xl border border-gray-200 flex flex-col items-center justify-center p-6 text-center" 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <h3 className="text-[#111116] font-bold font-sans text-xl mb-2">@{testimonial.handle}</h3>
          <p className="text-gray-600 font-sans text-sm">More detailed statistics and specific ROI numbers will go here.</p>
          <div className="mt-4 bg-[#FBBF24]/10 text-[#F59E0B] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Verified Creator
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const topRow = testimonials.slice(0, 4).map((testimonial) => ({
    node: <DesktopTestimonialCard testimonial={testimonial} />
  }));

  const bottomRow = testimonials.slice(4, 9).map((testimonial) => ({
    node: <DesktopTestimonialCard testimonial={testimonial} />
  }));

  return (
    <section id="testimonials" className="relative py-12 lg:py-16 overflow-hidden">
      <div className="container mx-auto relative z-10 px-0 md:px-4">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Creator Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl font-bold text-white relative flex items-center justify-center gap-2"
          >
           Loved By <span className="text-[#a855f7] bg-clip-text">Creators</span>
          </motion.h2>
        </div>

        {/* Mobile View: Manually scrollable track */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory px-4 pb-8 -mx-4 gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard key={idx} testimonial={testimonial} />
          ))}
        </div>

        {/* Desktop View: Scrolling animation Loop */}
        <div className="hidden md:flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LogoLoop
              logos={topRow}
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
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <LogoLoop
              logos={bottomRow}
              speed={40}
              direction="right"
              gap={0}
              hoverSpeed={0}
              fadeOut
              fadeOutColor="#0b0b0f"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}