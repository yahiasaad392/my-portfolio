"use client";

import { achievements } from "@/data/portfolio-data";
import SectionReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/section-reveal";

export default function Achievements() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">08.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Achievements
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mt-4">
            Key milestones and engineering accomplishments across my career.
          </p>
        </SectionReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.title}>
              <div className="glass rounded-xl p-5 card-hover group h-full flex flex-col">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 w-fit mb-4 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors duration-300">
                  <achievement.icon
                    size={20}
                    className="text-[var(--accent-blue)] group-hover:text-[var(--accent-cyan)] transition-colors duration-300"
                  />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  {achievement.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1">
                  {achievement.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
