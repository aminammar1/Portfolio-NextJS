# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio of Mohamed Amine Ammar: a single-page site built on Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 and framer-motion. Deployed on Vercel.

Read `AGENTS.md` first. This Next.js version has breaking changes from older releases, and the authoritative docs ship in `node_modules/next/dist/docs/`. Check them before using any Next API.

## Commands

```bash
npm run dev        # dev server (Turbopack), http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint (next core-web-vitals + typescript configs)
npm run typecheck  # tsc --noEmit
npm run doctor     # lint + typecheck + build: run before every commit
```

- There is no test suite. Verify changes with `npm run doctor`, then look at the running app at mobile (~390px) and desktop widths, in light and dark mode.
- `next build` can stop once with a `SecurityFatalError` upgrade reminder if the installed Next has a known advisory. Upgrade Next within 16.x (`npm install next@^16 eslint-config-next@^16`); re-running the command also continues.
- Stay on TypeScript 6.x: TypeScript 7 (the Go compiler) drops the JS API, and typescript-eslint (used by `npm run lint`) requires `typescript <6.1`.
- Never run `npm audit fix --force`. It downgrades Next 16 to 14.
- After upgrading `react-icons`, check that every imported icon still exists in `node_modules/react-icons/{si,fa,tb}/index.d.ts`.

## Architecture

**One page, composed in `app/page.tsx`.** Each section is a self-contained component in `components/` that keeps its own content inline as a typed array at the top of the file (projects, repos, jobs, stack, books, and so on). To edit content, edit that array. Section counts are derived from the array lengths. Images live in `public/<section>/`.

**Content rules:** use only real, honest data: real dates, real links and real logos (fall back to initials). Never copy entries from reference sites or anyone else's portfolio. Visual changes must not alter the owner's content.

**Theming (`app/globals.css`)**
- Design tokens are CSS variables: `:root` holds the light theme ("daytime sky") and `.dark` overrides them ("night battle").
- `@theme inline` maps the tokens to Tailwind colors: `background`, `card`, `card-2`, `foreground`, `muted`, `line`, `accent`, `accent-soft`, `ink`, `orange`, `ki` (blue), `gold`.
- Use tokens, not hard-coded colors. `--accent` is the text-safe orange (4.8:1 on the light background). `--orange` and `--gold` are for decoration only.
- Dark mode is a `.dark` class on `<html>`. The inline script in `app/layout.tsx` sets it before hydration from `localStorage` and the OS preference. Keep `suppressHydrationWarning` on `<html>`. `components/ThemeToggle.tsx` flips the class.
- Reusable component classes (`pill`, `manga-panel`, `ink-button`, `row-hover`, `section-label`) live inside `@layer components`. Tailwind v4 utilities live in a cascade layer, so any unlayered class in globals.css would override them. Put new component classes in that layer.
- Fonts are set up in `layout.tsx`:
  - `--font-anime`: Dela Gothic One, used through the `font-display` class for titles
  - `--font-body`: Zen Kaku Gothic New, used through `font-sans`
  - `--font-geist-mono`: Geist Mono (`next/font/google`), used through `font-mono`
  - `--font-anime-kana`: Dela Gothic One's katakana slice, for the アミン watermark only, not preloaded
- The two Japanese fonts are self-hosted with `next/font/local` from `app/fonts/`, as Google's `latin` slice only. Through `next/font/google` they would emit hundreds of `@font-face` slices and preload 241 files (about 2.8 MB). Never switch them back. Text in a new script falls back to the system font; add that slice to `app/fonts/` instead.

**Motion strategy.** Performance on mobile was deliberately tuned, so keep these splits:
- `components/MotionProvider.tsx` wraps the page in `LazyMotion` with `domAnimation` and `MotionConfig reducedMotion="user"`. Inside it, use `m.*` components rather than `motion.*` so the critical bundle stays small.
- `GalleryStack` and `GalleryStamps` are the exception: they use full `motion` with drag. They load as an async chunk through `next/dynamic` in `PhotoGallery.tsx`, warmed on `requestIdleCallback`. Don't import them statically.
- Ambient, looping effects are CSS keyframes that animate only transform and opacity: the background particles, speed-line dividers, aura flames, focus-line jitter, Pac-Man strip and click impacts (`ImpactClicks.tsx` adds and removes DOM nodes directly, with no React state).
- Decorative markup must be deterministic so it server-renders identically. Use fixed arrays, or the seeded PRNG in `lib/prng.ts`; never `Math.random()` during render.
- Give `next/image` `sizes` the real rendered width: content is capped at 768px (`xl:max-w-3xl`), so viewport-relative values like `25vw` over-fetch. Use `preload` (not the deprecated `priority`) for the hero avatar only.
- Respect `prefers-reduced-motion`. Use the `usePrefersReducedMotion()` hook in `lib/use-reduced-motion.ts` (built on `useSyncExternalStore`) for JS, and the reduced-motion block at the end of `globals.css` for CSS.

**Transformation forms.** `:root[data-form]` (Super Saiyan) and `[data-form="ssj2"]` in `globals.css` retint the derived tokens (`--orange`, `--gold`, `--accent`, `--beam`, `--fill-*`, `--aura-*`, `--glow`) site-wide. Only the hero sets the attribute. For anything that should change colour on transformation, use these tokens (or `.ki-orb`, `rgba(var(--glow), a)`) rather than hex values.

**Hero (`components/Hero.tsx`).** The hero is the signature piece:
- The avatar has an aura and manga focus lines, and the name's letters slam in.
- A scouter readout shows the "power level", which is the real count of GitHub contributions over the last year.
- The avatar's spiky aura is `components/SaiyanAura.tsx`: three seeded SVG frames flipped with CSS `steps()`, plus `Debris` rocks shown only while charging.
- Holding the avatar (pointer, Space or Enter) charges the power level past 9000 with a framer `animate()` on a motion value. Breaking 9000 mid-charge advances the form (base → Super Saiyan → Super Saiyan 2): white-out, shockwave, and `data-form` set on `<html>`. "Power down" reverts. The number shown is always the real contribution count.
- `lib/github-contributions.ts` caches a single fetch to the contributions API. The hero and the `Contributions` heatmap both read from it, so don't add a second fetch.

**Headings.** `PanelHeading` (top-level sections) and `SectionHeading` (the "Personals" subsections) both render `KiTitle`, the animated title card with its count orb.

**Lint rules that bite**
- `react-hooks/set-state-in-effect`: don't call setState synchronously inside an effect body. Use lazy `useState` initializers, `useSyncExternalStore`, or setState inside callbacks and timers.
- Never nest an `<a>` inside another `<a>`. Clickable rows use a `div[role=link]` with a separate inner `<a>` for the repo icon, and `stopPropagation` on its click (see `Projects.tsx`).

## Git

Use conventional commit messages (`feat:`, `fix:`, `perf:`, `chore(deps):`). The owner reviews visual changes before anything is pushed, so commit locally and don't push unless asked.
