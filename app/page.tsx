"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { InfiniteGrid } from "@/components/ui/infinite-grid-integration";
import { CyberneticBentoGrid } from "@/components/ui/cybernetic-bento-grid";
import { TimelineComponent } from "@/components/ui/timeline-new";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";
import { TestimonialsSection } from "@/components/ui/testimonial-v2";
import SpatialProductShowcase from "@/components/ui/spatial-product-showcase";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { Footerdemo } from "@/components/ui/footer-section";
import { DIcons } from "dicons";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Home, Zap, Users, Briefcase, MessageSquare, Mail } from "lucide-react";
import { AnimatedFolder } from "@/components/ui/3d-folder";
import { LandingAccordionItem } from "@/components/ui/interactive-image-accordion";
import TimeLine_01 from "@/components/ui/release-time-line";

export default function Page() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return (
    <>
      {/* Navigation Bar */}
      <NavBar
        items={[
          { name: "Home", url: "#hero", icon: Home },
          { name: "Features", url: "#bento", icon: Zap },
          { name: "Portfolio", url: "#3d-folder", icon: Briefcase },
          { name: "Products", url: "#product-showcase", icon: Users },
          { name: "Testimonials", url: "#testimonials", icon: MessageSquare },
          { name: "Contact", url: "#lets-work", icon: Mail },
        ]}
      />

      {/* Hero Section with Infinite Grid */}
      <section id="hero" className="overflow-hidden">
        <InfiniteGrid />
      </section>

      {/* Cybernetic Bento Grid */}
      <section id="bento" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <CyberneticBentoGrid lightMode={true} />
      </section>

      {/* 3D Folder Gallery */}
      <section id="3d-folder" className="py-20 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-4 text-center">Our Portfolio</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-center mb-12 max-w-2xl mx-auto">Transforming ideas into award-winning software solutions</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedFolder
              title="Design & UX"
              projects={[
                {
                  id: "design-1",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Enterprise Platforms",
                },
                {
                  id: "design-2",
                  image: "https://images.unsplash.com/photo-1561558636-d4c67c39b0d3?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "SaaS Solutions",
                },
                {
                  id: "design-3",
                  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Digital Transformation",
                },
              ]}
            />
            <AnimatedFolder
              title="Backend & Infrastructure"
              projects={[
                {
                  id: "dev-1",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Cloud Architecture",
                },
                {
                  id: "dev-2",
                  image: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Microservices",
                },
                {
                  id: "dev-3",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "DevOps Solutions",
                },
              ]}
            />
            <AnimatedFolder
              title="Innovation & Strategy"
              projects={[
                {
                  id: "creative-1",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "AI/ML Integration",
                },
                {
                  id: "creative-2",
                  image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Automation Platforms",
                },
                {
                  id: "creative-3",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=500",
                  title: "Data Analytics",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Interactive Image Accordion */}
      <section id="interactive-accordion" className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LandingAccordionItem />
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TimeLine_01 
            title="Product Roadmap"
            description="Track our exciting releases and major milestones"
          />
        </div>
      </section>

      {/* Spatial Product Showcase */}
      <section id="product-showcase" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <SpatialProductShowcase />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-neutral-900 transition-colors duration-300">
        <TestimonialsSection />
      </section>

      {/* Lets Work Section */}
      <section id="lets-work" className="py-20 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300">
        <LetsWorkTogether />
      </section>

      {/* Footer */}
      <Footerdemo />
    </>
  );
}