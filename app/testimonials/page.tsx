import type { Metadata } from "next";
import { Star, Quote, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Testimonials – ClassRoll",
  description:
    "See what teachers, tutors, and coaches are saying about ClassRoll. Real stories from educators who transformed their attendance workflow.",
};

const testimonials = [
  {
    name: "Maria Santos",
    role: "Grade 2 Teacher",
    location: "Manila, Philippines",
    initials: "MS",
    color: "#7C3AED",
    rating: 5,
    text: "I used to spend 5 minutes taking attendance every morning. With ClassRoll, it takes me under 30 seconds. My students love seeing their photos on the grid — it makes attendance feel like a fun routine rather than a chore.",
    highlight: "Under 30 seconds",
    category: "Elementary Teacher",
  },
  {
    name: "James Thornton",
    role: "High School PE Coach",
    location: "Sydney, Australia",
    initials: "JT",
    color: "#0EA5E9",
    rating: 5,
    text: "Taking attendance in a gym full of students while trying to run class is chaos. ClassRoll solved that completely. I tap the absent kids, save, and we're done. The offline mode is critical — our school's WiFi doesn't reach the gym.",
    highlight: "Works without WiFi",
    category: "Sports Coach",
  },
  {
    name: "Priya Nair",
    role: "University Lecturer",
    location: "Chennai, India",
    initials: "PN",
    color: "#EC4899",
    rating: 5,
    text: "I manage 4 different classes with 40–60 students each. ClassRoll handles all of them effortlessly. The CSV export is perfect for submitting attendance to the admin department. Honestly can't believe it's free.",
    highlight: "4 classes, 60 students each",
    category: "University Lecturer",
  },
  {
    name: "David Chen",
    role: "Piano Tutor",
    location: "Toronto, Canada",
    initials: "DC",
    color: "#10B981",
    rating: 5,
    text: "As a private tutor with multiple small groups, I needed something simple and private. ClassRoll doesn't require an account, stores nothing online, and the PDF reports are exactly what parents expect. Perfect for my workflow.",
    highlight: "No account needed",
    category: "Private Tutor",
  },
  {
    name: "Sister Angelica Reyes",
    role: "Youth Group Leader",
    location: "Cebu, Philippines",
    initials: "AR",
    color: "#F97316",
    rating: 5,
    text: "We use ClassRoll for our Sunday youth ministry. The attendance certificates are a huge hit — parents love receiving them for their children's faithful attendance. It's made tracking much more meaningful.",
    highlight: "Attendance certificates",
    category: "Community Leader",
  },
  {
    name: "Marcus Williams",
    role: "Corporate Trainer",
    location: "Lagos, Nigeria",
    initials: "MW",
    color: "#6366F1",
    rating: 5,
    text: "I run compliance training workshops that require attendance proof. ClassRoll's PDF export looks professional enough to submit to HR departments. The fact it works offline in venues with no WiFi is invaluable.",
    highlight: "Professional PDF reports",
    category: "Workshop Trainer",
  },
  {
    name: "Yuki Tanaka",
    role: "Kindergarten Teacher",
    location: "Osaka, Japan",
    initials: "YT",
    color: "#F59E0B",
    rating: 5,
    text: "The photos make such a difference with young children. I can instantly see who's missing without scanning a list of names. The confetti when everyone is present is a huge hit with my 4-year-olds — they look forward to it!",
    highlight: "Visual & fun for young learners",
    category: "Preschool Teacher",
  },
  {
    name: "Robert Okonkwo",
    role: "Basketball Coach",
    location: "Accra, Ghana",
    initials: "RO",
    color: "#14B8A6",
    rating: 5,
    text: "The seating builder doubles as a lineup builder for me. I arrange players by position and it helps me visualize team formations. ClassRoll wasn't built for sports but it adapts perfectly.",
    highlight: "Seating as lineup builder",
    category: "Sports Coach",
  },
  {
    name: "Ana García",
    role: "ESL Teacher",
    location: "Mexico City, Mexico",
    initials: "AG",
    color: "#7C3AED",
    rating: 5,
    text: "I teach adult ESL classes in the evenings after my main job. ClassRoll is the first attendance app I've used that doesn't require me to remember a password or deal with subscription reminders. It just works.",
    highlight: "Simple, no friction",
    category: "Adult Education",
  },
];

const stats = [
  { value: "4.9", label: "Average rating", sub: "App Store & Google Play" },
  { value: "30s", label: "Average attendance time", sub: "Down from 5+ minutes" },
  { value: "100%", label: "Data stays offline", sub: "No cloud uploads ever" },
  { value: "Free", label: "Always free tier", sub: "No credit card required" },
];

export default function TestimonialsPage() {
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
            Testimonials
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Loved by teachers{" "}
            <span className="text-violet-200">everywhere</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Real stories from real classrooms. Teachers, tutors, coaches, and
            organizers who transformed their attendance workflow with ClassRoll.
          </p>
          <div className="flex justify-center gap-1 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#F9F7FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-[#6D28D9] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-[#1A1040]">{stat.label}</div>
                <div className="text-xs text-[#6B5FA6] mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-8 bg-[#F9F7FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#6D28D9] to-[#4C1D95] rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden">
            <div className="absolute top-6 left-8 opacity-20">
              <Quote size={80} />
            </div>
            <div className="relative text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-xl sm:text-2xl font-semibold leading-relaxed mb-6 max-w-2xl mx-auto">
                &ldquo;{testimonials[0].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: testimonials[0].color }}
                >
                  {testimonials[0].initials}
                </div>
                <div className="text-left">
                  <p className="font-bold text-white">{testimonials[0].name}</p>
                  <p className="text-violet-300 text-sm">
                    {testimonials[0].role} · {testimonials[0].location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.slice(1).map((t) => (
              <div
                key={t.name}
                className="break-inside-avoid bg-white rounded-2xl border border-[#DDD0F5] p-6 hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1040] text-sm">{t.name}</p>
                    <p className="text-[#6B5FA6] text-xs">{t.role}</p>
                    <p className="text-[#6B5FA6] text-xs">{t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-[#1A1040] text-sm leading-relaxed mb-3 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-violet-50 text-[#6D28D9] rounded-full text-xs font-semibold">
                  <span>✦</span> {t.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1A1040] mb-4">
            Join the community of teachers saving time daily
          </h2>
          <p className="text-[#6B5FA6] text-lg mb-8">
            Download ClassRoll for free and see why teachers call it the fastest
            attendance app they&apos;ve ever used.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6D28D9] text-white font-bold px-8 py-4 rounded-full hover:bg-[#5B21B6] transition-all shadow-lg shadow-violet-200"
            >
              <Download size={18} /> Download Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
