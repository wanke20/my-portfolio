import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import BackToTop from "./components/BackToTop";
import { FooterComponent } from "./components/Footer";
import Navbar from "./components/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kenneth Wan — Computer Science @ Northeastern",
    template: "%s | Kenneth Wan",
  },
  description:
    "Portfolio of Kenneth Wan, a Computer Science student at Northeastern University. JavaScript, TypeScript, Java, React, Next.js, Node.js.",
  keywords: [
    "Kenneth Wan",
    "Northeastern University",
    "Computer Science",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Kenneth Wan" }],
  creator: "Kenneth Wan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Kenneth Wan",
    title: "Kenneth Wan — Computer Science @ Northeastern",
    description:
      "Portfolio of Kenneth Wan, a Computer Science student at Northeastern University.",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Kenneth Wan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Wan — Computer Science @ Northeastern",
    description:
      "Portfolio of Kenneth Wan, a Computer Science student at Northeastern University.",
    images: ["/profile.jpeg"],
    creator: "@kwan132382",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kenneth Wan",
  url: siteUrl,
  image: `${siteUrl}/profile.jpeg`,
  jobTitle: "Computer Science Student",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Northeastern University",
  },
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "React",
    "Next.js",
    "Node.js",
  ],
  sameAs: [
    "https://github.com/wanke20",
    "https://www.linkedin.com/in/kennethwan18/",
    "https://twitter.com/kwan132382",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <BackToTop />
        <FooterComponent />
      </body>
    </html>
  );
}
