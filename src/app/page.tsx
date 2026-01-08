'use client';

import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  Github, Linkedin, Terminal, Zap, 
  ChevronRight, GitBranch, Menu, X, ExternalLink,
  Cpu as CpuIcon, Workflow, HardDrive, Layout, Activity, Download
} from 'lucide-react';
import Image from 'next/image';

const DATA = {
  name: "Saurabh Jain",
  title: "Full-Stack AI Engineer | RAG & Infrastructure Architect",
  roles: ["RAG Architect", "Infrastructure Specialist", "Founding Engineer"],
  summary: "High-impact Full Stack Engineer with deep expertise in AI infrastructure, RAG systems, and secure authentication. Proven track record of executing zero-downtime migrations and shipping complex production features for live clients in agency environments. Specialist in bridging traditional backend engineering (PostgreSQL, Redis) with cutting-edge AI tooling (MCP, Vercel AI SDK). Currently acting as a solo lead on high-stakes billing and analytics systems.",
  contact: {
    email: "sauravjain.dev@gmail.com",
    github: "SaurabhJain708",
    linkedin: "saurabh-jain-226295320",
    twitter: "_Saurav_Jain_"
  },
  skills: {
    "AI & RAG": {
      id: "INTEL-01",
      items: ["Vercel AI SDK", "MCP", "Vector DBs", "RAG Optimization", "LangChain", "Puppeteer (Automation)"],
      color: "blue"
    },
    "Frontend": {
      id: "LAYER-02",
      items: ["React", "Next.js 14+", "TypeScript", "Tailwind CSS", "Recharts", "Shadcn UI"],
      color: "indigo"
    },
    "Backend": {
      id: "DATA-03",
      items: ["Node.js", "tRPC", "PostgreSQL (Neon)", "Redis", "Better Auth", "NextAuth", "Zod"],
      color: "emerald"
    },
    "DevOps & Tools": {
      id: "OPS-04",
      items: ["Docker", "Kubernetes", "CI/CD (GitHub Actions)", "AWS", "E2B", "Bot Scaling"],
      color: "orange"
    }
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
          desc: "Engineered a multi-agent system with Dynamic Chain of Thought and Web Search tools using MCP. Improved RAG citation accuracy by 90% and data retrieval by 70% via complex vector DB logic and post-hoc processing."
        },
        {
          title: "Solo Lead (Billing & AI)",
          desc: "Built complex billing infrastructure and shipped a full AI chat system with dynamic interactive charts (Vercel AI SDK, Recharts) in <2.5 weeks. Debugged critical production 'ghost migrations' with 100% reliability."
        },
        {
          title: "Critical Zero-Downtime Migration",
          desc: "Executed a high-stakes migration from NextAuth to Better Auth for a live production app, resulting in 0% downtime and zero data loss."
        },
        {
          title: "Advanced Security & Infrastructure",
          desc: "Refactored tRPC infra for security (zip-bomb protection, E2B sandboxing). Implemented 100% secure Redis-backed pagination for MCP, boosting client agent accuracy by 90%."
        },
        {
          title: "High-Velocity Engineering",
          desc: "Contributed to 3 production projects from Day 1 (zero onboarding). Parsed complex Austrian legal APIs (big data seeding, complex joins) and reduced launch times by optimizing DB load and caching."
        }
      ]
    },
    {
      company: "Freelance Client",
      role: "Full-Stack Developer",
      period: "Feb 2025 – May 2025",
      location: "Remote",
      highlights: [
        {
          title: "Secure Containerized Web Application",
          desc: "Delivered a secure, containerized (Docker) web application using Next.js and MongoDB."
        },
        {
          title: "Reusable Component Library",
          desc: "Built a reusable UI component library and containerized the app to reduce deployment friction and ensure environment consistency."
        }
      ]
    }
  ],
  products: [
    {
      name: "StackVault",
      role: "Creator & Lead Developer",
      period: "July 2025 – Nov 2025",
      url: "https://www.stackvault.dev",
      description: "SaaS Portfolio Builder",
      tech: ["Next.js", "Middleware", "Zod", "SaaS"],
      details: [
        "Architected and launched a multi-tenant SaaS platform serving 50+ active users, featuring custom domain support (Vercel-style routing) and dynamic subdomains via Next.js Middleware.",
        "Integrated an AI Assistant to automate user support and enhance portfolio creation workflows.",
        "Implemented robust CI/CD pipelines using GitHub Actions for dev and prod branches, automating linting, testing, and builds to prevent regressions.",
        "Enforced end-to-end type safety using Zod across all API endpoints and database schemas."
      ]
    }
  ],
  openSource: [
    {
      name: "TwentyCRM",
      metric: "Top 4% Contributor",
      desc: "Merged 8+ PRs in a single month, working alongside core senior developers on high-priority tickets and received direct mentorship. Contributed a significant portion to the new calendar-based Kanban feature, implementing complex frontend logic and interactions.",
      impact: "8+ PRs Merged",
      link: "https://github.com/twentyhq/twenty",
      tags: ["CRM", "Frontend", "Kanban"]
    },
    {
      name: "Formbricks",
      metric: "Contributor",
      desc: "Integrated Vitest for type-safe unit testing and resolved critical UI formatting bugs affecting thousands of users.",
      impact: "Thousands Impacted",
      link: "https://github.com/formbricks/formbricks",
      tags: ["Open Survey", "Vitest", "Typescript"]
    },
    {
      name: "GPT Engineer",
      metric: "Feature Sprint",
      desc: "Integrated Morph AI into the GPT Engineer codebase within a 3-hour sprint to enable 'Cursor-style' in-place file editing. Replaced full-file rewrites with diff-based editing, increasing agent accuracy by 60% and reducing generation costs.",
      impact: "High-Velocity MVP",
      link: "https://github.com/AntonOsika/gpt-engineer",
      tags: ["AI Agent", "Morph AI", "Diffing"]
    }
  ],
  education: {
    degree: "Bachelor of Science in Data Science",
    school: "Indian Institute of Technology, Madras",
    period: "Expected Graduation: May 2029"
  },
  certifications: [
    { name: "Docker Certification", issuer: "Docker, Inc.", year: "2025" },
    { name: "GitHub Actions Workshop: CI/CD Pipelines", issuer: "Microsoft Press", year: "2025" }
  ]
};

// --- Components ---

const BlueprintGrid = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[40px_40px]" />
    <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,transparent_0%,#020617_80%)" />
  </div>
);

const HackerGlitch = () => {
  const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  
  // Generate random values once using useState
  const [glitchData] = useState(() => {
    return Array.from({ length: 60 }).map(() => ({
      char: characters[Math.floor(Math.random() * characters.length)],
      left: `${3 + Math.random() * 94}%`,
      delay: Math.random() * 10,
      duration: 4 + Math.random() * 4,
      repeatDelay: Math.random() * 3,
    }));
  });
  
  return (
    <div className="absolute inset-0 z-25 pointer-events-none" style={{ overflow: 'visible' }}>
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
            ease: 'linear',
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
          <div className="absolute inset-0 z-20 hacker-overlay rounded-full" style={{ overflow: 'visible' }}>
            <HackerGlitch />
          </div>
          
          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 z-21 hacker-scanline pointer-events-none"
            animate={{
              y: ['-100%', '100%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
          
          {/* Status indicator */}
          <div className="absolute bottom-4 right-4 z-30">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-black text-emerald-300 uppercase tracking-widest">Active</span>
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
  switch(category) {
    case "AI & RAG": return <CpuIcon className="w-6 h-6" />;
    case "Frontend": return <Layout className="w-6 h-6" />;
    case "Backend": return <HardDrive className="w-6 h-6" />;
    case "DevOps & Tools": return <Workflow className="w-6 h-6" />;
    case "DevOps": return <Workflow className="w-6 h-6" />;
    default: return <Zap className="w-6 h-6" />;
  }
};

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
          <h3 className="text-lg sm:text-xl font-black text-white tracking-tighter uppercase">{exp.role}</h3>
          <p className="text-blue-400 font-bold uppercase text-xs sm:text-sm">{exp.company}</p>
        </div>
        <span className="text-[9px] sm:text-[10px] font-black px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase tracking-widest text-gray-500">
          {exp.period}
        </span>
      </div>
      <div className="space-y-2 sm:space-y-3">
        {exp.highlights.map((h: ExperienceHighlight, i: number) => (
          <div key={i} className="group p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/2 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer">
            <h4 className="text-white text-xs sm:text-sm font-bold flex items-center gap-2 mb-1">
              <ChevronRight className="w-3 h-3 text-blue-500 shrink-0" /> <span>{h.title}</span>
            </h4>
            <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020617] text-gray-300 min-h-screen font-sans selection:bg-blue-500/30 overflow-x-hidden">
      <BlueprintGrid />
      
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 z-100 origin-left" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-600 flex items-center justify-center font-black text-white text-lg sm:text-xl">S</div>
            <span className="font-black text-white tracking-tighter text-base sm:text-xl uppercase">Saurabh<span className="text-blue-500">.</span>Jain</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
            {["OSS", "Experience", "Products", "Stack"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors cursor-pointer">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a 
              href={`mailto:${DATA.contact.email}`}
              className="hidden sm:flex items-center gap-2 px-4 sm:px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-full hover:bg-blue-500 hover:text-white transition-all cursor-pointer"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              Download Resume
            </a>
            <button 
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer"
            >
              {mobileMenu ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
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
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600 mb-3">NAVIGATION</p>
                {["OSS", "Experience", "Products", "Stack"].map((item, index) => (
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
                href={`mailto:${DATA.contact.email}`}
                onClick={() => setMobileMenu(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white font-black text-xs uppercase tracking-widest rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all cursor-pointer shadow-lg shadow-blue-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
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
              <span className="hidden sm:inline">Operational in Production Environment</span>
              <span className="sm:hidden">Production Ready</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter leading-[0.9] sm:leading-[0.85] mb-6 sm:mb-8 uppercase">
              Engineer <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">Intelligent</span><br />
              Infrastructure
            </h1>
            <p className="text-base sm:text-lg lg:text-base xl:text-lg text-gray-400 max-w-xl mb-8 sm:mb-12 leading-relaxed font-medium">
              Bridging the gap between <span className="text-white">robust backend systems</span> and <span className="text-white">agentic AI workflows</span>. Specializing in RAG optimization and zero-downtime engineering.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-black text-[10px] sm:text-xs uppercase tracking-widest rounded-xl hover:bg-blue-500 transition-all flex items-center gap-2 sm:gap-3 cursor-pointer">
                <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                Download Resume
              </button>
              <div className="flex gap-2">
                <a href={`https://github.com/${DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={`https://linkedin.com/in/${DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href={`https://x.com/${DATA.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-white cursor-pointer">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
                <div className="p-4 sm:p-6 bg-white/2 border border-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm group hover:border-blue-500/50 transition-all cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-blue-500 transition-colors">90%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-gray-500">RAG Accuracy</div>
                </div>
                <div className="p-4 sm:p-6 bg-white/2 border border-white/5 rounded-xl sm:rounded-2xl backdrop-blur-sm group hover:border-emerald-500/50 transition-all cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 group-hover:text-emerald-500 transition-colors">0%</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-gray-500">Migration Downtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OSS Highlight Section */}
      <section id="oss" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-indigo-600/2 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 text-indigo-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-3 sm:mb-4">
                <Activity className="w-3 h-3 sm:w-4 sm:h-4" /> Global Contribution Metrics
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4 leading-tight sm:leading-none">
                Open Source <br /> <span className="text-indigo-500">Impact.</span>
              </h2>
            </div>
            <div className="p-6 sm:p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl sm:rounded-3xl backdrop-blur-xl md:max-w-xs">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tighter">TOP 4%</div>
              <p className="text-xs text-indigo-300 font-bold uppercase tracking-widest leading-relaxed">
                Global contributor rank on GitHub. Architecting tools used by the modern developer ecosystem.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {DATA.openSource.map((oss, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 sm:p-8 bg-white/2 border border-white/5 rounded-2xl sm:rounded-[2.5rem] hover:bg-white/5 hover:border-indigo-500/30 transition-all flex flex-col h-full relative overflow-hidden cursor-pointer"
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

                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-3 sm:mb-4 group-hover:text-indigo-400 transition-colors relative z-10">{oss.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 sm:mb-8 flex-1 relative z-10">{oss.desc}</p>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {oss.tags?.map(t => (
                      <span key={t} className="text-[9px] font-black uppercase tracking-widest text-gray-600 bg-white/5 px-2 py-1 rounded">#{t}</span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                      <Zap className="w-3 h-3" /> {oss.impact}
                    </div>
                    <a href={oss.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-indigo-600 text-white transition-all cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Domain Section - REDESIGNED */}
      <section id="stack" className="py-16 sm:py-24 md:py-32 bg-white/1 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Technical <span className="text-blue-500">Domains</span></h2>
            <div className="w-16 sm:w-20 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(DATA.skills).map(([name, category], i) => (
              <motion.div 
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-full"
              >
                {/* Hardware Aesthetic Card */}
                <div className="h-full p-8 bg-[#0a0f1e] border border-white/10 rounded-4xl overflow-hidden flex flex-col transition-all duration-500 group-hover:border-blue-500/50 group-hover:bg-blue-500/2 relative cursor-pointer">
                  
                  {/* Scanning Effect */}
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-scan-x z-10" />
                  
                  {/* Tech HUD Accents */}
                  <div className="absolute top-4 right-6 font-mono text-[9px] text-gray-700 group-hover:text-blue-500/50 transition-colors uppercase font-bold tracking-widest">
                    [{category.id}]
                  </div>
                  <div className="absolute bottom-4 left-6 font-mono text-[8px] text-gray-800 uppercase tracking-tighter">
                    REF-COORDS: 34.{i}2 / 09.43
                  </div>

                  {/* Icon & Label */}
                  <div className="mb-10 relative">
                    <div className={`w-14 h-14 rounded-2xl bg-${category.color}-500/10 flex items-center justify-center text-${category.color}-500 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <SkillIcon category={name} />
                    </div>
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-1">{name}</h3>
                    <div className={`h-0.5 w-12 bg-${category.color}-500/40 group-hover:w-full transition-all duration-700`} />
                  </div>

                  {/* Items List */}
                  <div className="flex-1 space-y-3">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center justify-between group/item">
                        <span className="text-[11px] font-mono font-bold text-gray-500 group-hover:text-gray-300 transition-colors uppercase tracking-tight">
                          {item}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-white/5 border border-white/20 group-hover/item:bg-blue-500 group-hover/item:shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all" />
                      </div>
                    ))}
                  </div>

                  {/* Card Background Patterns */}
                  <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] pointer-events-none transition-opacity" 
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">Deployment History</h2>
            <p className="text-gray-500 font-mono text-xs sm:text-sm tracking-widest">TIMELINE // PRODUCTION_LOGS</p>
          </div>
          <div className="space-y-4">
            {DATA.experience.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-16 sm:py-24 md:py-32 bg-blue-600/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-end mb-12 sm:mb-16 md:mb-20">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter uppercase mb-2">Live Products</h2>
              <p className="text-gray-400 font-medium text-sm sm:text-base">Production-grade builds and architectures.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {/* Stack Vault */}
            <div className="group relative p-1">
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-indigo-600 rounded-4xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
              <div className="relative h-full bg-[#0a0f1e] border border-white/10 rounded-xl sm:rounded-2xl md:rounded-4xl p-6 sm:p-8 md:p-12 overflow-hidden">
                <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="px-2 sm:px-3 py-1 bg-blue-500/20 rounded-full text-[9px] sm:text-[10px] font-black text-blue-400 uppercase tracking-widest">Flagship Product</div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-4 uppercase">Stack Vault</h3>
                    <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-2xl">
                      High-performance SaaS Portfolio builder with multi-tenant routing, AI support agents, and enterprise-grade middleware. Serving 50+ active users with custom subdomains.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {DATA.products[0].tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t}</span>
                      ))}
                    </div>
                    <a href={DATA.products[0].url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white font-black text-xs uppercase tracking-widest hover:text-blue-400 transition-colors cursor-pointer">
                      Live Dashboard <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="w-full md:w-80 aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-4 relative overflow-hidden">
                     <div className="absolute inset-0 bg-radial-gradient(circle, #3b82f620 0%, transparent 70%)" />
                     <div className="relative z-10 w-full h-full">
                       <Image
                         src="/stackvault.png"
                         alt="Stack Vault"
                         fill
                         className="object-contain rounded-2xl"
                         priority
                       />
                     </div>
                  </div>
                </div>
              </div>
            </div>
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
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 font-medium px-4">Currently reviewing opportunities for Founding Engineer & AI Infrastructure roles.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
             <a href={`mailto:${DATA.contact.email}`} className="px-8 sm:px-12 py-4 sm:py-6 bg-white text-black font-black rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all cursor-pointer w-full sm:w-auto">
               Direct Mail
             </a>
             <div className="flex gap-3 sm:gap-4 justify-center">
                <a href={`https://github.com/${DATA.contact.github}`} target="_blank" rel="noopener noreferrer" className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all text-white cursor-pointer"><Github className="w-5 h-5 sm:w-6 sm:h-6" /></a>
                <a href={`https://linkedin.com/in/${DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all text-white cursor-pointer"><Linkedin className="w-5 h-5 sm:w-6 sm:h-6" /></a>
                <a href={`https://x.com/${DATA.contact.twitter}`} target="_blank" rel="noopener noreferrer" className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all text-white cursor-pointer">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> SYSTEM_STABLE</span>
            <span className="hidden sm:inline">LOC: BERLIN_REMOTE</span>
          </div>
          <div className="text-center sm:text-left">© 2026 SAURABH_JAIN // VERSION_4.0.1</div>
        </div>
      </footer>

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