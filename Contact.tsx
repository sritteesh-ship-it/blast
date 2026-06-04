/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Strength Training",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    // Mock API processing
    setTimeout(() => {
      setLoading(false);
      setStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        program: "Strength Training",
        message: ""
      });
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    // Standard direct link with custom message
    const text = encodeURIComponent("Hello Titan Fitness! I would like to schedule a personal tour of the facility and test-drive the elite coaching programs.");
    window.open(`https://wa.me/919999999999?text=${text}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-white/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Corporate Inquiries</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            GET IN TOUCH
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Book a physical diagnostics interview, schedule an elite facility path tour, or secure corporate membership support.
          </p>
        </div>

        {/* Dual Grid block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start" id="contact-split-grid">
          
          {/* Left Side: Contact Cards & Grayscale Google Map (5 columns) */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-panel">
            
            {/* Context Cards */}
            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
              <h3 className="font-display font-semibold text-xs uppercase tracking-[0.2em] text-white pb-4 border-b border-white/10">
                HEADQUARTERS CONTACTS
              </h3>

              {/* Grid listings */}
              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-zinc-900 border border-white/10 text-white rounded-none mt-0.5">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Direct Hotline</h4>
                    <p className="text-sm text-white font-medium tracking-wide mt-1 hover:text-zinc-300 transition-colors">
                      <a href="tel:+919999999999">+91 99999 99999</a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-zinc-900 border border-white/10 text-white rounded-none mt-0.5">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Email Inquiry</h4>
                    <p className="text-sm text-white font-medium tracking-wide mt-1 hover:text-zinc-300 transition-colors">
                      <a href="mailto:membership@titanfitness.com">membership@titanfitness.com</a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-zinc-900 border border-white/10 text-white rounded-none mt-0.5">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Location Headquarters</h4>
                    <p className="text-sm text-white font-medium leading-relaxed tracking-wide mt-1">
                      Plot 42, Financial District, Gachibowli, Hyderabad, Telangana 500032
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-zinc-900 border border-white/10 text-white rounded-none mt-0.5">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">Training Hours</h4>
                    <p className="text-xs text-zinc-300 mt-1 leading-relaxed font-light">
                      Mon - Fri: 5:00 AM - 11:00 PM <br />
                      Sat - Sun: 6:00 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Trigger Button */}
              <div className="pt-6 border-t border-white/10">
                <button
                  id="whatsapp-chat-btn"
                  onClick={handleWhatsAppClick}
                  className="w-full py-4 bg-zinc-900 hover:bg-white hover:text-black text-white font-medium uppercase text-xs tracking-widest transition-all duration-300 rounded-none flex items-center justify-center space-x-2.5 border border-white/10"
                >
                  <MessageSquare className="h-4.5 w-4.5 fill-current" />
                  <span>Connect On WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Google Maps Grayscale Dark embedded map container */}
            <div className="border border-white/10 relative aspect-video w-full overflow-hidden bg-zinc-900" id="maps-embed-container">
              <iframe
                title="Google Maps Location for Titan Fitness"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8272239401777!2d78.33857321159892!3d17.42008778340156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93ef4fffffff%3A0x7d0ea66c7a6e768e!2sFinancial%20District%2C%20Nanakaramguda%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717416345678!5m2!1sen!2sin"
                className="w-full h-full border-0"
                style={{
                  filter: "grayscale(100%) invert(95%) contrast(90%) brightness(30%)",
                  mixBlendMode: "luminosity"
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Corner tech coordinate indicator */}
              <div className="absolute bottom-2.5 left-2.5 bg-zinc-950 border border-white/10 px-2 py-0.5 text-[8px] font-mono uppercase tracking-widest text-zinc-500">
                Lat: 17.4200° N | Lon: 78.3385° E
              </div>
            </div>

          </div>

          {/* Right Side: Active Contact Form (7 columns) */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-8 sm:p-10" id="contact-form-panel">
            <h3 className="font-display font-semibold text-lg text-white uppercase tracking-wider mb-2">
              SCHEDULE YOUR DIAGNOSTICS TRIAL
            </h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-8">
              Fill out the form below to register your complimentary athlete credentials file.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" id="athlete-registration-form">
              {/* Name field */}
              <div className="space-y-2">
                <label htmlFor="form-name" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Full Athlete Name <span className="text-white/60">*</span>
                </label>
                <input
                  type="text"
                  id="form-name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-zinc-900 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white placeholder-zinc-700 transition-colors"
                />
              </div>

              {/* Grid: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Email Address <span className="text-white/60">*</span>
                  </label>
                  <input
                    type="email"
                    id="form-email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-zinc-900 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white placeholder-zinc-700 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-phone" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                    Contact Phone Number
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-zinc-900 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white placeholder-zinc-700 transition-colors"
                  />
                </div>
              </div>

              {/* Program Selector */}
              <div className="space-y-2">
                <label htmlFor="form-program" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Select Interest Category <span className="text-white/60">*</span>
                </label>
                <select
                  id="form-program"
                  name="program"
                  value={formState.program}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors appearance-none"
                  style={{
                    backgroundImage: "url(\"data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>\")",
                    backgroundPosition: "right 12px center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20px"
                  }}
                >
                  <option value="Personal Training" className="bg-zinc-950 text-white">1-on-1 Elite Personal Coaching</option>
                  <option value="Strength Training" className="bg-zinc-950 text-white">Strength & Heavy Squat Mechanics</option>
                  <option value="Weight Loss" className="bg-zinc-950 text-white">Fat Loss & Active High-Density Workout</option>
                  <option value="Cardio Training" className="bg-zinc-950 text-white">Cardiovascular Endurance & Biometrics</option>
                  <option value="Group Classes" className="bg-zinc-950 text-white">Elite Scheduled Group Sessions</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="form-message" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                  Describe Your Fitness Background & Goals <span className="text-white/60">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Briefly state your training history, standard limits, and what you aim to conquer with Titan Fitness."
                  className="w-full bg-zinc-900 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-white placeholder-zinc-700 transition-colors resize-none"
                />
              </div>

              {/* Status Indicator Alerts with animation */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-zinc-900 border border-white/10 text-white flex items-start space-x-3"
                    id="form-success-banner"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-zinc-300" />
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider">Registration Completed</p>
                      <p className="text-[11px] text-zinc-400 mt-1">Thank you. Your dossier is safely locked in. An elite conditioning director will text you within 6 hours to confirm your physical slot.</p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-4 bg-zinc-900 border border-white/20 text-white flex items-start space-x-3"
                    id="form-failed-banner"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-zinc-400" />
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider">Validation Error</p>
                      <p className="text-[11px] text-zinc-400 mt-1">Please ensure all required field boxes are filled correctly before submitting.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-form-btn"
                disabled={loading}
                className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-semibold uppercase text-xs tracking-widest transition-all duration-300 rounded-none flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Configuring Slot Dossier...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Trial Dossier</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
