import Link from "next/link";
import { Home, ArrowRight, Search, BookOpen } from "lucide-react";

const quickLinks = [
  { label: "Features", href: "/features", icon: Search },
  { label: "FAQ", href: "/faq", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: ArrowRight },
];

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* 404 Number */}
        <div className="relative mb-6">
          <div className="text-[120px] sm:text-[160px] font-black text-white/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-7xl">📋</div>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Attendance not found
        </h1>
        <p className="text-violet-200 text-lg mb-8 max-w-md mx-auto">
          Looks like this page skipped class. Let&apos;s get you back to somewhere useful.
        </p>

        {/* Quick Links */}
        <div className="grid grid-cols-3 gap-3 mb-8 max-w-sm mx-auto">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex flex-col items-center gap-2 p-4 bg-white/10 hover:bg-white/20 rounded-2xl transition-all border border-white/20 text-white"
            >
              <link.icon size={20} />
              <span className="text-xs font-medium">{link.label}</span>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-[#6D28D9] font-bold px-8 py-4 rounded-full hover:bg-violet-50 transition-all shadow-xl shadow-black/20"
        >
          <Home size={18} />
          Back to Home
        </Link>

        <p className="text-violet-300 text-sm mt-6">
          If you think this is an error,{" "}
          <Link href="/contact" className="text-white underline hover:text-violet-200">
            let us know.
          </Link>
        </p>
      </div>
    </div>
  );
}
