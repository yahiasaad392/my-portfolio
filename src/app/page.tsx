"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import FeaturedProject from "@/components/featured-project";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import MouseGlow from "@/components/effects/mouse-glow";
import AnimatedBackground from "@/components/effects/animated-background";
import ScrollProgress from "@/components/effects/scroll-progress";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
