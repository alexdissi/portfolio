import Image from "next/image";

export type ProjectCardProps = {
  name: string;
  url: string;
  urlLabel: string;
  badge: string;
  image: { src: string; alt: string };
  description: string;
  pitch: string;
  tags: string[];
};

export function ProjectCard({
  name,
  url,
  urlLabel,
  badge,
  image,
  description,
  pitch,
  tags,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900/30 dark:hover:border-slate-700 dark:hover:shadow-black/40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the ${name} website`}
        className="group block overflow-hidden print:hidden"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={630}
          sizes="(min-width: 640px) 704px, 100vw"
          className="w-full border-b border-slate-200 transition-transform duration-500 ease-out group-hover:scale-[1.02] dark:border-slate-800"
        />
      </a>
      <div className="p-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl font-medium text-slate-900 dark:text-slate-100">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline underline-offset-4"
            >
              {name}
            </a>
          </h3>
          <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
            {badge}
          </span>
        </div>

        <p className="mt-3 text-slate-600 dark:text-slate-300">{description}</p>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {pitch}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 font-mono text-[13px] text-slate-700 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
          >
            {urlLabel}
          </a>
        </div>
      </div>
    </article>
  );
}
