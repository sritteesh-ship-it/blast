/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trainer, Service, MembershipPlan, GalleryItem, SuccessStory, FAQItem, WhyChooseUsItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "personal-training",
    title: "Personal Training",
    description: "One-on-one elite guidance tailored specifically to your body biometrics, objectives, and personal schedule.",
    icon: "UserCheck",
    benefits: ["Custom periodized workouts", "Bi-weekly progress audits", "Form and technique correction"]
  },
  {
    id: "strength-training",
    title: "Strength Workshop",
    description: "Master the art of heavy lifting. From Olympic weightlifting to powerlifting mechanics and hypertrophy.",
    icon: "Dumbbell",
    benefits: ["Barbell movement mastery", "Strength plateaus breakthrough", "Hypertrophy-focused systems"]
  },
  {
    id: "weight-loss",
    title: "Weight Optimization",
    description: "Accelerate fat loss while building lean muscle mass with high-intensity interval conditioning and metabolic work.",
    icon: "Flame",
    benefits: ["Metabolic rate enhancement", "High-expenditure training", "Muscle preservation strategies"]
  },
  {
    id: "cardio-training",
    title: "Endurance & Cardio",
    description: "Improve cardiac health and stamina with tailored aerobic progressions using elite Rogue and Woodway hardware.",
    icon: "Zap",
    benefits: ["VO2 Max enhancement", "Heart rate zone monitoring", "Athletic endurance stamina"]
  },
  {
    id: "nutrition-guidance",
    title: "Nutrition Coaching",
    description: "Science-backed metabolic macros mapping, weekly meal planning, and sustainable lifestyle modifications.",
    icon: "Apple",
    benefits: ["Specific macro profiling", "Grocery list optimization", "Hormonal & digest bio-metrics"]
  },
  {
    id: "group-classes",
    title: "Elite Group Sessions",
    description: "Dynamic high-energy community fitness challenges. Spin, circuit training, kettlebell flows, and calisthenics.",
    icon: "Users",
    benefits: ["Team atmosphere accountability", "Varied daily routines", "Coach-led group mechanics"]
  }
];

export const PLANS: MembershipPlan[] = [
  {
    id: "basic-plan",
    name: "Basic",
    price: "49",
    period: "month",
    description: "Essential access to top-tier heavy machinery and clean facilities.",
    features: [
      { text: "Full Gym Floor Access", included: true },
      { text: "Premium Locker Rooms & Showers", included: true },
      { text: "Complimentary Towel Service", included: true },
      { text: "Access to Standard Sauna", included: true },
      { text: "All Group Energy Classes", included: false },
      { text: "1-on-1 Elite Personal Coaching", included: false },
      { text: "Custom Bio-Nutrition Program", included: false }
    ]
  },
  {
    id: "standard-plan",
    name: "Standard",
    price: "89",
    period: "month",
    description: "Our signature plan covering premium amenities, group flows, and open floor.",
    features: [
      { text: "Full Gym Floor Access", included: true },
      { text: "Premium Locker Rooms & Showers", included: true },
      { text: "Complimentary Towel Service", included: true },
      { text: "Access to Standard Sauna", included: true },
      { text: "All Group Energy Classes", included: true },
      { text: "1-on-1 Elite Personal Coaching", included: false },
      { text: "Custom Bio-Nutrition Program", included: false }
    ],
    popular: true
  },
  {
    id: "premium-plan",
    name: "Premium",
    price: "149",
    period: "month",
    description: "The complete private athlete experience. High-touch bespoke training and lifestyle coaching.",
    features: [
      { text: "Full Gym Floor Access", included: true },
      { text: "Premium Locker Rooms & Showers", included: true },
      { text: "Complimentary Towel Service", included: true },
      { text: "Access to Standard Sauna & Cold Plunge", included: true },
      { text: "All Group Energy Classes", included: true },
      { text: "1-on-1 Elite Personal Coaching (4x/mo)", included: true },
      { text: "Custom Bio-Nutrition Program", included: true }
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "alex-mercer",
    name: "Alex Mercer",
    role: "Director of Conditioning",
    specialty: "Powerlifting & Athletic Hypertrophy",
    experience: "12+ Years Coaching",
    image: "/src/assets/images/trainer_alex_1780490877584.png", // generated asset
    bio: "Former competitive powerlifter focused on teaching optimal lifting mechanics, biomechanics, and breaking personal records.",
    certifications: ["B.Sc. Sports Medicine", "CSCS *D", "USAW Level 2"]
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Head HIIT & Functional Coach",
    specialty: "High Intensity Conditioning & Fat Loss",
    experience: "8 Years Coaching",
    image: "/src/assets/images/trainer_sarah_1780490893353.png", // generated asset
    bio: "Sarah designs high-density metabolic training routines that maximize dynamic recovery while retaining optimal lean tissue mass.",
    certifications: ["NASM Certified Personal Trainer", "FMS Level 1", "Precision Nutrition L1"]
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Elite Strength Specialist",
    specialty: "Hypertrophy & Posture Correction",
    experience: "10 Years Coaching",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80&w=600&h=800",
    bio: "Marcus combines traditional bodybuilding with active movement screening to build robust, injury-resistant physiques.",
    certifications: ["ISSA Master Trainer", "NCSF Certified Strength Specialist"]
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Mind-Body Director",
    specialty: "Yoga Alignment & Pilates Reformer",
    experience: "9 Years Coaching",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=600&h=800",
    bio: "Elena champions core structural integrity, breath articulation, and full-body kinetic alignment for active recovery.",
    certifications: ["RYT 500 Advanced Yoga Alliance", "Balanced Body Pilates Reformer"]
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Premium Strength Zone",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "gal-2",
    title: "Olympic Barbell Racks",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "gal-3",
    title: "Functional Coaching Floor",
    category: "workout",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "gal-4",
    title: "Hammer Strength Array",
    category: "equipment",
    image: "https://images.unsplash.com/photo-1571731956672-f2b94d7db0cb?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "gal-5",
    title: "Active Group Studio",
    category: "sessions",
    image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "gal-6",
    title: "1-on-1 Personalized Work",
    category: "sessions",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: "story-1",
    name: "Arthur Pendelton",
    achievement: "Decreased body fat from 26% to 11% while gaining 8 lbs of muscle.",
    milestone: "Total Body Composition Overhaul",
    beforeWeight: "215 lbs",
    afterWeight: "194 lbs",
    quote: "Titan Fitness changed my relationship with training entirely. The custom program from Coach Alex wasn't just a workout; it was an education.",
    stats: "15% Body Fat Cut",
    label: "Fat Loss Transformation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "story-2",
    name: "Samantha Vance",
    achievement: "Increased deadlift from 135 lbs to 275 lbs, correcting lower back imbalances.",
    milestone: "Empowered Strong Athlete Mastery",
    beforeWeight: "142 lbs",
    afterWeight: "148 lbs",
    quote: "I was intimidated by free weights, but the structural strength workshops here gave me extreme confidence and eliminated my back aches.",
    stats: "2x Strength Uplift",
    label: "Strength & Alignment",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: "story-3",
    name: "Jordan Michaels",
    achievement: "Completed first hyper-endurance triathlon within top 15% division.",
    milestone: "Ultimate Cardio Endurance Breakthrough",
    beforeWeight: "185 lbs",
    afterWeight: "172 lbs",
    quote: "With the custom VO2 metabolic programs and nutrition guidance from Sarah, I cut 40 minutes off my competitive marathon threshold timer.",
    stats: "+22% VO2 Endurance",
    label: "Athletic Stamina",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

export const FEATURES: WhyChooseUsItem[] = [
  {
    id: "feat-1",
    title: "Modern Elite Equipment",
    description: "Equipped with specialized Hammer Strength plates, Eleiko bars, Rogue cages, and premium Woodway fitness curves.",
    icon: "Dumbbell"
  },
  {
    id: "feat-2",
    title: "Gold-Class Certified Coaches",
    description: "Every trainer holds tier-1 accredited personal certifications (CSCS, NASM, Precision Nutrition) with deep athletic backgrounds.",
    icon: "Award"
  },
  {
    id: "feat-3",
    title: "Flexible Elite Memberships",
    description: "Strictly contract-free, direct digital pausing privileges, and clear structures suitable for local and travelling athletes.",
    icon: "Clock"
  },
  {
    id: "feat-4",
    title: "Highly Supportive Environment",
    description: "An inclusive, high-responsibility community built on daily metrics, progress celebration, and zero judgment.",
    icon: "Heart"
  },
  {
    id: "feat-5",
    title: "Pristine Clean Facilities",
    description: "Hourly sanitization sweeps, premium state-of-the-art locker micro-climates, and safe clean air filtration systems.",
    icon: "ShieldAlert"
  },
  {
    id: "feat-6",
    title: "Bespoke Personal Routines",
    description: "Zero generic templates. All workout cards, macro distributions, and resting days are mapped to your specific lifestyle indicators.",
    icon: "TrendingUp"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you offer a complimentary initial pass or onboarding preview?",
    answer: "Yes, we offer a complimentary 1-Day All-Access Pass for prospective local athletes. This pass includes an optional 20-minute physical evaluation and biomechanics review with one of our head trainers.",
    category: "Membership"
  },
  {
    id: "faq-2",
    question: "What are your operational peak and off-peak hours?",
    answer: "We are open Monday to Friday from 5:00 AM to 11:00 PM, and Saturday/Sunday from 6:00 AM to 9:00 PM. Our peak training hours are usually 6:30 AM to 8:30 AM and 5:30 PM to 7:30 PM on weekdays.",
    category: "Facilities"
  },
  {
    id: "faq-3",
    question: "Can I freeze or pause my membership if I travel?",
    answer: "Absolutely. Standard and Premium membership configurations can be put on temporary hold/paused via our digital portal for up to 60 total days per year with zero hidden admin fees.",
    category: "Billing"
  },
  {
    id: "faq-4",
    question: "Are towels, showers, and saunas included in all options?",
    answer: "Yes! High-density locker access, fresh double-ply towel services, luxury toiletries, and access to our clean dry-stone saunas are fully open to all plans.",
    category: "Facilities"
  },
  {
    id: "faq-5",
    question: "How do I secure and register for group athletic classes?",
    answer: "All classes can be reserved and verified up to 72 hours in advance via the member card dashboard or contact desk. Standard or Premium accounts have unlimited group class access.",
    category: "Classes"
  }
];
