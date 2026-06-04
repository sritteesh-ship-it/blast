/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { SERVICES } from "../data";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Background visual noise */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/2 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Engineered Solutions</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            Our Premium Services
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Scientifically optimized programs covering heavy physical loads, metabolic adaptations, performance endurance, and biochemical fueling.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="services-grid">
          {SERVICES.map((service, index) => {
            // Dynamically select the correct Lucide icon
            const IconComponent = (Icons as any)[service.icon] || Icons.HelpCircle;
            const indexStr = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                id={`service-card-${service.id}`}
                className="group relative bg-white/5 border border-white/10 p-8 rounded-none transition-all duration-300 hover:bg-white/10 hover:border-white/20 flex flex-col justify-between"
              >
                {/* Index Indicator */}
                <div className="absolute top-6 right-8 text-[11px] font-mono text-white/30 tracking-widest group-hover:text-white/60 transition-colors">
                  {indexStr}
                </div>
                
                <div>
                  {/* Icon Block */}
                  <div className="inline-flex p-3 bg-white/5 border border-white/10 text-white rounded-none mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white mb-3 uppercase tracking-wider">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Benefits / Features Checklist */}
                <div className="border-t border-white/10 pt-5 mt-4">
                  <ul className="space-y-2 text-[11px] text-zinc-400">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center space-x-2">
                        <Check className="h-3 w-3 text-white/50 shrink-0" />
                        <span className="truncate font-light">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
