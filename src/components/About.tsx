"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Globe } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const skills = [
    "International Relations",
    "Global Partnerships",
    "Academic Collaborations",
    "Stakeholder Engagement",
    "Event Management",
    "Student Mobility",
    "Team Management"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: The Journey (Top-Left, Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-8 md:p-10 flex flex-col justify-between group relative min-h-[300px]"
          >
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-6">
              THE JOURNEY
            </span>
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-medium text-slate-100 leading-relaxed">
                From a young age, I have been recognized for my leadership, team management skills, and ability to quickly adapt and learn.
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                I completed my higher secondary education in Humanities and graduated with a degree in Sociology, building a strong foundation in understanding cross-cultural dynamics and institutional relations.
              </p>
            </div>
            <div className="mt-8 text-slate-500 text-xs font-light font-sans flex items-center gap-2">
              <span>Sociology Graduate</span>
              <span>•</span>
              <span>Humanities Foundation</span>
            </div>
          </motion.div>

          {/* Card 2: Eager to Learn (Top-Right, Spans 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between group relative"
          >
            <div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[#D4AF37] mb-6 inline-block">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-150 mb-2">Eager to Learn</h3>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed">
                Currently pursuing an MBA to further strengthen my academic and professional foundation in strategic management.
              </p>
            </div>
            
            <div className="border-t border-slate-900 pt-6 mt-8">
              <span className="block text-4xl font-extrabold text-gradient-gold">2025</span>
              <span className="block text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                MBA ENROLLMENT YEAR
              </span>
            </div>
          </motion.div>

          {/* Card 3: Skills Arsenal (Bottom-Left, Spans 1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1 glass-panel rounded-3xl p-8 flex flex-col justify-between group relative"
          >
            <div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[#D4AF37] mb-6 inline-block">
                <Globe className="w-5 h-5 animate-spin-slow" />
              </div>
              <h3 className="text-lg font-serif font-bold text-slate-150 mb-4">Outreach Skills</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-slate-950/70 border border-slate-850/80 rounded-lg text-[10px] text-slate-300 font-medium group-hover:border-amber-500/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Philosophy / Quote (Bottom-Right, Spans 2 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-8 md:p-10 flex flex-col justify-between group relative min-h-[260px]"
          >
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest block mb-6">
              CURRENT OFFICE & PHILOSOPHY
            </span>
            <div>
              <p className="text-slate-200 text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-[#D4AF37] pl-6">
                &ldquo;I am presently working as a Senior Executive in the Department of Global Affairs and International Relations at Techno India Group and Sister Nivedita University. This role reflects my dedication, performance, and ability to contribute effectively in dynamic and globally oriented environments.&rdquo;
              </p>
              <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed mt-4 pl-6">
                I am known for maintaining a positive attitude and a cheerful outlook, even in challenging situations.
              </p>
            </div>
            <div className="mt-8 text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider pl-6">
              Department of Global Affairs • SNU & Techno India
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
