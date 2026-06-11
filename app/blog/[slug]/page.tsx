import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { notFound } from "next/navigation";

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
      "Traditional roll calls are slow, error-prone, and feel like a chore. Photo-based attendance transforms the experience — here's why thousands of teachers are switching.",
    category: "Teaching Tips",
    date: "June 5, 2026",
    readTime: "5 min read",
    emoji: "📸",
    content: `
Traditional roll call is one of the most universally disliked parts of a teacher's day. You call out a name, wait for a response, scan the room, mark a box — and repeat 30 times. By the time you're done, 5 minutes have passed and the class hasn't even started.

## The Problem with Name-Based Roll Call

When you call names, you're working from a list — an abstraction of your students. You're not looking at them; you're looking at paper (or a screen). This creates a few persistent problems:

- **Errors are invisible.** If a student answers for an absent friend, you won't catch it unless you already know their face well.
- **It takes too long.** For a class of 30, even a brisk roll call burns 4–6 minutes.
- **New students get lost.** At the start of a semester, you barely know who's who.

## Why Photos Change Everything

With a photo grid, you see your entire class at a glance. Every student is a face, not a name on a list. You mark exceptions — absences, lates — instead of confirming presence one by one.

The cognitive shift is significant: you're working visually, the way your brain naturally recognizes people. The result is attendance in under 30 seconds for a class of 30.

## What Teachers Are Saying

Teachers who have switched to photo-based attendance consistently report three things:

1. **It's dramatically faster.** Most finish in under a minute.
2. **Accuracy improves.** Seeing faces makes it harder to overlook a missing student.
3. **It feels less disruptive.** Students don't have to respond — the lesson can start immediately.

## Getting Started

ClassRoll was built around this exact idea. Add your class, snap or import student photos, and you're ready. No internet, no account, no configuration. Just open and take attendance.

If you haven't tried photo-based attendance yet, give it one week. The difference is immediate.
    `.trim(),
  },
  "classroll-v1-1-launch": {
    title: "ClassRoll v1.1 is Here: Attendance Streaks & Certificates",
    excerpt:
      "We're excited to launch ClassRoll v1.1, featuring attendance streak tracking, perfect attendance certificates (PDF), and a completely redesigned history calendar.",
    category: "Product Update",
    date: "May 20, 2026",
    readTime: "3 min read",
    emoji: "🎉",
    content: `
We've been listening to teacher feedback since ClassRoll launched, and today we're shipping v1.1 — our biggest update yet.

## What's New

### Attendance Streak Tracking

ClassRoll now tracks consecutive attendance days for each student. You'll see a streak counter on the student profile, and students can see their streak on the session summary screen. It's a small motivational nudge that teachers have told us makes a real difference.

### Perfect Attendance Certificates (PDF)

With one tap, you can generate a printable PDF certificate for any student with a perfect attendance streak. Share it via WhatsApp, email it to parents, or print it and pin it to the classroom wall. It takes seconds.

### Redesigned History Calendar

The history view now shows a full calendar with colour-coded days: green for sessions where everyone was present, amber for days with absences, and grey for days with no session. It's much easier to spot patterns and catch students who are regularly missing.

## Bug Fixes

- Fixed an issue where session notes weren't saved when the app was backgrounded
- Corrected date formatting for locales that use DD/MM/YYYY
- Improved performance for classes with more than 60 students

## How to Update

ClassRoll v1.1 is a free update available now on Google Play and the App Store. If you have auto-updates enabled, you may already have it.

Thank you to everyone who sent feedback. Keep it coming — we read every message.
    `.trim(),
  },
  "offline-first-why-it-matters": {
    title: "Offline-First Apps: Why Your Classroom Tools Should Work Without Internet",
    excerpt:
      "School WiFi is unreliable. Mobile data eats into your plan. Here's why offline-first design isn't a nice-to-have — it's a requirement for classroom tools.",
    category: "Education Tech",
    date: "May 10, 2026",
    readTime: "6 min read",
    emoji: "📵",
    content: `
Ask any teacher about school WiFi and you'll hear the same story: it's slow, it drops, it's blocked during exams, it's simply not there in the gym or on field trips.

Despite this, most classroom software still requires a live internet connection to function. Attendance apps, gradebooks, seating tools — they all call home. When the connection drops, so does your workflow.

## Why Connectivity Is a Bad Assumption

Schools are notoriously under-resourced when it comes to networking infrastructure. A 2024 survey found that over 40% of teachers in public schools report unreliable internet access during school hours. Private schools aren't immune — many have strict firewall policies that block cloud services.

Mobile data is a workaround, but it comes at a cost. Data plans in many countries are metered, and teachers shouldn't have to burn personal data to do their job.

## What Offline-First Actually Means

An offline-first app is designed to work without a connection as the default, not the fallback. Data is stored locally on the device. Sync happens when a connection is available — but the app never blocks on it.

This is different from "works offline sometimes." True offline-first means:

- You can add a class, add students, take attendance, and export a report without ever touching WiFi.
- Your data is yours, stored on your device, not locked in a server you can't access.
- The app opens in milliseconds because it's reading local data, not waiting on a network response.

## The Trade-Off (and Why It's Worth It)

Offline-first apps are harder to build. Sync logic is complex. Conflict resolution when data changes on multiple devices is a genuinely hard problem.

But for classroom tools, the trade-off is clearly worth it. Teachers need reliability. The bell rings whether the WiFi is working or not.

## ClassRoll's Approach

ClassRoll stores everything on your device. Photos, rosters, session history, reports — all local. There's no account, no cloud sync, no server to go down. When you need to share data, you export it as a file and send it yourself.

It's a deliberate choice, and teachers tell us it's the thing they appreciate most.
    `.trim(),
  },
  "seating-arrangement-tips": {
    title: "5 Seating Arrangement Strategies That Actually Improve Classroom Management",
    excerpt:
      "Where students sit has a measurable impact on engagement, behavior, and learning outcomes. ClassRoll's seating builder makes it easy to try all five.",
    category: "Teaching Tips",
    date: "April 28, 2026",
    readTime: "7 min read",
    emoji: "🪑",
    content: `
Seating arrangements are one of the most underrated tools in classroom management. The research is clear: where students sit influences how much they participate, how well they behave, and how much they learn.

Here are five strategies worth trying, and how ClassRoll's seating builder makes switching between them effortless.

## 1. Traditional Rows

The classic layout — rows facing the front — works best for direct instruction and independent work. Students are less likely to chat, and the teacher has clear sight lines to everyone.

**Best for:** lectures, tests, individual assignments.

**Tip:** Put students who need more support in the front-centre rows, not front-left or front-right where they're easy to overlook.

## 2. Pairs (Partner Seating)

Arranging desks in pairs is the most flexible layout. It supports both independent work (students face forward) and peer collaboration (students turn to their partner).

**Best for:** mixed instruction days where you alternate between teaching and pair activities.

**Tip:** Rotate partners every 4–6 weeks. New partnerships prevent social cliques from forming.

## 3. Small Groups (Clusters of 4)

Clusters of four are ideal for collaborative learning. Students face each other, which naturally encourages discussion. The downside is that distraction is also easier — group arrangements work best when students know the norms.

**Best for:** project-based learning, discussion-heavy subjects.

**Tip:** Assign roles within groups (facilitator, recorder, reporter) to keep everyone engaged.

## 4. U-Shape (Horseshoe)

A U-shaped arrangement puts all students facing the centre, which is ideal for class-wide discussions. The teacher can move freely inside the U.

**Best for:** seminars, debate-style lessons, Socratic discussion.

**Tip:** This layout uses more floor space. Works best with smaller classes (under 25).

## 5. Flexible Zones

Divide the room into two or three zones — one for direct instruction (rows), one for group work (clusters), and one for independent reading or quiet work. Students rotate between zones during the class.

**Best for:** differentiated instruction, primary and elementary levels.

**Tip:** Label each zone clearly. Students should be able to transition in under 60 seconds.

## Using ClassRoll's Seating Builder

ClassRoll lets you save multiple seating layouts per class and switch between them with a tap. You can drag and drop students into any arrangement and see their photos in position — so you always know who's sitting where, even with a new layout.

Experiment with all five strategies. The best arrangement depends on your subject, your students, and what you're doing that day. Having all your layouts saved makes it easy to switch without starting from scratch.
    `.trim(),
  },
  "backup-and-restore-guide": {
    title: "How to Back Up Your ClassRoll Data and Never Lose a Record",
    excerpt:
      "Teachers sometimes change phones or reinstall apps. Here's the complete guide to backing up your ClassRoll data and restoring it on any device.",
    category: "How-To Guide",
    date: "April 15, 2026",
    readTime: "4 min read",
    emoji: "💾",
    content: `
Losing your student roster and attendance history is a genuine nightmare. A phone upgrade, an accidental app deletion, a factory reset — any of these can wipe months of records if you haven't backed up.

ClassRoll's backup system is designed to be simple and reliable. Here's everything you need to know.

## How Backup Works

ClassRoll stores all your data locally on your device — rosters, photos, session history, and settings. The backup feature packages everything into a single .classroll file that you can save anywhere: Google Drive, iCloud, email, WhatsApp, a USB drive.

No cloud account required. No subscription. The backup file is yours.

## How to Create a Backup

1. Open ClassRoll and go to **Settings**.
2. Tap **Backup & Restore**.
3. Tap **Create Backup**.
4. Choose where to save the file — we recommend Google Drive or iCloud so it's automatically off-device.

The backup includes everything: all classes, all student photos, all session history. A full backup for a teacher with 5 classes and 150 students is typically under 50 MB.

**Recommended frequency:** Back up at the end of each term, and before any major phone change.

## How to Restore from a Backup

1. Install ClassRoll on the new (or reinstalled) device.
2. Open the app and go to **Settings → Backup & Restore**.
3. Tap **Restore from Backup**.
4. Locate your .classroll file.
5. Confirm the restore.

The restore process takes about 30 seconds. All your classes, students, photos, and history will be exactly as you left them.

## Tips for a Bulletproof Backup Strategy

- **Save to cloud storage, not just your phone.** A backup file on the same phone that you're trying to recover from isn't useful.
- **Name your backup files with the date.** "classroll-backup-2026-04-15.classroll" is easier to manage than just "backup.classroll".
- **Test your backup.** Once a term, try restoring on a second device (or the same device after a reinstall) to confirm the backup is valid.

## What Isn't Included in the Backup

The backup does not include app preferences like display theme or font size — those reset to default on a fresh install. All your class data is fully included.

If you run into any issues with backup or restore, contact us at support@nexusappworks.com and we'll help you recover your data.
    `.trim(),
  },
  "attendance-certificates-guide": {
    title: "Perfect Attendance Certificates: A Simple Way to Boost Motivation",
    excerpt:
      "Recognition matters. A printable certificate shared with parents or pinned on a classroom wall can be a powerful motivator. ClassRoll makes generating them a one-tap job.",
    category: "Teaching Tips",
    date: "March 30, 2026",
    readTime: "4 min read",
    emoji: "🏆",
    content: `
Recognition is one of the most powerful tools a teacher has. A certificate, a shoutout, a note home — small gestures have an outsized effect on student motivation, especially for younger learners.

Perfect attendance certificates are a classic example. They cost almost nothing to produce and give students a tangible symbol of a real achievement.

## Why Attendance Recognition Works

Research on student motivation consistently shows that recognition for effort and consistency outperforms recognition for ability. Showing up every day — through illness, bad weather, difficult weeks — is an act of effort. Certificates acknowledge that.

Parents love them too. A certificate that comes home signals that the teacher is paying attention, that attendance matters, and that their child is being seen.

## The Problem: They Take Forever to Make

The traditional process is painful. Export your attendance spreadsheet, sort by perfect attendance, open a Word template, manually type each student's name, print, sign, cut. Do this for 5 classes and it's an afternoon's work.

Most teachers simply don't bother, which is a shame.

## One-Tap Certificates in ClassRoll

ClassRoll v1.1 introduced automatic attendance streak tracking and one-tap PDF certificates. Here's how it works:

1. ClassRoll automatically tracks consecutive present days for each student.
2. When a student reaches a streak milestone (configurable: 5 days, 10 days, full term), their profile shows a certificate badge.
3. Tap the badge to generate a professional PDF certificate with the student's name and streak count.
4. Share it directly from the app via WhatsApp, email, or print.

The whole process takes about 10 seconds per student.

## Ideas for Using Certificates

- **End-of-term ceremony.** Print certificates for all students who achieved perfect attendance that term.
- **Monthly milestones.** Generate a certificate for anyone who hit a 20-day streak.
- **Send to parents digitally.** WhatsApp a certificate to a parent when their child hits 10 consecutive days. It takes 30 seconds and makes a lasting impression.
- **Classroom display.** Print a small certificate and add it to a "Wall of Fame" in the classroom.

## Customisation

Certificates include the student's name, streak length, and date. The ClassRoll logo appears in the corner. Future versions will support custom school logos — if that's important to you, let us know at support@nexusappworks.com.

Recognition takes almost no time when the tools are right. Give it a try.
    `.trim(),
  },
};

const categoryColors: Record<string, string> = {
  "Teaching Tips": "bg-violet-100 text-violet-700",
  "Product Update": "bg-emerald-100 text-emerald-700",
  "Education Tech": "bg-blue-100 text-blue-700",
  "How-To Guide": "bg-amber-100 text-amber-700",
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
  if (!post) return {};
  return {
    title: post.title,
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
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-violet-200 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                categoryColors[post.category] ?? "bg-white/20 text-white"
              }`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-violet-200 text-xs">
              <Calendar size={12} /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-violet-200 text-xs">
              <Clock size={12} /> {post.readTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-violet-100 text-lg leading-relaxed">{post.excerpt}</p>
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
          <div className="bg-white rounded-3xl border border-[#DDD0F5] p-8 sm:p-12">
            <div className="flex justify-center mb-10">
              <span className="text-7xl">{post.emoji}</span>
            </div>
            <div className="prose prose-violet max-w-none">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-[#1A1040] mt-10 mb-4 first:mt-0"
                    >
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("### ")) {
                  return (
                    <h3
                      key={i}
                      className="text-lg font-bold text-[#1A1040] mt-6 mb-2"
                    >
                      {block.replace("### ", "")}
                    </h3>
                  );
                }
                if (block.startsWith("- ") || block.includes("\n- ")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="list-disc list-inside space-y-2 my-4 text-[#6B5FA6]">
                      {items.map((item, j) => {
                        const text = item.replace("- ", "");
                        const parts = text.split(/\*\*(.*?)\*\*/g);
                        return (
                          <li key={j}>
                            {parts.map((p, k) =>
                              k % 2 === 1 ? (
                                <strong key={k} className="text-[#1A1040]">
                                  {p}
                                </strong>
                              ) : (
                                p
                              )
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
                if (/^\d+\./.test(block) || block.includes("\n1.")) {
                  const items = block.split("\n").filter((l) => /^\d+\./.test(l));
                  if (items.length > 0) {
                    return (
                      <ol key={i} className="list-decimal list-inside space-y-2 my-4 text-[#6B5FA6]">
                        {items.map((item, j) => {
                          const text = item.replace(/^\d+\.\s*/, "");
                          const parts = text.split(/\*\*(.*?)\*\*/g);
                          return (
                            <li key={j}>
                              {parts.map((p, k) =>
                                k % 2 === 1 ? (
                                  <strong key={k} className="text-[#1A1040]">
                                    {p}
                                  </strong>
                                ) : (
                                  p
                                )
                              )}
                            </li>
                          );
                        })}
                      </ol>
                    );
                  }
                }
                if (block.startsWith("**Best for:**") || block.startsWith("**Tip:**") || block.startsWith("**Recommended")) {
                  const parts = block.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i} className="text-[#6B5FA6] leading-relaxed my-4 pl-4 border-l-2 border-violet-200">
                      {parts.map((p, k) =>
                        k % 2 === 1 ? (
                          <strong key={k} className="text-[#1A1040]">
                            {p}
                          </strong>
                        ) : (
                          p
                        )
                      )}
                    </p>
                  );
                }
                const parts = block.split(/\*\*(.*?)\*\*/g);
                return (
                  <p key={i} className="text-[#6B5FA6] leading-relaxed my-4">
                    {parts.map((p, k) =>
                      k % 2 === 1 ? (
                        <strong key={k} className="text-[#1A1040]">
                          {p}
                        </strong>
                      ) : (
                        p
                      )
                    )}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6D28D9] text-white font-semibold rounded-full hover:bg-[#5B21B6] transition-colors shadow-md shadow-violet-200"
            >
              <ArrowLeft size={14} /> Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
