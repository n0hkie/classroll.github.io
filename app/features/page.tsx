import type { Metadata } from "next";
import Link from "next/link";
import {
  Camera,
  WifiOff,
  LayoutGrid,
  FileText,
  Users,
  Shield,
  Clock,
  Download,
  Bell,
  BarChart2,
  RefreshCw,
  CheckCircle,
  Undo,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features – ClassRoll",
  description:
    "Explore every feature in ClassRoll: photo attendance, seating builder, PDF/CSV export, backup & restore, and more.",
};

const coreFeatures = [
  {
    icon: Camera,
    title: "Photo Grid Attendance",
    desc: "Your entire class displayed as photo tiles. Everyone starts as Present — tap only the exceptions. Mark absent or late in one tap, reset in another.",
    points: [
      "Attendance by exception model — fastest possible workflow",
      "Large 80–96dp tiles — easy to tap, easy to recognize",
      "Color-coded status: green (present), amber (late), red (absent)",
      "Long-press any tile to manually set status",
    ],
    badge: "Core Feature",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: WifiOff,
    title: "100% Offline",
    desc: "ClassRoll stores everything locally on your device using SQLite. No internet required, no cloud sync, no data sent anywhere.",
    points: [
      "Works in any classroom, gym, or field — no WiFi needed",
      "SQLite local database — instant reads and writes",
      "Student photos stored on device only",
      "No account, no login, no email required",
    ],
    badge: "Privacy First",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: LayoutGrid,
    title: "Drag & Drop Seating Builder",
    desc: "Arrange your class to match your real classroom. Drag photo tiles into any seat position. Save multiple named layouts per class.",
    points: [
      "Intuitive drag-and-drop with smooth animations",
      "Multiple saved layouts per class (main, exam, substitute)",
      "Optional grid snapping for clean arrangements",
      "Perfect for exam seating and substitute teacher handoffs",
    ],
    badge: "Unique Feature",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: FileText,
    title: "PDF & CSV Export",
    desc: "Generate professional attendance reports at any time. Share instantly via email, WhatsApp, or save to files.",
    points: [
      "PDF with class name, date, student list, and summary stats",
      "CSV compatible with Excel and Google Sheets",
      "1 free export per day — watch an ad for more",
      "ClassRoll watermark on free exports (removed in Pro)",
    ],
    badge: "Export",
    color: "from-amber-500 to-orange-600",
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Multiple Classes",
    desc: "Create and manage multiple classes — each with their own roster, history, and seating.",
  },
  {
    icon: Bell,
    title: "Class Reminders",
    desc: "Weekly push notifications remind you before each class. Configurable days, time, and lead offset.",
  },
  {
    icon: Shield,
    title: "Backup & Restore",
    desc: "Export all data as a .classroll file. Restore on a new device or after reinstalling — nothing lost.",
  },
  {
    icon: RefreshCw,
    title: "CSV Roster Import",
    desc: "Import student names from a CSV file. Skips duplicates, shows a count. Works with any spreadsheet.",
  },
  {
    icon: Undo,
    title: "Undo Last Action",
    desc: "Made a mistake? Tap Undo to reverse the last tap action. Teachers move fast — we account for that.",
  },
  {
    icon: Clock,
    title: "Attendance History",
    desc: "Full calendar view of past sessions. Tap any date to see details. Track patterns over time.",
  },
  {
    icon: BarChart2,
    title: "Attendance Streaks",
    desc: "Highlight students with perfect attendance streaks. A motivational hook for teachers and students alike.",
  },
  {
    icon: Trophy,
    title: "100% Celebration",
    desc: "When every student is present, a full-screen confetti animation fires. A tiny delight worth sharing.",
  },
  {
    icon: Download,
    title: "Bulk Add Students",
    desc: "Enter multiple names at once — one per line. Duplicate detection included. Fastest roster setup.",
  },
  {
    icon: Sparkles,
    title: "Daily Motivational Quotes",
    desc: "A fresh quote appears once per day when you open the app. Fetched from a live Google Sheet, cached offline.",
  },
  {
    icon: CheckCircle,
    title: "Initials Avatars",
    desc: "Students without photos get a colorful initials avatar — deterministic color per name, always readable.",
  },
  {
    icon: Camera,
    title: "In-app Photo Capture",
    desc: "Take or choose a student photo right from the add/edit screen. Photos are compressed and stored locally.",
  },
];

const comparison = [
  { feature: "Photo grid attendance", classroll: true, classdojo: false, attendance: false },
  { feature: "100% offline", classroll: true, classdojo: false, attendance: "partial" },
  { feature: "No login required", classroll: true, classdojo: false, attendance: true },
  { feature: "Seating builder", classroll: true, classdojo: false, attendance: false },
  { feature: "PDF + CSV export", classroll: true, classdojo: "partial", attendance: true },
  { feature: "Attendance certificates", classroll: true, classdojo: false, attendance: false },
  { feature: "Free tier", classroll: true, classdojo: true, attendance: true },
  { feature: "Data privacy (local only)", classroll: true, classdojo: false, attendance: false },
];

function CompCell({ val }: { val: boolean | string }) {
  if (val === true) return <CheckCircle size={18} className="text-emerald-500 mx-auto" />;
  if (val === "partial") return <span className="text-amber-500 text-sm font-medium">Partial</span>;
  return <span className="text-[#C4B5E8] text-lg">—</span>;
}

export default function FeaturesPage() {
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
            Features
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything you need,{" "}
            <span className="text-violet-200">nothing you don&apos;t</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            ClassRoll is focused on doing one thing exceptionally well: making
            attendance fast, visual, and effortless for teachers.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Core Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              The heart of ClassRoll
            </h2>
          </div>

          <div className="space-y-8">
            {coreFeatures.map((f, i) => (
              <div
                key={f.title}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-violet-100 text-[#6D28D9] text-xs font-bold rounded-full">
                      {f.badge}
                    </span>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4`}>
                    <f.icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1A1040] mb-3">{f.title}</h3>
                  <p className="text-[#6B5FA6] leading-relaxed mb-5">{f.desc}</p>
                  <ul className="space-y-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-[#1A1040]">
                        <CheckCircle size={15} className="text-[#6D28D9] mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className={`rounded-3xl bg-gradient-to-br ${f.color} p-8 flex items-center justify-center min-h-48`}>
                    <f.icon size={80} className="text-white opacity-30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              More Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              Every detail, thoughtfully built
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalFeatures.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-xl border border-[#DDD0F5] bg-[#F9F7FF] hover:border-[#6D28D9] hover:shadow-md hover:shadow-violet-100 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 text-[#6D28D9] flex items-center justify-center mb-3">
                  <f.icon size={18} />
                </div>
                <h3 className="font-bold text-[#1A1040] mb-1">{f.title}</h3>
                <p className="text-[#6B5FA6] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#F9F7FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-violet-100 text-[#6D28D9] text-sm font-semibold rounded-full mb-4">
              Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1A1040] mb-4">
              How ClassRoll compares
            </h2>
            <p className="text-[#6B5FA6] text-lg max-w-xl mx-auto">
              No other app combines offline operation + photo attendance + seating builder in one tool.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#DDD0F5] shadow-md">
            <table className="w-full bg-white">
              <thead>
                <tr className="border-b border-[#DDD0F5]">
                  <th className="text-left p-4 text-[#6B5FA6] text-sm font-semibold">Feature</th>
                  <th className="p-4 text-[#6D28D9] font-bold text-sm bg-violet-50">ClassRoll</th>
                  <th className="p-4 text-[#6B5FA6] text-sm font-semibold">ClassDojo</th>
                  <th className="p-4 text-[#6B5FA6] text-sm font-semibold">Attendance+</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[#F0EAF8] ${
                      i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"
                    }`}
                  >
                    <td className="p-4 text-sm text-[#1A1040]">{row.feature}</td>
                    <td className="p-4 text-center bg-violet-50/50">
                      <CompCell val={row.classroll} />
                    </td>
                    <td className="p-4 text-center">
                      <CompCell val={row.classdojo} />
                    </td>
                    <td className="p-4 text-center">
                      <CompCell val={row.attendance} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to try ClassRoll?
          </h2>
          <p className="text-violet-200 text-lg mb-8">
            Free to download. No account. Works offline from the first second.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#6D28D9] font-bold px-7 py-3.5 rounded-full hover:bg-violet-50 transition-all shadow-xl"
            >
              <Download size={18} /> Google Play
            </a>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/25 transition-all"
            >
              See FAQ <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
