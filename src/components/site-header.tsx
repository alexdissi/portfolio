export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 pt-8 sm:px-8 lg:px-12">
      <a
        href="/"
        className="font-display text-sm font-semibold tracking-tight text-slate-900 [view-transition-name:identity] dark:text-slate-100"
      >
        Alexandre Dissi
      </a>
      <nav aria-label="Primary" className="flex items-center gap-6 text-sm">
        <a
          href="/projects"
          className="py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          Projects
        </a>
        <a
          href="/contact"
          className="py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
