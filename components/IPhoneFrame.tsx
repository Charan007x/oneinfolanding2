"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export default function IPhoneFrame({ children }: IPhoneFrameProps) {
  const [currentTime, setCurrentTime] = useState("9:41");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();

      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();

      setCurrentTime(`${hours}:${minutesStr}`);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-[320px] h-[650px] perspective-[2000px]">
      <motion.div
        className="relative w-full h-full"
        // Continuous floating animation
        animate={{ y: [0, -20, 0] }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <motion.div
          className="relative w-full h-full"
          // 3D tilt effect on hover to emphasize the depth
          whileHover={{ rotateY: -10, rotateX: 5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow / Drop shadow from the entire phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] -z-20 bg-primary/40 blur-[80px] rounded-[100px] pointer-events-none" />
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-primary/50 via-white/10 to-transparent blur-[50px] opacity-80 pointer-events-none" />

          {/* Hardware Buttons - Left Side */}
          {/* Action Button */}
          <div className="absolute -left-[4px] top-[115px] w-[5px] h-[26px] bg-gradient-to-r from-[#2a2a2c] to-[#5a5a5e] rounded-l-[4px] border border-[#111] border-r-0 shadow-[-2px_0_4px_rgba(0,0,0,0.6)]" />
          {/* Volume Up */}
          <div className="absolute -left-[4px] top-[160px] w-[5px] h-[50px] bg-gradient-to-r from-[#2a2a2c] to-[#5a5a5e] rounded-l-[4px] border border-[#111] border-r-0 shadow-[-2px_0_4px_rgba(0,0,0,0.6)]" />
          {/* Volume Down */}
          <div className="absolute -left-[4px] top-[225px] w-[5px] h-[50px] bg-gradient-to-r from-[#2a2a2c] to-[#5a5a5e] rounded-l-[4px] border border-[#111] border-r-0 shadow-[-2px_0_4px_rgba(0,0,0,0.6)]" />

          {/* Hardware Buttons - Right Side */}
          {/* Power Button */}
          <div className="absolute -right-[4px] top-[180px] w-[5px] h-[75px] bg-gradient-to-l from-[#2a2a2c] to-[#5a5a5e] rounded-r-[4px] border border-[#111] border-l-0 shadow-[2px_0_4px_rgba(0,0,0,0.6)]" />

          {/* iPhone Outer Casing / Metallic Band */}
          <div
            className="relative w-full h-full bg-[#1c1c1e] rounded-[55px] p-[10px]"
            style={{
              boxShadow: `
              inset 0 0 2px 1px rgba(255, 255, 255, 0.2),  /* Metallic edge highlight */
              inset 0 0 12px 4px rgba(0, 0, 0, 0.9),       /* Deep inner shadow separating band from glass */
              0 0 0 1px #2a2a2c,                           /* Outer rim stroke */
              0 0 0 3px #18181A,                           /* Dark rim */
              0 30px 60px -15px rgba(0, 0, 0, 0.7)         /* 3D Drop shadow */
            `,
            }}
          >
            {/* Inner bezel reflective edge */}
            <div className="absolute inset-[4px] rounded-[50px] border-[0.5px] border-white/10 pointer-events-none" />

            {/* Screen Content Wrapper (The Glass) */}
            <div className="relative w-full h-full bg-[#0a0a0c] rounded-[45px] overflow-hidden"
              style={{
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)' // Vignette underneath the glass
              }}>

              {/* Screen Glare 1 (Diagonal shine) */}
              <div className="absolute -top-[150px] -right-[150px] w-[350px] h-[700px] bg-gradient-to-b from-white/[0.04] to-transparent rotate-[35deg] pointer-events-none z-[60] blur-[1px]" />
              {/* Screen Glare 2 (Bottom gradient) */}
              <div className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none z-[60]" />

              {/* Dynamic Island */}
              <div className="absolute top-[12px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 shadow-[0_0_4px_rgba(0,0,0,0.5),_inset_0_0_2px_rgba(255,255,255,0.1)] flex items-center justify-end px-3">
                {/* Fake camera lens inside the island */}
                <div className="w-[12px] h-[12px] rounded-full bg-[#0d0d12] shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_0_1px_rgba(0,0,0,1)] border border-white/5 relative">
                  <div className="absolute top-[3px] left-[3px] w-[4px] h-[4px] rounded-full bg-blue-500/30 blur-[1px]" />
                </div>
              </div>

              {/* Status bar (Time & Icons) */}
              <div className="absolute top-0 left-0 right-0 h-14 flex items-center justify-between px-7 pt-[2px] z-40">
                <span className="text-white text-[14px] font-medium tracking-wide ml-1 drop-shadow-md">{currentTime}</span>
                <div className="flex items-center gap-[6px] drop-shadow-md">
                  {/* Signal Icon */}
                  <svg className="w-[16px] h-[16px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 21H3L21 3v18z" />
                  </svg>
                  {/* WiFi Icon */}
                  <svg className="w-[16px] h-[16px] text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0-14c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" clipRule="evenodd" />
                  </svg>
                  {/* Battery Icon */}
                  <div className="relative flex items-center">
                    <svg className="w-[24px] h-[12px] text-white overflow-visible" fill="none" stroke="currentColor" viewBox="0 0 24 12">
                      <rect x="1" y="1" width="20" height="10" rx="3" strokeWidth="1.5" />
                      <path d="M23 4v4" strokeWidth="1.5" strokeLinecap="round" />
                      <rect x="3" y="3" width="16" height="6" rx="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Application Content injected here */}
              {/* The wrapper handles clipping the edges smoothly behind the notch */}
              <div className="w-full h-full pt-[55px] pb-[30px] rounded-b-[45px] overflow-hidden bg-obsidian relative z-10 scale-[1.01]">
                {children}
              </div>

              {/* iOS Home Indicator Bar */}
              <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 w-[135px] h-[5px] bg-white/90 rounded-full z-50 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}