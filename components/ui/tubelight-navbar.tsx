"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string; // "#hero" etc.
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "");

  // mobile: navbar bottom, desktop: top
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const anchors = useMemo(
    () =>
      items
        .map((i) => ({
          ...i,
          id: i.url.startsWith("#") ? i.url.slice(1) : i.url,
        }))
        .filter((i) => !!i.id),
    [items]
  );

  // ===== ScrollSpy: scrollY + offset yöntemi =====
  useEffect(() => {
    if (!anchors.length) return;

    let raf = 0;

    const getOffset = () => {
      // Desktop'ta üstte navbar var → küçük bir üst offset iyi olur
      // Mobile'da navbar altta → üst offset daha küçük olabilir
      // (Kullanıcı hissi için)
      return isMobile ? 120 : 160;
    };

    const computeActive = () => {
      const offset = getOffset();
      const y = window.scrollY + offset;

      // Sayfa sonuna yakınsa (footer), son item'a kilitle
      const bottomSlack = 8;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - bottomSlack;
      if (atBottom) {
        setActiveTab(anchors[anchors.length - 1].name);
        return;
      }

      // En iyi aday: y'yi geçen en son section
      let bestName = anchors[0].name;
      let bestTop = -Infinity;

      for (const a of anchors) {
        const el = document.getElementById(a.id);
        if (!el) continue;

        const top = el.offsetTop; // document'e göre top
        if (top <= y && top > bestTop) {
          bestTop = top;
          bestName = a.name;
        }
      }

      setActiveTab(bestName);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(computeActive);
    };

    // İlk yüklemede doğru seç
    computeActive();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [anchors, isMobile]);

  // Smooth scroll + offset (desktop top navbar için daha iyi “hizalama”)
  const scrollToId = (id: string, name: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    setActiveTab(name);

    // Desktop top bar: biraz daha yukarıdan hizala
    const offset = isMobile ? 80 : 120;
    const target = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div
      className={cn(
        // wrapper tıklama yemesin
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-40 mb-6 sm:pt-6 pointer-events-none",
        className
      )}
    >
      {/* sadece pill tıklanabilir */}
      <div className="pointer-events-auto flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {anchors.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <button
              key={item.name}
              type="button"
              onClick={() => scrollToId(item.id, item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors select-none",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>

              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 pointer-events-none"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full pointer-events-none">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2 pointer-events-none" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1 pointer-events-none" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2 pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
