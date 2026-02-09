import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { getSiteUrl } from "@/lib/site";

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
        url: "/profil.png",
        width: 512,
        height: 512,
        alt: "Alexandre Dissi",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Alexandre Dissi — Go / React Software Engineer",
    description:
      "Go/React software engineer in France. Building scalable SaaS applications and high-impact web solutions.",
    images: ["/profil.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
