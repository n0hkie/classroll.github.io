import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, BookOpen, Download, ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support – ClassRoll",
  description:
    "Get help with ClassRoll. Find answers in our FAQ, contact our support team, or join our teacher community.",
};

const quickHelp = [
  {
    emoji: "💾",
    question: "How do I back up my data?",
    answer: "Settings → Backup & Restore → Create Backup. Share the .classroll file to your preferred storage.",
  },
  {
    emoji: "🔄",
    question: "How do I restore on a new phone?",
    answer: "Transfer your .classroll file to the new device → Settings → Backup & Restore → Restore from Backup.",
  },
  {
    emoji: "📄",
    question: "Why can I only export once per day?",
    answer: "The free tier allows 1 export/day. Watch a short rewarded ad to unlock additional exports on the same day.",
  },
  {
    emoji: "📵",
    question: "Does it work without internet?",
    answer: "Yes, completely. ClassRoll is offline-first. All data is stored locally on your device.",
  },
  {
    emoji: "👤",
    question: "Do I need an account?",
    answer: "No account, email, or sign-up required. Open the app and start immediately.",
  },
  {
    emoji: "📸",
    question: "What if I don't have student photos?",
    answer: "Photos are optional. Students without photos show a color-coded initials avatar.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
            Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How can we{" "}
            <span className="text-violet-200">help you?</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Find answers quickly or reach out directly. We&apos;re here to make
            sure ClassRoll works perfectly for your classroom.
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
          {/* Support Channels */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <a
              href="mailto:support@nexusappworks.com?subject=ClassRoll%20Support"
              className="bg-white rounded-2xl p-6 border border-[#DDD0F5] hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 text-[#6D28D9] flex items-center justify-center mb-4">
                <Mail size={22} />
              </div>
              <h3 className="font-bold text-[#1A1040] text-lg mb-1">Email Support</h3>
              <p className="text-[#6B5FA6] text-sm mb-3">
                Fastest way to report bugs or get personal help. Replies within 1–2 business days.
              </p>
              <span className="text-[#6D28D9] font-semibold text-sm group-hover:underline">
                support@nexusappworks.com
              </span>
            </a>

            <a
              href="https://facebook.com/nexusappworks"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 border border-[#DDD0F5] hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <MessageSquare size={22} />
              </div>
              <h3 className="font-bold text-[#1A1040] text-lg mb-1">Community Group</h3>
              <p className="text-[#6B5FA6] text-sm mb-3">
                Join our Facebook community of teachers using ClassRoll. Share tips, get quick help.
              </p>
              <span className="text-[#6D28D9] font-semibold text-sm group-hover:underline">
                Join on Facebook →
              </span>
            </a>

            <Link
              href="/faq"
              className="bg-white rounded-2xl p-6 border border-[#DDD0F5] hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all text-left group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <BookOpen size={22} />
              </div>
              <h3 className="font-bold text-[#1A1040] text-lg mb-1">FAQ</h3>
              <p className="text-[#6B5FA6] text-sm mb-3">
                Browse common questions about features, exports, backups, privacy, and more.
              </p>
              <span className="text-[#6D28D9] font-semibold text-sm group-hover:underline">
                Browse FAQ →
              </span>
            </Link>
          </div>

          {/* Quick Help */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#1A1040] mb-6 text-center">Common questions</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickHelp.map((item) => (
                <div
                  key={item.question}
                  className="bg-white rounded-2xl p-5 border border-[#DDD0F5]"
                >
                  <span className="text-2xl mb-3 block">{item.emoji}</span>
                  <h3 className="font-bold text-[#1A1040] text-sm mb-2">{item.question}</h3>
                  <p className="text-[#6B5FA6] text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold hover:gap-3 transition-all"
              >
                See all FAQ topics <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* App Version Info */}
          <div className="bg-white rounded-2xl border border-[#DDD0F5] p-6">
            <h3 className="font-bold text-[#1A1040] text-lg mb-4">Before contacting support</h3>
            <p className="text-[#6B5FA6] text-sm mb-4">
              Please include the following information in your support request for faster resolution:
            </p>
            <div className="space-y-2">
              {[
                "App version (Settings → About → App Version)",
                "Device model and OS version (Android/iOS)",
                "A description of the issue and steps to reproduce it",
                "Screenshots or screen recordings if applicable",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 text-sm text-[#1A1040]">
                  <CheckCircle size={15} className="text-[#6D28D9] mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Download */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-[#1A1040] mb-3">Don&apos;t have ClassRoll yet?</h3>
            <p className="text-[#6B5FA6] mb-6">Download for free on Android and iOS.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#6D28D9] text-white font-bold px-6 py-3 rounded-full hover:bg-[#5B21B6] transition-all shadow-md"
              >
                <Download size={16} /> Get on Google Play
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[#6D28D9] text-[#6D28D9] font-bold px-6 py-3 rounded-full hover:bg-violet-50 transition-all"
              >
                <Download size={16} /> Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
