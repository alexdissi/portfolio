import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {useMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {Toaster} from "sonner";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import React from "react";
export const metadata: Metadata = {
  title: "Alexandre Dissi | Portfolio",
  description: "Personal website of Alexandre Dissi",
};

export default function LocaleLayout({children, params: {locale}}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    const messages = useMessages()
  return (
      <html lang={locale}>
      <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
              <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
              >
                    <Analytics />
                  <SpeedInsights />
                  {children}
                  <Toaster position="top-right" richColors/>
              </ThemeProvider>
          </NextIntlClientProvider>
      </body>
      </html>
  );
}
