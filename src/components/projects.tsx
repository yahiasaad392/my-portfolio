"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { projects } from "@/data/portfolio-data";
import SectionReveal from "@/components/effects/section-reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent-cyan)]">05.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Projects
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mt-4">
            A selection of projects that showcase my range — from full-stack
            applications to system-level tools.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, index) => (
            <SectionReveal
              key={project.title}
              delay={index * 0.1}
            >
              <div className="glass rounded-xl overflow-hidden card-hover group h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent opacity-60" />

                  {/* Overlay buttons on hover */}
                  <div className="absolute inset-0 bg-[var(--bg-primary)]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass text-[var(--text-primary)] hover:bg-white/20 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full glass text-[var(--text-primary)] hover:bg-white/20 transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <GithubIcon size={18} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-white/[0.04] text-[var(--text-muted)] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-3 pt-2 border-t border-[var(--border-subtle)]">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors font-medium"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <span className="text-[var(--border-subtle)]">·</span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                    >
                      <GithubIcon size={14} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
