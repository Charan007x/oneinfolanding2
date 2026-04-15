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
    <footer className="relative bg-[#0A0A0A] pt-16 lg:pt-24 pb-8 z-10 border-t border-white/5">
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
            <div className={`${roboto.className} flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-gray-400 mb-10`}>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Brands</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
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