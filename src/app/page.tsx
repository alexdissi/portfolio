import Image from "next/image";
import { HeroBackdrop } from "@/components/hero-backdrop";
import { MurmurCard } from "@/components/murmur-card";

function MailIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" strokeLinecap="round" />
    </svg>
  );
}

function GitHubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0022 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V23h-4v-7.9c0-1.88-.03-4.3-2.62-4.3-2.62 0-3.02 2.05-3.02 4.17V23H8V8z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      <HeroBackdrop />
      <div className="relative mx-auto max-w-2xl px-6 py-16 sm:px-8 lg:px-12">
        <main>
          {/* Profile Section */}
          <div className="flex flex-col items-center pb-16 text-center sm:pb-20">
            <div className="rise mb-6 rounded-full bg-gradient-to-b from-accent/50 via-slate-200 to-transparent p-[2px] shadow-lg shadow-slate-300/40 dark:via-slate-800 dark:shadow-black/40">
              <div className="h-24 w-24 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                <Image
                  src="/profil.jpg"
                  alt="Portrait of Alexandre Dissi"
                  width={96}
                  height={96}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
            <h1
              className="rise mb-2 font-display text-4xl font-semibold tracking-tight text-slate-900 [view-transition-name:identity] sm:text-5xl dark:text-slate-100"
              style={{ "--rd": "120ms" } as React.CSSProperties}
            >
              Alexandre Dissi
            </h1>
            <p
              className="rise mb-1 text-lg text-slate-600 dark:text-slate-300"
              style={{ "--rd": "180ms" } as React.CSSProperties}
            >
              Software Engineer (Go / React)
            </p>
            <p
              className="rise mb-8 text-sm text-slate-500 dark:text-slate-400"
              style={{ "--rd": "220ms" } as React.CSSProperties}
            >
              France
            </p>

            <div
              className="rise mb-8 max-w-lg text-slate-600 dark:text-slate-300"
              style={{ "--rd": "280ms" } as React.CSSProperties}
            >
              <p className="text-lg leading-relaxed">
                Software Engineer passionate about building scalable SaaS
                applications and high-impact web solutions. Currently helping
                Hublead.io grow by designing and delivering robust backend
                services in Go and modern front-end experiences with React.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Curious and always learning, I focus on clean architecture,
                performance, and cutting-edge technologies to deliver real value
                through software.
              </p>
            </div>

            {/* Skills */}
            <div
              className="rise mb-10 flex flex-wrap justify-center gap-2"
              style={{ "--rd": "340ms" } as React.CSSProperties}
            >
              {["Go", "TypeScript", "Python", "Swift"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[13px] text-slate-700 transition-colors hover:border-accent/50 hover:text-accent dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-accent/50 dark:hover:text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="rise flex flex-wrap items-center justify-center gap-3"
              style={{ "--rd": "400ms" } as React.CSSProperties}
            >
              <a
                href="mailto:alexandre@dissi.fr"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/85 dark:text-slate-950"
              >
                <MailIcon />
                Get in touch
              </a>
              <a
                href="https://github.com/alexdissi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alexandredissi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-slate-100"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Featured Project */}
          <section className="reveal mb-20 sm:mb-28">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Featured Project
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-slate-200 dark:bg-slate-800"
              />
            </div>
            {/* the flagship breaks out of the text column */}
            <div className="sm:-mx-6 lg:-mx-14">
              <MurmurCard />
            </div>
          </section>

          {/* Experience Section */}
          <section className="reveal mb-12">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Experience
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-slate-200 dark:bg-slate-800"
              />
            </div>

            <div className="relative space-y-10 border-l border-slate-200 pl-6 dark:border-slate-800">
              <span
                aria-hidden="true"
                className="tl-line absolute -left-px top-0 bottom-0 w-px bg-accent/60"
              />
              <div className="relative">
                <span
                  aria-hidden="true"
                  className="tl-dot absolute -left-[30px] top-1.5 size-2.5 rounded-full bg-accent ring-4 ring-accent/15"
                />
                <div className="mb-2">
                  <h3 className="font-display text-lg font-medium text-slate-900 dark:text-slate-100">
                    Hublead
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Software Engineer
                  </p>
                </div>
                <div className="mb-4 font-mono text-[13px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Jan 2025 – Present</span> •
                  France • Hybrid
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Working on a Chrome extension that integrates LinkedIn with
                  HubSpot, enabling sales professionals to import contacts and
                  sync activities seamlessly. Helping scale the platform that
                  serves thousands of users with robust backend services in Go
                  and modern front-end experiences.
                </p>
              </div>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="tl-dot absolute -left-[30px] top-1.5 size-2.5 rounded-full bg-slate-300 dark:bg-slate-700"
                />
                <div className="mb-2">
                  <h3 className="font-display text-lg font-medium text-slate-900 dark:text-slate-100">
                    CashNow
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Full-Stack Developer
                  </p>
                </div>
                <div className="mb-4 font-mono text-[13px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Oct 2023 – Jan 2025</span> •
                  Greater Paris Metropolitan Region (Apprenticeship)
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Worked on the development of a SaaS platform for financial
                  management and risk monitoring. Tech: Front-end, Symfony, +
                  additional skills.
                </p>
              </div>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="tl-dot absolute -left-[30px] top-1.5 size-2.5 rounded-full bg-slate-300 dark:bg-slate-700"
                />
                <div className="mb-2">
                  <h3 className="font-display text-lg font-medium text-slate-900 dark:text-slate-100">
                    CAFOC
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Front-end Developer
                  </p>
                </div>
                <div className="mb-4 font-mono text-[13px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Apr 2023 – Jun 2023</span> •
                  Créteil, France • Hybrid (Internship)
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  • Front-end feature development
                  <br />• Improvements to the Gret@ Distance training platform
                  <br />
                  Tech: Front-end development, UI/UX implementation
                </p>
              </div>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="tl-dot absolute -left-[30px] top-1.5 size-2.5 rounded-full bg-slate-300 dark:bg-slate-700"
                />
                <div className="mb-2">
                  <h3 className="font-display text-lg font-medium text-slate-900 dark:text-slate-100">
                    École Normale Supérieure (ENS)
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Full-Stack Developer
                  </p>
                </div>
                <div className="mb-4 font-mono text-[13px] text-slate-500 dark:text-slate-400">
                  <span className="font-medium">Mar 2022 – Jun 2022</span> •
                  Paris • On-site (Internship)
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  • Creation of an internship offer platform
                  <br />• End-to-end front-end development
                  <br />
                  Tech: Front-end development, UI conception
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="reveal mb-16">
            <div className="mb-8 flex items-center gap-4">
              <h2 className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Education
              </h2>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-slate-200 dark:bg-slate-800"
              />
            </div>

            <div className="space-y-6">
              <div className="sm:grid sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                <div>
                  <h3 className="font-display text-base font-medium text-slate-900 dark:text-slate-100">
                    Sup de Vinci — École d&lsquo;Informatique
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Master&lsquo;s Degree (Development specialization), Computer
                    Science
                  </p>
                </div>
                <div className="mt-1 font-mono text-[13px] text-slate-500 sm:mt-0 sm:text-right dark:text-slate-400">
                  Sep 2023 – Sep 2025 · Bac +5
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                <div>
                  <h3 className="font-display text-base font-medium text-slate-900 dark:text-slate-100">
                    GRETA 93
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Application Developer, then Web & Mobile Web Developer
                    (DWWM)
                  </p>
                </div>
                <div className="mt-1 font-mono text-[13px] text-slate-500 sm:mt-0 sm:text-right dark:text-slate-400">
                  <p>Nov 2022 – Jul 2023 · Bac +3</p>
                  <p>Oct 2021 – Jul 2022 · Bac +2</p>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                <div>
                  <h3 className="font-display text-base font-medium text-slate-900 dark:text-slate-100">
                    Lycée Champlain
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    STI2D — Technological Baccalaureate
                  </p>
                </div>
                <div className="mt-1 font-mono text-[13px] text-slate-500 sm:mt-0 sm:text-right dark:text-slate-400">
                  Sep 2014 – Jul 2017
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer */}
        <footer className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <div className="mb-4 flex justify-center gap-6">
            <a
              href="/projects"
              className="inline-block py-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Projects
            </a>
            <a
              href="/contact"
              className="inline-block py-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="text-center space-x-6">
            <a
              href="https://www.linkedin.com/in/alexandredissi/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alexdissi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="mt-6 pb-2 text-center text-xs text-slate-400 dark:text-slate-600">
            © 2026 Alexandre Dissi
          </p>
        </footer>
      </div>
    </div>
  );
}
