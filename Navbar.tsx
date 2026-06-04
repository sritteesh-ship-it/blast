/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

interface NavbarProps {
  onJoinClick: () => void;
  onContactClick: () => void;
}

export default function Navbar({ onJoinClick, onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Background shift on scroll
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ["home", "about", "services", "membership", "trainers", "gallery", "stories", "why-us", "faq", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Services", target: "services" },
    { label: "Plans", target: "membership" },
    { label: "Coaches", target: "trainers" },
    { label: "Gallery", target: "gallery" },
    { label: "Stories", target: "stories" },
    { label: "Why Us", target: "why-us" },
    { label: "FAQ", target: "faq" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      id="titan-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/90 backdrop-blur-md py-4 border-b border-brand-border shadow-lg"
          : "bg-transparent py-6 border-b border-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            id="nav-logo"
            className="flex items-center space-x-2.5 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <Dumbbell className="h-5 w-5 text-white transform -rotate-45 opacity-70" />
            <span className="font-display font-bold text-xl tracking-tighter text-white uppercase">
              TITAN <span className="font-light opacity-50">FITNESS</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {menuItems.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleNavClick(item.target)}
                className={`px-3 py-2 text-[10px] uppercase font-medium tracking-[0.2em] transition-all duration-200 cursor-pointer ${
                  activeSegment === item.target
                    ? "text-white border-b border-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA Check out */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              id="desktop-join-btn"
              onClick={onJoinClick}
              className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
            >
              Join Now
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-1"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav overlay */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 top-[73px] bg-brand-dark/95 backdrop-blur-lg border-b border-brand-border transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 py-6" : "opacity-0 scale-y-0 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.target}
              id={`mobile-nav-link-${item.target}`}
              onClick={() => handleNavClick(item.target)}
              className={`block w-full text-left px-4 py-3 text-xs uppercase font-medium tracking-widest transition-all duration-200 ${
                activeSegment === item.target
                  ? "bg-white/5 text-white border-l-2 border-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-3 px-4">
            <button
              id="mobile-join-btn"
              onClick={() => {
                setIsOpen(false);
                onJoinClick();
              }}
              className="w-full text-center py-3 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-zinc-200 transition-all"
            >
              Join Now
            </button>
            <button
              id="mobile-contact-btn"
              onClick={() => {
                setIsOpen(false);
                onContactClick();
              }}
              className="w-full text-center py-3 bg-transparent text-white font-medium uppercase text-xs tracking-widest hover:bg-white/5 transition-all border border-white/20"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
