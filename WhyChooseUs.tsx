/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { FEATURES } from "../data";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden">
      {/* Dynamic corner backlights */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/1 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-zinc-900 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Group */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">High Core Standards</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            WHY CHOOSE TITAN FITNESS
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            We operate at strict professional benchmarks to preserve space density, physical security, equipment purity, and coaching performance.
          </p>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="features-bento-grid">
          {FEATURES.map((feat, index) => {
            // Pick corresponding icon
            const IconComponent = (Icons as any)[feat.icon] || Icons.HelpCircle;

            return (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                id={`feature-card-${feat.id}`}
                className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-none flex flex-col justify-between"
              >
                {/* Micro corner accent */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/10 group-hover:border-white/30 transition-colors" />

                <div>
                  {/* Icon Wrapper */}
                  <div className="inline-flex p-3 bg-white/5 text-white border border-white/10 rounded-none mb-6 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Headline */}
                  <h3 className="font-display font-semibold text-white text-base uppercase tracking-wider mb-3">
                    {feat.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                {/* Micro performance indicators at bottom of card */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">
                    Standard Level • A1
                  </span>
                  <span className="text-[10px] text-white font-medium font-display uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    VERIFIED
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
