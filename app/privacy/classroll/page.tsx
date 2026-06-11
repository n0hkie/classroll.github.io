import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ClassRoll",
  description:
    "ClassRoll Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "June 1, 2026";
  const contactEmail = "support@nexusappworks.com";

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-violet-200 text-base">Effective Date: {effectiveDate}</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 720 0 0 20L0 60Z" fill="#F9F7FF" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-[#F9F7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#DDD0F5] p-8 sm:p-12 shadow-sm">
            {/* TL;DR Box */}
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-10">
              <h2 className="font-bold text-[#6D28D9] text-lg mb-2">The Short Version</h2>
              <ul className="space-y-1.5 text-sm text-[#1A1040]">
                <li>✅ All student data is stored locally on your device only</li>
                <li>✅ We never upload student names, photos, or class data to any server</li>
                <li>✅ No account or login is required — we don&apos;t know who you are</li>
                <li>✅ Anonymous analytics (Firebase) and crash reports (Sentry) are the only data we receive</li>
                <li>✅ Non-personalized ads only — no behavioral tracking</li>
              </ul>
            </div>

            <div className="prose prose-sm max-w-none text-[#1A1040]">
              <p className="text-[#6B5FA6] mb-8 leading-relaxed">
                NexusAppWorks (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the ClassRoll mobile application (the
                &quot;Service&quot;). This page informs you of our policies regarding the collection,
                use, and disclosure of personal data when you use our Service and the choices
                you have associated with that data.
              </p>

              {[
                {
                  title: "1. Information We Do NOT Collect",
                  content: `ClassRoll is an offline-first application. The following data is stored exclusively on your device and is never transmitted to our servers or any third party:

• Student names and photos
• Class names and descriptions  
• Attendance records and session history
• Seating layouts
• Any other data you enter into the app

We have no access to this data. It lives only on your device.`,
                },
                {
                  title: "2. Information We Do Collect",
                  content: `We collect limited, non-personally-identifiable information to improve the app:

**Firebase Analytics (Google)**
We use Firebase Analytics to track anonymous usage events such as:
• App opens
• Sessions saved (count only, no content)
• Export actions (type and count, no content)
• Onboarding completion

No student names, photos, class names, or personally identifiable information are included in any analytics event. We log counts and actions only.

**Sentry (Crash Reporting)**
We use Sentry to capture crash reports and error logs. Our Sentry configuration includes a beforeSend hook that scrubs any PII from error messages before transmission. Crash reports may include device type, OS version, and app version.

**Google AdMob**
ClassRoll displays non-personalized ads (npa=1 on all ad requests). We do not use behavioral or interest-based advertising. Ads are shown only on screens that do not display student photos or names.`,
                },
                {
                  title: "3. Camera and Photo Access",
                  content: `ClassRoll may request access to your device camera and photo library for the purpose of capturing and selecting student photos. These photos are:

• Stored locally on your device only
• Never uploaded to any server
• Never transmitted to any third party
• Never used for marketing, advertising, or analytics purposes

This design complies with Apple App Store guideline 5.1.2(vi) which prohibits the use of Camera API data for advertising purposes.`,
                },
                {
                  title: "4. Children's Privacy",
                  content: `ClassRoll is designed for use by teachers (adults), not by children. The user of the app is always the teacher or instructor — an adult.

Student data (names and photos) entered by the teacher is stored locally on the teacher's device and is never transmitted. We do not knowingly collect personally identifiable information from children.

ClassRoll is not intended for direct use by children under 13 (US COPPA) or under 16 (GDPR). If you are a teacher and believe your use involves student data protected by COPPA, FERPA, GDPR, or similar regulations, please note that all student data remains on your device and is never shared with us.`,
                },
                {
                  title: "5. Advertising",
                  content: `ClassRoll uses Google AdMob to display advertisements. All ads are configured as:

• Non-personalized (npa=1 on every ad request)
• G-rated content only (MaxAdContentRating.G)
• Not child-directed (tagForChildDirectedTreatment: false)

Ads are displayed only on screens that do not show student photos or names (home screen, settings, feedback, and session summary screens). Ads are never shown on attendance grids, seating arrangements, student profiles, or any screen displaying roster data.`,
                },
                {
                  title: "6. Third-Party Services",
                  content: `We use the following third-party services. Each has its own Privacy Policy:

• **Google Firebase Analytics** — analytics.google.com/analytics/web
• **Sentry** — sentry.io/privacy
• **Google AdMob** — policies.google.com/privacy

These services receive anonymous usage and crash data only. No student PII is transmitted to any of these services.`,
                },
                {
                  title: "7. Data Retention",
                  content: `All app data (classes, students, attendance records) is retained locally on your device for as long as you keep the app installed. You can delete all data at any time via Settings → Danger Zone → Delete All Data.

Anonymous analytics events retained by Firebase are governed by Google's data retention policies (default: 14 months). Sentry crash reports are retained for 90 days.`,
                },
                {
                  title: "8. Your Rights",
                  content: `Since ClassRoll does not collect personally identifiable information, there is no personal profile to access, correct, or delete from our servers.

For anonymous analytics data held by Firebase, you may request deletion by contacting us. We will forward your request to Google in accordance with their DPA.

For EU residents: you have the right to object to processing of anonymous analytics data. Contact us at ${contactEmail}.`,
                },
                {
                  title: "9. Security",
                  content: `We implement commercially reasonable security measures appropriate to the nature of the data processed. Since student data never leaves your device, the primary security responsibility for that data lies with your device's operating system security (device lock, biometric authentication).

We recommend enabling device lock/biometric on any device running ClassRoll.`,
                },
                {
                  title: "10. Changes to This Privacy Policy",
                  content: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this page. Significant changes may also be communicated through an in-app notice.

We recommend reviewing this page periodically for any changes.`,
                },
                {
                  title: "11. Contact Us",
                  content: `If you have any questions about this Privacy Policy, please contact us:

**NexusAppWorks**
Email: ${contactEmail}
Website: https://nexusappworks.com

For privacy-specific requests:
Email subject: "ClassRoll Privacy Request"`,
                },
              ].map((section) => (
                <div key={section.title} className="mb-8">
                  <h2 className="text-xl font-bold text-[#1A1040] mb-3">{section.title}</h2>
                  <div className="text-[#6B5FA6] text-sm leading-relaxed whitespace-pre-line">
                    {section.content.split("**").map((part, i) =>
                      i % 2 === 0 ? (
                        <span key={i}>{part}</span>
                      ) : (
                        <strong key={i} className="text-[#1A1040]">
                          {part}
                        </strong>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
