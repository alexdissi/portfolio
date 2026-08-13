import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact — Alexandre Dissi",
  description:
    "Get in touch with Alexandre Dissi for opportunities, consulting, or questions.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen font-sans">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Contact
        </h1>

        <p className="mb-10 text-slate-600 dark:text-slate-300">
          For opportunities, consulting, or questions. I usually reply within a
          day.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:alexandre@dissi.fr"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/85 dark:text-slate-950"
          >
            alexandre@dissi.fr
          </a>
          <a
            href="https://www.linkedin.com/in/alexandredissi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/alexdissi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            GitHub
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
          Based in France · Remote-friendly
        </p>
      </main>
    </div>
  );
}
