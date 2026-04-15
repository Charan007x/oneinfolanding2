"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";
import { Bebas_Neue, Roboto } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

// --- MOBILE COMPONENT & DATA ---

const mobileTestimonials = [
  {
    quote: "OneInfo.ai changed everything. I went from manually replying to 200 DMs/day to zero. My earnings tripled in 2 months!",
    handle: "azhar_edutok",
    followers: "1.22M",
    image: "/assets/testimonials/azhar1.png",
    bgGradient: "from-[#13A8A8] to-[#074242]",
    imageClassName: "scale-[1.35]",
    ratingText: "4.9/5 • 10K+ CUSTOMERS",
    description: <>I share reels growth templates &amp;<br/>monetization tools that actually help you<br/>grow and earn.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/azhar_edutok"
  },
  {
    quote: "OneInfo.ai took over my entire workflow. Content, DMs, sales — everything runs on autopilot now.",
    handle: "pavanedition",
    followers: "1.02M",
    image: "/assets/testimonials/pavan.png",
    bgGradient: "from-[#8B5A2B] to-[#4A2511]",
    imageClassName: "scale-[1.15] translate-y-2",
    ratingText: "4.8/5 • 5K+ CUSTOMERS",
    description: <>Editing assets, presets &amp; bundles<br/>to take your content creation<br/>to the next level.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/pavanedition"
  },
  {
    quote: "My DMs turned into a sales machine. OneInfo handles conversations better than I did.",
    handle: "muddhugumma_",
    followers: "102k",
    image: "/assets/testimonials/muddugumma.png",
    bgGradient: "from-[#4169E1] to-[#00008B]",
    imageClassName: "scale-[1.85] -translate-x-2",
    ratingText: "5.0/5 • 2K+ CUSTOMERS",
    description: <>Fashion hauls, exclusive styling tips &amp;<br/>my personal wardrobe collection<br/>curated just for you.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/muddhugumma_"
  },
  {
    quote: "I went from managing everything manually to letting OneInfo handle it all. Growth feels effortless now.",
    handle: "tech.boy.deepak",
    followers: "494K",
    image: "/assets/testimonials/deepak.png",
    bgGradient: "from-[#CD5C5C] to-[#8B0000]",
    imageClassName: "scale-[1.45] translate-y-4",
    ratingText: "4.9/5 • 8K+ CUSTOMERS",
    description: <>Tech guides, productivity hacks &amp;<br/>exclusive cheat sheets to master<br/>your digital life.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/techboydeepak"
  },
  {
    quote: "I stopped losing leads. OneInfo captures and converts everything automatically.",
    handle: "actorguru_official",
    followers: "283K",
    image: "/assets/testimonials/guru.png",
    bgGradient: "from-[#9370DB] to-[#4B0082]",
    imageClassName: "scale-[1.85]",
    ratingText: "4.9/5 • 7K+ CUSTOMERS",
    description: <>Acting workshops, audition monologues &amp;<br/>insider tips to make it big<br/>in the industry.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/actorguru"
  }
];

const MobileTestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-[#111116] rounded-2xl flex flex-col shadow-2xl w-[280px] md:w-[350px] lg:w-[380px] mx-2 md:mx-3 flex-shrink-0 overflow-hidden border border-white/5 snap-center">
    {/* Top Image Section with specific gradient background */}
    <div className={`w-full h-[160px] md:h-[200px] bg-gradient-to-br ${testimonial.bgGradient || 'from-gray-700 to-gray-900'} relative flex items-end justify-center overflow-hidden`}>
      {testimonial.image && (
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
      
      <p className={`text-white/80 text-[14px] font-normal leading-relaxed md:leading-[1.7] mb-8 text-left ${roboto.className}`}>
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

// --- WEB COMPONENT & DATA ---

const webTestimonials = [
  // Top Row (5 Items)
  {
    quote: "OneInfo.ai changed everything. I went from manually replying to 200 DMs/day to zero. My earnings tripled in 2 months!",
    handle: "azhar_edutok",
    followers: "1.22M",
    image: "/assets/testimonials/azhar1.png",
    bgGradient: "from-[#13A8A8] to-[#074242]",
    imageClassName: "scale-[11.15] -translate-y-32",
    ratingText: "4.9/5 • 10K+ CUSTOMERS",
    description: <>I share reels growth templates &
monetization tools that actually help you
grow and earn.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://google.com" // Replace with actual link
  },
  {
    quote: "OneInfo.ai took over my entire workflow. Content, DMs, sales — everything runs on autopilot now.",
    handle: "pavanedition",
    followers: "1.02M",
    image: "/assets/testimonials/pavan.png",
    bgGradient: "from-[#8B5A2B] to-[#4A2511]",
    imageClassName: "scale-[9.15] -translate-y-28",
    ratingText: "4.8/5 • 5K+ CUSTOMERS",
    description: <>You’ll probably find something you didn’t know you needed.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/pavanedition"
  },
  {
    quote: "My DMs turned into a sales machine. OneInfo handles conversations better than I did.",
    handle: "muddhugumma_",
    followers: "102k",
    image: "/assets/testimonials/muddugumma.png",
    bgGradient: "from-[#4169E1] to-[#00008B]",
    imageClassName: "scale-[20] -translate-y-24 translate-x-4",
    ratingText: "5.0/5 • 2K+ CUSTOMERS",
    description: <>I’ve linked some beauty finds, lifestyle picks & everyday essentials I genuinely love… have a look.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/muddhugumma_"
  },
  {
    quote: "I went from managing everything manually to letting OneInfo handle it all. Growth feels effortless now.",
    handle: "tech.boy.deepak",
    followers: "494K",
    image: "/assets/testimonials/deepak1.png",
    bgGradient: "from-[#CD5C5C] to-[#8B0000]",
    imageClassName: "scale-[10.45] -translate-y-24",
    ratingText: "4.9/5 • 8K+ CUSTOMERS",
    description: <>Smart gadgets, tech tools & everyday upgrades I use… worth checking out.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/techboydeepak"
  },
  {
    quote: "I stopped losing leads. OneInfo captures and converts everything automatically.",
    handle: "actorguru",
    igHandle: "actorguru_official",
    followers: "283K",
    image: "/assets/testimonials/guru.png",
    bgGradient: "from-[#9370DB] to-[#4B0082]",
    imageClassName: "scale-[15.85] -translate-y-28 translate-x-4",
    ratingText: "4.9/5 • 7K+ CUSTOMERS",
    description: <>Useful gadgets, smart finds & everyday essentials I’ve been using… have a look.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/actorguru"
  },
  
  // Bottom Row (5 New Unique Items)
  {
    quote: "From drowning in DMs to not touching them at all… and somehow making 3x more. Crazy shift.",
    handle: "Techmerchant007",
    igHandle: "techmerchant007",
    followers: "810K",
    image: "/assets/testimonials/satyam.png", 
    bgGradient: "from-[#3B82F6] to-[#1E3A8A]",
    imageClassName: "scale-[12.10] translate-y-[-110px]",
    ratingText: "5.0/5 • 15K+ CUSTOMERS",
    description: <>I share tech tools & deals that actually help you save and grow.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/mindset_ma"
  },
  {
    quote: "Didn’t think automation would make this big of a difference, but it actually boosted my earnings and saved me hours daily.",
    handle: "karishma",
    igHandle: "karishma_makeupartist",
    followers: "650K",
    image: "/assets/testimonials/karishma.png", 
    bgGradient: "from-[#10B981] to-[#047857]",
    imageClassName: "scale-[10.2] -translate-y-28",
    ratingText: "4.9/5 • 20K+ CUSTOMERS",
    description: <>I share easy makeup tips & honest product picks.<br/>automatically.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/fitnessfanatic"
  },
  {
    quote: "The easiest ROI I've ever seen on a software tool for my creator business.",
    handle: "sandrasudheer",
    followers: "305K",
    image: "/assets/testimonials/sudheer.png", 
    bgGradient: "from-[#F59E0B] to-[#B45309]",
    imageClassName: "scale-[16.75] -translate-y-24",
    ratingText: "4.8/5 • 4K+ CUSTOMERS",
    description: <>I share easy-to-understand learning content & concepts.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/crypto_charlie"
  },
  {
    quote: "OneInfo paid for itself in exactly 3 hours. Best decision of my career.",
    handle: "telugutechtuts",
    followers: "990K",
    image: "/assets/testimonials/telugu.png", 
    bgGradient: "from-[#6366F1] to-[#4338CA]",
    imageClassName: "scale-[12.3] -translate-y-24 -translate-x-4",
    ratingText: "5.0/5 • 12K+ CUSTOMERS",
    description: <>I share tech tips, tricks & products worth using.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/business_baron"
  },
  {
    quote: "I save 4 hours a day and make 3x more sales. The math is a no brainer.",
    handle: "Nikhil",
    igHandle: "mens__fashion_vibes",
    followers: "150K",
    image: "/assets/testimonials/mens.png", 
    bgGradient: "from-[#EC4899] to-[#BE185D]",
    imageClassName: "scale-[12.8] -translate-y-24",
    ratingText: "4.9/5 • 3K+ CUSTOMERS",
    description: <>I share curated fashion tips, outfit ideas & shoppable finds.</>,
    buttonText: "VISIT ONESHOP",
    link: "https://oneshop.vip/design.diana"
  }
];

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
        <div className={`text-white/80 text-[14px] leading-relaxed ${roboto.className}`}>
          "{testimonial.quote}"
        </div>
      </div>
      <div className="flex items-center gap-3 pt-1.5 mt-auto w-full">
        <div className="text-white text-[14px] font-sans">
          @{testimonial.igHandle || testimonial.handle}
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
          <div className="absolute left-3 bottom-3 w-[234px] flex flex-col justify-start items-start z-10 hover:z-30 transition-all duration-300">
            <div className="relative w-full p-3 bg-white/20 rounded-lg border border-white/20 backdrop-blur-md flex flex-col justify-start items-start gap-1 overflow-hidden shadow-lg">
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
                
                <div 
                  className="text-[#F3F7F7] text-[15px] font-bold font-sans uppercase tracking-normal leading-none truncate flex-1 min-w-0"
                  title={testimonial.handle}
                >
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
              <div className="text-[#F3F7F7] text-[10px] font-medium font-sans uppercase mt-0.5 truncate min-w-0 w-full flex-1">
                Premium Reels & Growth Assets
              </div>
            </div>
          </div>
          
          {/* The Image (Person cutout) - z-0 so it sits behind the meta block */}
          <div className="absolute inset-0 z-0 flex flex-col justify-end items-center pointer-events-none">
            <img 
              src={testimonial.image} 
              alt={testimonial.handle} 
              className={`w-max h-max object-none object-bottom drop-shadow-2xl ${testimonial.imageClassName || ''}`}
            />
          </div>
        </div>

        {/* BACK FACE (New Design) */}
        <div 
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-between p-6 z-50" 
          style={{ 
            backfaceVisibility: 'hidden', 
            transform: 'rotateY(180deg)',
            background: '#12121A',
            boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
            outline: '1px rgba(255, 255, 255, 0.05) solid',
            outlineOffset: '-1px',
            pointerEvents: 'auto'
          }}
        >
          {/* Top Section */}
          <div className="flex flex-col items-center gap-2 mt-1">
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#A855F7" stroke="none">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="text-[10px] text-white/50 font-bold tracking-widest font-sans uppercase">
              {testimonial.ratingText || "4.9/5 • 10K+ CUSTOMERS"}
            </div>
          </div>
          
          {/* Middle Content */}
          <div className="text-center text-[13px] leading-relaxed text-white/90 font-sans px-2 mt-4 mb-6 pointer-events-none">
            {testimonial.description || (
              <>I share reels growth templates &amp;<br/>monetization tools that actually help you<br/>grow and earn.</>
            )}
          </div>
          
          {/* Button */}
          <a href={testimonial.link || "#"} target="_blank" rel="noopener noreferrer" className="relative z-50 w-full bg-[#925EF1] py-3.5 rounded-full flex justify-center items-center hover:bg-[#804EE1] transition-colors mb-2 cursor-pointer pointer-events-auto">
            <span className="text-white text-[15px] font-bold font-sans tracking-[0.15em] uppercase">
              {testimonial.buttonText || "VISIT ONESHOP"}
            </span>
          </a>
          
          {/* Bottom Footer */}
          <div className="flex items-center gap-1.5 opacity-60 mb-1">
            <span className="text-[9px] text-[#F3F7F7] font-semibold tracking-wider font-sans uppercase">
              Verified by OneInfo.ai
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="13" height="13" fill="#925EF1">
              <path d="M12.0001 2.25L14.7337 4.23847L18.0674 3.5232L19.0664 6.74558L22.1818 7.74719L21.464 11.0805L23.4503 13.8155L20.8986 15.9333L20.1808 19.2666L16.8488 18.2618L14.7337 20.248L12.0001 18.0526L9.26653 20.248L7.1514 18.2618L3.81938 19.2666L3.10156 15.9333L0.549881 13.8155L2.53616 11.0805L1.81836 7.74719L4.9338 6.74558L5.93278 3.5232L9.26653 4.23847L12.0001 2.25Z" />
              <path d="M16 10L11 15L8 12" stroke="#12121A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  // Take first 5 items (0 to 4 inclusive)
  const topRow = webTestimonials.slice(0, 5).map((testimonial) => ({
    node: <DesktopTestimonialCard testimonial={testimonial} />
  }));

  // Take the remaining 5 items
  const bottomRow = webTestimonials.slice(5).map((testimonial) => ({
    node: <DesktopTestimonialCard testimonial={testimonial} />
  }));

  return (
    <section id="testimonials" className="relative py-8 lg:py-10 overflow-hidden">
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
            className={`text-[36px] font-bold text-white relative flex items-center justify-center gap-2 ${bebasNeue.className}`}
          >
           Loved By <span className="text-[#a855f7] bg-clip-text">Creators</span>
          </motion.h2>
        </div>

        {/* Mobile View: Manually scrollable track */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory px-4 pb-8 -mx-4 gap-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {mobileTestimonials.map((testimonial, idx) => (
            <MobileTestimonialCard key={idx} testimonial={testimonial} />
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