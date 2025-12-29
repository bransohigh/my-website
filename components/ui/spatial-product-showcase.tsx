"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Battery,
  Sliders,
  ChevronRight,
  Zap,
  Bluetooth,
  Wifi,
  Music,
  type LucideIcon,
} from "lucide-react";

export type ProductId = "left" | "right";

export interface FeatureMetric {
  label: string;
  value: number; // 0-100
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
    bar: string;
  };
  stats: {
    connectionStatus: string;
    batteryLevel: number;
  };
  features: FeatureMetric[];
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: "left",
    label: "Left",
    title: "Spatial Anchor",
    description:
      "The primary node for binaural synchronization. Handles low-latency transmission and anchors the spatial audio soundstage.",
    image: "https://ik.imagekit.io/kqmrslzuq/SOUND/left-earbud.png",
    colors: {
      gradient: "from-sky-200 to-indigo-200",
      glow: "bg-sky-500",
      ring: "border-sky-400/40",
      bar: "bg-sky-500",
    },
    stats: { connectionStatus: "Connected", batteryLevel: 82 },
    features: [
      { label: "Latency", value: 12, icon: Zap },
      { label: "Sync Rate", value: 98, icon: Wifi },
    ],
  },
  right: {
    id: "right",
    label: "Right",
    title: "Vocal Clarity",
    description:
      "Optimized for high-frequency detail and voice pickup. Contains the beamforming microphone array for crystal clear calls.",
    image: "https://ik.imagekit.io/kqmrslzuq/SOUND/right-earbud.png",
    colors: {
      gradient: "from-emerald-200 to-teal-200",
      glow: "bg-emerald-500",
      ring: "border-emerald-400/40",
      bar: "bg-emerald-500",
    },
    stats: { connectionStatus: "Connected", batteryLevel: 74 },
    features: [
      { label: "Bitrate", value: 94, icon: Bluetooth },
      { label: "Clarifier", value: 88, icon: Music },
    ],
  },
};

const BackgroundGradient = ({ active }: { active: ProductData }) => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <motion.div
      animate={{
        background:
          active.id === "left"
            ? "radial-gradient(circle at 0% 40%, rgba(56,189,248,0.26), transparent 62%)"
            : "radial-gradient(circle at 100% 40%, rgba(16,185,129,0.26), transparent 62%)",
      }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(0,0,0,0.03),transparent_55%)]" />
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/70" />
  </div>
);

const ProductVisual = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => (
  <div className="relative group shrink-0">
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-[-18%] rounded-full border border-dashed border-black/10 ${data.colors.ring}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
    />

    <motion.div
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-70`}
      animate={{ scale: [1, 1.06, 1] }}
      transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
    />

    <div className="relative h-80 w-80 sm:h-96 sm:w-96 md:h-[520px] md:w-[520px] rounded-full border border-black/5 shadow-[0_40px_120px_rgba(0,0,0,0.12)] flex items-center justify-center overflow-hidden bg-white/60 backdrop-blur-sm">
      <motion.div
        className="relative z-10 w-full h-full flex items-center justify-center"
        animate={{ y: [-8, 8, -8] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={data.title}
            initial={{
              opacity: 0,
              scale: 1.4,
              filter: "blur(12px)",
              rotate: isLeft ? -18 : 18,
              x: isLeft ? -70 : 70,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              rotate: 0,
              x: 0,
              transition: { type: "spring", stiffness: 240, damping: 22 },
            }}
            exit={{
              opacity: 0,
              scale: 0.65,
              filter: "blur(18px)",
              transition: { duration: 0.22 },
            }}
            className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] p-6 select-none"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 bg-white/70 px-4 py-2 rounded-full border border-black/5 backdrop-blur">
        <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.connectionStatus}
      </div>
    </div>
  </div>
);

function ProductDetails({ data, isLeft }: { data: ProductData; isLeft: boolean }) {
  const alignClass = isLeft ? "items-start text-left" : "items-end text-right";
  const flexDirClass = isLeft ? "flex-row" : "flex-row-reverse";

  const itemEnter = {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 22 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className={`flex flex-col ${alignClass}`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={itemEnter}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        className="text-sm font-bold uppercase tracking-[0.22em] text-neutral-500 mb-2"
      >
        {data.label} Earbud
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={itemEnter}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-neutral-950"
      >
        {data.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={itemEnter}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        className={`text-neutral-600 mb-8 max-w-sm leading-relaxed ${isLeft ? "mr-auto" : "ml-auto"}`}
      >
        {data.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={itemEnter}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        className="w-full space-y-6 bg-white/70 p-6 rounded-2xl border border-black/5 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
      >
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}>
              <div className={`flex items-center gap-2 ${feature.value > 50 ? "text-neutral-900" : "text-neutral-600"}`}>
                <feature.icon size={16} /> <span>{feature.label}</span>
              </div>
              <span className="font-mono text-xs text-neutral-500">{feature.value}%</span>
            </div>

            <div className="relative h-2 w-full bg-neutral-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.25 + idx * 0.12 }}
                className={`absolute top-0 bottom-0 ${data.colors.bar} opacity-90`}
              />
            </div>
          </div>
        ))}

        <div className={`pt-4 flex ${isLeft ? "justify-start" : "justify-end"}`}>
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-neutral-900 transition-colors group cursor-pointer"
          >
            <Sliders size={14} /> View Specs
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        animate={itemEnter}
        exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
        className={`mt-6 flex items-center gap-3 text-neutral-500 ${flexDirClass}`}
      >
        <Battery size={16} />
        <span className="text-sm font-medium">{data.stats.batteryLevel}% Charge</span>
      </motion.div>
    </motion.div>
  );
}

function Switcher({ activeId, onToggle }: { activeId: ProductId; onToggle: (id: ProductId) => void }) {
  const options = Object.values(PRODUCT_DATA).map((p) => ({ id: p.id, label: p.label }));

  return (
    <div className="relative z-[60] mt-28 md:mt-36 flex justify-center">
      <motion.div
        layout
        className="flex items-center gap-1 p-1.5 rounded-full bg-white/70 backdrop-blur-2xl border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5"
      >
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            type="button"
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.97 }}
            className="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-semibold focus:outline-none cursor-pointer text-neutral-700"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-gradient-to-b from-black/[0.06] to-black/[0.02] shadow-inner"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            )}
            <span className={`relative z-10 transition-colors duration-300 ${activeId === opt.id ? "text-neutral-950" : "text-neutral-600 hover:text-neutral-900"}`}>
              {opt.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
}

export default function SpatialProductShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>("left");
  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === "left";

  return (
    <section className="relative isolate w-full overflow-hidden rounded-3xl bg-white text-neutral-900 border border-black/5 min-h-[900px] md:min-h-[980px] lg:min-h-[1050px] flex items-center">
      <BackgroundGradient active={currentData} />

      <div className="relative z-10 w-full px-6 py-24 pb-0 max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-14 md:gap-24 lg:gap-32 w-full ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <ProductVisual data={currentData} isLeft={isLeft} />

          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProductDetails key={activeSide} data={currentData} isLeft={isLeft} />
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <Switcher activeId={activeSide} onToggle={setActiveSide} />
      </div>
    </section>
  );
}
