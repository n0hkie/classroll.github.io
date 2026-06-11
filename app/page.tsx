import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  WifiOff,
  FileText,
  Users,
  LayoutGrid,
  Clock,
  Shield,
  Download,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  BookOpen,
  Trophy,
} from "lucide-react";

export const metadata: Metadata = {
  title: "ClassRoll – Offline Photo Attendance in Seconds",
};

const features = [
  {
    icon: Camera,
    title: "Photo Grid Attendance",
    desc: "See every student as a photo tile. Mark exceptions with a single tap — done in seconds.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: WifiOff,
    title: "100% Offline",
    desc: "No internet connection required. Your data never leaves your device. Works anywhere.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: LayoutGrid,
    title: "Seating Builder",
    desc: "Drag and drop students into seats. Save multiple layouts per class.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: FileText,
    title: "PDF & CSV Export",
    desc: "Generate professional attendance reports instantly. Share via email, WhatsApp, or print.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Users,
    title: "Multiple Classes",
    desc: "Manage all your classes in one place — each with their own roster and history.",
    color: "bg-pink-100 text-pink-700",
  },
  {
    icon: Shield,
    title: "Backup & Restore",
    desc: "Export all data as a single backup file. Restore on a new device instantly.",
    color: "bg-teal-100 text-teal-700",
  },
];

const stats = [
  { value: "10s", label: "To take attendance for 30 students" },
  { value: "0", label: "Internet required" },
  { value: "100%", label: "Data stays on your device" },
  { value: "Free", label: "To get started" },
];

const audiences = [
  {
    icon: BookOpen,
    title: "Classroom Teachers",
    desc: "Elementary, high school, and university instructors who need fast, reliable attendance without the paperwork.",
  },
  {
    icon: Users,
    title: "Tutors & Coaches",
    desc: "Manage multiple groups and sessions. Works in gyms, courts, studios — wherever you are.",
  },
  {
    icon: Trophy,
    title: "Workshop Trainers",
    desc: "Generate professional PDF reports for compliance and certification — no WiFi needed.",
  },
  {
    icon: Zap,
    title: "Community Leaders",
    desc: "Church groups, clubs, and volunteer organizations that need simple, shareable attendance records.",
  },
];

const steps = [
  {
    num: "01",
    title: "Create a Class",
    desc: "Add your class name and you're ready. No sign-up, no email, no permissions asked upfront.",
  },
  {
    num: "02",
    title: "Add Your Students",
    desc: "Add names with photos from your camera or gallery. Initials avatars if you skip photos — no pressure.",
  },
  {
    num: "03",
    title: "Take Attendance",
    desc: "Everyone starts as Present. Tap only the exceptions. Attendance for 30 students in under 10 seconds.",
  },
  {
    num: "04",
    title: "Export & Share",
    desc: "Generate a PDF or CSV report instantly. Share by email, WhatsApp, or save to your files.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative gradient-hero min-h-screen flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Free on Google Play & App Store
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Offline Photo{" "}
                <span className="text-violet-200">Attendance</span>{" "}
                in Seconds
              </h1>

              <p className="text-violet-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">
                Mark attendance by tapping student photos. No internet required.
                No accounts. No complexity. Just fast, visual attendance for
                teachers.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#6D28D9] font-bold px-7 py-3.5 rounded-full hover:bg-violet-50 transition-all shadow-xl shadow-black/20 text-base"
                >
                  <Download size={18} />
                  Google Play
                </a>
                <a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all text-base"
                >
                  <Download size={18} />
                  App Store
                </a>
              </div>

              <div className="flex items-center gap-6 text-sm text-violet-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-emerald-400" />
                  No sign-up required
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-emerald-400" />
                  Works fully offline
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={15} className="text-emerald-400" />
                  Free forever
                </div>
              </div>
            </div>

            {/* Right: App Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative animate-float">
                <div className="w-[260px] h-[540px] bg-[#EDE9F7] rounded-[2.5rem] shadow-2xl shadow-black/50 border-4 border-white/30 overflow-hidden relative flex flex-col">
                  {/* Phone Status Bar */}
                  <div className="flex-shrink-0 h-8 bg-[#E8E0F5] flex items-center justify-between px-5">
                    <span className="text-[#1A1040] text-[10px] font-semibold">9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-3 h-1.5 border border-[#1A1040]/60 rounded-[2px]" />
                    </div>
                  </div>

                  {/* App Header */}
                  <div className="flex-shrink-0 bg-[#EDE9F7] px-3 pt-1 pb-2">
                    <p className="text-[#6D28D9] text-[11px] font-bold mb-1.5">Take Attendance</p>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M7 1L3 5L7 9" stroke="#1A1040" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      </div>
                      <span className="text-[#1A1040] text-[10px] font-bold flex-1">5/8 Present</span>
                      <div className="bg-white border border-gray-200 rounded-full px-2 py-0.5 flex items-center gap-1">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M6 2L2 6M2 2L6 6" stroke="#1A1040" strokeWidth="1.2" strokeLinecap="round"/></svg>
                        <span className="text-[9px] text-[#1A1040] font-medium">Undo</span>
                      </div>
                      <div className="bg-[#6D28D9] rounded-full px-2.5 py-0.5">
                        <span className="text-white text-[9px] font-bold">Save</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="flex-shrink-0 bg-white mx-2 rounded-xl px-3 py-1.5 flex items-center justify-around mb-2">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[9px] text-emerald-600 font-semibold">5 Present</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="text-[9px] text-amber-500 font-semibold">2 Late</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <span className="text-[9px] text-red-500 font-semibold">0 Absent</span>
                    </div>
                  </div>

                  {/* Student Grid */}
                  <div className="flex-1 px-2 overflow-hidden">
                    <div className="grid grid-cols-4 gap-1.5">
                      {[
                        { name: "Elizabeth", initials: "EG", color: "#7C3AED", status: "present" },
                        { name: "Ali", initials: "AA", color: "#F97316", status: "present" },
                        { name: "Carla", initials: "CD", color: "#10B981", status: "present" },
                        { name: "Alex", initials: "AM", color: "#10B981", status: "present" },
                        { name: "Jessica", initials: "JH", color: "#10B981", status: "present" },
                        { name: "Ramil", initials: "RC", color: "#EC4899", status: "none" },
                        { name: "Jess", initials: "JS", color: "#EC4899", status: "late" },
                        { name: "Naomi", initials: "NC", color: "#10B981", status: "late" },
                      ].map((s, i) => (
                        <div
                          key={i}
                          className={`relative rounded-xl pt-1.5 pb-1 flex flex-col items-center ${
                            s.status === "present"
                              ? "bg-[#E6F9F0] border border-emerald-400"
                              : s.status === "late"
                              ? "bg-[#FFF4E0] border border-amber-400"
                              : "bg-white border border-gray-200"
                          }`}
                        >
                          {s.status === "present" && (
                            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                              <svg width="7" height="6" viewBox="0 0 7 6" fill="none"><path d="M1 3L2.5 4.5L6 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                          )}
                          {s.status === "late" && (
                            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full flex items-center justify-center z-10">
                              <Clock size={7} className="text-white" />
                            </div>
                          )}
                          <div className="w-8 h-8 rounded-full flex items-center justify-center mb-0.5" style={{ backgroundColor: s.color }}>
                            <span className="text-white font-bold text-[9px]">{s.initials}</span>
                          </div>
                          <span className="text-[#1A1040] text-[8px] font-medium leading-tight text-center px-0.5 truncate w-full text-center">{s.name}</span>
                          <span className={`text-[7px] font-semibold ${s.status === "present" ? "text-emerald-600" : s.status === "late" ? "text-amber-500" : "text-gray-400"}`}>
                            {s.status === "present" ? "PRESENT" : s.status === "late" ? "LATE" : "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="flex-shrink-0 bg-white border-t border-gray-100 flex items-center justify-around py-2 mt-2">
                    {[
                      { label: "Classes", active: false },
                      { label: "History", active: false },
                      { label: "Settings", active: false },
                    ].map((tab) => (
                      <div key={tab.label} className="flex flex-col items-center gap-0.5">
                        <div className={`w-4 h-4 rounded-sm ${tab.active ? "bg-[#6D28D9]" : "bg-gray-300"}`} />
                        <span className={`text-[8px] ${tab.active ? "text-[#6D28D9] font-semibold" : "text-gray-400"}`}>{tab.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -right-6 top-16 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 min-w-max">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Session Saved!</p>
                    <p className="text-[10px] text-gray-500">5/8 Present</p>
                  </div>
                </div>
                <div className="absolute -left-8 bottom-24 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-2 min-w-max">
                  <div className="text-xl">🎉</div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">100% Attendance!</p>
                    <p className="text-[10px] text-gray-500">3rd day in a row</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80L1440 80L1440 40C1200 80 720 0 0 40L0 80Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#F9F7FF] py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#6D28D9] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#6B5FA6]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              Everything a teacher needs,{" "}
              <span className="gradient-text">nothing they don&apos;t</span>
            </h2>
            <p className="text-[#6B5FA6] text-lg max-w-2xl mx-auto">
              Built for real classrooms. Simple enough for first use, powerful
              enough for daily habits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-[#DDD0F5] hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all bg-[#F9F7FF]"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}
                >
                  <f.icon size={22} />
                </div>
                <h3 className="font-bold text-[#1A1040] text-lg mb-2">{f.title}</h3>
                <p className="text-[#6B5FA6] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold hover:gap-3 transition-all"
            >
              See all features <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              Up and running in{" "}
              <span className="gradient-text">under 60 seconds</span>
            </h2>
            <p className="text-[#6B5FA6] text-lg max-w-xl mx-auto">
              No tutorials, no onboarding calls, no setup complexity. Just open and go.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-violet-200 via-violet-400 to-violet-200 z-0" />

            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border-2 border-[#6D28D9] flex items-center justify-center mx-auto mb-4 shadow-md shadow-violet-100">
                  <span className="text-[#6D28D9] font-black text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-[#1A1040] text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B5FA6] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              Built for anyone who{" "}
              <span className="gradient-text">takes attendance</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex gap-5 p-6 rounded-2xl border border-[#DDD0F5] bg-[#F9F7FF] hover:border-[#6D28D9] transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-violet-100 text-[#6D28D9] flex items-center justify-center">
                  <a.icon size={22} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A1040] text-lg mb-1">{a.title}</h3>
                  <p className="text-[#6B5FA6] text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={22} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
          <blockquote className="text-2xl sm:text-3xl font-semibold text-[#1A1040] leading-relaxed mb-6">
            &ldquo;I used to spend 5 minutes taking attendance every morning.
            With ClassRoll, it takes me under 30 seconds. My students love
            seeing their photos on the grid.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6D28D9] flex items-center justify-center text-white font-bold text-sm">
              MR
            </div>
            <div className="text-left">
              <p className="font-semibold text-[#1A1040] text-sm">Maria Reyes</p>
              <p className="text-[#6B5FA6] text-xs">Grade 2 Teacher, Manila</p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold hover:gap-3 transition-all"
            >
              Read more stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="gradient-hero py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
              <Image
                src="/icon.png"
                alt="ClassRoll"
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to transform your attendance routine?
          </h2>
          <p className="text-violet-200 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of teachers who&apos;ve made attendance the easiest
            part of their day. Free, offline, instant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6D28D9] font-bold px-8 py-4 rounded-full hover:bg-violet-50 transition-all shadow-xl text-base"
            >
              <Download size={18} />
              Download for Android
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/25 transition-all text-base"
            >
              <Download size={18} />
              Download for iPhone
            </a>
          </div>
          <p className="text-violet-300 text-sm mt-6">
            No account needed · Works offline · Free to use
          </p>
        </div>
      </section>
    </>
  );
}
