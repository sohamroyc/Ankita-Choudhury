"use client";

import { useRef, ComponentType } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, School, Sparkles, BookOpen, Trophy } from "lucide-react";

interface Credential {
  title: string;
  category: "Education" | "Award & Recognition";
  institution: string;
  duration: string;
  metricLabel?: string;
  metricValue?: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  featured?: boolean;
}

const CREDENTIALS: Credential[] = [
  {
    title: "Bachelor's Degree",
    category: "Education",
    institution: "Sister Nivedita University",
    duration: "2020 – 2023",
    metricLabel: "Academic Standing",
    metricValue: "First Class",
    desc: "Graduated with top academic honors, representing SNU's high standard of scholarship in higher education studies.",
    icon: GraduationCap,
    featured: true,
  },
  {
    title: "Vice Head Girl",
    category: "Award & Recognition",
    institution: "APS Sukna",
    duration: "2019 – 2020",
    metricLabel: "Leadership Role",
    metricValue: "Student Council",
    desc: "Selected to lead student councils, organizing campus-wide events and cultivating early management expertise.",
    icon: School,
    featured: true,
  },
  {
    title: "Miss Best Personality",
    category: "Award & Recognition",
    institution: "APS Sukna",
    duration: "2019 – 2020",
    metricLabel: "Honored Skill",
    metricValue: "Interpersonal",
    desc: "Recognized for exceptional public communication, diplomacy, poise, and representative excellence among peers.",
    icon: Sparkles,
  },
  {
    title: "Higher Secondary Education",
    category: "Education",
    institution: "APS Sukna",
    duration: "2019 – 2020",
    desc: "Completed secondary education with active participation in national-level youth leadership campaigns and sports.",
    icon: BookOpen,
  },
  {
    title: "MBA — Ongoing",
    category: "Education",
    institution: "Higher Studies / Executive Training",
    duration: "2025 – Present",
    desc: "Pursuing an MBA to further strengthen strategic management and academic foundations for global leadership.",
    icon: Award,
  },
];

const categoryColor: Record<string, string> = {
  "Education": "text-sky-400 border-sky-500/20 bg-sky-500/10",
  "Award & Recognition": "text-amber-400 border-amber-500/20 bg-amber-500/10",
};

export default function Achievements() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="py-24 md:py-36 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-[#D4AF37] uppercase tracking-[0.18em] text-[11px] font-bold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              Credentials & Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Education &<br className="hidden md:block" /> Achievements
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-light">
            A foundation built on academic excellence, leadership recognition, and continuous professional growth.
          </p>
        </motion.div>

        {/* ── Featured Row (first 2 cards — full-width split) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {CREDENTIALS.filter((c) => c.featured).map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="group relative rounded-3xl p-8 bg-slate-900/50 border border-slate-800 hover:border-[#D4AF37]/40 transition-all duration-400 overflow-hidden"
              >
                {/* Top gold shimmer bar */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${categoryColor[cred.category]}`}>
                      {cred.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {cred.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">{cred.institution}</p>
                  <p className="text-slate-600 text-xs mb-5">{cred.duration}</p>

                  {cred.metricValue && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 mb-5">
                      <span className="text-slate-500 text-[11px]">{cred.metricLabel}:</span>
                      <span className="text-[#D4AF37] text-[11px] font-bold">{cred.metricValue}</span>
                    </div>
                  )}

                  <p className="text-slate-400 text-sm font-light leading-relaxed">{cred.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Remaining 3 cards — compact row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREDENTIALS.filter((c) => !c.featured).map((cred, idx) => {
            const Icon = cred.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                className="group relative rounded-2xl p-6 bg-slate-900/40 border border-slate-800 hover:border-[#D4AF37]/35 transition-all duration-400 overflow-hidden"
              >
                {/* Side accent */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-slate-800 group-hover:bg-[#D4AF37]/60 transition-all duration-300 rounded-full" />

                <div className="pl-3 relative z-10">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-300 inline-block mb-4">
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3 inline-block ${categoryColor[cred.category]}`}>
                    {cred.category}
                  </span>

                  <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-white transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-0.5">{cred.institution}</p>
                  <p className="text-slate-600 text-[11px] mb-3">{cred.duration}</p>
                  <p className="text-slate-400 text-xs font-light leading-relaxed">{cred.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
