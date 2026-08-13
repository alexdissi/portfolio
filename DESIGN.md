# Portfolio — Design System

Minimal personal-brand system. Monochrome canvas, one indigo accent, three
type voices. Shared DNA with murmur.dissi.fr (Bricolage display, indigo
family accent).

## Colors

| Token | Light | Dark | Use |
|---|---|---|---|
| background | #f7f7fb | #0b0b10 | Page canvas (body), indigo-whisper tint |
| foreground | #18181f | #ececf1 | Default text |
| accent | #4f46e5 | #a5b4fc | Primary CTA fill, eyebrows, timeline dot + progress line, links, badge tint, chip hover, focus, selection |

Neutrals are Tailwind `slate` (cool, indigo-leaning). Never pure `gray`,
never pure #000/#fff. Cards: white / slate-900/30 with slate-200 /
slate-800 borders.

Color strategy: Restrained-plus. One accent, but committed where it
counts: the primary CTA is accent-filled (white text light, slate-950 text
dark); secondary CTAs stay neutral outline.

## Typography

Three voices, each with one job:

| Family | CSS var | Utility | Role |
|---|---|---|---|
| Bricolage Grotesque 500-700 | --font-bricolage | font-display | Name, page titles, entry/card titles |
| Geist | --font-geist-sans | font-sans (body default) | Body copy, buttons, nav |
| Geist Mono | --font-geist-mono | font-mono | Dates, meta, chips, section eyebrows |

Scale (home): h1 name 36/48px display semibold tracking-tight · page h1 30px
display semibold · entry h3 18px display medium · body 16-18px sans ·
meta/chips 13px mono · eyebrow 12px mono uppercase tracking 0.2em accent ·
badge 11px mono.

Body max width is the max-w-2xl column; bio capped at max-w-lg.

## Layout & Motion

- Single centered column max-w-2xl, px-6/8/12. Spacing has rhythm, not a
  constant: Featured mb-20/28 (air after the flagship moment), Experience
  mb-12 (flows into Education), Education mb-16 (before footer).
- The Murmur card breaks out of the text column (sm:-mx-6 lg:-mx-14).
- Section header: mono eyebrow + hairline flex-1.
- Experience: left-border timeline, 10px dots (accent + ring for current).
- Education: dense two-column rows (school/degree left, mono dates right),
  base-size titles. Density encodes lower priority than Experience.
- Hero: radial indigo glow + dot grid masked to fade, .rise staggered
  entrance; below-fold sections use .reveal (animation-timeline: view()).
- All motion removed under prefers-reduced-motion.

## Components

- CTA primary: rounded-xl (12px corners, never pill), accent fill.
- CTA secondary: rounded-xl slate border, hover darkens border + text.
- Chips: rounded-full, bordered (home) or gray-100 fill (card), mono 13px.
- MurmurCard: rounded-2xl bordered card, OG image with hover zoom 1.02,
  hover lift -0.5 + shadow, accent link.

## Don'ts

- No second accent color, no gradient text, no side-stripe borders.
- No em dashes in copy. No new font sizes outside the scale above.
