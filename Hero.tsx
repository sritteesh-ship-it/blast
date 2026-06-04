/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onJoinClick, onContactClick }: HeroProps) {
  // We use the custom generated hero image
  const heroImg = "/src/assets/images/titan_hero_1780490860467.png";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark pt-20"
    >
      {/* Immersive Image Background with dynamic overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Titan Fitness Elite Facility"
          className="w-full h-full object-cover scale-105 select-none font-sans"
          referrerPolicy="no-referrer"
        />
        {/* Modern multi-stop gradient overlays to darken and style the asset */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
        {/* Subtle radial light in corner for the electric gold glow */}
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
            id="hero-badge"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-light text-zinc-300 block">
              Est. 2024 / Elite Performance
            </span>
          </motion.div>

          {/* Large bold headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-semibold text-5xl sm:text-7xl lg:text-[84px] leading-[0.85] tracking-tighter text-white mb-6 uppercase"
            id="hero-header"
          >
            TRANSFORM<br />
            YOUR BODY.<br />
            <span className="text-outline">YOUR LIFE.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-400 font-light leading-relaxed mb-8 max-w-md"
            id="hero-subtext"
          >
            Premium fitness training, modern equipment, and expert coaching designed for the high-achiever.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row items-center gap-4"
            id="hero-ctas"
          >
            <button
              id="hero-join-now-btn"
              onClick={onJoinClick}
              className="bg-white text-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors"
            >
              Join Now
            </button>

            <button
              id="hero-contact-us-btn"
              onClick={onContactClick}
              className="border border-white/20 px-10 py-4 text-xs font-bold uppercase tracking-widest hover:border-white transition-colors text-white"
            >
              Enquire
            </button>
          </motion.div>
        </div>
      </div>

      {/* Trust metric ribbon footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-brand-dark/90 backdrop-blur-md border-t border-white/10 py-6 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-4 text-center divide-x divide-white/10">
            <div id="stat-space" className="p-2">
              <p className="font-display font-semibold text-2xl lg:text-3xl text-white">12,000+</p>
              <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-zinc-500 mt-1">Sq. Ft. Elite Facility</p>
            </div>
            <div id="stat-coaches" className="p-2">
              <p className="font-display font-semibold text-2xl lg:text-3xl text-white">40+</p>
              <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-zinc-500 mt-1">Tier 1 Certified Coaches</p>
            </div>
            <div id="stat-equipment" className="p-2">
              <p className="font-display font-semibold text-2xl lg:text-3xl text-white">100%</p>
              <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-zinc-500 mt-1">Hammer Strength Hardware</p>
            </div>
            <div id="stat-satisfaction" className="p-2">
              <p className="font-display font-semibold text-2xl lg:text-3xl text-white">4.9/5★</p>
              <p className="text-[9px] uppercase font-medium tracking-[0.2em] text-zinc-500 mt-1">Member Satisfaction Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
