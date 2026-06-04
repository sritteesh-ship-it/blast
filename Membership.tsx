/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Check, X, ShieldCheck, Sparkles, CreditCard, ChevronRight } from "lucide-react";
import { PLANS } from "../data";

interface MembershipProps {
  onPlanSelect: (planName: string, finalPrice: string) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const getPrice = (basePrice: string) => {
    const priceNum = parseInt(basePrice, 10);
    if (billingCycle === "annual") {
      // Apply a luxury 20% annual discount, computed as monthly price
      const discounted = Math.round(priceNum * 0.8);
      return discounted.toString();
    }
    return basePrice;
  };

  return (
    <section id="membership" className="py-24 sm:py-32 bg-brand-dark relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-white/1 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-zinc-900 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">Flexible Investment</span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white uppercase tracking-tighter">
            MEMBERSHIP PLANS
          </h2>
          <div className="h-[1px] w-12 bg-white mx-auto" />
          <p className="text-zinc-400 text-sm font-light max-w-xl mx-auto">
            Choose the level of active physiological coaching and club support that fits your current athlete goals.
          </p>

          {/* Toggle interval tab button */}
          <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-none mt-8" id="billing-toggle-container">
            <button
              id="cycle-monthly-btn"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              id="cycle-annual-btn"
              onClick={() => setBillingCycle("annual")}
              className={`px-4 sm:px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 rounded-none cursor-pointer flex items-center space-x-1.5 ${
                billingCycle === "annual"
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Annual Savvy</span>
              <span className={`px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-normal ${
                billingCycle === "annual" ? "bg-black text-white" : "bg-white/10 text-white"
              }`}>
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="membership-cards-grid">
          {PLANS.map((plan, index) => {
            const calculatedPrice = getPrice(plan.price);
            const isStandard = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={`plan-card-${plan.id}`}
                className={`flex flex-col justify-between relative p-8 sm:p-10 transition-all duration-300 rounded-none h-full ${
                  isStandard
                    ? "bg-white text-black border border-white shadow-xl md:-translate-y-4 z-10"
                    : "bg-white/5 border border-white/10 text-white"
                }`}
              >
                {/* Popular Badge Accent overlay */}
                {isStandard && (
                  <div
                    className="absolute top-0 right-0 bg-black text-white font-bold uppercase text-[9px] tracking-[0.2em] px-4 py-1.5 transform translate-y-[-100%] md:translate-y-0"
                    id="popular-ribbon"
                  >
                    MOST POPULAR
                  </div>
                )}

                <div>
                  {/* Plan Identifier */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`font-display font-semibold text-lg uppercase tracking-wider ${isStandard ? "text-black" : "text-white"}`}>{plan.name}</h3>
                    {isStandard ? (
                      <Sparkles className="h-5 w-5 text-black" />
                    ) : (
                      <ShieldCheck className="h-5 w-5 text-zinc-500" />
                    )}
                  </div>
                  
                  {/* Price Tag */}
                  <div className="flex items-baseline mb-4" id={`price-tag-${plan.id}`}>
                    <span className={`text-sm font-light ${isStandard ? "text-zinc-500" : "text-zinc-400"}`}>$</span>
                    <span className={`font-display font-bold text-4xl sm:text-5xl transition-all tracking-tighter mx-0.5 ${isStandard ? "text-black" : "text-white"}`}>
                      {calculatedPrice}
                    </span>
                    <span className={`text-xs uppercase tracking-widest ml-1 ${isStandard ? "text-zinc-500" : "text-zinc-500"}`}>
                      / {billingCycle === "monthly" ? "mo" : "mo"}
                    </span>
                  </div>

                  <p className={`text-xs leading-relaxed mb-8 font-light min-h-[36px] ${isStandard ? "text-zinc-600" : "text-zinc-400"}`}>
                    {plan.description}
                  </p>

                  <div className={`h-[1px] mb-8 ${isStandard ? "bg-zinc-200" : "bg-white/10"}`} />

                  {/* Checklist */}
                  <ul className="space-y-4 mb-10" id={`feature-checklist-${plan.id}`}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs">
                        {feature.included ? (
                          <Check className={`h-4 w-4 shrink-0 mr-3 mt-0.5 ${isStandard ? "text-black" : "text-white/80"}`} />
                        ) : (
                          <X className={`h-4 w-4 shrink-0 mr-3 mt-0.5 ${isStandard ? "text-zinc-300" : "text-zinc-700"}`} />
                        )}
                        <span className={
                          feature.included 
                            ? (isStandard ? "text-zinc-800 font-normal" : "text-zinc-300 font-light") 
                            : (isStandard ? "text-zinc-300 line-through" : "text-zinc-600 line-through")
                        }>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Action Trigger */}
                <div>
                  <button
                    id={`enroll-btn-${plan.id}`}
                    onClick={() => onPlanSelect(plan.name, calculatedPrice)}
                    className={`w-full py-4 text-center font-bold uppercase text-[10px] tracking-[0.15em] transition-all duration-300 rounded-none flex items-center justify-center space-x-1.5 cursor-pointer ${
                      isStandard
                        ? "bg-black text-white hover:bg-zinc-850"
                        : "bg-transparent text-white border border-white/20 hover:border-white hover:bg-white/5"
                    }`}
                  >
                    <CreditCard className="h-4 w-4" />
                    <span>Select {plan.name}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                  <p className={`text-[9px] text-center mt-3 uppercase tracking-widest ${isStandard ? "text-zinc-400" : "text-zinc-500"}`}>
                    No Sign Up Contracts • Cancel Anytime
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
