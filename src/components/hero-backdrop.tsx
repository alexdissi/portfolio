"use client";

import { useEffect, useRef } from "react";

/* Hero backdrop: indigo glow + dot grid. The accent dot layer is revealed
   through a radial mask that trails the cursor (lerped in rAF, CSS vars).
   Static without JS; inert under prefers-reduced-motion. */
export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches)
      return;

    let raf = 0;
    let tx = -9999;
    let ty = -9999;
    let cx = -9999;
    let cy = -9999;

    const tick = () => {
      cx += (tx - cx) * 0.16;
      cy += (ty - cy) * 0.16;
      el.style.setProperty("--mx", `${cx.toFixed(1)}px`);
      el.style.setProperty("--my", `${cy.toFixed(1)}px`);
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (cx < -999) {
        cx = tx;
        cy = ty;
      }
      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      tx = -9999;
      cx = -9999;
      el.style.setProperty("--mx", "-9999px");
      el.style.setProperty("--my", "-9999px");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-80"
    >
      <div className="hero-glow absolute inset-0" />
      <div className="grid-mask absolute inset-0">
        <div className="dot-grid-base absolute inset-0" />
        <div className="dot-grid-accent absolute inset-0" />
      </div>
    </div>
  );
}
