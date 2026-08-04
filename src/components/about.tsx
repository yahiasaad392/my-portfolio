"use client";

import Image from "next/image";
import { aboutData } from "@/data/portfolio-data";
import SectionReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/section-reveal";

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">01.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mt-12">
          {/* Text Content */}
          <div className="lg:col-span-3">
            <StaggerContainer className="space-y-5">
              {aboutData.paragraphs.map((paragraph, i) => (
                <StaggerItem key={i}>
                  <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Interest Tags */}
            <SectionReveal delay={0.4}>
              <div className="mt-8">
                <p className="text-sm font-mono text-[var(--text-muted)] mb-4">
                  Areas of Interest
                </p>
                <div className="flex flex-wrap gap-2">
                  {aboutData.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1.5 text-sm rounded-lg glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/[0.08] transition-all duration-300 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Image */}
          <SectionReveal
            direction="right"
            delay={0.3}
            className="lg:col-span-2 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden gradient-border">
                <Image
                  src={aboutData.image}
                  alt="Yahia Saad at Future University in Egypt"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 256px, 288px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent" />
              </div>

              {/* University badge */}
              <div className="absolute -bottom-3 -right-3 glass rounded-lg px-3 py-2 text-xs">
                <span className="text-[var(--text-muted)]">CS @</span>{" "}
                <span className="text-[var(--text-primary)] font-medium">
                  Future University
                </span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
