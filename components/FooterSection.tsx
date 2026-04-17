"use client";

import { motion } from "framer-motion";
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function FooterSection() {
  return (
    <footer id="contact" className="relative bg-[#0A0A0A] pt-16 lg:pt-24 pb-8 z-10 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-16 lg:gap-24">
          
          {/* Left Column - Brand Info */}
          <div className="flex-1 lg:max-w-xl">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <img src="/logos/oilogo.svg" alt="OneInfo.ai Logo" className="w-10 h-10 object-contain text-white relative z-10" />
              <span className="text-xl font-bold tracking-[0.15em] text-white">ONEINFO.AI</span>
            </div>

            <p className={`${roboto.className} text-[#818898] text-[16px] leading-relaxed mb-6`}>
              The AI Operating System for Creators — automate DMs, grow your audience, and turn conversations into cashflow.
            </p>

            <div className={`${roboto.className} text-[#818898] text-[14px] leading-relaxed mb-8`}>
              <p>4th Floor, SBR Gateway, Minoura lane,</p>
              <p>Hitech City Main Rd, opp. Cyber Gateway,</p>
              <p>Hyderabad, Telangana 500081</p>
            </div>

            {/* Links */}
            <div className={`${roboto.className} flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-gray-400 mb-6`}>
              <a href="/#features" className="hover:text-white transition-colors">Features</a>
              <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="/#brands" className="hover:text-white transition-colors">Brands</a>
              <a href="/#about" className="hover:text-white transition-colors">About</a>
              <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
            </div>

            {/* Socials */}
            <div className="flex gap-4 mb-10 text-gray-400">
              <a href="https://www.instagram.com/joinoneinfo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Oneinfo/61573509544690/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/join-one-info/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@joinoneinfo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:bg-white/10 hover:border-white/20">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="https://apps.apple.com/in/app/oneinfo-ai-assistant/id6517354494"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#121217] border border-white/5 rounded-xl px-5 py-2.5 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.48.26 3.64 1.95-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.86zM15.02 4.22c.69-.87 1.15-2.08.98-3.27-1.06.05-2.39.73-3.1 1.6-.58.68-1.14 1.92-.93 3.08 1.18.1 2.37-.58 3.05-1.41z"/>
                </svg>
                <div className="text-left flex flex-col justify-center translate-y-[-1px]">
                  <span className={`${roboto.className} text-[10px] text-[#818898] font-medium pb-0.5 uppercase`}>Download on the</span>
                  <span className={`${bebasNeue.className} text-[18px] tracking-widest text-[#F0F1F5] leading-none mt-1`}>APP STORE</span>
                </div>
              </a>

              <a 
                href="https://play.google.com/store/apps/details?id=com.gadgetspidy.oneinfo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#121217] border border-white/5 rounded-xl px-5 py-2.5 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-[#F0F1F5]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 21V3L19 12L5 21Z" />
                </svg>
                <div className="text-left flex flex-col justify-center translate-y-[-1px]">
                  <span className={`${roboto.className} text-[10px] text-[#818898] font-medium pb-0.5 uppercase`}>Get it on</span>
                  <span className={`${bebasNeue.className} text-[18px] tracking-widest text-[#F0F1F5] leading-none mt-1`}>GOOGLE PLAY</span>
                </div>
              </a>
            </div>

            <p className={`${roboto.className} text-[#818898] text-[12px]`}>
              Meta Verified Platform — Trusted integration with Meta ecosystem
            </p>
          </div>

          {/* Right Column - Contact Form */}
          <div className="flex-1 lg:max-w-md w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className={`${roboto.className} text-[12px] text-[#9F7CFF] font-bold tracking-widest uppercase mb-2`}>
                Get In Touch
              </p>
              <h2 className={`${bebasNeue.className} text-[40px] tracking-wide text-[#F0F1F5] mb-8`}>
                CONTACT <span className="text-[#9F7CFF]">US</span>
              </h2>

              <form className={`${roboto.className} space-y-6`} action="mailto:support@oneinfo.io" method="POST" encType="text/plain">
                <div>
                  <label className="block text-[12px] font-semibold text-[#818898] uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-[#111115] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#9F7CFF]/50 focus:bg-[#9F7CFF]/5 transition-all outline-none placeholder:text-[#818898]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#818898] uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full bg-[#111115] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#9F7CFF]/50 focus:bg-[#9F7CFF]/5 transition-all outline-none placeholder:text-[#818898]"
                  />
                </div>

                <div>
                  <label className="block text-[12px] font-semibold text-[#818898] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-[#111115] border border-white/5 rounded-xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:border-[#9F7CFF]/50 focus:bg-[#9F7CFF]/5 transition-all outline-none resize-none placeholder:text-[#818898]"
                  />
                </div>

                <button 
                  type="submit"
                  className="bg-[#9F7CFF] text-[#F0F1F5] font-semibold text-[16px] px-8 py-3 rounded-xl hover:bg-[#8b65ff] transition-colors w-fit shadow-lg shadow-[#9F7CFF]/20"
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`${roboto.className} mt-16 pt-8 border-t border-white/5 text-center`}>
          <p className="text-[#818898] tracking-wide text-[12px]">
            © 2026 OneInfo.ai — All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}