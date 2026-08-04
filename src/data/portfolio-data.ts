import {
  Code2,
  Server,
  Database,
  Shield,
  Globe,
  Smartphone,
  Lock,
  Cpu,
  Terminal,
  GitBranch,
  Layout,
  Layers,
  type LucideIcon,
} from "lucide-react";

// ─── Navigation ─────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Hero ───────────────────────────────────────────────────
export const heroData = {
  name: "Yahia Saad",
  title: "Software Engineer",
  subtitles: [
    "Full Stack Developer",
    "Backend Engineer",
    "Security-Focused Software Engineer",
  ],
  description:
    "I architect and build scalable, secure software systems — from enterprise-grade backend services to polished, high-performance front-end experiences. Focused on clean architecture, zero-trust security, and delivering production-ready code that solves real problems.",
  image: "/images/photo-2.jpeg",
  socials: {
    github: "https://github.com/yahiasaad392",
    linkedin: "https://www.linkedin.com/in/yahia-saad-ab119236b/",
    email: "ys5313944@gmail.com",
  },
  cvUrl: "/Yahia_Saad_CV.pdf",
};

// ─── About ──────────────────────────────────────────────────
export const aboutData = {
  image: "/images/photo-3.jpeg",
  paragraphs: [
    "I'm a Computer Science student at Future University in Egypt, expected to graduate in 2026, with a deep passion for building software that matters. My focus spans across backend engineering, full-stack development, and cybersecurity — disciplines I pursue with the same rigor and attention to detail.",
    "I specialize in designing scalable enterprise applications with clean architecture, leveraging technologies like NestJS, Next.js, and PostgreSQL. My work on Corpo VPN — an enterprise zero-trust VPN platform — demonstrates my ability to deliver complex, security-critical software from concept to production.",
    "Beyond writing code, I care deeply about performance optimization, authentication systems, and building software that stands up to real-world demands. Every project I undertake reflects my commitment to engineering excellence.",
  ],
  interests: [
    "Backend Engineering",
    "Enterprise Software",
    "Full Stack Development",
    "Cyber Security",
    "Zero Trust Architecture",
    "Performance Optimization",
    "Clean Architecture",
  ],
};

// ─── Skills ─────────────────────────────────────────────────
export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "Tailwind CSS", icon: Layout },
      { name: "JavaScript", icon: Code2 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "NestJS", icon: Server },
      { name: "Node.js", icon: Server },
      { name: "REST APIs", icon: Globe },
      { name: "JWT", icon: Lock },
      { name: "Electron", icon: Smartphone },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Supabase", icon: Database },
    ],
  },
  {
    title: "Security & DevOps",
    icon: Shield,
    skills: [
      { name: "WireGuard", icon: Shield },
      { name: "Zero Trust", icon: Lock },
      { name: "Authentication", icon: Lock },
      { name: "Linux", icon: Terminal },
      { name: "PowerShell", icon: Terminal },
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GitBranch },
    ],
  },
];

// ─── Experience ─────────────────────────────────────────────
export interface Experience {
  title: string;
  company: string;
  period: string;
  type: string;
  description: string;
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    title: "Front-End Development Diploma",
    company: "Route Academy",
    period: "2024",
    type: "Diploma",
    description:
      "Completed an intensive front-end development diploma covering modern web technologies, responsive design, JavaScript frameworks, and best practices in building production-quality user interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Bootstrap"],
  },
  {
    title: "Backend Development Training",
    company: "AITB",
    period: "2024",
    type: "Training",
    description:
      "Specialized backend development training focused on building scalable server-side applications, RESTful API design, database management, and authentication systems.",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "REST APIs", "JWT"],
  },
  {
    title: "System Administration",
    company: "Red Hat (RH124)",
    period: "2024",
    type: "Certification Training",
    description:
      "Red Hat System Administration I — learned essential Linux administration skills including managing users, files, storage, and network configurations on Red Hat Enterprise Linux.",
    technologies: ["Linux", "RHEL", "Bash", "System Administration"],
  },
];

// ─── Featured Project ───────────────────────────────────────
export const featuredProject = {
  title: "Corpo VPN",
  subtitle: "Enterprise Zero-Trust Security Platform",
  description:
    "A comprehensive enterprise VPN solution built from the ground up, combining WireGuard tunnel encryption with real-time OS compliance scanning. Corpo VPN enables organizations to secure their remote workforce with zero-trust architecture, endpoint compliance checks, and automated VPN provisioning — all managed through an elegant Electron desktop application.",
  image: "/images/corpo-vpn.png",
  liveUrl: "https://corpo-1vfse8ytr-yahia-saads-projects.vercel.app/",
  features: [
    "Enterprise VPN with WireGuard",
    "Electron Desktop Application",
    "NestJS Backend Architecture",
    "Zero Trust Security Model",
    "Endpoint Compliance Scanning",
    "Supabase Database Integration",
    "Linux VPS Deployment",
    "Automated VPN Provisioning",
  ],
  technologies: [
    "Electron",
    "NestJS",
    "WireGuard",
    "Supabase",
    "TypeScript",
    "Linux",
    "Zero Trust",
    "PostgreSQL",
  ],
};

// ─── Projects ───────────────────────────────────────────────
export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Smart Cart",
    description:
      "A full-featured e-commerce platform with product browsing, category filtering, user authentication, cart management, and a modern dark-themed UI. Built for a seamless online shopping experience.",
    image: "/images/smart-cart.png",
    liveUrl: "https://smart-cart-9ab1.vercel.app/",
    githubUrl: "https://github.com/yahiasaad392/smart-cart",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "API Integration"],
  },
  {
    title: "Weather App",
    description:
      "A dynamic weather application featuring real-time forecasts, location-based search, multi-day predictions, and detailed weather metrics including humidity, wind speed, and conditions.",
    image: "/images/weather-app.png",
    liveUrl: "https://yahiasaad392.github.io/weather-app/",
    githubUrl: "https://github.com/yahiasaad392/weather-app",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API", "Responsive Design"],
  },
  {
    title: "Yummy",
    description:
      "A recipe discovery platform with a rich visual gallery, category-based browsing, area filtering, ingredient search, and a responsive sidebar navigation. Explore cuisines from around the world.",
    image: "/images/yummy.png",
    liveUrl: "https://yahiasaad392.github.io/yummy/",
    githubUrl: "https://github.com/yahiasaad392/yummy",
    technologies: ["JavaScript", "HTML", "CSS", "TheMealDB API", "Responsive Design"],
  },
  {
    title: "Authentication System",
    description:
      "A secure login and registration system with email and password validation, form state management, and a clean, modern interface. Demonstrates front-end authentication flow best practices.",
    image: "/images/auth-app.png",
    liveUrl: "https://yahiasaad392.github.io/auth-system/",
    githubUrl: "https://github.com/yahiasaad392/auth-system",
    technologies: ["JavaScript", "HTML", "CSS", "Form Validation", "Local Storage"],
  },
  {
    title: "Mini OS Simulator",
    description:
      "An operating system concepts simulator featuring page replacement algorithms (FIFO, LRU, Optimal), disk scheduling visualizations, and side-by-side algorithm comparison tools.",
    image: "/images/mini-os.png",
    liveUrl: "http://yahiasaad392.github.io/mini_os/",
    githubUrl: "https://github.com/yahiasaad392/mini_os",
    technologies: ["JavaScript", "HTML", "CSS", "OS Algorithms", "Data Visualization"],
  },
  {
    title: "Bookmarker",
    description:
      "A bookmark management application allowing users to save, organize, and access their favorite websites. Features URL validation, persistent storage, and a warm, elegant interface.",
    image: "/images/bookmarker.png",
    liveUrl: "https://yahiasaad392.github.io/bookmarker/",
    githubUrl: "https://github.com/yahiasaad392/bookmarker",
    technologies: ["JavaScript", "HTML", "CSS", "Local Storage", "CRUD Operations"],
  },
];

// ─── Education ──────────────────────────────────────────────
export const education = {
  university: "Future University in Egypt",
  degree: "Bachelor of Computer Science",
  expectedGraduation: "2026",
  description:
    "Pursuing a Bachelor's degree in Computer Science with a strong focus on software engineering, systems design, and cybersecurity. Actively involved in developing enterprise-grade applications and contributing to open-source projects.",
};

// ─── Certifications ─────────────────────────────────────────
export interface Certification {
  title: string;
  issuer: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  {
    title: "Front-End Development Diploma",
    issuer: "Route Academy",
    icon: Code2,
  },
  {
    title: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat",
    icon: Terminal,
  },
  {
    title: "Developing Cloud-Native Applications (AD141)",
    issuer: "Red Hat",
    icon: Layers,
  },
  {
    title: "Backend Development Training",
    issuer: "AITB",
    icon: Server,
  },
];

// ─── Achievements ───────────────────────────────────────────
export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: "Enterprise VPN Development",
    description: "Built a production-ready zero-trust VPN platform as a graduation project",
    icon: Shield,
  },
  {
    title: "Desktop Applications",
    description: "Developed cross-platform Electron apps with native system integration",
    icon: Smartphone,
  },
  {
    title: "Backend Engineering",
    description: "Designed scalable NestJS services with clean architecture patterns",
    icon: Server,
  },
  {
    title: "Authentication Systems",
    description: "Implemented secure JWT-based auth flows and session management",
    icon: Lock,
  },
  {
    title: "Security Engineering",
    description: "Applied zero-trust principles and WireGuard encryption in enterprise software",
    icon: Shield,
  },
  {
    title: "Performance Optimization",
    description: "Optimized applications for speed, efficiency, and minimal resource consumption",
    icon: Cpu,
  },
  {
    title: "REST API Design",
    description: "Created well-documented RESTful APIs following industry best practices",
    icon: Globe,
  },
];
