"use client";

import Image from "next/image";
import { ExternalLink, Shield, Server, Monitor, Lock, Database, Globe, Terminal } from "lucide-react";
import { featuredProject } from "@/data/portfolio-data";
import SectionReveal from "@/components/effects/section-reveal";

const featureIcons: Record<string, React.ReactNode> = {
  "Enterprise VPN with WireGuard": <Shield size={14} />,
  "Electron Desktop Application": <Monitor size={14} />,
  "NestJS Backend Architecture": <Server size={14} />,
  "Zero Trust Security Model": <Lock size={14} />,
  "Endpoint Compliance Scanning": <Shield size={14} />,
  "Supabase Database Integration": <Database size={14} />,
  "Linux VPS Deployment": <Terminal size={14} />,
  "Automated VPN Provisioning": <Globe size={14} />,
};

export default function FeaturedProject() {
  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-mono text-[var(--accent)]">04.</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Featured Project
            </h2>
            <div className="hidden sm:block flex-1 h-px bg-[var(--border-subtle)]" />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-10 relative group">
            {/* Background glow */}
            <div className="absolute -inset-2 rounded-3xl bg-emerald-500/[0.03] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative glass rounded-2xl overflow-hidden gradient-border">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 sm:h-80 lg:h-full min-h-[400px]">
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--bg-secondary)]/80 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent lg:hidden" />

                  {/* Graduation badge */}
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-xs font-medium">
                    <span className="text-emerald-400">●</span>{" "}
                    <span className="text-[var(--text-primary)]">Graduation Project</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="text-xs font-mono text-[var(--accent)] mb-3 tracking-wider uppercase">
                    Enterprise Software Platform
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-2">
                    {featuredProject.title}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)] font-medium mb-4">
                    {featuredProject.subtitle}
                  </p>

                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {featuredProject.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                      >
                        <span className="text-[var(--accent)]">
                          {featureIcons[feature] || <Shield size={14} />}
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-[var(--accent-subtle)] text-emerald-300/90 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-[var(--bg-primary)] font-medium text-sm hover:bg-[var(--accent-muted)] transition-all duration-300 hover:scale-[1.03] w-fit"
                  >
                    Visit Project
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
