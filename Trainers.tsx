/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, ChevronDown, ChevronUp, Star, ShieldCheck } from "lucide-react";
import { TRAINERS } from "../data";

export default function Trainers() {
  const [expandedTrainer, setExpandedTrainer] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedTrainer(expandedTrainer === id ? null : id);
  };

  return (
    <section id="trainers" className="py-24 sm:py-32 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Dynamic styling blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title and Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">The Elite Roster</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            MEET OUR CERTIFIED COACHES
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Our directors and coaches maintain active athletic certifications and physical medicine study paths to guide your body with precision.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" id="trainers-grid">
          {TRAINERS.map((trainer, index) => {
            const isExpanded = expandedTrainer === trainer.id;

            return (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`trainer-card-${trainer.id}`}
                className="bg-white/5 border border-white/10 group flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900 border-b border-white/10">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none font-sans"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Floating experience tag overlay */}
                    <div className="absolute top-3 right-3 bg-brand-dark/95 text-white text-[9px] font-bold uppercase tracking-[0.15em] px-2.5 py-1.5 border border-white/10">
                      {trainer.experience}
                    </div>

                    {/* Gradient darkening layer */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Identification texts */}
                  <div className="p-6">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-3 w-3 fill-white text-white opacity-80" />
                      <span className="text-[9px] uppercase tracking-[0.15em] text-white font-medium opacity-80">
                        {trainer.role}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-base sm:text-lg text-white uppercase tracking-wider group-hover:text-white transition-colors duration-200">
                      {trainer.name}
                    </h3>
                    
                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-wider mt-1.5 min-h-[30px]">
                      Spec: <span className="text-zinc-300 font-light">{trainer.specialty}</span>
                    </p>

                    {/* Interactive Brief Bio Block */}
                    <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mb-3"
                          >
                            <p className="text-xs text-zinc-400 leading-relaxed font-light mb-4">
                              {trainer.bio}
                            </p>
                            
                            {/* Certifications array */}
                            <div className="space-y-1.5">
                              <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest flex items-center space-x-1">
                                <Award className="h-3 w-3 text-white/75 shrink-0" />
                                <span>Accredited Credentials:</span>
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {trainer.certifications.map((cert) => (
                                  <span
                                    key={cert}
                                    className="px-2 py-0.5 bg-zinc-900 text-zinc-400 text-[9px] uppercase tracking-wider border border-white/5 rounded-none font-light"
                                  >
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        id={`trainer-toggle-btn-${trainer.id}`}
                        onClick={() => toggleExpand(trainer.id)}
                        className="w-full flex items-center justify-between py-1 text-[10px] text-zinc-400 hover:text-white font-medium uppercase tracking-[0.1em] transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Bio & Credentials" : "Show Bio & Credentials"}</span>
                        {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                      </button>
                    </div>

                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
