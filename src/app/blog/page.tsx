import Link from "next/link";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Saurabh Jain",
  description: "Notes on RAG, auth, and production engineering.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-300 font-sans">
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-20"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px),
              linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <header className="border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 text-xs font-black uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-3">
          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" /> Writing
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-2">
          All posts
        </h1>
        <p className="text-gray-400 font-medium text-sm sm:text-base mb-12">
          Notes on RAG, auth, and production engineering.
        </p>

        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="group block p-6 sm:p-8 bg-[#0a0f1e] border border-white/10 rounded-2xl hover:border-blue-500/30 hover:bg-white/5 transition-all"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
                    {blog.date}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-2 py-0.5 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase mb-3 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
