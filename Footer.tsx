/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Dumbbell, Instagram, Youtube, Facebook, ArrowUp, Send, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  const handleLinkClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 text-zinc-400 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10" id="footer-inner-wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Logo Brand signature (4 columns) */}
          <div className="lg:col-span-4 space-y-6" id="footer-logo-column">
            <div className="flex items-center space-x-2.5 cursor-pointer" onClick={scrollToTop}>
              <Dumbbell className="h-5 w-5 text-white transform -rotate-45" />
              <span className="font-display font-semibold text-lg tracking-[0.15em] text-white uppercase">
                TITAN <span className="font-light text-zinc-400">FITNESS</span>
              </span>
            </div>
            
            <p className="text-xs leading-relaxed font-light text-zinc-500 pr-4">
              Titan Fitness operates state-of-the-art facilities engineered to remove boundaries. Backed by accredited coaching methodologies, clean amenities, and elite-caliber biomechanical strength equipment.
            </p>

            {/* Social media icons list */}
            <div className="flex items-center space-x-3 pt-2" id="footer-social-links">
              {[
                { icon: Instagram, href: "https://instagram.com/titanfitness" },
                { icon: Youtube, href: "https://youtube.com/titanfitness" },
                { icon: Facebook, href: "https://facebook.com/titanfitness" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-zinc-950 hover:bg-white hover:text-black border border-white/10 text-zinc-400 transition-all duration-300 rounded-none"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (2 columns) */}
          <div className="lg:col-span-2 space-y-4" id="footer-links-quick">
            <h4 className="font-display font-medium text-[10px] uppercase tracking-[0.2em] text-white pb-3 border-b border-white/10">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { label: "Home Base", id: "home" },
                { label: "Our Story", id: "about" },
                { label: "Equipment & Services", id: "services" },
                { label: "Investment Plans", id: "membership" },
                { label: "Elite Coaches", id: "trainers" },
                { label: "Gallery Tours", id: "gallery" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(link.id)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Column (3 columns) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-programs">
            <h4 className="font-display font-medium text-[10px] uppercase tracking-[0.2em] text-white pb-3 border-b border-white/10">
              PHYSIQUE PROGRAMS
            </h4>
            <ul className="space-y-2.5 text-xs font-light">
              {[
                { label: "1-on-1 Elite Personal Coaching", id: "services" },
                { label: "Heavy Powerlifting Mechanics", id: "services" },
                { label: "High-Intensity Fat Optimization", id: "services" },
                { label: "VO2 Max Endurance Cardio", id: "services" },
                { label: "Nutrition & Biochemical Fueling", id: "services" },
                { label: "Group Calisthenics & Energy Flows", id: "services" }
              ].map((prog, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLinkClick(prog.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {prog.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column (3 columns) */}
          <div className="lg:col-span-3 space-y-4" id="footer-links-contacts">
            <h4 className="font-display font-medium text-[10px] uppercase tracking-[0.2em] text-white pb-3 border-b border-white/10">
              DIRECT COORDINATES
            </h4>
            <ul className="space-y-3 text-xs font-light text-zinc-500">
              <li className="leading-relaxed">
                <span className="text-zinc-300 font-medium block uppercase text-[8px] tracking-[0.15em] mb-1">HQ Address</span>
                Plot 42, Financial District, Gachibowli, Hyderabad, TS 500032
              </li>
              <li>
                <span className="text-zinc-300 font-medium block uppercase text-[8px] tracking-[0.15em] mb-1">Direct Call</span>
                <a href="tel:+919999999999" className="hover:text-white transition-colors text-zinc-400">+91 99999 99999</a>
              </li>
              <li>
                <span className="text-zinc-300 font-medium block uppercase text-[8px] tracking-[0.15em] mb-1">Direct Write</span>
                <a href="mailto:membership@titanfitness.com" className="hover:text-white transition-colors text-zinc-400">membership@titanfitness.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Bottom segment */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6" id="footer-legal-bar">
          
          {/* Copyright description */}
          <p className="text-[10px] text-zinc-600 text-center md:text-left uppercase tracking-[0.15em] font-light">
            &copy; {currentYear} Titan Fitness Pvt. Ltd. All rights reserved. • Built for elite performers.
          </p>

          {/* Secondary Actions / Back to top button */}
          <div className="flex items-center space-x-6" id="footer-actions-last">
            <button
              onClick={() => handleLinkClick("faq")}
              className="text-[10px] uppercase font-medium text-zinc-500 hover:text-white transition-colors"
            >
              Faq Support
            </button>
            <button
              onClick={() => handleLinkClick("contact")}
              className="text-[10px] uppercase font-medium text-zinc-500 hover:text-white transition-colors"
            >
              Access Dossier Term
            </button>
            
            {/* Scroll back to top */}
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="p-2 bg-zinc-950 border border-white/10 text-zinc-400 hover:text-white hover:border-white transition-all duration-300 rounded-none cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
