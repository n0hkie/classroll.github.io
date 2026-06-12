import Link from "next/link";
import Image from "next/image";
import { Mail, Heart, ExternalLink } from "lucide-react";

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy/classroll" },
    { label: "Terms of Service", href: "/terms/classroll" },
    { label: "Do Not Sell or Share My Personal Information", href: "/privacy/classroll#do-not-sell" },
  ],
  Download: [
    {
      label: "Google Play",
      href: "https://play.google.com/store",
      external: true,
    },
    {
      label: "App Store",
      href: "https://apps.apple.com",
      external: true,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#1A1040] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="ClassRoll"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="font-bold text-xl">ClassRoll</span>
            </Link>
            <p className="text-violet-300 text-sm leading-relaxed mb-6 max-w-xs">
              The fastest offline photo attendance app for teachers. No internet,
              no accounts, no hassle.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/nexusappworks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href="mailto:support@nexusappworks.com"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#6D28D9] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-violet-300 mb-4">
                {section}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-200 hover:text-white transition-colors text-sm flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-violet-200 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-violet-300 text-sm">
            © {new Date().getFullYear()} NexusAppWorks. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/privacy/classroll#do-not-sell"
              className="text-violet-300 hover:text-white transition-colors text-xs underline underline-offset-2"
            >
              Do Not Sell or Share My Personal Information
            </Link>
            <p className="text-violet-300 text-sm flex items-center gap-1">
              Made with <Heart size={13} className="text-pink-400 fill-pink-400" /> for teachers everywhere
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
