/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Shield, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative background grid and shapes */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.01),transparent_40%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-zinc-900 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Showcase Col */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="about-visuals"
          >
            {/* Main overlay frame */}
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden border border-white/10 bg-zinc-900 group">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Strength coaching session"
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Overlay Stat block */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-brand-dark/95 border border-white/10 p-5 backdrop-blur-sm"
                id="about-floating-stat"
              >
                <p className="font-display font-bold text-xl text-white uppercase tracking-wider">No Compromise.</p>
                <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-widest">Premium hardware & elite standard of training.</p>
              </div>
            </div>
            
            {/* Back decorative border shape */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-white/10 -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Text Details Col */}
          <div className="space-y-8" id="about-content">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Our Story & Mission</span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-tighter leading-none">
                ABOUT TITAN FITNESS
              </h2>
              <div className="h-[1px] w-12 bg-white" />
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm font-light">
              Founded in 2018 with a vision to eliminate generic commercial gym traps, Titan Fitness provides a streamlined athletic environment built for real physiological changes. We combine elite, highly heavy-duty lifting hardware with the country's most qualified coaches to establish a space where effort meets results.
            </p>

            {/* Mission & Vision split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="about-blocks">
              <div className="p-5 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Award className="h-5 w-5 text-white/75" />
                  <h3 className="font-display font-medium text-xs text-white uppercase tracking-[0.15em]">Our Mission</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  To provide the optimal physical environment, personalized system roadmaps, and highly skilled coaching needed to unlock absolute strength.
                </p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-3">
                  <Shield className="h-5 w-5 text-white/75" />
                  <h3 className="font-display font-medium text-xs text-white uppercase tracking-[0.15em]">Our Vision</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  To serve as India's premier athletic fitness house, celebrated for top-tier coaching credentials, real-time client transformations, and community depth.
                </p>
              </div>
            </div>

            {/* Key benefits bullets checklist */}
            <div className="space-y-3" id="about-checks">
              <h4 className="font-display font-semibold text-[10px] text-white uppercase tracking-[0.25em]">Why Choose Titan Fitness</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Science-based training paradigms",
                  "Elite class-leading biomechanics gear",
                  "Accredited CSCS & Nutrition specialists",
                  "Low-occupancy cap for high workspace",
                  "Comprehensive progress biomechanics tests",
                  "Unparalleled level of active accountability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2 text-xs text-zinc-400">
                    <CheckCircle2 className="h-4 w-4 text-white/60 shrink-0 mt-0.5" />
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
