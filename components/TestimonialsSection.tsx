"use client";

import { motion } from "framer-motion";
import LogoLoop from "./LogoLoop";

const testimonials = [
  {
    quote: "OneInfo.ai changed everything. I went from manually replying to 200 DMs/day to zero. My earnings tripled in 2 months!",
    name: "Priya Kapoor",
    handle: "@priyakapoor_fits",
    initials: "PK",
  },
  {
    quote: "The auto DM feature is insane. Every comment I get now turns into a potential sale. Brand deals come to me automatically!",
    name: "Rahul Arora",
    handle: "@rahul.content",
    initials: "RA",
  },
  {
    quote: "Finally an app built for Indian creators. The pricing is unbeatable and the affiliate link automation is 🔥",
    name: "Sneha Mehta",
    handle: "@sneha_beauty_world",
    initials: "SM",
  },
  {
    quote: "I schedule my reels, set DM automations, and wake up to sales notifications. This is the creator dream come true.",
    name: "Vikram Reddy",
    handle: "@vikram_techreelz",
    initials: "VR",
  },
  {
    quote: "The analytics helped me understand which content converts. My engagement rate is up 65% since I started using OneInfo.",
    name: "Ananya Trivedi",
    handle: "@ananya.lifestyle",
    initials: "AT",
  },
  {
    quote: "Best ROI I've ever seen on an app subscription. One Nykaa brand deal paid for my entire year. Highly recommend!",
    name: "Kiran Sharma",
    handle: "@kiran.creates",
    initials: "KS",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 lg:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:border-primary/30 hover:bg-white/10 w-[320px] md:w-[380px] lg:w-[420px] mx-3 h-[280px]">
    <div>
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, j) => (
          <svg key={j} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-8 text-left whitespace-normal">
        "{testimonial.quote}"
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm shadow-lg tracking-wide shrink-0">
        {testimonial.initials}
      </div>
      <div className="text-left">
        <h4 className="text-white font-semibold text-sm lg:text-base">{testimonial.name}</h4>
        <p className="text-gray-400 text-xs lg:text-sm">{testimonial.handle}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const topRow = testimonials.slice(0, 3).map((testimonial) => ({
    node: <TestimonialCard testimonial={testimonial} />
  }));

  const bottomRow = testimonials.slice(3, 6).map((testimonial) => ({
    node: <TestimonialCard testimonial={testimonial} />
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

        <div className="flex flex-col gap-6">
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