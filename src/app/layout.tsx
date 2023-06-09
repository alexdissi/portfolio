import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Alexandre Dissi",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-bglight dark:bg-bgdark">
      <body className="bg-bglight dark:bg-bgdark  sm:mx-20">
        {children} <Analytics />
      </body>
    </html>
  );
}
