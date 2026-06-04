/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, X, Dumbbell, ShieldCheck, Camera } from "lucide-react";
import { GALLERY } from "../data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<"all" | "equipment" | "workout" | "sessions">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filterTabs = [
    { label: "All Facilities", target: "all" },
    { label: "Elite Hardware", target: "equipment" },
    { label: "Workout Spaces", target: "workout" },
    { label: "Active Sessions", target: "sessions" },
  ] as const;

  const filteredItems = activeFilter === "all"
    ? GALLERY
    : GALLERY.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative backing circles */}
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-white/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Gallery Title Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Interactive Portfolios</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            TITAN FACILITY GALLERY
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Take an interactive visual walk through our heavy floor, high-ventilation zones, and recovery suites.
          </p>

          {/* Filter Categories Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6" id="gallery-filters">
            {filterTabs.map((tab) => (
              <button
                key={tab.target}
                id={`gallery-filter-${tab.target}`}
                onClick={() => setActiveFilter(tab.target)}
                className={`px-4 sm:px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
                  activeFilter === tab.target
                    ? "bg-white text-black"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="gallery-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                id={`gallery-item-${item.id}`}
                className="group relative aspect-[4/3] bg-zinc-900 overflow-hidden border border-white/10 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 select-none font-sans"
                  referrerPolicy="no-referrer"
                />

                {/* Aesthetic Hover Overlay panel */}
                <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-end">
                    <div className="p-2 bg-white/10 border border-white/15 text-white rounded-none">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-white bg-white/10 px-2.5 py-1 border border-white/20">
                      {item.category}
                    </span>
                    <h3 className="font-display font-semibold text-base text-white uppercase tracking-wider mt-2.5">
                      {item.title}
                    </h3>
                    <p className="text-[10px] text-zinc-400 mt-1 uppercase tracking-wider font-light">
                      Titan Elite Area • Click to enlarge
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Interactive Lightbox Popup Viewer Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="gallery-lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button top right */}
            <button
              id="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white p-2 bg-zinc-950 border border-white/10 cursor-pointer"
              aria-label="Close image lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Click-stop image frame wrapper */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // stop click bubbling
            >
              <img
                src={selectedImage}
                alt="Enlarged modern gym facility view"
                className="max-w-full max-h-[80vh] object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="bg-zinc-950 border-t border-white/10 p-4 text-center">
                <p className="text-xs text-zinc-500 uppercase tracking-widest flex items-center justify-center space-x-1.5">
                  <Camera className="h-3.5 w-3.5 text-zinc-400" />
                  <span>Titan Fitness Premium Club Spaces</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
