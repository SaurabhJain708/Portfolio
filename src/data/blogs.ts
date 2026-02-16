export type BlogPost = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  body: string;
};

export const blogs: BlogPost[] = [
  {
    id: "rag-systems-scale",
    title: "Building RAG Systems That Scale",
    date: "Feb 2026",
    tags: ["RAG", "AI", "Vector DB", "MCP"],
    excerpt:
      "How we improved citation accuracy by 90% and retrieval by 70% using vector DB logic, post-hoc processing, and Redis-backed MCP pagination in production.",
    body: `Production RAG systems often hit two walls: context limits and citation quality. In a recent project we tackled both.

First, we moved from naive chunk retrieval to a hybrid approach—combining semantic search with metadata filters and re-ranking. That alone improved relevance. Then we added post-hoc processing to normalize and deduplicate citations, which took citation accuracy from inconsistent to reliably high.

The bigger win was MCP pagination. Our agents were hitting context ceilings when pulling from external tools. We implemented Redis-backed cursor pagination so the agent could stream results in pages instead of loading everything at once. Client-side accuracy jumped because the model could focus on the right slice of data.

Key takeaways: invest in retrieval quality before scaling, and design your tool layer (MCP, function calling) with pagination and limits from day one.`,
  },
  {
    id: "zero-downtime-auth",
    title: "Zero-Downtime Auth Migrations",
    date: "Jan 2026",
    tags: ["Better Auth", "NextAuth", "Migration", "PostgreSQL"],
    excerpt:
      "A step-by-step account of migrating a live production app from NextAuth to Better Auth with zero downtime and zero data loss.",
    body: `Migrating authentication on a live app is one of the riskiest operations you can run. Users are logged in, sessions are in flight, and one mistake can lock everyone out.

We chose a phased approach. Phase one: run both systems in parallel. New sign-ups and logins went through Better Auth while we backfilled and validated existing users and sessions in the new schema. We used idempotent scripts and checksums to ensure no user was duplicated or dropped.

Phase two: a short maintenance window (announced in advance) to flip the default provider and run a final sync. We kept read-only fallback to the old session store for 48 hours so any stragglers could still complete in-flight flows. After that we retired the old paths.

Result: zero downtime, zero data loss, and a cleaner auth model (Better Auth's built-in multi-tenant and token handling fit our stack better). If you're planning a similar move, run both systems in parallel for as long as you can and validate every edge case before the cutover.`,
  },
  {
    id: "trpc-security-sandbox",
    title: "tRPC Security & E2B Sandboxing",
    date: "Dec 2025",
    tags: ["tRPC", "Security", "E2B", "Sandbox"],
    excerpt:
      "Refactored tRPC infrastructure with zip-bomb protection and E2B sandboxing. Implemented Redis-backed pagination for MCP that boosted client agent accuracy by 90%.",
    body: `Securing a tRPC API that powers AI agents requires thinking about both traditional attack vectors and LLM-specific ones. We added request size limits and zip-bomb protection to prevent resource exhaustion. For untrusted code execution (e.g. user-defined tools), we moved to E2B sandboxes so each run is isolated.

Combined with Redis-backed cursor pagination for MCP tool results, our client agents could focus on the right slice of data instead of drowning in context. The result was a 90% improvement in agent accuracy on real workloads.`,
  },
  {
    id: "billing-analytics-ship",
    title: "Shipping Billing & AI Analytics in Under 3 Weeks",
    date: "Nov 2025",
    tags: ["Billing", "Vercel AI SDK", "Recharts", "SaaS"],
    excerpt:
      "Solo-led billing infrastructure and a full AI chat system with dynamic interactive charts. Built with Vercel AI SDK and Recharts for a production SaaS client.",
    body: `As the solo lead on billing and AI, we had to move fast without breaking things. The billing layer needed to support usage-based metering and proration; the AI chat needed streaming, tool use, and dynamic chart rendering (Recharts) from model output.

We used Vercel AI SDK for the chat and tool-calling flow, and kept billing logic in a dedicated service with idempotent webhooks. Shipped in under three weeks with zero critical bugs in the first month.`,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.id === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogs.map((b) => b.id);
}
