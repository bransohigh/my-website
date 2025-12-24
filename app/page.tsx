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
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import TimeLine_01 from "@/components/ui/release-time-line";

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

      {/* 5.5. 3D Folder Gallery */}
      <section id="3d-folder" className="py-20 bg-gradient-to-b from-neutral-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Our Work</h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">Explore our latest projects and creations</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedFolder
              title="Design Projects"
              projects={[
                {
                  id: "design-1",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "UI Design System",
                },
                {
                  id: "design-2",
                  image: "https://images.unsplash.com/photo-1561558636-d4c67c39b0d3?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Brand Identity",
                },
                {
                  id: "design-3",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Visual Guidelines",
                },
              ]}
            />
            <AnimatedFolder
              title="Development"
              projects={[
                {
                  id: "dev-1",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Web Application",
                },
                {
                  id: "dev-2",
                  image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Mobile App",
                },
                {
                  id: "dev-3",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "API Integration",
                },
              ]}
            />
            <AnimatedFolder
              title="Creative Work"
              projects={[
                {
                  id: "creative-1",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Animation Assets",
                },
                {
                  id: "creative-2",
                  image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Interactive Design",
                },
                {
                  id: "creative-3",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Motion Graphics",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 5.6. Interactive Image Accordion */}
      <section id="interactive-accordion" className="py-20 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LandingAccordionItem />
        </div>
      </section>

      {/* 6. Timeline */}
      <section id="timeline" className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TimeLine_01 
            title="Product Roadmap"
            description="Track our exciting releases and major milestones"
          />
        </div>
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
