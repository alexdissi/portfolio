import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {useMessages} from "next-intl";
import {NextIntlClientProvider} from "next-intl";
import {Toaster} from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexandre Dissi",
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
                  {children}
                  <Toaster position="top-right" richColors/>
              </ThemeProvider>
          </NextIntlClientProvider>
      </body>
      </html>
  );
}
