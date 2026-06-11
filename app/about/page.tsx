import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Target,
  Lightbulb,
  Users,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About ClassRoll",
  description:
    "Learn the story behind ClassRoll — built for teachers, by someone who wanted to make classroom mornings a little easier.",
};

const values = [
  {
    icon: Zap,
    title: "Speed First",
    desc: "Every feature is designed to save teacher time. If it takes more than a tap, we rethink it.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    desc: "Student data never leaves your device. We don't collect it, store it, or share it — ever.",
  },
  {
    icon: Heart,
    title: "Teacher-Centered",
    desc: "Every design decision starts with one question: does this make a teacher's day easier?",
  },
  {
    icon: Lightbulb,
    title: "Offline First",
    desc: "Real classrooms don't always have internet. ClassRoll works perfectly without it.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Idea",
    desc: "A teacher friend complained about paper roll calls taking 5 minutes every morning. We thought: what if attendance was just... tapping photos?",
  },
  {
    year: "2025",
    title: "First Prototype",
    desc: "Built the first photo grid attendance screen. Teachers in local schools tried it and loved the visual simplicity. The core concept was proven.",
  },
  {
    year: "2025",
    title: "MVP Launch",
    desc: "ClassRoll launched on Google Play and Apple App Store with photo attendance, seating builder, and PDF export. 100% offline from day one.",
  },
  {
    year: "2026",
    title: "Growing Community",
    desc: "Thousands of teachers, tutors, and coaches across the world now use ClassRoll daily. Building v1.1 features based on their feedback.",
  },
];

const teamMembers = [
  {
    initials: "DA",
    name: "Development Team",
    role: "Mobile & Web Engineering",
    color: "#7C3AED",
    desc: "Building fast, reliable, offline-first experiences for teachers everywhere.",
  },
  {
    initials: "UX",
    name: "Design Team",
    role: "UX & Product Design",
    color: "#0EA5E9",
    desc: "Obsessed with making every interaction feel warm, fast, and intuitive.",
  },
  {
    initials: "NA",
    name: "NexusAppWorks",
    role: "Product & Strategy",
    color: "#6D28D9",
    desc: "An independent developer studio focused on tools that help real people in real workflows.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
            About ClassRoll
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Built for teachers,{" "}
            <span className="text-violet-200">with teachers</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            ClassRoll was built by someone who watched a teacher struggle with
            paper roll calls every morning. We thought attendance should be
            faster, more visual, and never dependent on internet.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-6">
                Making attendance the{" "}
                <span className="gradient-text">easiest part of teaching</span>
              </h2>
              <p className="text-[#6B5FA6] text-lg leading-relaxed mb-6">
                Teachers spend an average of 5–10 minutes on roll call every
                session. That&apos;s hours per week lost to administrative tasks
                instead of teaching. ClassRoll was built to give those minutes
                back.
              </p>
              <p className="text-[#6B5FA6] leading-relaxed mb-8">
                Our core belief: attendance should take under 30 seconds.
                Everything else — seating plans, PDF reports, backup — should
                be just as effortless. No subscriptions required, no internet
                dependency, no learning curve.
              </p>
              <div className="space-y-3">
                {[
                  "Attendance for 30 students in under 10 seconds",
                  "First class created in under 60 seconds",
                  "Works in any classroom, anywhere in the world",
                  "Student data stays on your device — always",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-[#6D28D9] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1A1040] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-violet-100 border border-[#DDD0F5]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden relative">
                    <Image
                      src="/icon.png"
                      alt="ClassRoll"
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1040] text-xl">ClassRoll</h3>
                    <p className="text-[#6B5FA6] text-sm">Offline Photo Attendance in Seconds</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "30s", desc: "Avg. session saved" },
                    { num: "5+", desc: "Classes per teacher" },
                    { num: "0", desc: "Data uploaded" },
                    { num: "Free", desc: "Always free tier" },
                  ].map((item) => (
                    <div key={item.desc} className="bg-[#F9F7FF] rounded-xl p-4 text-center">
                      <div className="text-2xl font-black text-[#6D28D9]">{item.num}</div>
                      <div className="text-xs text-[#6B5FA6] mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-violet-100 rounded-full -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-violet-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              What we stand for
            </h2>
            <p className="text-[#6B5FA6] text-lg max-w-xl mx-auto">
              These aren&apos;t just words — they&apos;re the principles behind every
              product decision we make.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-6 rounded-2xl border border-[#DDD0F5] bg-[#F9F7FF] hover:border-[#6D28D9] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-100 text-[#6D28D9] flex items-center justify-center">
                  <v.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1040] text-lg mb-1">{v.title}</h3>
                  <p className="text-[#6B5FA6] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              From an idea to a daily tool
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#DDD0F5] lg:left-1/2" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={`${item.year}-${i}`}
                  className={`relative flex gap-8 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`hidden lg:flex flex-1 ${
                      i % 2 === 0 ? "justify-end pr-10" : "justify-start pl-10"
                    }`}
                  >
                    <div className="max-w-xs">
                      <div
                        className={`text-xs font-bold text-[#6D28D9] uppercase tracking-widest mb-1 ${
                          i % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        {item.year}
                      </div>
                      <h3
                        className={`font-bold text-[#1A1040] text-lg mb-2 ${
                          i % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-[#6B5FA6] text-sm leading-relaxed ${
                          i % 2 === 0 ? "text-right" : "text-left"
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 lg:absolute lg:left-1/2 lg:-translate-x-1/2 bg-white border-2 border-[#6D28D9] rounded-2xl flex items-center justify-center shadow-md shadow-violet-100">
                    <span className="text-[#6D28D9] font-black text-sm">{item.year.slice(2)}</span>
                  </div>

                  {/* Mobile content */}
                  <div className="flex-1 lg:hidden">
                    <div className="text-xs font-bold text-[#6D28D9] uppercase tracking-widest mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-bold text-[#1A1040] text-lg mb-2">{item.title}</h3>
                    <p className="text-[#6B5FA6] text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="hidden lg:flex flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              The Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              Small team, big mission
            </h2>
            <p className="text-[#6B5FA6] text-lg max-w-xl mx-auto">
              NexusAppWorks is an independent studio building tools that make
              real people&apos;s lives measurably easier.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="text-center p-6 rounded-2xl border border-[#DDD0F5] bg-[#F9F7FF] hover:border-[#6D28D9] transition-colors"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg"
                  style={{ backgroundColor: member.color }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1A1040] text-base mb-0.5">{member.name}</h3>
                <p className="text-[#6D28D9] text-xs font-medium mb-3">{member.role}</p>
                <p className="text-[#6B5FA6] text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F9F7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <Target size={40} className="mx-auto mb-4 text-violet-200" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Join our growing teacher community
              </h2>
              <p className="text-violet-200 mb-8 max-w-lg mx-auto">
                Have feedback? We&apos;d love to hear it. ClassRoll is shaped by
                real teacher input — your voice matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#6D28D9] font-bold px-6 py-3 rounded-full hover:bg-violet-50 transition-all"
                >
                  Get in Touch <ArrowRight size={16} />
                </Link>
                <a
                  href="https://facebook.com/nexusappworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/25 transition-all"
                >
                  <Users size={16} /> Join Facebook Community
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
