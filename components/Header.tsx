"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "About", href: "/about" },
  {
    label: "Resources",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-violet-100/50 border-b border-violet-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md group-hover:shadow-violet-300 transition-shadow">
              <Image
                src="/icon.png"
                alt="ClassRoll"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span
              className={`font-bold text-xl transition-colors ${
                scrolled
                  ? "text-[#1A1040] group-hover:text-[#6D28D9]"
                  : "text-white group-hover:text-violet-200"
              }`}
            >
              ClassRoll
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                      scrolled
                        ? "text-[#1A1040] hover:text-[#6D28D9] hover:bg-violet-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-44 bg-white rounded-xl shadow-xl shadow-violet-100 border border-violet-100 py-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-[#1A1040] hover:text-[#6D28D9] hover:bg-violet-50 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                    scrolled
                      ? "text-[#1A1040] hover:text-[#6D28D9] hover:bg-violet-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                scrolled
                  ? "text-[#6D28D9] border border-[#6D28D9] hover:bg-violet-50"
                  : "text-white border border-white/50 hover:bg-white/10"
              }`}
            >
              Google Play
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all ${
                scrolled
                  ? "text-white bg-[#6D28D9] hover:bg-[#5B21B6] shadow-md shadow-violet-200"
                  : "text-[#6D28D9] bg-white hover:bg-violet-50 shadow-md shadow-black/20"
              }`}
            >
              App Store
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-[#1A1040] hover:bg-violet-50"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-violet-100 py-4 space-y-1 shadow-xl rounded-b-2xl">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-xs font-semibold text-[#6B5FA6] uppercase tracking-wider">
                    {link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-6 py-2 text-[#1A1040] hover:text-[#6D28D9] hover:bg-violet-50 transition-colors rounded-lg mx-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className="block px-4 py-2 text-[#1A1040] hover:text-[#6D28D9] hover:bg-violet-50 transition-colors rounded-lg mx-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="px-4 pt-3 flex flex-col gap-2 border-t border-violet-100 mt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 text-sm font-semibold text-[#6D28D9] border border-[#6D28D9] rounded-full hover:bg-violet-50 transition-all"
              >
                Get on Google Play
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-2.5 text-sm font-semibold text-white bg-[#6D28D9] rounded-full hover:bg-[#5B21B6] transition-all"
              >
                Download on App Store
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
