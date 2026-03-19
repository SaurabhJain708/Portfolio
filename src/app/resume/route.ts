export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saurabh Jain - Resume</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        :root {
            --primary-color: #1155cc;
            --text-color: #333;
            --secondary-text: #555;
            --border-color: #ddd;
            --bg-color: #fff;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.5;
            color: var(--text-color);
            background-color: #f0f2f5;
            display: flex;
            justify-content: center;
            padding: 2rem;
        }

        .resume-container {
            background-color: var(--bg-color);
            width: 100%;
            max-width: 210mm;
            padding: 2.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 1.5rem;
        }

        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .title-role {
            font-size: 1.2rem;
            color: var(--primary-color);
            font-weight: 600;
            margin-bottom: 0.75rem;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.9rem;
            color: var(--secondary-text);
        }

        .contact-info a {
            color: var(--text-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .contact-info a:hover {
            color: var(--primary-color);
        }

        section {
            margin-bottom: 1.25rem;
        }

        h2 {
            font-size: 1.3rem;
            color: var(--primary-color);
            border-bottom: 1px solid var(--border-color);
            padding-bottom: 0.25rem;
            margin-bottom: 0.75rem;
            text-transform: uppercase;
        }

        .summary {
            text-align: justify;
            margin-bottom: 1rem;
        }

        .skills-list {
            list-style: none;
        }

        .skills-list li {
            margin-bottom: 0.3rem;
        }

        .skill-category {
            font-weight: 700;
            color: var(--text-color);
        }

        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 0.25rem;
            flex-wrap: wrap;
        }

        .job-title {
            font-weight: 700;
            font-size: 1.05rem;
        }

        .company {
            font-weight: 600;
            color: var(--secondary-text);
            margin-right: auto;
            margin-left: 0.5rem;
        }

        .job-meta {
            font-style: italic;
            color: var(--secondary-text);
            font-size: 0.9rem;
        }

        .job-links {
            display: flex;
            gap: 1rem;
            margin-top: 0.25rem;
            font-size: 0.85rem;
        }

        .job-links a {
            color: var(--primary-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

        .job-links a:hover {
            text-decoration: underline;
        }

        ul.bullets {
            list-style-type: disc;
            margin-left: 1.2rem;
            margin-top: 0.25rem;
        }

        ul.bullets li {
            margin-bottom: 0.2rem;
            font-size: 0.95rem;
        }

        .edu-item, .cert-item {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.25rem;
        }
        
        strong {
            font-weight: 600;
        }

        @media print {
            body {
                background: none;
                padding: 0;
                display: block;
            }
            .resume-container {
                box-shadow: none;
                width: 100%;
                max-width: 100%;
                padding: 0;
                margin: 0;
            }
            a {
                color: black;
                text-decoration: none;
            }
            @page {
                margin: 0.5cm;
                size: A4;
            }
        }
        
        @media (max-width: 600px) {
            .contact-info {
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
            }
            .job-header {
                flex-direction: column;
            }
            .company {
                margin-left: 0;
            }
        }
    </style>
</head>
<body>

    <div class="resume-container">
        
        <header>
            <h1>Saurabh Jain</h1>
            <div class="title-role">Full-Stack AI Engineer | RAG & Infrastructure Architect</div>
            <div class="contact-info">
                <span><i class="fas fa-map-marker-alt"></i> India</span>
                <a href="tel:+919548804484"><i class="fas fa-phone"></i> +91 9548804484</a>
                <a href="mailto:sauravjain.dev@gmail.com"><i class="fas fa-envelope"></i> sauravjain.dev@gmail.com</a>
            </div>
            <div class="contact-info" style="margin-top: 0.5rem;">
                <a href="https://www.sauravjain.dev" target="_blank"><i class="fas fa-globe"></i> sauravjain.dev</a>
                <a href="https://linkedin.com/in/saurabh-jain-226295320" target="_blank"><i class="fab fa-linkedin"></i> linkedin.com/in/saurabh-jain-226295320</a>
                <a href="https://github.com/SaurabhJain708" target="_blank"><i class="fab fa-github"></i> github.com/SaurabhJain708</a>
                <a href="https://x.com/_Saurav_Jain_" target="_blank"><i class="fab fa-twitter"></i> x.com/_Saurav_Jain_</a>
            </div>
        </header>

        <section>
            <h2>Summary</h2>
            <div class="summary">
                Founder and Full-Stack AI Engineer with deep expertise in RAG systems, serverless AI, vLLM, model hosting, and MLOps. Built KRAG, a serverless RAG platform that beats Google NotebookLM in PDF parsing and table extraction. It runs on scale-to-zero GPUs so you pay nothing when idle. Strong in Vector DBs (BGE-M3), MCP, Modal, and bridging backend (PostgreSQL, Redis, tRPC) with AI tooling (Vercel AI SDK, fine-tuning). Track record: zero-downtime migrations, 90% RAG accuracy gains at Buildway.ai. Now leading SMAKG and building flagship products (KRAG, The Informant) plus client work like StealthNode.
            </div>
        </section>

        <section>
            <h2>Core Skills</h2>
            <ul class="skills-list">
                <li><span class="skill-category">AI & RAG:</span> Vercel AI SDK, MCP (Model Context Protocol), Vector DBs & Embeddings (BGE-M3), RAG Optimization & Citation, LangChain, vLLM & LLM Orchestration, Modal (Serverless GPU), Fine-tuning, Puppeteer (Automation).</li>
                <li><span class="skill-category">Frontend:</span> React, Next.js 14+, TypeScript, Tailwind CSS, Recharts, Shadcn UI, Responsive & SSR.</li>
                <li><span class="skill-category">Backend:</span> Node.js, tRPC, Prisma, PostgreSQL (Neon / Supabase), Redis, Better Auth, NextAuth, Zod.</li>
                <li><span class="skill-category">DevOps & Tools:</span> Docker, Kubernetes, CI/CD (GitHub Actions), AWS, Modal (Serverless), Vercel, E2B (Sandboxing), Cloudflare Tunnel.</li>
            </ul>
        </section>

        <section>
            <h2>Professional Experience</h2>
            
            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">Founder</span>
                        <span class="company">SMAKG.com</span>
                    </div>
                    <div class="job-meta">Feb 2026 – Present | Remote</div>
                </div>
                <ul class="bullets">
                    <li><strong>Company Building:</strong> Founding and leading SMAKG.com; defining product vision, technical strategy, and go-to-market.</li>
                    <li><strong>Product & Engineering:</strong> Driving development of flagship products (KRAG, The Informant) and core infrastructure.</li>
                    <li><strong>Client Development:</strong> Building client products under SMAKG (e.g. StealthNode, an AI-driven SOC platform).</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">Founding Engineer</span>
                        <span class="company">Buildway.ai</span>
                    </div>
                    <div class="job-meta">Oct 2025 – Mar 2026 | Berlin, Germany (Remote)</div>
                </div>
                <ul class="bullets">
                    <li><strong>AI Infrastructure & RAG Optimization:</strong> Engineered a multi-agent system with <strong>Dynamic Chain of Thought</strong> and Web Search tools using MCP. Improved RAG citation accuracy by <strong>90%</strong> and data retrieval by <strong>70%</strong> via complex vector DB logic and post-hoc processing.</li>
                    <li><strong>Solo Lead (Billing & AI):</strong> Built complex billing infrastructure and shipped a full AI chat system with dynamic interactive charts (<strong>Vercel AI SDK, Recharts</strong>) in &lt;2.5 weeks. Debugged critical production "ghost migrations" with 100% reliability.</li>
                    <li><strong>Critical Zero-Downtime Migration:</strong> Executed a high-stakes migration from NextAuth to Better Auth for a live production app, resulting in <strong>0% downtime</strong> and <strong>zero data loss</strong>.</li>
                    <li><strong>Advanced Security & Infrastructure:</strong> Refactored tRPC infra for security (zip-bomb protection, E2B sandboxing). Implemented 100% secure Redis-backed pagination for MCP, boosting client agent accuracy by <strong>90%</strong>.</li>
                    <li><strong>High-Velocity Engineering:</strong> Contributed to 3 production projects from <strong>Day 1</strong> (zero onboarding). Parsed complex Austrian legal APIs (big data seeding, complex joins) and reduced launch times by optimizing DB load and caching.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Products launched</h2>
            
            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">KRAG - Serverless RAG Agent</span>
                        <span class="company">(Creator & Lead Developer)</span>
                    </div>
                    <div class="job-meta">Jan 2026 – Present</div>
                </div>
                <div class="job-links">
                    <a href="https://github.com/SaurabhJain708/krag" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    <a href="https://youtu.be/sngsQ6HJnlY" target="_blank"><i class="fab fa-youtube"></i> Demo</a>
                </div>
                <ul class="bullets">
                    <li>Beats Google NotebookLM in PDF parsing and table extraction (March 2026). Architected the world's first serverless RAG agent: Next.js API plus Modal Python workers and Redis task queues. 40% lower cost than major parsers while preserving tables, structure, and formatting.</li>
                    <li>Serverless GPUs scale to zero. No idle costs; scales by design. Multi-format ingestion (PDFs, web URLs) with 3 enterprise encryption levels, parent-child chunking, real-time status, and context-aware chat with citations.</li>
                    <li>Florence-2 for image understanding and search. Custom models on Modal: Marker PDF, BGE-M3, MXBAI Reranker, Qwen 2.5 14B. All serverless with auto-scaling.</li>
                    <li>Stack: Next.js 16, tRPC, Prisma, Redis, Supabase, Exa, Modal, vLLM, model hosting, MLOps.</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">StealthNode - AI-Driven SOC Platform</span>
                        <span class="company">(Lead Developer at SMAKG)</span>
                    </div>
                    <div class="job-meta">Coming soon</div>
                </div>
                <div class="job-links">
                    <a href="https://youtu.be/eGcgSURzO-E" target="_blank"><i class="fab fa-youtube"></i> Demo</a>
                </div>
                <ul class="bullets">
                    <li>AI-powered Security Operations Center built by SMAKG for a client. Deploys via lightweight MCP + agent installer; logs stream to <strong>Wazuh</strong>; custom rulesets trigger an AI agent in isolated <strong>Modal</strong> sandbox connected via secure Cloudflare MCP tunnel.</li>
                    <li>Agent detects and neutralizes threats in real time; delivers detailed incident reports. Stack: Modal, MCP, Wazuh, Cloudflare Tunnel, event-driven architecture.</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">The Informant - Custom SLM for CS Students</span>
                        <span class="company">(Creator & Lead Developer)</span>
                    </div>
                    <div class="job-meta">Coming soon</div>
                </div>
                <ul class="bullets">
                    <li>Custom fine-tuned SLM for CS students. [PROSE] explains concepts like a 1940s noir detective; [CODE] returns ready-to-use Python code.</li>
                    <li>Serverless deployment on <strong>Modal</strong>; actively under development. Stack: Modal, Python, SLM, fine-tuning.</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">StackVault - SaaS Portfolio Builder</span>
                        <span class="company">(Creator & Lead Developer)</span>
                    </div>
                    <div class="job-meta">July 2025 – Nov 2025</div>
                </div>
                <div class="job-links">
                    <a href="https://www.stackvault.dev" target="_blank"><i class="fas fa-globe"></i> Live</a>
                    <a href="https://github.com/SaurabhJain708/StackVault.dev" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                    <a href="https://youtu.be/YLAzcAiYHKY" target="_blank"><i class="fab fa-youtube"></i> Demo</a>
                </div>
                <ul class="bullets">
                    <li>Architected and launched a multi-tenant SaaS platform serving <strong>50+ active users</strong>, featuring <strong>custom domain support</strong> (Vercel-style routing) and dynamic subdomains via Next.js Middleware.</li>
                    <li>Integrated an <strong>AI Assistant</strong> to automate user support and enhance portfolio creation workflows.</li>
                    <li>Implemented robust CI/CD pipelines using <strong>GitHub Actions</strong> for dev and prod branches, automating linting, testing, and builds to prevent regressions.</li>
                    <li>Enforced end-to-end type safety using <strong>Zod</strong> across all API endpoints and database schemas.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Open Source Contributions</h2>
            
            <div class="job" style="margin-bottom: 0.75rem;">
                <div class="job-header">
                    <div>
                        <span class="job-title">TwentyCRM</span>
                        <span class="company">Top 4% Contributor</span>
                    </div>
                </div>
                <ul class="bullets">
                    <li>Merged <strong>8+ PRs in a single month</strong>, working alongside core senior developers on high-priority tickets and received direct mentorship.</li>
                    <li>Contributed a significant portion to the new <strong>calendar-based Kanban feature</strong>, implementing complex frontend logic and interactions.</li>
                </ul>
            </div>

            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">Formbricks</span>
                        <span class="company">Contributor</span>
                    </div>
                </div>
                <ul class="bullets">
                    <li>Integrated <strong>Vitest</strong> for type-safe unit testing and resolved critical UI formatting bugs affecting thousands of users.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Freelance Experience</h2>
            
            <div class="job">
                <div class="job-header">
                    <div>
                        <span class="job-title">Full-Stack Developer</span>
                        <span class="company">Freelance Web Application</span>
                    </div>
                    <div class="job-meta">Feb 2025 – May 2025</div>
                </div>
                <ul class="bullets">
                    <li>Delivered a secure, containerized (Docker) web application using <strong>Next.js</strong> and <strong>MongoDB</strong>.</li>
                    <li>Built a reusable UI component library and containerized the app to reduce deployment friction and ensure environment consistency.</li>
                </ul>
            </div>
        </section>

        <section>
            <h2>Education</h2>
            <div class="edu-item">
                <span><strong>Bachelor of Science in Data Science</strong>, Indian Institute of Technology, Madras</span>
                <span>Exp. Jan 2029</span>
            </div>
        </section>

        <section>
            <h2>Certifications</h2>
            <div class="cert-item">
                <span><strong>Docker Certification</strong> – Docker, Inc.</span>
                <span>2025</span>
            </div>
            <div class="cert-item">
                <span><strong>GitHub Actions Workshop: CI/CD Pipelines</strong> – Microsoft Press</span>
                <span>2025</span>
            </div>
        </section>

    </div>

</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
