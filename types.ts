/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
  certifications: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: {
    text: string;
    included: boolean;
  }[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "equipment" | "workout" | "sessions";
  image: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  achievement: string;
  milestone: string;
  beforeWeight?: string;
  afterWeight?: string;
  quote: string;
  stats: string;
  label: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}
