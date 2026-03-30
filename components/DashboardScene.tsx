"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function DashboardScene() {
  const [revenue, setRevenue] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  const targetRevenue = 124580;

  useEffect(() => {
    // Reset states on mount
    setRevenue(0);
    setShowMetrics(false);

    // Animate revenue counter
    const duration = 2000;
    const steps = 60;
    const increment = targetRevenue / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += increment;
      if (current >= targetRevenue) {
        setRevenue(targetRevenue);
        clearInterval(interval);
        setShowMetrics(true);
      } else {
        setRevenue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, []); // Empty dependency ensures it runs on every mount

  return (
    <div className="w-full h-full overflow-y-auto bg-obsidian p-4 pt-11">
      {/* Dashboard Container */}
      <div className="w-full space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-white text-lg font-semibold">Revenue Analytics</h2>
            <p className="text-gray-400 text-xs">Last 30 days</p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        </div>

        {/* Primary Metric - Revenue */}
        <div className="relative">
          <div className="glass rounded-xl p-4 border border-primary/30">
            <p className="text-gray-400 text-xs mb-1.5">Total Revenue Generated</p>
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              ₹{revenue.toLocaleString("en-IN")}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1.5 mt-2"
            >
              <div className="flex items-center gap-0.5 text-green-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span className="text-xs font-semibold">+42%</span>
              </div>
              <span className="text-gray-500 text-xs">from last month</span>
            </motion.div>
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-60" />
        </div>

        {/* Supporting Metrics */}
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-2"
          >
            {/* Comments Converted */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-lg p-2.5 border border-white/10"
            >
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center mb-1.5">
                <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-white">312</p>
              <p className="text-gray-400 text-[10px] mt-0.5">Comments</p>
            </motion.div>

            {/* DM Replies */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-lg p-2.5 border border-white/10"
            >
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center mb-1.5">
                <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-white">1,842</p>
              <p className="text-gray-400 text-[10px] mt-0.5">DM Replies</p>
            </motion.div>

            {/* Conversion Rate */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-lg p-2.5 border border-white/10"
            >
              <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center mb-1.5">
                <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-lg font-bold text-white">16%</p>
              <p className="text-gray-400 text-[10px] mt-0.5">Conv. Rate</p>
            </motion.div>
          </motion.div>
        )}

        {/* Revenue Graph */}
        {showMetrics && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass rounded-xl p-3 border border-white/10"
          >
            <p className="text-white text-xs font-medium mb-3">Revenue Trend</p>
            <div className="flex items-end gap-1.5 h-24">
              {[30, 45, 38, 55, 48, 70, 85, 75, 90, 100].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.5 + index * 0.08, duration: 0.4 }}
                  className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t-md"
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[10px] text-gray-500">Week 1</span>
              <span className="text-[10px] text-gray-500">Week 4</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
