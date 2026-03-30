"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section id="faq" className="relative py-12 lg:py-24 overflow-hidden z-10">
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
            className="text-2xl lg:text-4xl font-bold text-white tracking-tight"
          >
            Frequently <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Asked Questions</span>
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
                  <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div 
                    className={`ml-4 shrink-0 w-7 h-7 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-white/10 rotate-180" : "bg-transparent group-hover:border-white/30"
                    }`}
                  >
                    <svg 
                      className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
                      <p className="text-gray-400 pb-6 pr-12 text-sm leading-relaxed">
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