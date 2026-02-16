import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogs";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog" };
  return {
    title: `${post.title} | Saurabh Jain`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#020617] text-gray-300 font-sans">
      {/* Subtle grid background */}
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-400 text-xs font-black uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All posts
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">
            {post.date}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] font-bold text-blue-400 uppercase tracking-widest"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase mb-8">
          {post.title}
        </h1>

        <div className="prose prose-invert max-w-none text-gray-400 text-base sm:text-lg leading-relaxed space-y-6">
          {post.body.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-black uppercase tracking-widest transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all posts
          </Link>
        </footer>
      </article>
    </div>
  );
}
