"use client";

import { useRef, useState, useEffect, ComponentType } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Landmark, Users, MapPin, Calendar } from "lucide-react";
import Image from "next/image";

interface Job {
  role: string;
  org: string;
  year: string;
  duration: string;
  location: string;
  description: string;
  images: string[]; // List of images for shuffling
  icon: ComponentType<{ className?: string }>;
}

const JOBS: Job[] = [
  {
    role: "Senior Executive – Global Affairs & International Relations",
    org: "Techno India Group & Sister Nivedita University",
    year: "2024",
    duration: "February 2024 - Present",
    location: "Kolkata, India",
    icon: Landmark,
    description: "Managing international academic partnerships and collaborations at Techno India Group and Sister Nivedita University. Coordinated global engagement, student mobility programs, and cross-border initiatives, facilitating relations with foreign delegations and consulates to strengthen the institutions' global presence.",
    images: [
      "/senior_exec_1.png",
      "/senior_exec_2.png",
      "/senior_exec_3.png"
    ]
  },
  {
    role: "Coordinator",
    org: "Satyam Roychowdhury Foundation",
    year: "2023",
    duration: "July 2023 - Present",
    location: "Kolkata, India",
    icon: Users,
    description: "Managed community engagement programs, coordinating social impact and CSR initiatives for Satyam Roychowdhury Foundation. Maintained active stakeholder communication, negotiating program outcomes and coordinating public events and administrative logistics.",
    images: [
      "/coordinator_1.png",
      "/coordinator_2.png"
    ]
  }
];

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Shuffles every 4 seconds
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt="Professional Journey visual"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80 pointer-events-none" />
    </div>
  );
}

function TimelineRow({ job, index }: { job: Job; index: number }) {
  const rowRef = useRef(null);
  const isInView = useInView(rowRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;
  const IconComponent = job.icon;

  return (
    <div
      ref={rowRef}
      className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 mb-20 md:mb-28 last:mb-0 w-full"
    >
      {/* Text block + Badge Icon Column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`w-full md:w-[52%] flex items-center gap-4 md:gap-8 ${
          isEven
            ? "flex-row-reverse md:flex-row justify-end text-left md:text-right order-1 md:order-1"
            : "flex-row justify-start text-left md:text-left order-1 md:order-2"
        }`}
      >
        {/* Text Area */}
        <div className="flex-1 min-w-0">
          {/* Huge watermark year */}
          <div
            className={`text-6xl md:text-7xl font-sans font-black text-slate-800/40 select-none mb-1 tracking-tight leading-none ${
              isEven ? "text-left md:text-right" : "text-left"
            }`}
          >
            {job.year}
          </div>

          {/* Job Role Title */}
          <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-2 leading-snug tracking-tight">
            {job.role}
          </h3>

          {/* Subtitle Details: Org, Duration, Location */}
          <div
            className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-medium tracking-wide mb-3 ${
              isEven ? "justify-start md:justify-end" : "justify-start"
            }`}
          >
            <span className="text-[#D4AF37] font-semibold">{job.org}</span>
            <span className="text-slate-650">•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {job.duration}
            </span>
            <span className="text-slate-650">•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {job.location}
            </span>
          </div>

          {/* Description Paragraph */}
          <p className="text-slate-400 font-sans text-sm md:text-base leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Badge Icon Circle */}
        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-indigo-500/20 bg-[#090d19] flex items-center justify-center text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.1)] transition-transform duration-300 hover:scale-110">
          <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
        </div>
      </motion.div>

      {/* Image Carousel Card Column */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className={`w-full md:w-[42%] flex ${
          isEven
            ? "justify-start md:justify-start order-2 md:order-2"
            : "justify-start md:justify-end order-2 md:order-1"
        }`}
      >
        <div className="relative w-full max-w-[480px] aspect-[16/10] rounded-[2rem] border border-slate-800 bg-[#090d16] p-2 shadow-2xl transition-all duration-500 hover:border-slate-700/80">
          <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-slate-950">
            <ImageCarousel images={job.images} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold block mb-2">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">Work Experience</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Items Stack */}
        <div className="space-y-20 md:space-y-24">
          {JOBS.map((job, idx) => (
            <TimelineRow key={idx} job={job} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
