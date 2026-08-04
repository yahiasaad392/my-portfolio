"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "@/data/portfolio-data";
import SectionReveal from "@/components/effects/section-reveal";

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">06.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Education
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-12 max-w-3xl">
            <div className="glass rounded-xl p-6 sm:p-8 card-hover group">
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-colors duration-300 shrink-0">
                  <GraduationCap
                    size={28}
                    className="text-[var(--accent-blue)]"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-[var(--accent-cyan)] font-medium mb-3">
                    {education.university}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                      <Calendar size={14} />
                      Expected Graduation: {education.expectedGraduation}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                      <MapPin size={14} />
                      Cairo, Egypt
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
