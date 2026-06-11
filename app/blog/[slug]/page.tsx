import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";

const posts: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    emoji: string;
    content: string;
  }
> = {
  "why-photo-attendance-changes-everything": {
    title: "Why Photo Attendance Changes Everything for Teachers",
    excerpt:
      "Traditional roll calls are slow, error-prone, and feel like a chore. Photo-based attendance transforms the experience.",
    category: "Teaching Tips",
    date: "June 5, 2026",
    readTime: "5 min read",
    emoji: "📸",
    content: `Traditional attendance is broken. Calling names, scanning lists, waiting for responses — it's slow, it's error-prone, and it eats into learning time every single day.

**The Problem with Name-Based Attendance**

When you call a name from a list, several things can go wrong:
- Students answer for absent classmates
- You lose your place in the list
- New students or substitutes struggle with pronunciation
- It takes 3–7 minutes for a class of 30

That's 15–35 minutes per week, per class, on pure administration.

**The Visual Difference**

With photo-based attendance, your brain processes information differently. You're not scanning text — you're recognizing faces. Human beings are exceptionally good at face recognition. It's instantaneous and automatic.

When every student has a photo tile, you can see your whole class at once. Missing faces stand out immediately. You don't read names — you see people.

**The Exception Model**

ClassRoll takes this further with an "attendance by exception" model. Everyone starts as Present. You only tap the exceptions.

In a class of 30, if 28 students are present, you tap 2 tiles. Two taps. Done.

Compare that to 30 name calls, 30 responses, 30 check marks.

**The Numbers**

Teachers using ClassRoll report:
- 10 seconds average for a class of 30 (marking exceptions only)
- Under 30 seconds for full attendance including saving the session
- Near-zero errors compared to name-call methods

**The Side Effect: Engagement**

Students know their teacher recognizes them individually. Their photo is on the grid. They are literally visible in the classroom record. This small change has a real impact on how valued students feel.

Several teachers have told us their classes look forward to the 🎉 confetti that fires when everyone is present. It's a tiny moment of collective achievement that costs nothing.

**Conclusion**

Photo attendance isn't just faster. It's more accurate, more personal, and more engaging. If you haven't tried it yet, download ClassRoll for free and take attendance in your next class. The first session will convince you.`,
  },
  "classroll-v1-1-launch": {
    title: "ClassRoll v1.1 is Here: Attendance Streaks & Certificates",
    excerpt:
      "We're excited to launch ClassRoll v1.1, featuring attendance streak tracking and perfect attendance certificates.",
    category: "Product Update",
    date: "May 20, 2026",
    readTime: "3 min read",
    emoji: "🎉",
    content: `We're thrilled to announce ClassRoll v1.1, our biggest update since launch. Here's everything that's new.

**Attendance Streaks**

ClassRoll now tracks perfect attendance streaks for your entire class. When your class has 100% attendance multiple sessions in a row, a streak counter appears on the class card.

"Your class has had 100% attendance 5 days in a row 🔥"

Teachers have told us this creates a fun game dynamic — students remind each other to come to class.

**Perfect Attendance Certificates (PDF)**

Generate a beautiful "Certificate of Perfect Attendance" for any student with a perfect record. One tap, instant PDF, shareable via WhatsApp or email.

These have been our most-requested feature since launch. Parents love receiving them. Students love having them.

**Redesigned History Calendar**

The attendance history calendar has been completely redesigned. Session dates are now marked with colored dots (purple for regular sessions, amber for sessions with absences). Tap any date to see the full session detail.

**Bug Fixes**

- Fixed a rare crash when restoring a backup on Android 14
- Improved CSV export formatting for names with special characters
- Fixed seating builder grid snap on smaller screen sizes

**How to Update**

Update is live on both Google Play and App Store. Open your app store and search for ClassRoll, or use the direct links below.

Thank you to everyone who sent feedback via email and the Facebook community group. You shaped this update.`,
  },
  "offline-first-why-it-matters": {
    title: "Offline-First Apps: Why Your Classroom Tools Should Work Without Internet",
    excerpt:
      "School WiFi is unreliable. Here's why offline-first design isn't a nice-to-have — it's a requirement for classroom tools.",
    category: "Education Tech",
    date: "May 10, 2026",
    readTime: "6 min read",
    emoji: "📵",
    content: `Ask any teacher: has school WiFi ever let them down at the worst possible moment? The answer is almost always yes.

**The Reality of Classroom Connectivity**

School networks are under-resourced, over-subscribed, and inconsistently maintained. Mobile data eats into personal plans. Outdoor venues (gyms, fields, outdoor classrooms) often have no signal at all.

Apps that depend on internet connectivity fail at these critical moments — and those moments happen in the middle of class, when you have 30 students waiting.

**What Offline-First Means**

An offline-first app is designed so that every core feature works without any internet connection. The network is optional — a bonus, not a requirement.

For ClassRoll, this means:
- All student data lives on your device
- Attendance sessions are saved locally instantly
- PDF generation happens on-device
- History browsing works with zero connectivity

**The Privacy Bonus**

Offline-first apps have an unexpected privacy benefit: data that never leaves your device can never be leaked, hacked, or misused. No data breach can expose student information that was never uploaded to a server.

This is especially important for apps handling student names and photos. FERPA, GDPR, and similar regulations become much simpler to comply with when the data never moves.

**When Online Features Make Sense**

Offline-first doesn't mean anti-internet. ClassRoll uses the network for:
- Fetching daily motivational quotes from a Google Sheet
- Displaying non-personalized ads (cached locally between sessions)

These are optional enhancements that degrade gracefully offline. The core experience — taking attendance — works perfectly without them.

**Designing for Reliability**

When you build offline-first, you're forced to think about what the app must do, not what it could do with connectivity. This constraint leads to better, faster, more focused products.

ClassRoll takes attendance in under 10 seconds. That's only possible because every operation is local and instant. There's no API call, no loading spinner, no network timeout to work around.

**The Bottom Line**

If your classroom tool requires internet to function, it will fail you eventually. Build your workflow around apps that work offline. Your students and your sanity will thank you.`,
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} – ClassRoll Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">📋</div>
          <h1 className="text-3xl font-bold mb-2">Post not found</h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 mt-4 bg-white text-[#6D28D9] font-bold px-6 py-3 rounded-full"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    "Teaching Tips": "bg-violet-100 text-violet-700",
    "Product Update": "bg-emerald-100 text-emerald-700",
    "Education Tech": "bg-blue-100 text-blue-700",
    "How-To Guide": "bg-amber-100 text-amber-700",
  };

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl mb-6 block">{post.emoji}</span>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}
            >
              <Tag size={10} className="inline mr-1" />
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-violet-200 text-sm">
            <span className="flex items-center gap-1">
              <Calendar size={13} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={13} /> {post.readTime}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#DDD0F5] p-8 sm:p-12 shadow-sm">
            <div className="text-[#6B5FA6] text-lg leading-relaxed mb-8 font-medium border-l-4 border-[#6D28D9] pl-4">
              {post.excerpt}
            </div>
            <div className="prose prose-sm max-w-none">
              {post.content.split("\n\n").map((para, i) => {
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <h2 key={i} className="text-xl font-bold text-[#1A1040] mt-8 mb-3">
                      {para.slice(2, -2)}
                    </h2>
                  );
                }
                return (
                  <p key={i} className="text-[#1A1040] leading-relaxed mb-4 text-sm sm:text-base">
                    {para.split("**").map((part, j) =>
                      j % 2 === 0 ? (
                        <span key={j}>{part}</span>
                      ) : (
                        <strong key={j} className="font-semibold">
                          {part}
                        </strong>
                      )
                    )}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#6D28D9] font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#6D28D9] text-white font-bold rounded-full hover:bg-[#5B21B6] transition-all text-sm shadow-md"
            >
              Download ClassRoll Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
