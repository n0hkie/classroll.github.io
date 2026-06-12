import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – ClassRoll",
  description:
    "ClassRoll Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "June 12, 2026";
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
                <li>✅ Anonymous analytics (Firebase), crash reports (Sentry), and non-personalized ad serving data (AdMob) are the only data we or our partners receive</li>
                <li>✅ Non-personalized ads only — no behavioral or interest-based tracking</li>
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

We have no access to this data. It lives only on your device. When you uninstall the app, all locally stored data is permanently deleted by the operating system.`,
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

We process this data under our legitimate interest in improving app performance and user experience (GDPR Article 6(1)(f)).

**Sentry (Crash Reporting)**
We use Sentry to capture crash reports and error logs. Our Sentry configuration includes a beforeSend hook that scrubs any PII from error messages before transmission. Crash reports may include device type, OS version, and app version.

**Google AdMob**
ClassRoll displays non-personalized ads (npa=1 on all ad requests). We do not use behavioral or interest-based advertising. Ads are shown only on screens that do not display student photos or names. See Section 5 for full details on data collected by AdMob.`,
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

Ads are displayed only on screens that do not show student photos or names (home screen, settings, feedback, and session summary screens). Ads are never shown on attendance grids, seating arrangements, student profiles, or any screen displaying roster data.

**Data Collected by the Google Mobile Ads SDK**
Even with non-personalized ads enabled, the Google Mobile Ads SDK automatically collects and transmits the following data to Google for the purposes listed below:

• Android Advertising ID (GAID) / iOS Identifier for Advertisers (IDFA) — frequency capping, aggregated reporting
• App Set ID — analytics and fraud prevention
• IP address — approximate location estimation, fraud prevention
• User interactions (ad taps, video views) — ad reporting
• Device identifiers — fraud prevention
• App diagnostics data — performance monitoring

This data is collected and processed by Google in accordance with Google's Privacy Policy (policies.google.com/privacy). ClassRoll does not receive, store, or have access to this data.

**iOS App Tracking Transparency (iOS 14+)**
On iOS 14 and later, ClassRoll displays an App Tracking Transparency (ATT) permission dialog before loading advertisements, as required by Apple. You may decline tracking; non-personalized ads will still be shown. The permission prompt reads: "This helps us show ads and supports free access to ClassRoll."

If you decline, the iOS Identifier for Advertisers (IDFA) will not be used.

**EU Consent (GDPR)**
For users in the European Economic Area (EEA) and the United Kingdom, ClassRoll will present a consent dialog before displaying ads, as required by GDPR and ePrivacy regulations. You may update your consent preferences at any time in the app's Settings screen.`,
                },
                {
                  title: "6. Third-Party Services",
                  content: `We use the following third-party services. Each has its own Privacy Policy and, where applicable, a Data Processing Agreement (DPA) with us:

• **Google Firebase Analytics** — analytics.google.com/analytics/web
• **Sentry** — sentry.io/privacy
• **Google AdMob** — policies.google.com/privacy

These services receive anonymous usage, crash, and/or ad-serving data only. No student PII is transmitted to any of these services.`,
                },
                {
                  title: "7. Data Retention",
                  content: `All app data (classes, students, attendance records) is retained locally on your device for as long as you keep the app installed. You can delete all data at any time via Settings → Danger Zone → Delete All Data. When you uninstall ClassRoll, all locally stored data is permanently deleted by your device's operating system.

Anonymous analytics events retained by Firebase are governed by Google's data retention policies (default: 14 months). Sentry crash reports are retained for 90 days.`,
                },
                {
                  title: "8. Your Rights (GDPR — EEA and UK Residents)",
                  content: `If you are located in the European Economic Area (EEA) or the United Kingdom, you have the following rights under the General Data Protection Regulation (GDPR) and equivalent UK legislation:

• **Right of access** — You may request a copy of the personal data we hold about you.
• **Right to rectification** — You may request that we correct inaccurate personal data.
• **Right to erasure** — You may request deletion of your personal data where there is no compelling reason for continued processing.
• **Right to restriction of processing** — You may request that we restrict processing of your personal data in certain circumstances.
• **Right to data portability** — You may request that we provide your personal data in a structured, machine-readable format.
• **Right to object** — You may object to our processing of anonymous analytics data based on legitimate interests.
• **Right to lodge a complaint** — You have the right to lodge a complaint with your local data protection supervisory authority (e.g., the ICO in the UK, or your national DPA in the EEA).

Since ClassRoll does not collect personally identifiable student data on our servers, the practical scope of many of these rights is limited to the anonymous analytics data held by Firebase and crash data held by Sentry.

To exercise any of these rights, please contact us at ${contactEmail} with the subject line "ClassRoll GDPR Request". We will respond within 30 days and, where required, forward requests to Google or Sentry under their respective DPAs.

**Legal Basis for Processing**
We process anonymous analytics data (Firebase, Sentry) under our legitimate interest in improving app performance and user experience (GDPR Article 6(1)(f)). For ad serving in the EEA and UK, we rely on your consent obtained via the in-app consent dialog (GDPR Article 6(1)(a)).`,
                },
                {
                  title: "9. California Privacy Rights (CCPA/CPRA)",
                  content: `If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), including:

• **Right to know** — You may request information about the categories and specific pieces of personal information we have collected about you.
• **Right to delete** — You may request deletion of personal information we have collected.
• **Right to opt out of sale or sharing** — You may direct us not to sell or share your personal information.
• **Right to non-discrimination** — We will not discriminate against you for exercising your CCPA rights.

**Regarding AdMob:** The Google Mobile Ads SDK may share device identifiers and ad interaction data with Google's advertising network. This may be considered a "sale" or "sharing" of personal information under CCPA. To opt out:

• **iOS:** Decline the App Tracking Transparency prompt, or go to Settings → Privacy & Security → Tracking and disable tracking for ClassRoll.
• **Android:** Go to Settings → Google → Ads → Delete advertising ID, or disable ad personalization in your device's Google account settings.
• **Both platforms:** Contact us at ${contactEmail} with the subject line "ClassRoll CCPA Opt-Out Request".

ClassRoll does not sell your personal information for monetary consideration.`,
                },
                {
                  title: "10. International Data Transfers",
                  content: `ClassRoll uses third-party services whose servers are primarily located in the United States. If you are located in the EEA, UK, or another jurisdiction with data transfer restrictions, please note:

• **Firebase (Google):** Anonymous analytics and crash data may be transferred to and processed in the United States under Google's Data Processing Addendum (DPA), which incorporates EU Standard Contractual Clauses (SCCs) as required by GDPR.
• **Sentry:** Crash report data may be transferred to and processed in the United States under Sentry's DPA, which incorporates EU SCCs.
• **Google AdMob:** Ad-serving data may be transferred to and processed in the United States under Google's DPA and SCCs.

By using ClassRoll, you acknowledge these transfers. We rely on approved transfer mechanisms (SCCs and adequacy decisions where applicable) to ensure your data receives equivalent protection.`,
                },
                {
                  title: "11. Security",
                  content: `We implement commercially reasonable security measures appropriate to the nature of the data processed. Since student data never leaves your device, the primary security responsibility for that data lies with your device's operating system security (device lock, biometric authentication).

We recommend enabling device lock/biometric on any device running ClassRoll.

**Data Breach Notification**
In the event of a data breach that poses a risk to the rights and freedoms of individuals, we will notify affected users and relevant supervisory authorities within 72 hours of becoming aware of the breach, as required by GDPR Article 33.`,
                },
                {
                  title: "12. Changes to This Privacy Policy",
                  content: `We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Effective Date" at the top of this page. Significant changes may also be communicated through an in-app notice.

We recommend reviewing this page periodically for any changes.`,
                },
                {
                  title: "13. Contact Us",
                  content: `If you have any questions about this Privacy Policy, please contact us:

**NexusAppWorks**
Email: ${contactEmail}
Website: https://nexusappworks.com

For privacy-specific requests:
Email subject: "ClassRoll Privacy Request"`,
                },
              ].map((section) => (
                <div
                  key={section.title}
                  id={section.title.startsWith("9.") ? "do-not-sell" : undefined}
                  className="mb-8"
                >
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
