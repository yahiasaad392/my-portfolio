"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { heroData } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
            <span>Designed & Built by</span>
            <span className="text-[var(--text-secondary)] font-medium">
              Yahia Saad
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={heroData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={heroData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${heroData.socials.email}`}
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} Yahia Saad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
