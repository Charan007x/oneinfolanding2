"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import InstagramScene from "./InstagramScene";
import DMScene from "./DMScene";
import DashboardScene from "./DashboardScene";
import ParticleSystem from "./ParticleSystem";
import IPhoneFrame from "./IPhoneFrame";
import Navbar from "./Navbar";

export default function HeroSection() {
  const [activeScene, setActiveScene] = useState(0);

  // Auto-play scene transitions with infinite loop
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (activeScene === 0) {
      // Instagram scene - show for 4 seconds
      timer = setTimeout(() => setActiveScene(1), 4000);
    } else if (activeScene === 1) {
      // DM scene - show for 5 seconds
      timer = setTimeout(() => setActiveScene(2), 5000);
    } else if (activeScene === 2) {
      // Dashboard scene - show for 5 seconds, then loop
      timer = setTimeout(() => setActiveScene(0), 5000);
    }

    return () => clearTimeout(timer);
  }, [activeScene]);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      {/* Hero container */}
      <div className="relative h-screen w-full overflow-hidden">
        <ParticleSystem />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-7xl mx-auto">
            {/* Left Side - Copy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6 lg:space-y-8 z-10"
            >
              {/* Badge
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 border border-primary/30"
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-gray-300">AI-Powered Automation</span>
              </motion.div> */}

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight"
              >
                <span className="text-white">Turn Comments into</span>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Revenue
                </span>{" "}
                <span className="text-white">— Automatically.</span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl"
              >
                AI responds to your audience, shares product links, and drives
                sales on autopilot.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                >
                  Start Automating
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 border border-white/20"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Scene Progress Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-3 pt-8"
              >
                <div className="flex items-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <div
                      key={index}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        index === activeScene
                          ? "w-12 bg-primary"
                          : "w-6 bg-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  {activeScene === 0 && "Engagement"}
                  {activeScene === 1 && "Automation"}
                  {activeScene === 2 && "Revenue"}
                </span>
              </motion.div>
            </motion.div>

            {/* Right Side - iPhone with Visual Flow */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <IPhoneFrame>
                <AnimatePresence mode="wait">
                  {/* Scene 1: Instagram Post */}
                  {activeScene === 0 && (
                    <motion.div
                      key="instagram"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <InstagramScene />
                    </motion.div>
                  )}

                  {/* Scene 2: DM Interface */}
                  {activeScene === 1 && (
                    <motion.div
                      key="dm"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <DMScene />
                    </motion.div>
                  )}

                  {/* Scene 3: Dashboard */}
                  {activeScene === 2 && (
                    <motion.div
                      key="dashboard"
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "-100%" }}
                      transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                      className="absolute inset-0"
                    >
                      <DashboardScene />
                    </motion.div>
                  )}
                </AnimatePresence>
              </IPhoneFrame>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          {/* <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="text-sm text-gray-400">Auto-playing demo</span>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
