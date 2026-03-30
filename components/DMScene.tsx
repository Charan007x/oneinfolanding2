"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DMScene() {
  const [showTyping, setShowTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    // Reset all states on mount
    setShowTyping(false);
    setShowResponse(false);
    setShowProduct(false);

    // Sequence: show typing → show response → show product card
    const timer1 = setTimeout(() => setShowTyping(true), 500);
    const timer2 = setTimeout(() => {
      setShowTyping(false);
      setShowResponse(true);
    }, 2000);
    const timer3 = setTimeout(() => setShowProduct(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []); // Empty dependency ensures it runs on every mount

  return (
    <div className="w-full h-full flex flex-col bg-obsidian pt-4">
      {/* DM Header */}
      <div className="flex items-center gap-3 p-3 pt-8 border-b border-white/10 bg-obsidian">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
        <div className="flex-1">
          <p className="text-white font-semibold text-sm">oneinfo.ai</p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
            Active now
          </p>
        </div>
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 flex flex-col justify-end space-y-4 overflow-y-auto">
        {/* User message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end"
        >
          <div className="bg-primary rounded-2xl rounded-tr-sm px-4 py-2 max-w-[75%]">
            <p className="text-white text-sm">link</p>
          </div>
        </motion.div>

        {/* Typing indicator */}
        {showTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-end gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0" />
            <div className="glass rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                <motion.div
                  className="w-2 h-2 rounded-full bg-gray-400"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-gray-400"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div
                  className="w-2 h-2 rounded-full bg-gray-400"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* AI Response */}
        {showResponse && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-end gap-2"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex-shrink-0" />
            <div className="glass rounded-2xl rounded-tl-sm px-4 py-2 max-w-[75%]">
              <p className="text-white text-sm">Here is the link to the hoodie</p>
            </div>
          </motion.div>
        )}

        {/* Product Card */}
        {showProduct && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="flex items-end gap-2"
          >
            <div className="w-7 h-7 flex-shrink-0" /> {/* Spacer */}
            <div className="glass rounded-xl overflow-hidden w-[75%] border border-white/20">
              {/* Product Image */}
              <div className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 relative">
                <Image
                  src="/hoodie.png"
                  alt="Red Hoodie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-3 space-y-2 bg-obsidian/50">
                <h3 className="text-white font-semibold text-sm">Premium Streetwear Hoodie</h3>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-white">₹2,499</p>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-gray-300">4.8</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center gap-2">
                  View Product
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
