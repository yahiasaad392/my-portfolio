"use client";

import { experiences } from "@/data/portfolio-data";
import SectionReveal from "@/components/effects/section-reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent)]">03.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Experience & Training
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
        </SectionReveal>

        <div className="mt-10 max-w-3xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-emerald-500/30 via-[var(--border-light)] to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <SectionReveal key={index} delay={index * 0.1}>
                  <div className="relative pl-14 group">
                    {/* Timeline dot */}
                    <div className="absolute left-2.5 top-1.5 w-4 h-4 rounded-full border-2 border-emerald-500/50 bg-[var(--bg-primary)] group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all duration-300" />

                    {/* Card */}
                    <div className="glass rounded-xl p-6 card-hover">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                            {exp.title}
                          </h3>
                          <p className="text-[var(--accent)] text-sm font-medium mt-0.5">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 text-xs rounded-full glass text-[var(--text-muted)]">
                            {exp.type}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] font-mono">
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-md bg-white/[0.04] text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
