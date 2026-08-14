import { ProjectCard } from "./project-card";

export function LumenCard() {
  return (
    <ProjectCard
      name="Lumen"
      url="https://lumen.dissi.fr"
      urlLabel="lumen.dissi.fr →"
      badge="Side project · 2026"
      image={{
        src: "/lumen-og.webp",
        alt: "Lumen — a WHOOP-style recovery ring at 82% on a dark canvas",
      }}
      description="WHOOP-style health dashboard built for my own Fitbit. It syncs Google Health data and turns it into recovery, sleep and strain scores — the day's state readable at a glance, and every score unpackable into the metrics behind it."
      pitch="Built solo with Next.js, including an MCP server so Claude can read your synced health data — as a remote connector on claude.ai or over stdio in Claude Code and Claude Desktop."
      tags={["Next.js", "TypeScript", "Google Health API", "Claude MCP"]}
    />
  );
}
