"use client";

import { useState } from "react";
import { Mail, MessageSquare, MapPin, Clock, Send, CheckCircle } from "lucide-react";

function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    desc: "For bug reports, feature requests, or general help.",
    value: "support@nexusappworks.com",
    action: "mailto:support@nexusappworks.com?subject=ClassRoll%20Support",
    cta: "Send Email",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: FacebookIcon,
    title: "Facebook Community",
    desc: "Join our teacher community for tips, updates, and peer support.",
    value: "facebook.com/nexusappworks",
    action: "https://facebook.com/nexusappworks",
    cta: "Join Group",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: MessageSquare,
    title: "Feature Requests",
    desc: "Have an idea to make ClassRoll better? We want to hear it.",
    value: "support@nexusappworks.com",
    action: "mailto:support@nexusappworks.com?subject=ClassRoll%20Feature%20Request",
    cta: "Send Idea",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const faqs = [
  {
    q: "How do I restore my backup?",
    a: "Go to Settings → Backup & Restore → Restore from Backup. Select your .classroll file and all your data will be restored.",
  },
  {
    q: "Why can't I export more than once per day?",
    a: "The free tier allows 1 export per day. You can watch a short rewarded ad to unlock additional exports on the same day.",
  },
  {
    q: "Is my student data safe?",
    a: "Yes. All data is stored locally on your device only. Nothing is uploaded to any server. ClassRoll works 100% offline.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const mailtoLink = `mailto:support@nexusappworks.com?subject=${encodeURIComponent(
      formState.subject || "ClassRoll Contact Form"
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

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
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            We&apos;d love to{" "}
            <span className="text-violet-200">hear from you</span>
          </h1>
          <p className="text-violet-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            ClassRoll was built for teachers, by someone who wanted to make your
            mornings easier. Your feedback shapes every update.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-white rounded-2xl p-6 border border-[#DDD0F5] hover:border-[#6D28D9] hover:shadow-lg hover:shadow-violet-100 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${method.color}`}>
                  <method.icon size={22} />
                </div>
                <h3 className="font-bold text-[#1A1040] text-lg mb-1">{method.title}</h3>
                <p className="text-[#6B5FA6] text-sm mb-3">{method.desc}</p>
                <p className="text-[#6D28D9] text-sm font-medium mb-4">{method.value}</p>
                <a
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6D28D9] hover:text-[#5B21B6] transition-colors"
                >
                  {method.cta} →
                </a>
              </div>
            ))}
          </div>

          {/* Contact Form + Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 border border-[#DDD0F5] shadow-sm">
              <h2 className="text-2xl font-bold text-[#1A1040] mb-2">Send us a message</h2>
              <p className="text-[#6B5FA6] text-sm mb-6">
                Fill out the form and your email client will open with a pre-filled message.
              </p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-500" />
                  </div>
                  <h3 className="font-bold text-[#1A1040] text-xl mb-2">Message ready!</h3>
                  <p className="text-[#6B5FA6] text-sm max-w-xs">
                    Your email client should have opened with a pre-filled message. We&apos;ll reply
                    within 1–2 business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#6D28D9] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#1A1040] mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder="Maria Santos"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD0F5] bg-[#F9F7FF] focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-violet-100 text-sm transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1A1040] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder="teacher@school.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#DDD0F5] bg-[#F9F7FF] focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-violet-100 text-sm transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1040] mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD0F5] bg-[#F9F7FF] focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-violet-100 text-sm transition-all"
                    >
                      <option value="">Select a topic...</option>
                      <option value="ClassRoll Support - Bug Report">Bug Report</option>
                      <option value="ClassRoll Feature Request">Feature Request</option>
                      <option value="ClassRoll Support - General">General Support</option>
                      <option value="ClassRoll Feedback">App Feedback</option>
                      <option value="ClassRoll - Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1A1040] mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder="Tell us about your classroom, what you're experiencing, or what you'd love to see in ClassRoll..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-[#DDD0F5] bg-[#F9F7FF] focus:outline-none focus:border-[#6D28D9] focus:ring-2 focus:ring-violet-100 text-sm transition-all resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-violet-200 disabled:opacity-60"
                  >
                    {submitting ? (
                      "Opening email..."
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-[#DDD0F5]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                    <Clock size={18} className="text-[#6D28D9]" />
                  </div>
                  <h3 className="font-bold text-[#1A1040]">Response Time</h3>
                </div>
                <p className="text-[#6B5FA6] text-sm">
                  We typically respond within 1–2 business days. For urgent
                  issues, tag us in the Facebook group for community help.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#DDD0F5]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-[#1A1040]">Developer</h3>
                </div>
                <p className="text-[#6B5FA6] text-sm">
                  NexusAppWorks — an independent developer studio building
                  productivity tools for everyday professionals.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#DDD0F5]">
                <h3 className="font-bold text-[#1A1040] mb-4">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.q}>
                      <p className="text-sm font-semibold text-[#1A1040] mb-1">{faq.q}</p>
                      <p className="text-xs text-[#6B5FA6] leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="/faq"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#6D28D9] hover:gap-2 transition-all mt-4"
                >
                  See all FAQs →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
