"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Expertise from "@/components/Expertise";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Expertise", href: "#expertise" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll height to trace active section
  useEffect(() => {
    const handleScroll = () => {

      // 2. Active section highlights
      const scrollPosition = window.scrollY + 200; // Offset for trigger point
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Scroll Progress Bar at the absolute top */}
      <ScrollProgress />

      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-6">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo / Initials */}
          <a href="#hero" className="font-serif font-black text-2xl tracking-tighter text-white hover:text-[#D4AF37] transition-colors duration-300">
            AC
          </a>

          {/* Desktop Navigation Centered Pill Menu */}
          <nav className="hidden lg:flex items-center gap-5 border border-slate-800/80 bg-[#020617]/40 rounded-full px-6 py-2.5 backdrop-blur-md">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[9px] uppercase tracking-widest font-bold transition-all duration-300 px-1.5 ${
                    isActive ? "text-[#D4AF37]" : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Connect Button (Hire Me style) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-xs font-bold bg-[#F8FAFC] hover:bg-[#D4AF37] text-slate-950 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]"
            >
              CONNECT
            </a>
          </div>

          {/* Mobile Menu Toggler button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#D4AF37] transition-colors duration-300"
            className="lg:hidden p-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-[#D4AF37] transition-colors duration-300"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#020617]/95 border-b border-slate-900 py-6 px-8 flex flex-col gap-4 shadow-2xl backdrop-blur-lg max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xs sm:text-sm uppercase tracking-widest font-bold py-2 border-b border-slate-900/60 last:border-0 ${
                    isActive ? "text-[#D4AF37]" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        )}
      </header>

      {/* Main Single Page Sections */}
      <main className="w-full">
        <Hero />
        <About />
        <Experience />
        <Expertise />
        <Achievements />
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
