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
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans">
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-40"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px),
              linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 text-xs font-black uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-[0.3em] text-[9px] sm:text-[10px] mb-3">
          <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" /> Writing
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-2">
          All posts
        </h1>
        <p className="text-slate-500 font-medium text-sm sm:text-base mb-12">
          Notes on RAG, auth, and production engineering.
        </p>

        <ul className="space-y-6">
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link
                href={`/blog/${blog.id}`}
                className="group block p-6 sm:p-8 bg-white/80 border border-slate-200/80 rounded-2xl hover:border-blue-500/30 hover:bg-white transition-all shadow-[0_4px_24px_-4px_rgba(0,0,0,0.02)]"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                    {blog.date}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[8px] font-bold uppercase tracking-widest text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 uppercase mb-3 group-hover:text-blue-600 transition-colors">
                  {blog.title}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-blue-600 text-xs font-black uppercase tracking-widest group-hover:gap-3 transition-all">
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
