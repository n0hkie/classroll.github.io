import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & News – ClassRoll",
  description:
    "Stay up to date with ClassRoll news, product updates, teaching tips, and educator resources.",
};

const posts = [
  {
    slug: "why-photo-attendance-changes-everything",
    title: "Why Photo Attendance Changes Everything for Teachers",
    excerpt:
      "Traditional roll calls are slow, error-prone, and feel like a chore. Photo-based attendance transforms the experience — here's why thousands of teachers are switching.",
    category: "Teaching Tips",
    date: "June 5, 2026",
    readTime: "5 min read",
    featured: true,
    emoji: "📸",
  },
  {
    slug: "classroll-v1-1-launch",
    title: "ClassRoll v1.1 is Here: Attendance Streaks & Certificates",
    excerpt:
      "We're excited to launch ClassRoll v1.1, featuring attendance streak tracking, perfect attendance certificates (PDF), and a completely redesigned history calendar.",
    category: "Product Update",
    date: "May 20, 2026",
    readTime: "3 min read",
    featured: false,
    emoji: "🎉",
  },
  {
    slug: "offline-first-why-it-matters",
    title: "Offline-First Apps: Why Your Classroom Tools Should Work Without Internet",
    excerpt:
      "School WiFi is unreliable. Mobile data eats into your plan. Here's why offline-first design isn't a nice-to-have — it's a requirement for classroom tools.",
    category: "Education Tech",
    date: "May 10, 2026",
    readTime: "6 min read",
    featured: false,
    emoji: "📵",
  },
  {
    slug: "seating-arrangement-tips",
    title: "5 Seating Arrangement Strategies That Actually Improve Classroom Management",
    excerpt:
      "Where students sit has a measurable impact on engagement, behavior, and learning outcomes. ClassRoll's seating builder makes it easy to try all five.",
    category: "Teaching Tips",
    date: "April 28, 2026",
    readTime: "7 min read",
    featured: false,
    emoji: "🪑",
  },
  {
    slug: "backup-and-restore-guide",
    title: "How to Back Up Your ClassRoll Data and Never Lose a Record",
    excerpt:
      "Teachers sometimes change phones or reinstall apps. Here's the complete guide to backing up your ClassRoll data and restoring it on any device.",
    category: "How-To Guide",
    date: "April 15, 2026",
    readTime: "4 min read",
    featured: false,
    emoji: "💾",
  },
  {
    slug: "attendance-certificates-guide",
    title: "Perfect Attendance Certificates: A Simple Way to Boost Motivation",
    excerpt:
      "Recognition matters. A printable certificate shared with parents or pinned on a classroom wall can be a powerful motivator. ClassRoll makes generating them a one-tap job.",
    category: "Teaching Tips",
    date: "March 30, 2026",
    readTime: "4 min read",
    featured: false,
    emoji: "🏆",
  },
];

const categories = ["All", "Teaching Tips", "Product Update", "Education Tech", "How-To Guide"];

const categoryColors: Record<string, string> = {
  "Teaching Tips": "bg-violet-100 text-violet-700",
  "Product Update": "bg-emerald-100 text-emerald-700",
  "Education Tech": "bg-blue-100 text-blue-700",
  "How-To Guide": "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
            Blog & News
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Resources for{" "}
            <span className="text-violet-200">modern teachers</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Teaching tips, product updates, and practical guides to help you get
            the most out of ClassRoll and your classroom.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  cat === "All"
                    ? "bg-[#6D28D9] text-white"
                    : "bg-white border border-[#DDD0F5] text-[#6B5FA6] hover:border-[#6D28D9] hover:text-[#6D28D9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="bg-white rounded-3xl border border-[#DDD0F5] overflow-hidden mb-10 hover:border-[#6D28D9] hover:shadow-xl hover:shadow-violet-100 transition-all group">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] flex items-center justify-center p-12 min-h-48">
                <span className="text-8xl">{featured.emoji}</span>
              </div>
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-violet-100 text-[#6D28D9] text-xs font-bold rounded-full">
                    Featured
                  </span>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1040] mb-3 group-hover:text-[#6D28D9] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-[#6B5FA6] leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#6B5FA6]">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} /> {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {featured.readTime}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-1.5 text-[#6D28D9] font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-[#DDD0F5] overflow-hidden hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all group flex flex-col"
              >
                <div className="bg-gradient-to-br from-[#EEEAFF] to-[#F9F7FF] flex items-center justify-center py-8">
                  <span className="text-5xl">{post.emoji}</span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>
                      <Tag size={9} className="inline mr-1" />{post.category}
                    </span>
                  </div>
                  <h2 className="font-bold text-[#1A1040] text-lg mb-2 group-hover:text-[#6D28D9] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[#6B5FA6] text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F0EAF8]">
                    <div className="flex items-center gap-3 text-xs text-[#6B5FA6]">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#6D28D9] font-semibold text-xs hover:underline"
                    >
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] rounded-3xl p-10 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-violet-200 mb-6 max-w-md mx-auto">
                Get ClassRoll updates, teaching tips, and new features delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-violet-300 focus:outline-none focus:border-white text-sm"
                />
                <button className="px-6 py-3 bg-white text-[#6D28D9] font-bold rounded-xl hover:bg-violet-50 transition-all text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-violet-300 text-xs mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
