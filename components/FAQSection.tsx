"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bebas_Neue, Roboto } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const faqs = [
  {
    question: "What is OneInfo.ai?",
    answer: "OneInfo.ai is an AI operating system designed for creators to automate their social media interactions, manage DMs, and seamlessly integrate affiliate links to maximize revenue.",
  },
  {
    question: "How to generate affiliate link?",
    answer: "You can generate affiliate links directly through your OneInfo dashboard by navigating to the Partnerships tab and selecting your approved brands.",
  },
  {
    question: "How to withdraw earnings from wallet?",
    answer: "Earnings can be withdrawn to your linked bank account or preferred payment method from the Wallet section once you reach the minimum payout threshold.",
  },
  {
    question: "How to apply for brand deals?",
    answer: "Our AI automatically matches your profile with relevant brand campaigns. You can also manually browse and apply for open deals in the Brand Collabs section.",
  },
  {
    question: "How to schedule posts?",
    answer: "Use the built-in Content Calendar to upload your media, write captions, and set specific dates and times for automated publishing across your connected platforms.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-8 lg:py-16 overflow-hidden z-10">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="mb-10 lg:mb-14 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 uppercase tracking-wider mb-3"
          >
            Got Questions?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className={`${bebasNeue.className} text-[30px] md:text-[36px] tracking-wide text-center uppercase`}
          >
            <span className="text-white">Frequently </span>
            <span className="text-[#b48cfa]">Asked Questions</span>
          </motion.h2>
        </div>

        <div className="space-y-1">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className={`${roboto.className} text-[#E4E4E6] text-[16px] lg:text-[18px] font-medium group-hover:text-white transition-colors duration-200`}>
                    {faq.question}
                  </span>
                  <div 
                    className={`ml-4 shrink-0 w-8 h-8 rounded-full border border-[#1A1A24] flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-[#1A1A24]" : "bg-transparent group-hover:border-white/20"
                    }`}
                  >
                    <svg 
                      className={`w-4 h-4 text-gray-400 group-hover:text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className={`${roboto.className} text-[#818898] pb-6 pr-12 text-[14px] lg:text-[15px] leading-relaxed`}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}