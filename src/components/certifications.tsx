"use client";

import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio-data";
import SectionReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/section-reveal";

export default function Certifications() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">07.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Certifications
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <div className="glass rounded-xl p-5 card-hover group h-full">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 w-fit mb-4 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-colors duration-300">
                  <cert.icon
                    size={20}
                    className="text-[var(--accent-blue)]"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">{cert.issuer}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
