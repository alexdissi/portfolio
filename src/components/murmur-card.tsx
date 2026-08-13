import { ProjectCard } from "./project-card";

export function MurmurCard() {
  return (
    <ProjectCard
      name="Murmur"
      url="https://murmur.dissi.fr"
      urlLabel="murmur.dissi.fr →"
      badge="Side project · 2026"
      image={{
        src: "/murmur-og.png",
        alt: "Murmur — Speak. It writes. Free AI dictation for Mac.",
      }}
      description="Free on-device AI dictation for macOS. Hold a hotkey, speak naturally, and Apple Intelligence rewrites your words into clean, professional text typed straight into any app. 100% private: no cloud, no account, no telemetry."
      pitch="Designed, built and shipped solo: the native Swift app, the Apple Intelligence pipeline, and the marketing site."
      tags={["Swift", "macOS", "Apple Intelligence", "Next.js"]}
    />
  );
}
