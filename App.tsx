/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Dumbbell, Calendar, CreditCard, Sparkles, AlertCircle, ShieldCheck } from "lucide-react";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import SuccessStories from "./components/SuccessStories";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Modal states for Join Onboarding Flow
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("Standard");
  const [selectedPlanPrice, setSelectedPlanPrice] = useState("89");

  // Onboarding Form States
  const [joinForm, setJoinForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    startDate: new Date().toISOString().split("T")[0],
    termsAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [memberId, setMemberId] = useState("");

  const handleOpenJoinWithPlan = (planName: string, price: string) => {
    setSelectedPlanName(planName);
    setSelectedPlanPrice(price);
    setIsJoinModalOpen(true);
    setSubmitStatus("idle");
  };

  const handleOpenJoinGeneral = () => {
    setSelectedPlanName("Standard");
    setSelectedPlanPrice("89");
    setIsJoinModalOpen(true);
    setSubmitStatus("idle");
  };

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
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

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!joinForm.fullName || !joinForm.email || !joinForm.termsAccepted) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Propose mock database reservation cycle
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      // Generate a realistic elite membership ID code
      const idCode = `TITAN-${Math.floor(10000 + Math.random() * 90000)}`;
      setMemberId(idCode);
      
      // Cleanup inputs
      setJoinForm({
        fullName: "",
        email: "",
        phone: "",
        startDate: new Date().toISOString().split("T")[0],
        termsAccepted: false
      });
    }, 1800);
  };

  return (
    <div className="relative min-h-screen bg-brand-dark text-zinc-100 antialiased selection:bg-brand-primary selection:text-black">
      
      {/* 1. Header Navigation Bar */}
      <Navbar
        onJoinClick={handleOpenJoinGeneral}
        onContactClick={handleScrollToContact}
      />

      {/* 2. Hero Interactive Gateway */}
      <Hero
        onJoinClick={handleOpenJoinGeneral}
        onContactClick={handleScrollToContact}
      />

      {/* 3. Story about gym introduction */}
      <About />

      {/* 4. Elite conditioning Services list */}
      <Services />

      {/* 5. Investment membership plans */}
      <Membership onPlanSelect={handleOpenJoinWithPlan} />

      {/* 6. Elite Trainers roster list */}
      <Trainers />

      {/* 7. Gallery of premium workspace zones */}
      <Gallery />

      {/* 8. Success stories of active athletes */}
      <SuccessStories />

      {/* 9. Core guidelines & standards */}
      <WhyChooseUs />

      {/* 10. Frequently Asked Questions */}
      <FAQ />

      {/* 11. Inquiries Contact Forms */}
      <Contact />

      {/* 12. Corporate Footer and Coordinates */}
      <Footer />

      {/* 13. Dynamic Modal Interface: Onboarding Membership System */}
      <AnimatePresence>
        {isJoinModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="join-overlay-modal"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md overflow-y-auto"
            onClick={() => setIsJoinModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-[#121215] border border-brand-border p-6 sm:p-10 text-left shadow-2xl shadow-brand-primary/5 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Stop modal close on inner click
            >
              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={() => setIsJoinModalOpen(false)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 bg-brand-dark border border-brand-border cursor-pointer transition-colors"
                aria-label="Close registration modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Status SUCCESS Screen */}
              {submitStatus === "success" ? (
                <div className="text-center py-8 space-y-6" id="modal-success-screen">
                  <div className="inline-flex p-4 bg-brand-primary/10 border border-brand-primary/30 text-brand-primary rounded-full mb-2 animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary bg-brand-primary/10 px-2.5 py-1 border border-brand-primary/20">
                      Onboarding Registered
                    </span>
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight pt-2">
                      WELCOME TO THE CLUB!
                    </h3>
                    <p className="text-xs text-zinc-400 max-w-xs mx-auto leading-relaxed pt-2">
                      Your premium athletic credentials record has been assigned. Please save your diagnostic ID below.
                    </p>
                  </div>

                  {/* ID Card design print */}
                  <div className="bg-brand-dark border border-brand-border p-6 max-w-sm mx-auto space-y-4 relative">
                    <div className="absolute top-3 right-3 text-[10px] text-brand-primary font-mono tracking-widest uppercase">
                      Class Level A1
                    </div>
                    <div className="flex items-center space-x-2">
                      <Dumbbell className="h-5 w-5 text-brand-primary" />
                      <span className="font-display font-black text-xs text-white uppercase tracking-wider">TITAN ATHLETE</span>
                    </div>
                    <div className="pt-2 text-left">
                      <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">Membership ID</p>
                      <p className="text-xl font-mono font-bold text-white tracking-widest mt-0.5">{memberId}</p>
                    </div>
                    <div className="h-px bg-zinc-900" />
                    <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-zinc-500">
                      <span>Plan: {selectedPlanName}</span>
                      <span>Rate: ${selectedPlanPrice}/mo</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest max-w-sm mx-auto leading-relaxed">
                    Check your secure inbox. A confirmation credentials package containing digital key codes has been forwarded to you.
                  </p>

                  <button
                    id="success-done-btn"
                    onClick={() => setIsJoinModalOpen(false)}
                    className="w-full py-4 bg-brand-primary hover:bg-white text-black font-extrabold uppercase text-xs tracking-widest transition-all rounded-none cursor-pointer"
                  >
                    Done • Enter Platform
                  </button>
                </div>
              ) : (
                /* Standard Booking Onboarding Form */
                <div id="modal-form-screen">
                  {/* Headline Tagline */}
                  <div className="mb-6 flex items-center space-x-2">
                    <Sparkles className="h-4.5 w-4.5 text-brand-primary" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-primary">
                      Enrollment Gateway
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-tight mb-2">
                    RESERVE YOUR ATHLETE SEAT
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    You have selected the <span className="font-bold text-brand-primary uppercase">{selectedPlanName} Portfolio</span> at <span className="font-bold text-white">${selectedPlanPrice}/month</span>. Complete details to lock-in price.
                  </p>

                  <form onSubmit={handleJoinSubmit} className="space-y-4" id="modal-enrollment-form">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="modal-name" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                        Full Athlete Name <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="modal-name"
                        value={joinForm.fullName}
                        onChange={(e) => setJoinForm({ ...joinForm, fullName: e.target.value })}
                        required
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary placeholder-zinc-700 rounded-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="modal-email" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                        Secure Email Address <span className="text-brand-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="modal-email"
                        value={joinForm.email}
                        onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                        required
                        placeholder="e.g. rahul@example.com"
                        className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary placeholder-zinc-700 rounded-none transition-colors"
                      />
                    </div>

                    {/* Grid: Phone & Date */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="modal-phone" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider">
                          Mobile Call Number
                        </label>
                        <input
                          type="tel"
                          id="modal-phone"
                          value={joinForm.phone}
                          onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary placeholder-zinc-700 rounded-none transition-colors"
                        />
                      </div>

                      {/* Start Date */}
                      <div className="space-y-1.5">
                        <label htmlFor="modal-date" className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider flex items-center space-x-1">
                          <Calendar className="h-3.5 w-3.5 text-brand-primary inline" />
                          <span>Target Start Date</span>
                        </label>
                        <input
                          type="date"
                          id="modal-date"
                          value={joinForm.startDate}
                          onChange={(e) => setJoinForm({ ...joinForm, startDate: e.target.value })}
                          className="w-full bg-brand-dark border border-brand-border px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-primary rounded-none transition-colors cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Terms checkout */}
                    <div className="flex items-start space-x-3 pt-2">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="modal-terms"
                          checked={joinForm.termsAccepted}
                          onChange={(e) => setJoinForm({ ...joinForm, termsAccepted: e.target.checked })}
                          required
                          className="h-4 w-4 rounded-none bg-brand-dark border-brand-border text-brand-primary focus:ring-opacity-0 accent-brand-primary cursor-pointer"
                        />
                      </div>
                      <label htmlFor="modal-terms" className="text-[10px] sm:text-xs text-zinc-400 leading-normal select-none cursor-pointer">
                        I hereby authorize Titan Fitness to record my booking, and I accept the terms of compliance, health screening directives, and privacy controls. <span className="text-brand-primary">*</span>
                      </label>
                    </div>

                    {/* Status Alert boxes */}
                    {submitStatus === "error" && (
                      <div className="p-3.5 bg-red-950/40 border border-red-500/30 text-red-300 flex items-start space-x-3 text-xs" id="modal-failed-banner">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                        <span>Please accept terms and verify that all mandatory boxes (*) are complete before executing onboarding.</span>
                      </div>
                    )}

                    {/* Action execution */}
                    <div className="pt-4 space-y-3">
                      <button
                        type="submit"
                        id="submit-modal-btn"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-brand-primary hover:bg-white text-black font-extrabold uppercase text-xs tracking-widest transition-all duration-300 rounded-none flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Constructing Onboarding Credentials...</span>
                          </>
                        ) : (
                          <>
                            <CreditCard className="h-4 w-4" />
                            <span>Submit Onboarding Contract</span>
                          </>
                        )}
                      </button>
                      <p className="text-[8.5px] text-zinc-500 text-center uppercase tracking-wider flex items-center justify-center space-x-1">
                        <ShieldCheck className="h-3 w-3 text-brand-primary inline" />
                        <span>256-Bit SSL Secure Athlete Registration Platform</span>
                      </p>
                    </div>

                  </form>
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
