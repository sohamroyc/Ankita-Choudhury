"use client";

import type { Engine } from "@tsparticles/engine";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Briefcase } from "lucide-react";
import Tilt from "react-parallax-tilt";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";


const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);


export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yText = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const initParticles = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#020617] overflow-hidden pt-28 pb-20 px-6 md:px-12 lg:px-24"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/3 rounded-full blur-[200px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <ParticlesProvider init={initParticles}>
        <Particles
          id="tsparticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "grab"
                }
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5
                  }
                }
              }
            },
            particles: {
              color: {
                value: "#D4AF37"
              },
              links: {
                color: "#D4AF37",
                distance: 150,
                enable: true,
                opacity: 0.15,
                width: 1
              },
              move: {
                enable: true,
                speed: 1.2
              },
              number: {
                density: {
                  enable: true
                },
                value: 40
              },
              opacity: {
                value: 0.25
              },
              size: {
                value: { min: 1, max: 3 }
              }
            },
            detectRetina: true
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        />
      </ParticlesProvider>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10">

        {/* ── LEFT COLUMN ── */}
        <motion.div
          style={{ y: yText }}
          className="flex flex-col items-start text-left order-2 lg:order-1"
        >

          {/* Role pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-[11px] font-bold tracking-[0.15em] uppercase mb-7"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            Global Affairs & Academic Diplomacy
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="hero-title text-5xl md:text-6xl lg:text-[4.25rem] font-sans font-black tracking-tight text-white mb-5 leading-[1.05] select-none"
          >
            Building <br />
            <span className="font-serif italic font-normal text-gradient-gold pr-4 inline-block">
              meaningful
            </span>
            <br />
            connections.
          </motion.h1>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-base md:text-[1.05rem] font-light leading-relaxed max-w-lg mb-4"
          >
            I&apos;m <span className="text-slate-100 font-semibold">Ankita Choudhury</span> — Senior Executive in Global Affairs & International Relations at{" "}
            <span className="text-slate-100 font-semibold">Techno India Group & Sister Nivedita University</span>, driving cross-border academic partnerships and global engagement.
          </motion.p>

          {/* Meta row — location + org */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-9"
          >
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-600" />
              Kolkata, West Bengal, India
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Briefcase className="w-3.5 h-3.5 text-slate-600" />
              Senior Executive · Feb 2024 – Present
            </span>
          </motion.div>


          {/* CTA row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 }}
            className="flex items-center gap-3 flex-wrap"
          >
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4AF37] hover:bg-[#F3C63F] text-[#020617] rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
            >
              View Experience
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border border-slate-700 hover:border-[#D4AF37]/50 text-slate-300 hover:text-white rounded-xl text-sm font-semibold transition-all duration-300"
            >
              Get in Touch
            </a>

            {/* Icon links */}
            <div className="flex gap-2 ml-1">
              <a
                href="mailto:ankita.relations@example.com"
                className="p-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/35 text-slate-400 hover:text-[#D4AF37] rounded-xl transition-all duration-300"
                aria-label="Email Ankita"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://linkedin.com/in/ankitachoudhury"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-[#D4AF37]/35 text-slate-400 hover:text-[#D4AF37] rounded-xl transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4.5 h-4.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN — Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          style={{ y: yPhoto }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          {/* Outer glow halo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/15 via-transparent to-indigo-500/10 rounded-[2.5rem] blur-3xl pointer-events-none scale-110" />

          {/* Card shell */}
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03} transitionSpeed={400}>
            <div className="relative w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[340px] md:h-[450px] lg:w-[380px] lg:h-[500px] rounded-[2rem] overflow-visible">

              {/* Gold gradient border */}
              <div className="absolute -inset-[2px] bg-gradient-to-b from-[#D4AF37]/50 via-[#D4AF37]/10 to-transparent rounded-[2rem] z-10 pointer-events-none" />

              {/* Photo frame */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-900 z-20 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/hero.jpg"
                  alt="Ankita Choudhury – Global Affairs Professional"
                  fill
                  sizes="(max-width: 768px) 300px, 400px"
                  className="object-cover object-top"
                  priority
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/75 via-[#020617]/10 to-transparent pointer-events-none" />

                {/* Name plate at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5 z-30">
                  <p className="text-white font-bold text-lg leading-tight">Ankita Choudhury</p>
                  <p className="text-[#D4AF37] text-[11px] font-semibold uppercase tracking-widest mt-0.5">
                    Global Affairs & Int&apos;l Relations
                  </p>
                </div>
              </div>






            </div>
          </Tilt>

        </motion.div>

      </div>
    </section>
  );
}
