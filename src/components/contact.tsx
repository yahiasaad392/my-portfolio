"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Download,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import Image from "next/image";
import { heroData } from "@/data/portfolio-data";
import SectionReveal from "@/components/effects/section-reveal";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-mono text-[var(--accent-cyan)] mb-4 block">
              09. What&apos;s Next?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Together</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg">
              I&apos;m currently open to new opportunities. Whether you have a
              project in mind, a question, or just want to say hello — my inbox
              is always open.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <SectionReveal delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <Send className="text-emerald-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all text-sm resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.3} className="lg:col-span-2">
            <div className="space-y-4">
              {/* Photo */}
              <div className="glass rounded-2xl p-5 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/photo-1.jpeg"
                    alt="Yahia Saad"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Yahia Saad
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    Software Engineer
                  </p>
                </div>
              </div>

              {/* Links */}
              <a
                href={`mailto:${heroData.socials.email}`}
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover group block"
              >
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <Mail size={18} className="text-[var(--accent-blue)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    Email
                  </p>
                  <p className="text-xs text-[var(--text-muted)] truncate">
                    {heroData.socials.email}
                  </p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"
                />
              </a>

              <a
                href={heroData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover group block"
              >
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <LinkedinIcon size={18} className="text-[var(--accent-blue)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    LinkedIn
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">Connect with me</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"
                />
              </a>

              <a
                href={heroData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover group block"
              >
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <GithubIcon size={18} className="text-[var(--accent-blue)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    GitHub
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">View my code</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"
                />
              </a>

              {/* Download CV */}
              <a
                href="/Yahia_Saad_CV.pdf"
                download
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover group block gradient-border"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  <Download size={18} className="text-[var(--accent-cyan)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    Download CV
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">Get my resume</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors"
                />
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
