/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, TrendingUp, Award, Calendar, ChevronLeft, ChevronRight, Scale } from "lucide-react";
import { SUCCESS_STORIES } from "../data";

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevStory = () => {
    setActiveIndex((prev) => (prev === 0 ? SUCCESS_STORIES.length - 1 : prev - 1));
  };

  const nextStory = () => {
    setActiveIndex((prev) => (prev === SUCCESS_STORIES.length - 1 ? 0 : prev + 1));
  };

  const activeStory = SUCCESS_STORIES[activeIndex];

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Visual styling grid */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[500px] h-[500px] bg-white/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Physiological Proof</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            MEMBER SUCCESS STORIES
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Real quantitative results from dedicated local athletes who put in consistent work under our periodized program systems.
          </p>
        </div>

        {/* Carousel Block */}
        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 overflow-hidden" id="stories-carousel-container">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Avatar Column */}
            <div className="lg:col-span-5 relative aspect-[1/1] sm:aspect-[4/3] lg:aspect-auto min-h-[300px] bg-zinc-900 border-b lg:border-b-0 lg:border-r border-white/10">
              <img
                src={activeStory.image}
                alt={activeStory.name}
                className="w-full h-full object-cover grayscale brightness-90 shrink-0 select-none font-sans"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 lg:from-black/40 via-transparent to-transparent" />
              
              {/* Achievement floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-brand-dark/95 border border-white/10 p-4 backdrop-blur-sm">
                <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-white/90 flex items-center space-x-1.5 mb-1">
                  <Award className="h-3.5 w-3.5 shrink-0" />
                  <span>{activeStory.label}</span>
                </p>
                <h4 className="font-display font-semibold text-white text-xs sm:text-sm uppercase tracking-wider">{activeStory.milestone}</h4>
              </div>
            </div>

            {/* Right: Testimonial & Stats Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8" id="stories-carousel-content">
              
              {/* Quote Body */}
              <div className="space-y-6">
                <Quote className="h-8 w-8 text-white/10 rotate-180" />
                <h3 className="font-display font-semibold text-base sm:text-lg text-white uppercase tracking-wider leading-relaxed">
                  "{activeStory.achievement}"
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light italic">
                  {activeStory.quote}
                </p>
                
                <div className="pt-2">
                  <p className="font-display font-semibold text-sm text-white uppercase tracking-wider">{activeStory.name}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Titan Fitness Member</p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="border-t border-white/10 pt-8" id="story-stats-panel">
                <div className="grid grid-cols-3 gap-4">
                  
                  {/* Metric 1 */}
                  <div className="p-3 bg-zinc-900 border border-white/10">
                    <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Indicator</p>
                    <p className="font-display font-semibold text-xs sm:text-sm text-white mt-1 uppercase truncate font-mono">
                      {activeStory.stats}
                    </p>
                  </div>

                  {/* Metric 2 */}
                  {activeStory.beforeWeight && (
                    <div className="p-3 bg-zinc-900 border border-white/10">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold flex items-center space-x-1">
                        <Scale className="h-3 w-3 inline" />
                        <span>Starting</span>
                      </p>
                      <p className="font-display font-semibold text-xs sm:text-sm text-white mt-1 uppercase font-mono">
                        {activeStory.beforeWeight}
                      </p>
                    </div>
                  )}

                  {/* Metric 3 */}
                  {activeStory.afterWeight && (
                    <div className="p-3 bg-zinc-900 border border-white/10">
                      <p className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold flex items-center space-x-1">
                        <TrendingUp className="h-3 w-3 inline" />
                        <span>Current</span>
                      </p>
                      <p className="font-display font-semibold text-xs sm:text-sm text-white mt-1 uppercase font-mono">
                        {activeStory.afterWeight}
                      </p>
                    </div>
                  )}

                </div>
              </div>

              {/* Slider Controller buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  {SUCCESS_STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      id={`story-dot-${idx}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1 transition-all duration-300 rounded-none cursor-pointer ${
                        idx === activeIndex ? "w-8 bg-white" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    id="story-prev-btn"
                    onClick={prevStory}
                    className="p-2 sm:p-3 bg-zinc-900 hover:bg-white/5 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Previous Success Story"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    id="story-next-btn"
                    onClick={nextStory}
                    className="p-2 sm:p-3 bg-zinc-900 hover:bg-white/5 text-zinc-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
                    aria-label="Next Success Story"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
