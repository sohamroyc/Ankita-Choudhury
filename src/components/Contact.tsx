"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Mail, Send, CheckCircle2, MessageSquare,
  Landmark, User, MailCheck, MapPin, Clock
} from "lucide-react";

const LinkedinFilled = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ankita.relations@example.com",
    href: "mailto:ankita.relations@example.com",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: "#",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within 24 hours",
    href: "#",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", org: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", org: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 bg-[#020617] px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#D4AF37] uppercase tracking-[0.18em] text-[11px] font-bold mb-4">
            <span className="w-6 h-px bg-[#D4AF37]/60" />
            Get In Touch
            <span className="w-6 h-px bg-[#D4AF37]/60" />
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 font-light max-w-lg mx-auto text-sm leading-relaxed">
            Drop me a message to collaborate or just say hi.
          </p>
        </motion.div>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── LEFT: Info Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Intro card */}
            <div className="rounded-3xl p-7 bg-slate-900/50 border border-slate-800 relative overflow-hidden group">
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Ready to collaborate?
              </h3>
              <p className="text-slate-400 text-sm font-light">
                Reach out directly via email or connect on LinkedIn.
              </p>
            </div>

            {/* Contact info cards */}
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              const isLink = item.href !== "#";
              const Wrapper = isLink ? "a" : "div";
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + idx * 0.1, duration: 0.5 }}
                >
                  <Wrapper
                    {...(isLink ? { href: item.href } : {})}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 group cursor-default"
                  >
                    <div className={`p-2.5 rounded-xl border ${item.bg} ${item.color} flex-shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">{item.label}</span>
                      <span className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">{item.value}</span>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            {/* LinkedIn CTA */}
            <motion.a
              href="https://linkedin.com/in/ankitachoudhury"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#0077B5]/10 border border-[#0077B5]/25 hover:border-[#0077B5]/60 hover:bg-[#0077B5]/15 transition-all duration-300 group"
            >
              <div className="p-2.5 rounded-xl bg-[#0077B5] flex-shrink-0">
                <LinkedinFilled className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="block text-[10px] text-slate-500 uppercase tracking-widest font-bold">Connect on LinkedIn</span>
                <span className="text-sm text-slate-200 font-medium group-hover:text-white transition-colors">2,000+ Followers</span>
              </div>
            </motion.a>
          </motion.div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl p-8 md:p-10 bg-slate-900/50 border border-slate-800 overflow-hidden">
              {/* Gold shimmer top */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
              {/* Ambient glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-white">Send a Message</h3>
                      <p className="text-slate-500 text-xs mt-1">Fill in the form and I&apos;ll get back to you shortly.</p>
                    </div>

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                          <input
                            type="text" name="name" required value={formData.name}
                            onChange={handleChange} placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#D4AF37]/70 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                          Email Address
                        </label>
                        <div className="relative">
                          <MailCheck className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                          <input
                            type="email" name="email" required value={formData.email}
                            onChange={handleChange} placeholder="you@organization.com"
                            className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#D4AF37]/70 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organization */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Organization / University
                      </label>
                      <div className="relative">
                        <Landmark className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                        <input
                          type="text" name="org" value={formData.org}
                          onChange={handleChange} placeholder="Your institution or company"
                          className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#D4AF37]/70 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 text-sm"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-slate-600" />
                        <textarea
                          name="message" required rows={5} value={formData.message}
                          onChange={handleChange}
                          placeholder="Describe your collaboration proposal or inquiry..."
                          className="w-full pl-10 pr-4 py-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-700 focus:outline-none focus:border-[#D4AF37]/70 focus:ring-1 focus:ring-[#D4AF37]/40 transition-all duration-300 text-sm resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#D4AF37] hover:bg-[#F3C63F] text-[#020617] rounded-xl font-bold text-sm transition-all duration-300 disabled:opacity-60 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center text-center py-20 relative z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 120 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-slate-400 text-sm font-light max-w-xs leading-relaxed mb-8">
                      Thank you for reaching out. I&apos;ll review your message and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-slate-950 font-semibold rounded-xl text-sm transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
