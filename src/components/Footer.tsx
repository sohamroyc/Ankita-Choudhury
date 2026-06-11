"use client";

import { ArrowUp, Mail } from "lucide-react";

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-slate-900/60 py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left: Name and Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-serif font-bold text-slate-100 mb-2">Ankita Choudhury</h3>
          <p className="text-xs text-slate-500 font-light font-sans">
            © {new Date().getFullYear()} Ankita Choudhury. All rights reserved.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-4">
          <a
            href="mailto:ankita.relations@example.com"
            className="p-2 rounded-full bg-slate-900 hover:bg-[#D4AF37] border border-slate-800 hover:border-[#D4AF37] text-slate-400 hover:text-slate-950 transition-all duration-300"
            aria-label="Email Address"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ankitachoudhury"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-slate-900 hover:bg-[#D4AF37] border border-slate-800 hover:border-[#D4AF37] text-slate-400 hover:text-slate-950 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to Top Button */}
        <div>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/25 rounded-lg text-xs font-semibold text-slate-300 hover:text-[#D4AF37] transition-all duration-300 cursor-pointer"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
