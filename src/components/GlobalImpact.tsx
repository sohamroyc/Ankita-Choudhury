"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Globe, ArrowRight, Check } from "lucide-react";

interface PartnershipDetail {
  region: string;
  name: string;
  partners: string[];
  programs: string[];
  focus: string;
  stats: string;
  x: number; // Map coordinate
  y: number;
}

const REGIONS: PartnershipDetail[] = [
  {
    region: "North America",
    name: "USA & Canada Partnerships",
    partners: ["Columbia University", "University of Toronto", "UCLA", "Boston University"],
    programs: ["Semester Abroad Pathways", "Faculty Research Collaborations", "Joint Liberal Arts Program"],
    focus: "Strategic Dual-Degrees & Research Cooperation",
    stats: "15+ Programs | 200+ Mobilized Students",
    x: 240,
    y: 160
  },
  {
    region: "Europe",
    name: "UK & European Union Collaborations",
    partners: ["Sciences Po (Paris)", "King's College London", "TU Munich", "University of Amsterdam"],
    programs: ["Erasmus+ Supported Exchanges", "Double Degree Pathways", "Summer Research Internships"],
    focus: "Institutional Mobility & Joint Degree Structures",
    stats: "18+ Active MoUs | 250+ Students Coordinated",
    x: 480,
    y: 130
  },
  {
    region: "Middle East",
    name: "Middle East Strategic Ties",
    partners: ["NYU Abu Dhabi", "Zayed University (UAE)", "King Saud University"],
    programs: ["Regional Executive Summits", "Cross-Cultural Dialogue Forums", "Global Leadership Panels"],
    focus: "Academic Diplomacy & Leadership Initiatives",
    stats: "6+ Active Partnerships | 80+ Delegates Hosted",
    x: 590,
    y: 210
  },
  {
    region: "Asia-Pacific",
    name: "APAC & East Asia Networks",
    partners: ["National University of Singapore (NUS)", "University of Tokyo", "University of Sydney"],
    programs: ["Short-term Intercultural Camps", "Bilateral Student Exchange", "Joint Research Symposia"],
    focus: "Student Mobility & Immersion Initiatives",
    stats: "12+ Agreements | 180+ Student Cohorts",
    x: 780,
    y: 200
  }
];

export default function GlobalImpact() {
  const [selectedRegion, setSelectedRegion] = useState<PartnershipDetail>(REGIONS[0]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="global-impact" className="py-20 md:py-32 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorator */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold block mb-2">
            International Outreach
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Global Impact</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
          <p className="text-slate-400 text-sm md:text-base font-light max-w-xl mx-auto mt-4 leading-relaxed">
            Click or hover over the glowing regions to explore international academic partnerships, institutional programs, and student exchange metrics.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: SVG World Map (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative flex justify-center items-center rounded-2xl glass-panel p-6 border-slate-800/60 overflow-hidden"
          >
            {/* Ambient gold map backlight */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03),transparent_60%)]" />

            <svg
              viewBox="0 0 1000 500"
              className="w-full h-auto object-contain select-none"
            >
              {/* Simplified World Continent Outlines */}
              <g fill="#1e293b" opacity="0.4" stroke="#0f172a" strokeWidth="1">
                {/* North America */}
                <path d="M 120 80 Q 200 60 280 80 Q 320 150 260 220 Q 240 280 220 320 Q 180 250 160 220 Z" />
                {/* South America */}
                <path d="M 220 320 Q 270 340 290 380 Q 280 440 240 480 Q 210 430 200 360 Z" />
                {/* Europe */}
                <path d="M 400 120 Q 520 80 540 140 Q 500 180 460 200 Q 420 180 400 120 Z" />
                {/* Africa */}
                <path d="M 460 200 Q 550 210 580 260 Q 600 320 540 420 Q 480 340 450 280 Z" />
                {/* Asia / Russia */}
                <path d="M 540 140 Q 720 60 900 100 Q 920 180 860 260 Q 750 300 680 260 Q 580 220 540 140 Z" />
                {/* Australia */}
                <path d="M 820 380 Q 890 370 910 410 Q 880 460 810 440 Z" />
              </g>

              {/* Base Station Connective Arc Lines */}
              {REGIONS.map((region, idx) => {
                const cx = (680 + region.x) / 2;
                const cy = Math.min(240, region.y) - 40;
                return (
                  <motion.path
                    key={`line-${idx}`}
                    d={`M 680 240 Q ${cx} ${cy} ${region.x} ${region.y}`}
                    fill="none"
                    stroke={selectedRegion.region === region.region ? "#D4AF37" : "rgba(148, 163, 184, 0.15)"}
                    strokeWidth={selectedRegion.region === region.region ? "1.5" : "1"}
                    strokeDasharray={selectedRegion.region === region.region ? "none" : "3 3"}
                    transition={{ duration: 0.3 }}
                  />
                );
              })}

              {/* Base Station: Delhi Node */}
              <g>
                <circle cx="680" cy="240" r="5" fill="#D4AF37" />
                <circle cx="680" cy="240" r="9" fill="none" stroke="#D4AF37" strokeWidth="1" className="animate-ping" />
              </g>

              {/* Interactive Region Hot-spots (Pins) */}
              {REGIONS.map((region, idx) => {
                const isSelected = selectedRegion.region === region.region;
                return (
                  <g
                    key={`pin-${idx}`}
                    className="cursor-pointer group"
                    onClick={() => setSelectedRegion(region)}
                    onMouseEnter={() => setSelectedRegion(region)}
                  >
                    {/* Invisible larger hover trigger area */}
                    <circle cx={region.x} cy={region.y} r="25" fill="transparent" />

                    {/* Outer glowing pulsing circle */}
                    <motion.circle
                      cx={region.x}
                      cy={region.y}
                      r={isSelected ? "14" : "9"}
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="1.5"
                      animate={{
                        scale: isSelected ? [1, 1.4, 1] : [1, 1.25, 1],
                        opacity: isSelected ? [0.8, 0.4, 0.8] : [0.4, 0.1, 0.4],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: idx * 0.4 }}
                    />

                    {/* Central Pin Dot */}
                    <circle
                      cx={region.x}
                      cy={region.y}
                      r={isSelected ? "5" : "4"}
                      fill={isSelected ? "#D4AF37" : "#F8FAFC"}
                      className="transition-colors duration-300"
                    />

                    {/* Hover text label */}
                    <text
                      x={region.x}
                      y={region.y - 16}
                      textAnchor="middle"
                      fill="#F8FAFC"
                      fontSize="10"
                      fontWeight={isSelected ? "bold" : "normal"}
                      className={`font-sans tracking-wide transition-opacity duration-300 pointer-events-none ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-75"
                      }`}
                    >
                      {region.region}
                    </text>
                  </g>
                );
              })}
            </svg>
          </motion.div>

          {/* Right: Dynamic Details Card (lg:col-span-5) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.region}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-panel rounded-2xl p-6 md:p-8 border-slate-800/80 relative flex flex-col justify-between h-[450px]"
              >
                {/* Gold accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

                <div>
                  {/* Region tag */}
                  <div className="flex items-center gap-2 text-[#D4AF37] font-semibold text-xs uppercase tracking-widest mb-4">
                    <Globe className="w-4 h-4 text-[#D4AF37]" />
                    <span>{selectedRegion.region}</span>
                  </div>

                  {/* Header Title */}
                  <h3 className="text-2xl font-serif font-bold text-slate-100 mb-2 leading-tight">
                    {selectedRegion.name}
                  </h3>
                  
                  {/* Strategic Focus area */}
                  <span className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-6 block border-b border-slate-800/80 pb-3">
                    Focus: <span className="text-[#D4AF37]">{selectedRegion.focus}</span>
                  </span>

                  {/* Key Partners */}
                  <div className="mb-6">
                    <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
                      Key Academic Partners
                    </h4>
                    <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-light">
                      {selectedRegion.partners.map((partner, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
                          <span className="truncate">{partner}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Active Programs */}
                  <div>
                    <h4 className="text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2.5">
                      Active Programs Supported
                    </h4>
                    <ul className="space-y-2 text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                      {selectedRegion.programs.map((prog, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                          <span>{prog}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Metric */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex justify-between items-center bg-slate-900/40 -mx-6 md:-mx-8 px-6 md:px-8 -mb-6 md:-mb-8 rounded-b-2xl py-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                      Outreach Metrics
                    </span>
                    <span className="text-xs md:text-sm text-[#D4AF37] font-medium mt-0.5">
                      {selectedRegion.stats}
                    </span>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs text-slate-300 hover:text-[#D4AF37] font-semibold transition-colors duration-300"
                  >
                    <span>Connect Regional Partnerships</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
