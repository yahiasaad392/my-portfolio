"use client";

import { skillCategories } from "@/data/portfolio-data";
import SectionReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/section-reveal";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">02.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Skills & Technologies
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mt-4">
            Technologies and tools I use to bring ideas to life — from concept
            to production.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <SectionReveal
              key={category.title}
              delay={categoryIndex * 0.1}
            >
              <div className="glass rounded-xl p-6 h-full card-hover group">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-colors duration-300">
                    <category.icon
                      size={20}
                      className="text-[var(--accent-blue)]"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <StaggerContainer
                  className="space-y-2"
                  staggerDelay={0.05}
                >
                  {category.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/[0.04] transition-colors duration-200 group/skill">
                        <skill.icon
                          size={14}
                          className="text-[var(--text-muted)] group-hover/skill:text-[var(--accent-cyan)] transition-colors duration-200"
                        />
                        <span className="text-sm text-[var(--text-secondary)] group-hover/skill:text-[var(--text-primary)] transition-colors duration-200">
                          {skill.name}
                        </span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
