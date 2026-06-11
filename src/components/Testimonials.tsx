"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  designation: string;
  feedback: string;
  initials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Elizabeth Ward",
    designation: "Director of Global Partnerships, King's College London",
    feedback: "Ankita's proactive communication and deep understanding of double-degree structures made our collaboration seamless. Her professionalism and dedication to international student success are truly commendable.",
    initials: "EW"
  },
  {
    name: "Prof. Rajesh Sengupta",
    designation: "Dean of International Office, Apex University",
    feedback: "Her ability to navigate complex diplomatic procedures and align diverse university policies has been central to establishing our study pathways in Europe. She is a remarkable leader in academic diplomacy.",
    initials: "RS"
  },
  {
    name: "Sarah Jenkins",
    designation: "Director of Study Abroad Programs, Boston University",
    feedback: "Working with Ankita on international student mobility is always a pleasure. She is highly detail-oriented, ensuring that student orientation, credit mapping, and visa advisory are flawlessly executed.",
    initials: "SJ"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Slide transition variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto" ref={sectionRef}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold block mb-2">
            Endorsements
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Professional Testimonials</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        {/* Carousel Container */}
        <div 
          className="relative glass-panel rounded-3xl p-8 md:p-12 border-slate-800/80 min-h-[320px] flex flex-col justify-between"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Mark Background */}
          <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-900/40 pointer-events-none" />
          
          <div className="relative overflow-hidden flex-grow flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                className="w-full"
              >
                {/* Feedback Text */}
                <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed mb-8 italic">
                  &ldquo;{TESTIMONIALS[activeIndex].feedback}&rdquo;
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Initials Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#D4AF37]/20 to-slate-900 border border-[#D4AF37]/35 flex items-center justify-center font-serif text-[#D4AF37] font-semibold text-sm">
                    {TESTIMONIALS[activeIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-slate-100">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-400 font-light mt-0.5">
                      {TESTIMONIALS[activeIndex].designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-900/80">
            {/* Dots indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-6 bg-[#D4AF37]" : "bg-slate-700 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/20 text-slate-400 hover:text-[#D4AF37] transition-all duration-300"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/20 text-slate-400 hover:text-[#D4AF37] transition-all duration-300"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
