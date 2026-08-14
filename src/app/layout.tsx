import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["500", "600"],
});

import { getSiteUrl } from "@/lib/site";
import {
  lumenJsonLd,
  murmurJsonLd,
  personJsonLd,
  websiteJsonLd,
} from "./structured-data";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "Alexandre Dissi — Go / React Software Engineer",
  description:
    "Go/React software engineer in France. Building scalable SaaS applications and high-impact web solutions with clean architecture and performance in mind.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Alexandre Dissi — Go / React Software Engineer",
    description:
      "Go/React software engineer in France. Building scalable SaaS applications and high-impact web solutions.",
    images: [
      {
        url: "/profil.jpg",
        width: 512,
        height: 512,
        alt: "Alexandre Dissi",
      },
    ],
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary",
    title: "Alexandre Dissi — Go / React Software Engineer",
    description:
      "Go/React software engineer in France. Building scalable SaaS applications and high-impact web solutions.",
    images: ["/profil.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static, build-time JSON-LD
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              websiteJsonLd,
              personJsonLd,
              murmurJsonLd,
              lumenJsonLd,
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
