"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import {
  Github,
  Linkedin,
  Terminal,
  Zap,
  ChevronRight,
  GitBranch,
  Menu,
  X,
  ExternalLink,
  Cpu as CpuIcon,
  Workflow,
  HardDrive,
  Layout,
  Activity,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { blogs } from "@/data/blogs";

const DATA = {
  name: "Saurabh Jain",
  title: "Full-Stack AI Engineer | RAG & Infrastructure Architect",
  roles: ["RAG Architect", "Infrastructure Specialist", "Founding Engineer"],
  summary:
    "High-impact Full Stack Engineer with deep expertise in AI infrastructure, RAG systems, and secure authentication. Proven track record of executing zero-downtime migrations and shipping complex production features for live clients in agency environments. Specialist in bridging traditional backend engineering (PostgreSQL, Redis) with cutting-edge AI tooling (MCP, Vercel AI SDK). Currently acting as a solo lead on high-stakes billing and analytics systems.",
  contact: {
    email: "sauravjain.dev@gmail.com",
    github: "SaurabhJain708",
    linkedin: "saurabh-jain-226295320",
    twitter: "_Saurav_Jain_",
  },
  skills: {
    "AI & RAG": {
      id: "INTEL-01",
      items: [
        "Vercel AI SDK",
        "MCP",
        "Vector DBs",
        "RAG Optimization",
        "LangChain",
        "Puppeteer (Automation)",
      ],
      color: "blue",
    },
    Frontend: {
      id: "LAYER-02",
      items: [
        "React",
        "Next.js 14+",
        "TypeScript",
        "Tailwind CSS",
        "Recharts",
        "Shadcn UI",
      ],
      color: "indigo",
    },
    Backend: {
      id: "DATA-03",
      items: [
        "Node.js",
        "tRPC",
        "PostgreSQL (Neon)",
        "Redis",
        "Better Auth",
        "NextAuth",
        "Zod",
      ],
      color: "emerald",
    },
    "DevOps & Tools": {
      id: "OPS-04",
      items: [
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions)",
        "AWS",
        "E2B",
        "Bot Scaling",
      ],
      color: "orange",
    },
  },
  experience: [
    {
      company: "Buildway.ai",
      role: "Founding Engineer (Contract)",
      period: "Oct 2025 – Present",
      location: "Berlin, Germany (Remote)",
      highlights: [
        {
          title: "AI Infrastructure & RAG Optimization",
          desc: "Engineered a multi-agent system with Dynamic Chain of Thought and Web Search tools using MCP. Improved RAG citation accuracy by 90% and data retrieval by 70% via complex vector DB logic and post-hoc processing.",
        },
        {
          title: "Solo Lead (Billing & AI)",
          desc: "Built complex billing infrastructure and shipped a full AI chat system with dynamic interactive charts (Vercel AI SDK, Recharts) in <2.5 weeks. Debugged critical production 'ghost migrations' with 100% reliability.",
        },
        {
          title: "Critical Zero-Downtime Migration",
          desc: "Executed a high-stakes migration from NextAuth to Better Auth for a live production app, resulting in 0% downtime and zero data loss.",
        },
        {
          title: "Advanced Security & Infrastructure",
          desc: "Refactored tRPC infra for security (zip-bomb protection, E2B sandboxing). Implemented 100% secure Redis-backed pagination for MCP, boosting client agent accuracy by 90%.",
        },
        {
          title: "High-Velocity Engineering",
          desc: "Contributed to 3 production projects from Day 1 (zero onboarding). Parsed complex Austrian legal APIs (big data seeding, complex joins) and reduced launch times by optimizing DB load and caching.",
        },
      ],
    },
    {
      company: "Freelance Client",
      role: "Full-Stack Developer",
      period: "Feb 2025 – May 2025",
      location: "Remote",
      highlights: [
        {
          title: "Secure Containerized Web Application",
          desc: "Delivered a secure, containerized (Docker) web application using Next.js and MongoDB.",
        },
        {
          title: "Reusable Component Library",
          desc: "Built a reusable UI component library and containerized the app to reduce deployment friction and ensure environment consistency.",
        },
      ],
    },
  ],
  products: [
    {
      name: "StackVault",
      role: "Creator & Lead Developer",
      period: "July 2025 – Nov 2025",
      url: "https://www.stackvault.dev",
      description: "SaaS Portfolio Builder",
      summary: "High-performance SaaS Portfolio builder with multi-tenant routing, AI support agents, and enterprise-grade middleware. Serving 50+ active users with custom subdomains.",
      tech: ["Next.js", "Middleware", "Zod", "SaaS"],
      image: "/stackvault.png",
      video: "https://youtu.be/YLAzcAiYHKY",
      details: [
        "Architected and launched a multi-tenant SaaS platform serving 50+ active users, featuring custom domain support (Vercel-style routing) and dynamic subdomains via Next.js Middleware.",
        "Integrated an AI Assistant to automate user support and enhance portfolio creation workflows.",
        "Implemented robust CI/CD pipelines using GitHub Actions for dev and prod branches, automating linting, testing, and builds to prevent regressions.",
        "Enforced end-to-end type safety using Zod across all API endpoints and database schemas.",
      ],
    },
    {
      name: "KRAG",
      role: "Solo Builder",
      period: "2025 – Present",
      url: "https://github.com/SaurabhJain708/krag",
      description: "Serverless RAG Agent",
      summary: "World's first serverless RAG platform. Build intelligent knowledge bases from PDFs and web URLs with real-time chat and citation support. Built on Modal for scalable, cost-effective processing.",
      status: "Launching soon, under development",
      tech: ["Next.js", "Modal", "tRPC", "Python", "Prisma"],
      image: "/krag.jpeg",
      details: [
        "World's first serverless RAG platform. Build intelligent knowledge bases from PDFs and web URLs with real-time chat and citation support.",
        "Built on Modal for scalable, cost-effective processing. Multi-format ingestion, enterprise encryption (Simple/Advanced), streaming SSE responses.",
        "Full stack: Next.js 16, tRPC, Prisma, Python workers (ingestion + retrieval), BGE-M3 embeddings, Qwen 2.5 for generation.",
      ],
    },
  ],
  openSource: [
    {
      name: "TwentyCRM",
      metric: "Top 4% Contributor",
      desc: "Merged 8+ PRs in a single month, working alongside core senior developers on high-priority tickets and received direct mentorship. Contributed a significant portion to the new calendar-based Kanban feature, implementing complex frontend logic and interactions.",
      impact: "8+ PRs Merged",
      link: "https://github.com/twentyhq/twenty",
      prs: [
        {
          title: "Feat/14419 added infinite scroll icon picker (#14792)",
          url: "https://github.com/twentyhq/twenty/pull/14792",
        },
        {
          title: "Added all the initial selection logic (#14789)",
          url: "https://github.com/twentyhq/twenty/pull/14789",
        },
        {
          title: "Feat/add add icon to calendar view (#14696)",
          url: "https://github.com/twentyhq/twenty/pull/14696",
        },
        {
          title: "Fixed edit container width (#14625)",
          url: "https://github.com/twentyhq/twenty/pull/14625",
        },
        {
          title: "fix: Added isReadonly logic to css (#14584)",
          url: "https://github.com/twentyhq/twenty/pull/14584",
        },
        {
          title: "Added a util helper to remove accent and case (#14533)",
          url: "https://github.com/twentyhq/twenty/pull/14533",
        },
        {
          title: "chore(frontend): Lazy-load xyflow (#14505)",
          url: "https://github.com/twentyhq/twenty/pull/14505",
        },
        {
          title: "fix: remove unused framer-motion import (#14465)",
          url: "https://github.com/twentyhq/twenty/pull/14465",
        },
        {
          title: "Feat/14419 added infinite scroll icon picker (#14446)",
          url: "https://github.com/twentyhq/twenty/pull/14446",
        },
        {
          title: "Added disabled trash button in http workflows (#14439)",
          url: "https://github.com/twentyhq/twenty/pull/14439",
        },
        {
          title: "Move roles tab out of all roles (#14415)",
          url: "https://github.com/twentyhq/twenty/pull/14415",
        },
      ],
      issues: [
        {
          title: "SyntaxError: Unexpected token 'T', \"Texas\" is not valid JSON (#9075)",
          url: "https://github.com/twentyhq/twenty/issues/9075",
        },
      ],
      tags: ["CRM", "Frontend", "Kanban"],
    },
    {
      name: "Formbricks",
      metric: "Contributor",
      desc: "Contributed API permission fixes, keyboard accessibility improvements, Vitest setup for the types package, and type-safety refinements for the audit logging wrapper.",
      impact: "Thousands Impacted",
      link: "https://github.com/formbricks/formbricks",
      prs: [
        {
          title: "fix: allow read and write API key permissions for /v1/management/me (#6178)",
          url: "https://github.com/formbricks/formbricks/pull/6178",
        },
        {
          title: "fix: keyboard accessibility issue (#3768) (#5941)",
          url: "https://github.com/formbricks/formbricks/pull/5941",
        },
        {
          title: "feat: add Vitest setup and initial unit tests for action-class schema (#6170)",
          url: "https://github.com/formbricks/formbricks/pull/6170",
        },
        {
          title: "refactor: preserve return type in withAuditLogging wrapper (#6156)",
          url: "https://github.com/formbricks/formbricks/pull/6156",
        },
      ],
      issues: [
        {
          title: "All issues by SaurabhJain708",
          url: "https://github.com/formbricks/formbricks/issues?q=is%3Aissue+author%3ASaurabhJain708",
        },
      ],
      tags: ["Open Survey", "API", "A11y", "Vitest", "TypeScript"],
    },
    {
      name: "KRAG",
      metric: "Solo Builder",
      desc: "Built KRAG, a serverless RAG agent that turns PDFs and URLs into intelligent, citation-aware chat. Designed for secure, real-time ingestion and scalable retrieval.",
      impact: "Serverless RAG Platform",
      link: "https://github.com/SaurabhJain708/krag",
      prs: [
        {
          title: "KRAG repository",
          url: "https://github.com/SaurabhJain708/krag",
        },
      ],
      issues: [],
      tags: ["RAG", "Serverless", "Modal", "Next.js"],
    },
  ],
  education: {
    degree: "Bachelor of Science in Data Science",
    school: "Indian Institute of Technology, Madras",
    period: "Expected Graduation: May 2029",
  },
  certifications: [
    { name: "Docker Certification", issuer: "Docker, Inc.", year: "2025" },
    {
      name: "GitHub Actions Workshop: CI/CD Pipelines",
      issuer: "Microsoft Press",
      year: "2025",
    },
  ],
  recommendations: [
    {
      name: "Dev Dalia",
      role: "Senior Software Engineer at Buildway.ai",
      image: "/dev.jpeg",
      linkedin: "https://linkedin.com/in/saurabh-jain-226295320",
      text: `Saurabh is a powerhouse engineer. I supervised him on our most critical infrastructure sprints, and he operated with the autonomy and precision of a senior from Day 1.

In his very first week, he executed a flawless zero-downtime migration of our authentication system (NextAuth to Better Auth) on a live production app. He didn't just 'contribute': he owned the entire execution.

He went on to re-architect our AI pipeline, building a custom Redis-backed MCP pagination system that solved complex context limits and improved citation accuracy. He also proactively hardened security (tRPC refactor, zip-bomb protection) without needing oversight.

Saurabh combines deep architectural insight with incredible speed. He is a 'fire-and-forget' engineer for high-stakes problems. Highly recommended.`,
    },
    {
      name: "Suhotra Dey",
      role: "Senior Software Engineer at Buildway.ai",
      image: "/suhotra.jpeg",
      linkedin: "https://linkedin.com/in/saurabh-jain-226295320",
      text: `I've worked with many engineers, but Saurabh stands out for his speed and technical depth. He joined our team and immediately took ownership of our most critical infrastructure.

He successfully migrated our entire authentication system to Better Auth with zero downtime in his first week. He then moved on to optimize our AI pipeline, refactoring the vector database logic to boost citation accuracy.

Saurabh has a rare ability to blend 'speed' with 'security.' He shipped complex features like web-search tools (MCP) and secure file handling (zip-bomb protection) in single sprints while simultaneously refactoring our core tRPC codebase.

He is a high-velocity builder who writes production-grade code. Highly recommended for any team building complex AI or data-intensive systems.`,
    },
    {
      name: "Pradip Chaudhary",
      role: "Product lead at Buildway.ai",
      image: "/pradip.jpeg",
      linkedin: "https://linkedin.com/in/saurabh-jain-226295320",
      text: `I can't recommend Saurabh highly enough. I went on leave for a few weeks and handed him the keys to a critical sprint involving a live billing system refactor and a new AI analytics suite.

Saurabh didn't just keep the lights on; he operated as a fully autonomous Lead Engineer. He shipped our entire Generative UI chat feature (using Vercel AI SDK, Postgres, and Recharts) and architected secure dynamic dashboards from scratch with zero onboarding.

He also debugged critical production issues, including complex ghost migrations, resolving them with 100% reliability and no data loss.

It's rare to find a developer who can step into a complex, high-traffic codebase, optimize performance (caching/tRPC), and ship production-grade features solo in just 2.5 weeks. Saurabh is a machine.`,
    },
  ],
};

// --- Components ---

const BlueprintGrid = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[40px_40px]" />
    <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,transparent_0%,#020617_80%)" />
  </div>
);

const FLOATING_ORBS = [
  { top: "8%", left: "10%", w: 320, h: 320, color: "rgba(59,130,246,0.22)", blur: 100, delay: 0, duration: 25 },
  { top: "60%", left: "75%", w: 280, h: 280, color: "rgba(99,102,241,0.18)", blur: 90, delay: 2, duration: 30 },
  { top: "25%", left: "82%", w: 200, h: 200, color: "rgba(34,211,238,0.15)", blur: 70, delay: 1, duration: 22 },
  { top: "70%", left: "15%", w: 240, h: 240, color: "rgba(139,92,246,0.16)", blur: 80, delay: 3, duration: 28 },
  { top: "40%", left: "50%", w: 400, h: 400, color: "rgba(59,130,246,0.14)", blur: 120, delay: 1.5, duration: 35 },
  { top: "15%", left: "55%", w: 160, h: 160, color: "rgba(99,102,241,0.2)", blur: 60, delay: 0.5, duration: 20 },
  { top: "85%", left: "45%", w: 220, h: 220, color: "rgba(59,130,246,0.16)", blur: 75, delay: 2.5, duration: 26 },
];

const FLOATING_ICONS: { Icon: React.ComponentType<{ className?: string }>; top: string; left: string; size: number; delay: number; duration: number; opacity: number }[] = [
  { Icon: Terminal, top: "12%", left: "18%", size: 24, delay: 0, duration: 18, opacity: 0.14 },
  { Icon: CpuIcon, top: "22%", left: "88%", size: 32, delay: 2, duration: 24, opacity: 0.12 },
  { Icon: Workflow, top: "55%", left: "8%", size: 28, delay: 1, duration: 20, opacity: 0.14 },
  { Icon: GitBranch, top: "75%", left: "85%", size: 26, delay: 3, duration: 22, opacity: 0.12 },
  { Icon: Layout, top: "35%", left: "92%", size: 22, delay: 0.5, duration: 26, opacity: 0.1 },
  { Icon: HardDrive, top: "88%", left: "22%", size: 24, delay: 2.5, duration: 19, opacity: 0.12 },
  { Icon: Activity, top: "48%", left: "5%", size: 28, delay: 1.5, duration: 21, opacity: 0.14 },
  { Icon: Zap, top: "18%", left: "72%", size: 20, delay: 1, duration: 23, opacity: 0.12 },
  { Icon: BookOpen, top: "65%", left: "28%", size: 22, delay: 2, duration: 25, opacity: 0.1 },
];

const FloatingAmbient = () => (
  <div
    className="fixed inset-0 overflow-hidden pointer-events-none"
    style={{ zIndex: 1 }}
    aria-hidden
  >
    {/* Gradient orbs */}
    {FLOATING_ORBS.map((orb, i) => (
      <motion.div
        key={`orb-${i}`}
        className="absolute rounded-full"
        style={{
          top: orb.top,
          left: orb.left,
          width: orb.w,
          height: orb.h,
          background: orb.color,
          filter: `blur(${orb.blur}px)`,
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{
          duration: orb.duration,
          delay: orb.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
    {/* Floating tech icons */}
    {FLOATING_ICONS.map(({ Icon, top, left, size, delay, duration, opacity }, i) => (
      <motion.div
        key={`icon-${i}`}
        className="absolute text-blue-400/80"
        style={{
          top,
          left,
          width: size,
          height: size,
          opacity,
        }}
        animate={{
          y: [0, -12, 8, 0],
          x: [0, 8, -5, 0],
          rotate: [0, 5, -3, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Icon className="w-full h-full" />
      </motion.div>
    ))}
    {/* Subtle floating brackets / code symbols */}
    {["{", "}", "[", "]", "<", ">", "()"].map((char, i) => {
      const positions = [
        { top: "30%", left: "12%" }, { top: "55%", left: "78%" }, { top: "8%", left: "45%" },
        { top: "82%", left: "55%" }, { top: "42%", left: "25%" }, { top: "68%", left: "62%" }, { top: "20%", left: "88%" },
      ];
      const pos = positions[i % positions.length];
      return (
        <motion.span
          key={`char-${i}`}
          className="absolute font-mono text-blue-400/30 text-2xl sm:text-3xl"
          style={{ top: pos.top, left: pos.left }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 14 + i * 2,
            delay: i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {char}
        </motion.span>
      );
    })}
    {/* Soft grid overlay for depth */}
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
    />
  </div>
);

const HACKER_CHARACTERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

const HackerGlitch = () => {
  // Generate random values only on client to avoid hydration mismatch
  const [glitchData, setGlitchData] = useState<Array<{
    char: string;
    left: string;
    delay: number;
    duration: number;
    repeatDelay: number;
  }>>([]);

  React.useEffect(() => {
    setGlitchData(
      Array.from({ length: 60 }).map(() => ({
        char: HACKER_CHARACTERS[Math.floor(Math.random() * HACKER_CHARACTERS.length)],
        left: `${3 + Math.random() * 94}%`,
        delay: Math.random() * 10,
        duration: 4 + Math.random() * 4,
        repeatDelay: Math.random() * 3,
      }))
    );
  }, []);

  if (glitchData.length === 0) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 z-25 pointer-events-none"
      style={{ overflow: "visible" }}
    >
      {glitchData.map((data, i) => (
        <motion.div
          key={i}
          className="hacker-char absolute font-mono text-[9px] sm:text-[10px] text-emerald-300 font-bold whitespace-nowrap"
          style={{
            left: data.left,
            opacity: 0.95,
          }}
          initial={{ y: -30, opacity: 0 }}
          animate={{
            y: 600,
            opacity: [0, 0.8, 1, 0.95, 0.7, 0.4, 0],
          }}
          transition={{
            duration: data.duration,
            delay: data.delay,
            repeat: Infinity,
            repeatDelay: data.repeatDelay,
            ease: "linear",
          }}
        >
          {data.char}
        </motion.div>
      ))}
    </div>
  );
};

const Avatar = () => {
  return (
    <motion.div
      className="relative w-full max-w-md lg:max-w-xl xl:max-w-lg 2xl:max-w-xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full" />

      {/* Animated border ring */}
      <motion.div
        className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-500/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Avatar container */}
      <div className="relative rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-linear-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm">
        <div className="aspect-square w-full relative glitch-container">
          {/* RGB Glitch Layers - Subtle Chromatic Aberration */}
          <div className="absolute inset-0 z-15 rgb-glitch rgb-glitch-red pointer-events-none rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt=""
              fill
              className="object-cover rounded-full"
              priority
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 z-15 rgb-glitch rgb-glitch-green pointer-events-none rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt=""
              fill
              className="object-cover rounded-full"
              priority
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 z-15 rgb-glitch rgb-glitch-blue pointer-events-none rounded-full overflow-hidden">
            <Image
              src="/avatar.png"
              alt=""
              fill
              className="object-cover rounded-full"
              priority
              aria-hidden="true"
            />
          </div>

          {/* Main image */}
          <Image
            src="/avatar.png"
            alt="Saurabh Jain"
            fill
            className="object-cover transition-all duration-700 relative z-10"
            priority
          />

          {/* Hacker-style glitch overlay */}
          <div
            className="absolute inset-0 z-20 hacker-overlay rounded-full"
            style={{ overflow: "visible" }}
          >
            <HackerGlitch />
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 z-21 hacker-scanline pointer-events-none"
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />

          {/* Status indicator */}
          <div className="absolute bottom-4 right-4 z-30">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-black text-emerald-300 uppercase tracking-widest">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <motion.div
        className="absolute -top-4 -right-4 bg-blue-600 p-3 rounded-xl shadow-xl border border-white/10 z-30"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Terminal className="w-6 h-6 text-white" />
      </motion.div>

      <motion.div
        className="absolute -bottom-4 -left-4 bg-indigo-600 p-3 rounded-xl shadow-xl border border-white/10 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
      >
        <Zap className="w-6 h-6 text-white" />
      </motion.div>
    </motion.div>
  );
};

const SkillIcon = ({ category }: { category: string }) => {
  switch (category) {
    case "AI & RAG":
      return <CpuIcon className="w-6 h-6" />;
    case "Frontend":
      return <Layout className="w-6 h-6" />;
    case "Backend":
      return <HardDrive className="w-6 h-6" />;
    case "DevOps & Tools":
      return <Workflow className="w-6 h-6" />;
    case "DevOps":
      return <Workflow className="w-6 h-6" />;
    default:
      return <Zap className="w-6 h-6" />;
  }
};

const DOMAIN_COLORS: Record<string, { bg: string; text: string; accent: string; border: string }> = {
  "AI & RAG": { bg: "bg-blue-500/15", text: "text-blue-400", accent: "bg-blue-500/50", border: "border-blue-500/30" },
  Frontend: { bg: "bg-indigo-500/15", text: "text-indigo-400", accent: "bg-indigo-500/50", border: "border-indigo-500/30" },
  Backend: { bg: "bg-emerald-500/15", text: "text-emerald-400", accent: "bg-emerald-500/50", border: "border-emerald-500/30" },
  "DevOps & Tools": { bg: "bg-orange-500/15", text: "text-orange-400", accent: "bg-orange-500/50", border: "border-orange-500/30" },
};
function getDomainStyle(name: string) {
  return DOMAIN_COLORS[name] ?? DOMAIN_COLORS["AI & RAG"];
}

interface ExperienceHighlight {
  title: string;
  desc: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: ExperienceHighlight[];
}

const RecommendationCard = ({ rec, index }: { rec: typeof DATA.recommendations[0]; index: number }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const truncatedText = rec.text.length > 200 ? rec.text.substring(0, 200) + "..." : rec.text;
  const needsFullView = rec.text.length > 200;

  React.useEffect(() => {
    if (!modalOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setModalOpen(false);
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group relative"
      >
        <div className="h-full p-6 sm:p-8 bg-white/5 border border-white/15 rounded-2xl sm:rounded-3xl hover:bg-white/8 hover:border-indigo-500/30 transition-all relative overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_-4px_rgba(0,0,0,0.35)]">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] pointer-events-none transition-opacity"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }}
          />

          {/* Top Section with Image */}
          <div className="flex items-start gap-4 sm:gap-5 mb-6 relative z-10">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 bg-indigo-500/30 rounded-full blur-md group-hover:bg-indigo-500/50 transition-colors" />
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/15 ring-2 ring-indigo-500/20 group-hover:ring-indigo-500/40 transition-all">
                <Image
                  src={rec.image}
                  alt={rec.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tighter mb-1 group-hover:text-indigo-400 transition-colors">
                {rec.name}
              </h3>
              <p className="text-xs sm:text-sm text-indigo-400 font-bold uppercase tracking-wider">
                {rec.role}
              </p>
            </div>
          </div>

          {/* Recommendation Text */}
          <div className="relative z-10 mb-6">
            <div className="absolute top-0 left-0 w-8 h-8 text-indigo-500/20 font-serif text-4xl leading-none">
              &ldquo;
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed pl-6 sm:pl-8 italic relative line-clamp-4">
              {truncatedText}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-3 relative z-10 pt-4 border-t border-white/5">
            {needsFullView ? (
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs cursor-pointer font-bold text-indigo-400 hover:text-indigo-300 uppercase tracking-wider transition-colors flex items-center gap-1"
              >
                <span>View full</span>
                <ChevronRight className="w-3 h-3 -rotate-90" />
              </button>
            ) : (
              <div />
            )}
            <a
              href={rec.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-300 hover:text-indigo-200 font-bold text-xs uppercase tracking-wider rounded-lg transition-all group/link"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">LinkedIn</span>
              <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </motion.div>

      {/* Full recommendation modal */}
      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="recommendation-modal-title"
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
              aria-hidden
            />
            <div
              className="relative w-full max-w-lg max-h-[85vh] flex flex-col bg-[#0f172a] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 p-4 sm:p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                    <Image
                      src={rec.image}
                      alt={rec.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 id="recommendation-modal-title" className="text-base sm:text-lg font-black text-white truncate">
                      {rec.name}
                    </h2>
                    <p className="text-xs text-indigo-400 font-bold uppercase tracking-wider truncate">
                      {rec.role}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="relative">
                  <span className="absolute top-0 left-0 w-8 h-8 text-indigo-500/20 font-serif text-4xl leading-none">
                    &ldquo;
                  </span>
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed pl-6 sm:pl-8 italic">
                    {rec.text}
                  </p>
                </div>
              </div>
              <div className="p-4 sm:p-6 border-t border-white/10 shrink-0">
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-300 hover:text-indigo-200 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  View on LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

const OpenSourceCard = ({
  oss,
  index,
}: {
  oss: typeof DATA.openSource[0];
  index: number;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const hasPrs = (oss.prs?.length ?? 0) > 0;
  const hasIssues = (oss.issues?.length ?? 0) > 0;

  React.useEffect(() => {
    if (!modalOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === "Escape" && setModalOpen(false);
    document.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="group p-6 sm:p-8 bg-white/5 border border-white/15 rounded-2xl sm:rounded-[2.5rem] hover:bg-white/8 hover:border-indigo-500/30 transition-all flex flex-col h-full relative overflow-hidden cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_24px_-4px_rgba(0,0,0,0.35)]"
        onClick={() => setModalOpen(true)}
      >
        <div className="absolute top-0 right-0 p-4 sm:p-6 opacity-5 group-hover:opacity-20 transition-opacity">
          <GitBranch className="w-16 h-16 sm:w-20 sm:h-20 text-indigo-500" />
        </div>

        <div className="flex justify-between items-start mb-6 sm:mb-8 relative z-10">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-2 sm:px-3 py-1 rounded-full uppercase tracking-widest">
            {oss.metric}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-3 sm:mb-4 group-hover:text-indigo-400 transition-colors relative z-10">
          {oss.name}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 sm:mb-8 flex-1 relative z-10">
          {oss.desc}
        </p>

        <div className="space-y-6 relative z-10">
          <div className="flex flex-wrap gap-2">
            {oss.tags?.map((t) => (
              <span
                key={t}
                className="text-[9px] font-black uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-1 rounded"
              >
                #{t}
              </span>
            ))}
          </div>
          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <Zap className="w-3 h-3" /> {oss.impact}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(true);
              }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer"
            >
              View Links
              <ChevronRight className="w-3.5 h-3.5 -rotate-90" />
            </button>
          </div>
        </div>
      </motion.div>

      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`oss-modal-title-${index}`}
          >
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={() => setModalOpen(false)}
              aria-hidden
            />
            <div
              className="relative w-full max-w-2xl max-h-[85vh] flex flex-col bg-[#0b1220] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_20px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative px-4 sm:px-6 pt-5 sm:pt-6 pb-4 border-b border-white/10 shrink-0">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/15 via-transparent to-indigo-600/15 pointer-events-none" />
                <div className="flex items-center justify-between gap-4 relative">
                  <div className="min-w-0">
                    <h2
                      id={`oss-modal-title-${index}`}
                      className="text-base sm:text-xl font-black text-white truncate"
                    >
                      {oss.name} — PRs & Issues
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-500/15 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                        {oss.metric}
                      </span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                        {oss.impact}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="shrink-0 w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                {(hasPrs || hasIssues) ? (
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Links to all pull requests and issues authored for this repository.
                  </p>
                ) : (
                  <p className="text-sm text-gray-500 leading-relaxed">
                    No PR or issue links listed for this repository yet.
                  </p>
                )}

                <div className="space-y-4">
                  {hasPrs && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                        Pull Requests
                      </h3>
                      <div className="space-y-2">
                        {oss.prs?.map((pr) => (
                          <a
                            key={pr.url}
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/10 bg-[#0f172a] hover:bg-white/5 transition-all text-sm text-gray-300"
                          >
                            <span className="truncate">{pr.title}</span>
                            <ExternalLink className="w-4 h-4 shrink-0 text-blue-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {hasIssues && (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">
                        Issues
                      </h3>
                      <div className="space-y-2">
                        {oss.issues?.map((issue) => (
                          <a
                            key={issue.url}
                            href={issue.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 p-3 rounded-xl border border-white/10 bg-[#0f172a] hover:bg-white/5 transition-all text-sm text-gray-300"
                          >
                            <span className="truncate">{issue.title}</span>
                            <ExternalLink className="w-4 h-4 shrink-0 text-blue-400" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-4 sm:p-6 border-t border-white/10 shrink-0">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={oss.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-300 hover:text-indigo-200 font-bold text-xs uppercase tracking-wider rounded-lg transition-all"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    View Repository
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

const ExperienceItem = ({ exp, index }: { exp: Experience; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="relative pl-6 sm:pl-8 pb-8 sm:pb-12 border-l border-white/10 last:pb-0"
    >
      <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tighter uppercase">
            {exp.role}
          </h3>
          <p className="text-blue-400 font-bold uppercase text-xs sm:text-sm">
            {exp.company}
          </p>
        </div>
        <span className="text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-500">
          {exp.period}
        </span>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {exp.highlights.map((h: ExperienceHighlight, i: number) => (
          <div
            key={i}
            className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 border border-white/15 hover:border-blue-500/30 hover:bg-white/8 transition-all cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_2px_12px_-2px_rgba(0,0,0,0.25)]"
          >
            <h4 className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 mb-1">
              <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" />{" "}
              <span>{h.title}</span>
            </h4>
            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">
              {h.desc}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const BlogCard = ({
  blog,
  className = "",
}: {
  blog: (typeof blogs)[0];
  className?: string;
}) => (
  <Link
    href={`/blog/${blog.id}`}
    className={`group shrink-0 flex flex-col p-6 sm:p-8 rounded-3xl transition-all duration-300 cursor-pointer h-full relative overflow-hidden ${className}
      bg-white/8 border border-white/15
      backdrop-blur-2xl
      shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.06)]
      hover:bg-white/10 hover:border-white/25
      hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_-4px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.08)]`}
    style={{ width: 480, minWidth: 480 }}
  >
    {/* Left accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-blue-500/60 via-blue-400/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity rounded-l-3xl" />
    <div className="absolute inset-0 bg-linear-to-br from-white/2 via-transparent to-transparent pointer-events-none rounded-3xl" />
    <div className="flex items-center gap-2 mb-4 relative z-10">
      <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all border border-white/10">
        <BookOpen className="w-5 h-5" />
      </div>
      <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
        {blog.date}
      </span>
    </div>
    <h3 className="text-lg sm:text-xl font-black text-white uppercase mb-3 group-hover:text-blue-400 transition-colors relative z-10 line-clamp-2 pr-2">
      {blog.title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5 line-clamp-3 relative z-10">
      {blog.excerpt}
    </p>
    <div className="flex flex-wrap gap-2 mb-4 relative z-10">
      {blog.tags.slice(0, 3).map((t) => (
        <span
          key={t}
          className="text-[8px] font-bold uppercase tracking-widest text-gray-500 bg-white/10 border border-white/10 px-2.5 py-1 rounded-lg"
        >
          #{t}
        </span>
      ))}
    </div>
    <span className="inline-flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest group-hover:gap-3 transition-all relative z-10">
      Read more <ChevronRight className="w-4 h-4" />
    </span>
  </Link>
);

const BLOG_CARD_GAP = 40;

const BlogCarousel = () => {
  const setRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState<number | null>(null);

  React.useEffect(() => {
    const measure = () => {
      if (setRef.current) setSetWidth(setRef.current.offsetWidth);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (setRef.current) ro.observe(setRef.current);
    return () => ro.disconnect();
  }, []);

  const trackWidth =
    setWidth !== null ? 2 * setWidth + 2 * BLOG_CARD_GAP : undefined;

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 py-6">
      <div className="w-full overflow-hidden">
        <div
          className="flex will-change-transform"
          style={{
            width: trackWidth ?? "max-content",
            animation: trackWidth
              ? "blog-marquee 45s linear infinite"
              : "none",
          }}
        >
          <div
            ref={setRef}
            className="flex shrink-0"
            style={{ gap: BLOG_CARD_GAP, marginRight: BLOG_CARD_GAP }}
          >
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
          <div
            className="flex shrink-0"
            style={{ gap: BLOG_CARD_GAP, marginRight: BLOG_CARD_GAP }}
          >
            {blogs.map((blog) => (
              <BlogCard key={`dup-${blog.id}`} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blog-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020617] text-gray-300 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <BlueprintGrid />
      <FloatingAmbient />

      {/* Main content above ambient layer */}
      <div className="relative z-10">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-100 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-lg sm:text-xl">
              S
            </div>
            <span className="font-black text-white tracking-tighter text-base sm:text-xl uppercase">
              Saurabh<span className="text-blue-500">.</span>Jain
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            {["OSS", "Experience", "Products", "Blog", "Recommendations", "Stack"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {item}
                </a>
              )
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/resume"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
              View Resume
            </a>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              {mobileMenu ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#020617]/98 backdrop-blur-2xl border-t border-white/10 shadow-2xl"
          >
            <div className="px-4 py-6 space-y-3">
              <div className="mb-4 pb-4 border-b border-white/10">
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 mb-3">
                  NAVIGATION
                </p>
                {[
                  "OSS",
                  "Experience",
                  "Products",
                  "Blog",
                  "Recommendations",
                  "Stack",
                ].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenu(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 py-3.5 px-4 rounded-xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-blue-500/30 hover:text-blue-400 transition-all cursor-pointer group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-500 transition-colors" />
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-blue-400 transition-colors">
                      {item}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-500 ml-auto transition-colors" />
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenu(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View Resume</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[1.1fr_1fr] gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-400 mb-6 sm:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="hidden sm:inline">
                Operational in Production Environment
              </span>
              <span className="sm:hidden">Production Ready</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 uppercase">
              Engineer <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                Intelligent
              </span>
              <br />
              Infrastructure
            </h1>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg text-gray-400 max-w-xl mb-8 sm:mb-12 leading-relaxed font-medium">
              Bridging the gap between{" "}
              <span className="text-white">robust backend systems</span> and{" "}
              <span className="text-white">agentic AI workflows</span>.
              Specializing in RAG optimization and zero-downtime engineering.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 sm:gap-3 cursor-pointer"
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                View Resume
              </a>
              <div className="flex gap-2">
                <a
                  href={`https://github.com/${DATA.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${DATA.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href={`https://x.com/${DATA.contact.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -inset-4 bg-blue-500/10 blur-[100px] opacity-30 pointer-events-none" />
            <div className="space-y-4 sm:space-y-6 relative">
              <Avatar />
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="p-4 sm:p-6 bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl backdrop-blur-sm group hover:border-blue-500/50 hover:bg-white/8 transition-all cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_20px_-4px_rgba(0,0,0,0.3)]">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-blue-500 transition-colors">
                    90%
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-gray-500">
                    RAG Accuracy
                  </div>
                </div>
                <div className="p-4 sm:p-6 bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl backdrop-blur-sm group hover:border-emerald-500/50 hover:bg-white/8 transition-all cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_4px_20px_-4px_rgba(0,0,0,0.3)]">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-emerald-500 transition-colors">
                    0%
                  </div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-gray-500">
                    Migration Downtime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Who I Am — Video intro placeholder */}
      <section
        id="who-i-am"
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-2">
              In my own words
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
              Who I Am
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full mx-auto" />
          </div>
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_4px_24px_-4px_rgba(0,0,0,0.3),inset_0_1px_0_0_rgba(255,255,255,0.04)]">
            <div className="aspect-video bg-[#0a0f1e] relative">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-60 pointer-events-none" />
              <iframe
                src="https://www.youtube.com/embed/m4DetXg94ak"
                title="Who I Am"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog — Carousel at top */}
      <section
        id="blog"
        className="relative py-12 sm:py-16 md:py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-10 relative">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-2">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" /> Latest
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-1">
                Blog
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full" />
            </div>
            <Link
              href="/blog"
              className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-blue-400 transition-colors"
            >
              View all posts
            </Link>
          </div>
        </div>
        <BlogCarousel />
      </section>

      {/* OSS Highlight Section */}
      <section
        id="oss"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-indigo-600/2 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 text-indigo-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-3 sm:mb-4">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> Global
                Contribution Metrics
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-tight sm:leading-none">
                Open Source <br />{" "}
                <span className="text-indigo-500">Impact.</span>
              </h2>
            </div>
            <div className="p-6 sm:p-8 bg-indigo-500/15 border border-indigo-500/25 rounded-2xl sm:rounded-3xl backdrop-blur-xl md:max-w-xs shadow-[0_0_0_1px_rgba(99,102,241,0.2),0_4px_24px_-4px_rgba(0,0,0,0.3)]">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tighter">
                TOP 4%
              </div>
              <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest leading-relaxed">
                Global contributor rank on Twenty CRM. Architecting tools used by
                the modern developer ecosystem.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {DATA.openSource.map((oss, i) => (
              <OpenSourceCard key={oss.name} oss={oss} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Domain Section */}
      <section
        id="stack"
        className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-2">
              Stack
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
              Technical <span className="text-blue-500">Domains</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(DATA.skills).map(([name, category], i) => {
              const style = getDomainStyle(name);
              return (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="group relative h-full"
                >
                  <div
                    className={`h-full p-8 sm:p-10 bg-white/8 border border-white/15 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/10 relative cursor-pointer backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_4px_24px_-4px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_8px_32px_-4px_rgba(0,0,0,0.35)]`}
                  >
                    {/* Left accent bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl ${style.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                    <div className="absolute top-4 right-6 font-mono text-[9px] text-gray-600 group-hover:text-gray-400 transition-colors uppercase font-bold tracking-widest">
                      {category.id}
                    </div>

                    <div className="flex items-start gap-5 mb-8 relative">
                      <div
                        className={`w-16 h-16 rounded-2xl ${style.bg} flex items-center justify-center ${style.text} border border-white/10 group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <SkillIcon category={name} />
                      </div>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter mb-2">
                          {name}
                        </h3>
                        <div className={`h-0.5 w-14 ${style.accent} rounded-full group-hover:w-20 transition-all duration-500`} />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3.5">
                      {category.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${style.accent} opacity-70 group-hover/item:opacity-100 group-hover/item:shadow-[0_0_6px_currentColor] transition-all`} />
                          <span className="text-xs sm:text-[13px] font-medium text-gray-400 group-hover/item:text-gray-200 transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] pointer-events-none transition-opacity rounded-3xl"
                      style={{
                        backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              Deployment History
            </h2>
            <p className="text-gray-500 font-mono text-xs sm:text-sm tracking-widest">
              TIMELINE // PRODUCTION_LOGS
            </p>
          </div>
          <div className="space-y-4">
            {DATA.experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section
        id="recommendations"
        className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-indigo-600/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 text-indigo-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-3 sm:mb-4">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> Peer Validation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-tight sm:leading-none">
                Professional <br />{" "}
                <span className="text-indigo-500">Endorsements.</span>
              </h2>
              <p className="text-gray-400 font-medium text-sm sm:text-base max-w-xl mt-4">
                Recommendations from colleagues and leaders in the industry.
              </p>
            </div>
            <a
              href={`https://linkedin.com/in/${DATA.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl hover:bg-indigo-500 transition-all cursor-pointer group"
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              View All on LinkedIn
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {DATA.recommendations.map((rec, i) => (
              <RecommendationCard key={i} rec={rec} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-24 md:py-32 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase mb-2">
                Live Products
              </h2>
              <p className="text-gray-400 font-medium text-sm sm:text-base">
                Production-grade builds and architectures.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-10 sm:gap-12">
            {DATA.products.map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-linear-to-br from-white/5 via-white/2 to-transparent backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_40px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)] transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_48px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {/* Left accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl ${idx === 0 ? "bg-linear-to-b from-blue-500 to-indigo-500" : "bg-linear-to-b from-amber-500/80 to-orange-500/80"} opacity-70 group-hover:opacity-100 transition-opacity`} />

                  {/* Background patterns */}
                  <div
                    className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.06] pointer-events-none rounded-2xl sm:rounded-3xl transition-opacity"
                    style={{
                      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div
                    className="absolute inset-0 opacity-[0.015] pointer-events-none rounded-2xl sm:rounded-3xl"
                    style={{
                      backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                      backgroundSize: "48px 48px",
                    }}
                  />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-1/2 w-96 h-48 bg-indigo-500/3 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2" />

                  <div className="relative p-6 sm:p-8 md:p-10 lg:p-12 pl-8 sm:pl-10">
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                          {idx === 0 && (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/25 text-[9px] sm:text-[10px] font-black text-blue-400 uppercase tracking-widest shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]">
                              <span className="w-1 h-1 rounded-full bg-blue-400 animate-pulse" />
                              Flagship Product
                            </span>
                          )}
                          {"status" in product && product.status && (
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-linear-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 text-[9px] sm:text-[10px] font-black text-amber-300 uppercase tracking-widest shadow-[0_0_24px_-6px_rgba(245,158,11,0.25)] ring-1 ring-inset ring-amber-400/10">
                              <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400/60" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                              </span>
                              {product.status}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                          {product.name}
                        </h3>
                      </div>
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:border-blue-500/40 transition-all shrink-0"
                      >
                        {product.url.includes("github.com") ? "View on GitHub" : "Live Dashboard"}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
                      {product.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                      {product.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-semibold text-gray-500 uppercase tracking-wider"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Media section: image + video */}
                    <div className={`flex flex-col gap-6 items-center ${"video" in product && product.video ? "lg:flex-row lg:items-center" : "max-w-sm"}`}>
                      <div className={`shrink-0 ${"video" in product && product.video ? "w-full lg:w-72 xl:w-80" : "w-full"}`}>
                        <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                          {product.image ? (
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain object-center p-4"
                              priority={idx === 0}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-blue-600/15 via-indigo-600/10 to-transparent">
                              <span className="text-5xl sm:text-6xl font-black text-white/30 tracking-tighter uppercase">
                                {product.name}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                      {"video" in product && product.video && (() => {
                        const vidUrl = product.video as string;
                        const id = vidUrl.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^&?]+)/)?.[1];
                        return id ? (
                          <div className="flex-1 min-w-0">
                            <p className="text-[9px] sm:text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                              Product Demo
                            </p>
                            <div className="aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.05)]">
                              <iframe
                                src={`https://www.youtube.com/embed/${id}`}
                                title={`${product.name} demo`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 md:py-44 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/10 blur-[150px] -z-10" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black text-white tracking-tighter leading-[1.1] sm:leading-none uppercase mb-8 sm:mb-12">
            Initialize <br />
            <span className="text-blue-500 italic">Contact.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 font-medium px-4">
            Currently reviewing opportunities for Founding Engineer & AI
            Infrastructure roles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href={`mailto:${DATA.contact.email}`}
              className="px-8 sm:px-12 py-4 sm:py-6 bg-white text-black font-black rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all cursor-pointer w-full sm:w-auto"
            >
              Direct Mail
            </a>
            <div className="flex gap-3 sm:gap-4 justify-center">
              <a
                href={`https://github.com/${DATA.contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 bg-white/8 border border-white/15 rounded-xl sm:rounded-2xl hover:bg-white/12 transition-all text-white cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_12px_-2px_rgba(0,0,0,0.25)]"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={`https://linkedin.com/in/${DATA.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 bg-white/8 border border-white/15 rounded-xl sm:rounded-2xl hover:bg-white/12 transition-all text-white cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_12px_-2px_rgba(0,0,0,0.25)]"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href={`https://x.com/${DATA.contact.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-6 bg-white/8 border border-white/15 rounded-xl sm:rounded-2xl hover:bg-white/12 transition-all text-white cursor-pointer shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_2px_12px_-2px_rgba(0,0,0,0.25)]"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Status Bar */}
      <footer className="fixed bottom-0 w-full z-50 px-3 sm:px-6 py-3 sm:py-4 bg-[#020617]/80 backdrop-blur-md border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-[8px] sm:text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />{" "}
              SYSTEM_STABLE
            </span>
            <span className="hidden sm:inline">LOC: BERLIN_REMOTE</span>
          </div>
          <div className="text-center sm:text-left">
            © 2026 SAURABH_JAIN // VERSION_4.0.1
          </div>
        </div>
      </footer>

      </div>

      <style>{`
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #3b82f6; }
        
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes scan-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-scan-x {
          animation: scan-x 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes subtle-glitch {
          0%, 100% {
            filter: brightness(1) contrast(1) saturate(1);
          }
          10% {
            filter: brightness(1.05) contrast(1.08) saturate(1.1);
          }
          20% {
            filter: brightness(0.98) contrast(1.05) saturate(1.05);
          }
          30% {
            filter: brightness(1) contrast(1) saturate(1);
          }
          50% {
            filter: brightness(1.03) contrast(1.06) saturate(1.08);
          }
          60% {
            filter: brightness(0.99) contrast(1.03) saturate(1.03);
          }
          70% {
            filter: brightness(1) contrast(1) saturate(1);
          }
        }

        @keyframes rgb-shift {
          0%, 100% {
            transform: translateX(0);
          }
          5% {
            transform: translateX(-1px);
          }
          10% {
            transform: translateX(1px);
          }
          15% {
            transform: translateX(0);
          }
          35% {
            transform: translateX(1px);
          }
          40% {
            transform: translateX(-1px);
          }
          45% {
            transform: translateX(0);
          }
        }

        @keyframes rgb-glitch-red {
          0%, 100% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            transform: translateX(-2px);
            opacity: 0.6;
          }
          10% {
            transform: translateX(1px);
            opacity: 0.4;
          }
          15% {
            transform: translateX(0);
            opacity: 0;
          }
          45% {
            transform: translateX(-1.5px);
            opacity: 0.5;
          }
          50% {
            transform: translateX(1.5px);
            opacity: 0.5;
          }
          55% {
            transform: translateX(0);
            opacity: 0;
          }
          85% {
            transform: translateX(-1px);
            opacity: 0.4;
          }
          90% {
            transform: translateX(1px);
            opacity: 0.3;
          }
          95% {
            transform: translateX(0);
            opacity: 0;
          }
        }

        @keyframes rgb-glitch-green {
          0%, 100% {
            transform: translateX(0);
            opacity: 0;
          }
          7% {
            transform: translateX(2px);
            opacity: 0.5;
          }
          12% {
            transform: translateX(-1px);
            opacity: 0.3;
          }
          17% {
            transform: translateX(0);
            opacity: 0;
          }
          47% {
            transform: translateX(1.5px);
            opacity: 0.4;
          }
          52% {
            transform: translateX(-1.5px);
            opacity: 0.4;
          }
          57% {
            transform: translateX(0);
            opacity: 0;
          }
          87% {
            transform: translateX(1px);
            opacity: 0.3;
          }
          92% {
            transform: translateX(-1px);
            opacity: 0.25;
          }
          97% {
            transform: translateX(0);
            opacity: 0;
          }
        }

        @keyframes rgb-glitch-blue {
          0%, 100% {
            transform: translateX(0);
            opacity: 0;
          }
          3% {
            transform: translateX(-1.5px);
            opacity: 0.55;
          }
          8% {
            transform: translateX(2px);
            opacity: 0.35;
          }
          13% {
            transform: translateX(0);
            opacity: 0;
          }
          43% {
            transform: translateX(-1px);
            opacity: 0.45;
          }
          48% {
            transform: translateX(2px);
            opacity: 0.45;
          }
          53% {
            transform: translateX(0);
            opacity: 0;
          }
          83% {
            transform: translateX(-1.5px);
            opacity: 0.35;
          }
          88% {
            transform: translateX(1.5px);
            opacity: 0.3;
          }
          93% {
            transform: translateX(0);
            opacity: 0;
          }
        }

        .rgb-glitch {
          opacity: 0;
        }

        .rgb-glitch-red {
          animation: rgb-glitch-red 12s infinite;
          mix-blend-mode: screen;
        }

        .rgb-glitch-green {
          animation: rgb-glitch-green 12s infinite 0.15s;
          mix-blend-mode: screen;
        }

        .rgb-glitch-blue {
          animation: rgb-glitch-blue 12s infinite 0.3s;
          mix-blend-mode: screen;
        }

        .rgb-glitch-red img {
          filter: contrast(1.5) brightness(0.85) saturate(1.8);
        }

        .rgb-glitch-green img {
          filter: contrast(1.4) brightness(0.9) saturate(1.6);
        }

        .rgb-glitch-blue img {
          filter: contrast(1.3) brightness(1.1) saturate(1.4);
        }

        .glitch-container {
          position: relative;
          animation: subtle-glitch 20s infinite ease-in-out;
        }

        .glitch-container::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 15;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(16, 185, 129, 0.03) 25%,
            transparent 50%,
            rgba(59, 130, 246, 0.03) 75%,
            transparent 100%
          );
          animation: rgb-shift 15s infinite;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        .hacker-overlay {
          background: radial-gradient(circle at center, transparent 30%, rgba(16, 185, 129, 0.02) 50%, rgba(16, 185, 129, 0.03) 70%, transparent 90%);
          mix-blend-mode: screen;
          opacity: 0.4;
        }

        .hacker-char {
          text-shadow: 0 0 10px rgba(16, 185, 129, 1), 0 0 20px rgba(16, 185, 129, 0.8), 0 0 30px rgba(16, 185, 129, 0.5);
          filter: blur(0.3px);
          font-weight: 900;
          letter-spacing: 0.1em;
          color: rgba(110, 231, 183, 1) !important;
        }

        .hacker-scanline {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 48%,
            rgba(16, 185, 129, 0.15) 49%,
            rgba(16, 185, 129, 0.15) 51%,
            transparent 52%,
            transparent 100%
          );
          height: 2px;
          opacity: 0.4;
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.3);
          mix-blend-mode: screen;
        }

        .hacker-scanline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(16, 185, 129, 0.03) 49.5%,
            rgba(16, 185, 129, 0.06) 50%,
            rgba(16, 185, 129, 0.03) 50.5%,
            transparent 100%
          );
        }

        h1, h2, h3, h4 {
          letter-spacing: -0.05em;
        }
      `}</style>
    </div>
  );
};

export default App;
