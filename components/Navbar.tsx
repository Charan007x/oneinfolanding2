"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 w-full z-[100] bg-[#0A0A0B]/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <svg className="w-6 h-6 text-white relative z-10" viewBox="0 0 32 32" fill="none" stroke="currentColor">
              <circle cx="12" cy="16" r="9" strokeWidth="2.5" />
              <circle cx="12" cy="16" r="4" strokeWidth="2" />
              <rect x="25" y="7" width="2.5" height="18" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-base font-bold tracking-[0.10em] text-white">ONEINFO.AI</span>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-[5px] text-gray-400 hover:text-white transition-colors focus:outline-none"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[2px] bg-current rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[2px] bg-current rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-6 h-[2px] bg-current rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <Link href="#features" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Features</Link>
              <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Testimonials</Link>
              <Link href="#pricing" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Pricing</Link>
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">About</Link>
              <Link href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors text-lg font-medium">FAQ</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}