import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusappworks.com"),
  title: {
    default: "ClassRoll – Offline Photo Attendance for Teachers",
    template: "%s | ClassRoll",
  },
  description:
    "ClassRoll is the fastest way to take attendance in class. See your whole class as photo tiles, mark exceptions in seconds — works 100% offline, no accounts needed.",
  keywords: [
    "attendance",
    "teacher",
    "classroom",
    "roll call",
    "offline",
    "photo",
    "roster",
    "PDF report",
    "seating arrangement",
  ],
  authors: [{ name: "NexusAppWorks" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexusappworks.com/classroll",
    siteName: "ClassRoll",
    title: "ClassRoll – Offline Photo Attendance for Teachers",
    description:
      "Mark attendance by tapping student photos. No internet required. Generate reports instantly.",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "ClassRoll App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClassRoll – Offline Photo Attendance for Teachers",
    description:
      "Mark attendance by tapping student photos. No internet required. Generate reports instantly.",
    images: ["/icon.png"],
  },
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
