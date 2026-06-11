"use client";

import { useRef, ComponentType } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, GraduationCap, Compass, CheckCircle2 } from "lucide-react";

interface SkillItem {
  name: string;
  desc: string;
}

interface ExpertiseCategory {
  title: string;
  icon: ComponentType<{ className?: string }>;
  tagline: string;
  items: SkillItem[];
}

const CATEGORIES: ExpertiseCategory[] = [
  {
    title: "International Relations",
    icon: Globe,
    tagline: "Bridging institutions globally to cultivate long-term partnerships.",
    items: [
      {
        name: "Global Partnerships",
        desc: "Structuring dual agreements, university alliances, and international initiatives."
      },
      {
        name: "Student Mobility Programs",
        desc: "Administering pre-departure briefs, semester-abroad credits, and visa processes."
      },
      {
        name: "Higher Education Growth",
        desc: "Aligning international outreach objectives with modern institutional standards."
      }
    ]
  },
  {
    title: "Operations & Outreach",
    icon: GraduationCap,
    tagline: "Coordinating complex academic events and international student programs.",
    items: [
      {
        name: "Academic Collaborations",
        desc: "Facilitating joint research projects and institutional exchange pathways."
      },
      {
        name: "Event Management",
        desc: "Coordinating international conferences, CSR events, and foreign delegation hosting."
      },
      {
        name: "Program Coordination",
        desc: "Defining project roadmaps, scheduling events, and tracking outreach goals."
      }
    ]
  },
  {
    title: "Leadership & Relations",
    icon: Compass,
    tagline: "Leading multi-stakeholder engagements with clear communication and team guidance.",
    items: [
      {
        name: "Stakeholder Engagement",
        desc: "Negotiating collaborative frameworks with chancellors, foundation heads, and deans."
      },
      {
        name: "Team Management",
        desc: "Guiding young teams and organizing large-scale initiatives with clear communication."
      },
      {
        name: "Public Relations",
        desc: "Promoting institutional brands, writing newsletters, and cultivating public trust."
      }
    ]
  }
];

function ExpertiseCard({ category, index, inView }: { category: ExpertiseCategory; index: number; inView: boolean }) {
  const IconComponent = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="glass-panel glass-panel-hover rounded-2xl p-8 relative flex flex-col h-full group"
    >
      {/* Background card accent glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top Gold Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent group-hover:via-[#D4AF37] transition-all duration-300 rounded-t-2xl" />

      {/* Icon and Title Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-slate-950 transition-colors duration-300 shadow-sm">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-slate-100">{category.title}</h3>
      </div>

      <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 italic">
        &ldquo;{category.tagline}&rdquo;
      </p>

      {/* Subskills List */}
      <div className="space-y-6 mt-auto">
        {category.items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="text-slate-200 text-sm font-semibold mb-1">{item.name}</h4>
              <p className="text-slate-400 text-xs font-light leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="py-20 md:py-32 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Grid background mask overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.02),transparent_40%)]" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold block mb-2">
            Core Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Areas of Expertise</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, idx) => (
            <ExpertiseCard
              key={idx}
              category={category}
              index={idx}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
