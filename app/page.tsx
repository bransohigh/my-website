"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/ui/animated-hero";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { Features } from "@/components/ui/features";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TimelineComponent } from "@/components/ui/timeline-new";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import { Footerdemo } from "@/components/ui/footer-section";
import { DIcons } from "dicons";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:scale-110 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* 2. Animated Hero */}
      <section id="animated-hero" className="py-20">
        <Hero />
      </section>

      {/* 3. Cybernetic Bento Grid (Light Mode) */}
      <section id="bento" className="py-20 bg-white">
        <CyberneticBentoGrid lightMode={true} />
      </section>

      {/* 4. Features */}
      <section id="features" className="py-20">
        <Features features={[
          {
            id: 1,
            icon: () => <div className="w-8 h-8 bg-blue-500 rounded"></div>,
            title: "Feature One",
            description: "Innovative solutions for your needs",
            image: "/feature1.jpg",
          },
          {
            id: 2,
            icon: () => <div className="w-8 h-8 bg-green-500 rounded"></div>,
            title: "Feature Two",
            description: "Powerful tools at your fingertips",
            image: "/feature2.jpg",
          },
          {
            id: 3,
            icon: () => <div className="w-8 h-8 bg-purple-500 rounded"></div>,
            title: "Feature Three",
            description: "Seamless integration and workflow",
            image: "/feature3.jpg",
          },
        ]} />
      </section>

      {/* 5. Feature Section with Hover Effects */}
      <section id="feature-hover" className="py-20">
        <FeaturesSectionWithHoverEffects />
      </section>

      {/* 6. Timeline */}
      <section id="timeline" className="py-20">
        <TimelineComponent data={[
          {
            title: "2024 - Foundation",
            description: "Started the journey with a vision to create something meaningful. Built the core foundations and assembled the initial team.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600",
            badge: "Q1 2024",
          },
          {
            title: "2025 Q1 - Launch",
            description: "Launched the first version of the platform. Received overwhelming positive feedback from early users.",
            image: "https://images.unsplash.com/photo-1516534775068-bb57cc6de438?auto=format&fit=crop&q=80&w=800&h=600",
            badge: "Q1 2025",
          },
          {
            title: "2025 Q2 - Growth",
            description: "Reached 1000+ users milestone. Expanded team and launched new features based on user feedback.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600",
            badge: "Q2 2025",
          },
          {
            title: "2025 Q3 - International",
            description: "Expanded to international markets. Localized the platform for multiple languages and regions.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800&h=600",
            badge: "Q3 2025",
          },
          {
            title: "2025 Q4 - Excellence",
            description: "Achieved major product milestones. Won industry recognition and became the leading solution in our space.",
            image: "https://images.unsplash.com/photo-1516534775068-bb57cc6de438?auto=format&fit=crop&q=80&w=800&h=600",
            badge: "Q4 2025",
          },
        ]} />
      </section>

      {/* 7. Testimonials */}
      <section id="testimonials" className="py-20">
        <TestimonialsSection />
      </section>

      {/* 8. Lets Work Section */}
      <section id="lets-work" className="py-20">
        <LetsWorkTogether />
      </section>

      {/* 9. Footer */}
      <Footerdemo />
    </>
  );
}
