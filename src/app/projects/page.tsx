import type { Metadata } from "next";
import { LumenCard } from "@/components/lumen-card";
import { MurmurCard } from "@/components/murmur-card";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Projects — Alexandre Dissi",
  description:
    "Projects by Alexandre Dissi: Murmur, a free on-device AI dictation app for macOS; Lumen, a WHOOP-style health dashboard with a Claude MCP server; plus SaaS and integration work in Go and React.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen font-sans">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        <h1 className="mb-6 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
          Projects
        </h1>

        <p className="mb-10 text-slate-600 dark:text-slate-300">
          A few things I&rsquo;ve worked on. If you want details or code
          samples, reach out.
        </p>

        <div className="space-y-10">
          <MurmurCard />

          <LumenCard />

          <ProjectCard
            name="Hublead"
            url="https://www.hublead.io"
            urlLabel="hublead.io →"
            badge="Software Engineer · since 2025"
            image={{
              src: "/hublead-og.webp",
              alt: "Hublead logo on a purple gradient",
            }}
            description="Chrome extension that connects LinkedIn to HubSpot: sales teams import contacts, sync conversations and log activities without ever leaving LinkedIn."
            pitch="I build it across the stack: Go backend services and a React front-end, serving thousands of sales professionals every day."
            tags={["Go", "React", "Chrome Extension", "HubSpot API"]}
          />

          <section>
            <h2 className="font-display text-xl font-medium text-slate-900 dark:text-slate-100">
              SaaS platforms — backend & scaling
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Go services, REST APIs, clean architecture, and performance work.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
