import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service – ClassRoll",
  description:
    "ClassRoll Terms of Service — the rules users must agree to in order to use ClassRoll.",
};

export default function TermsPage() {
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
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
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
            {/* Intro */}
            <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-10">
              <h2 className="font-bold text-[#6D28D9] text-lg mb-2">Agreement Summary</h2>
              <p className="text-sm text-[#1A1040]">
                By downloading or using ClassRoll, you agree to these Terms. Please read them.
                The key points: use the app lawfully, don&apos;t misuse it, and understand that student
                data is your responsibility (it stays on your device only).
              </p>
            </div>

            <div className="text-[#6B5FA6] text-sm mb-8 leading-relaxed">
              These Terms of Service (&quot;Terms&quot;) govern your use of the ClassRoll mobile application
              (&quot;App&quot;) operated by NexusAppWorks (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our App,
              you agree to be bound by these Terms. If you disagree with any part of these Terms,
              you may not access the App.
            </div>

            {[
              {
                title: "1. Acceptance of Terms",
                content: `By installing, accessing, or using ClassRoll, you confirm that you:

• Are at least 18 years of age, OR have parental or guardian consent
• Have the authority to agree to these Terms on behalf of yourself
• Will use the App in accordance with all applicable local, national, and international laws

If you are using ClassRoll as part of an educational institution, you represent that you have the authority to enter into these Terms on behalf of that institution.`,
              },
              {
                title: "2. Description of Service",
                content: `ClassRoll is an offline-first attendance management application for teachers, tutors, coaches, and training organizers. The App provides:

• Photo-based attendance tracking
• Class and student roster management
• Drag-and-drop seating arrangement
• Attendance history and reporting
• PDF and CSV export functionality
• Local backup and restore

The App is designed to operate without an internet connection. All data is stored locally on your device.`,
              },
              {
                title: "3. User Responsibilities",
                content: `You are responsible for:

**Your Account and Device**
ClassRoll does not require an account. You are responsible for maintaining the security of your device and any data stored on it.

**Student Data**
You are responsible for any student, participant, or roster data you enter into the App. You represent that you have the appropriate legal basis (such as consent, legitimate interest, or legal obligation) to collect and store this data.

You acknowledge that student data is stored locally on your device and is never transmitted to NexusAppWorks. We have no access to, and no responsibility for, any student data you enter.

**Compliance with Education Laws**
If your use of ClassRoll involves student data governed by FERPA (US), GDPR (EU), COPPA, or other applicable education or data protection laws, you are solely responsible for ensuring your use complies with those laws.

**Appropriate Use**
You agree not to use ClassRoll for any unlawful purpose or in any way that violates these Terms.`,
              },
              {
                title: "4. Prohibited Activities",
                content: `You agree NOT to:

• Use the App to store, process, or share student data in violation of applicable laws
• Reverse engineer, decompile, or attempt to extract the source code of the App
• Use the App to distribute malware or any harmful code
• Impersonate any person or entity or misrepresent your affiliation
• Attempt to circumvent any ad-limiting, export-limiting, or other metering features
• Use the App in a way that could damage, disable, or impair the App or servers
• Resell, sublicense, or commercially exploit the App without our express written consent`,
              },
              {
                title: "5. Free Tier and Ads",
                content: `ClassRoll is free to download and use. The free tier includes:

• Up to 5 classes (Phase 1) / 3 classes (Phase 2)
• Unlimited students per class
• Unlimited attendance sessions
• 1 PDF or CSV export per day
• Non-personalized ads on safe screens (no student data visible)

Additional exports beyond the daily limit require watching a rewarded advertisement. Ads are governed by Google AdMob's terms and policies.

We reserve the right to modify the free tier limits with reasonable notice. Teachers who already exceed limits at time of change will be grandfathered for existing data.`,
              },
              {
                title: "6. Intellectual Property",
                content: `The ClassRoll application, including its design, code, graphics, and content, is owned by NexusAppWorks and is protected by applicable intellectual property laws.

You are granted a limited, non-exclusive, non-transferable license to use the App for personal, non-commercial purposes on devices you own or control.

Data you create within the App (classes, student names, attendance records) remains your property. You grant us no rights to this data, and we have no access to it.`,
              },
              {
                title: "7. Privacy",
                content: `Your use of ClassRoll is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy at:

https://nexusappworks.com/privacy/classroll

The Privacy Policy explains what limited anonymous data we collect and how we use it.`,
              },
              {
                title: "8. Disclaimers",
                content: `THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:

• Warranties of merchantability
• Fitness for a particular purpose
• Non-infringement
• That the App will be uninterrupted or error-free
• That data stored in the App will not be lost

You are responsible for maintaining backups of your data. We strongly recommend using the built-in Backup & Restore feature regularly.`,
              },
              {
                title: "9. Limitation of Liability",
                content: `TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEXUSAPPWORKS SHALL NOT BE LIABLE FOR:

• Any indirect, incidental, special, consequential, or punitive damages
• Loss of data, including attendance records, student information, or class data
• Loss of profits or revenue
• Any damage arising from your reliance on the App for compliance with legal requirements

OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING FROM YOUR USE OF THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM (WHICH MAY BE ZERO FOR FREE USERS).`,
              },
              {
                title: "10. Updates and Changes",
                content: `We may update the App at any time. Updates may change, add, or remove features. We will provide reasonable notice of significant changes through in-app notices or by updating these Terms.

We reserve the right to modify these Terms at any time. The Effective Date at the top of this page will be updated. Continued use of the App after changes constitutes acceptance of the new Terms.`,
              },
              {
                title: "11. Termination",
                content: `You may stop using ClassRoll at any time by uninstalling the App. All locally stored data will be deleted from your device upon uninstallation (subject to your device's OS behavior).

We reserve the right to suspend or terminate access to the App for violations of these Terms.`,
              },
              {
                title: "12. Governing Law",
                content: `These Terms are governed by applicable law. Any disputes arising from these Terms or your use of the App will be handled in accordance with applicable legal processes.

We aim to resolve any disputes amicably. Contact us at ${contactEmail} before pursuing any formal legal action.`,
              },
              {
                title: "13. Contact Information",
                content: `For questions about these Terms of Service:

**NexusAppWorks**
Email: ${contactEmail}
Website: https://nexusappworks.com

For Terms-specific inquiries, use subject line: "ClassRoll Terms of Service"`,
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

            <div className="mt-10 pt-8 border-t border-[#DDD0F5] text-center">
              <p className="text-[#6B5FA6] text-sm">
                Have questions about these Terms?{" "}
                <Link href="/contact" className="text-[#6D28D9] hover:underline font-medium">
                  Contact us
                </Link>{" "}
                or email{" "}
                <a href={`mailto:${contactEmail}`} className="text-[#6D28D9] hover:underline">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
