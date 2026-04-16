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
            <img src="/logos/oilogo.svg" alt="OneInfo.ai Logo" className="w-8 h-8 relative z-10 object-contain" />
            <span className="text-base font-bold tracking-[0.10em] text-white">ONEINFO.AI</span>
          </Link>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="bg-[#9F7CFF] text-white px-5 py-2.5 rounded-xl font-medium hover:bg-[#8b65ff] transition-colors">Contact us</Link>
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
              <Link href="#contact" onClick={() => setIsOpen(false)} className="bg-[#9F7CFF] text-white px-6 py-3 rounded-xl text-center text-lg font-medium hover:bg-[#8b65ff] transition-colors mt-2">Contact us</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}