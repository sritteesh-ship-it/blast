/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-white/1 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Athlete Support</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Review critical answers about trial policies, hold options, peak timetables, and high-touch locker services.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4 mt-12" id="faq-accordion-group">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                id={`faq-panel-${faq.id}`}
                className="bg-white/5 border border-white/10 transition-all duration-300 hover:border-white/15"
              >
                {/* Header Action Button */}
                <button
                  id={`faq-header-btn-${faq.id}`}
                  onClick={() => toggleFAQ(index)}
                  className="w-full h-full flex items-center justify-between p-6 sm:p-7 text-left transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start space-x-4 pr-4">
                    <HelpCircle className="h-5 w-5 text-white/50 mt-0.5 shrink-0" />
                    <span className="font-display font-semibold text-sm sm:text-base text-white tracking-wider uppercase">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron Icon indicator */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-1 text-zinc-500 shrink-0 bg-zinc-900 border border-white/10"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </button>

                {/* Sub Body Panel with smooth heights */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 sm:px-7 sm:pb-8 pt-0 border-t border-white/10">
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                          {faq.answer}
                        </p>
                        
                        {/* Tags Category line */}
                        <div className="flex items-center space-x-1.5 mt-5">
                          <span className="h-1 w-1 bg-zinc-500" />
                          <span className="text-[9px] uppercase font-bold tracking-[0.1em] text-zinc-500">
                            Category: {faq.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>
        
        {/* Contact CTA box */}
        <div
          className="mt-16 bg-white/5 border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
          id="faq-help-desk-banner"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 border border-white/15 text-white rounded-none shrink-0">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-sm sm:text-base text-white uppercase tracking-wider">Still have any other questions left?</h3>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Our customer support desk is active 24/7 via text.</p>
            </div>
          </div>
          
          <button
            id="faq-support-btn"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 bg-zinc-900 text-white hover:bg-white hover:text-black font-medium uppercase text-[10px] tracking-[0.15em] transition-all rounded-none cursor-pointer border border-white/10"
          >
            Ask Us Directly
          </button>
        </div>

      </div>
    </section>
  );
}
