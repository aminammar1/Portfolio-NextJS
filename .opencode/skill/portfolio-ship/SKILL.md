---
description: Ship and maintain the Portfolio-NextJS site - dependency upgrades, doctor checks, design tokens, adding projects, and the release flow. Use when upgrading deps, adding new projects, changing the design system, or shipping a PR.
---

# Portfolio-NextJS shipping guide

Workflow for safely releasing updates to the Mohamed Amine Ammar portfolio (Next.js 16, React 19, Tailwind v4, framer-motion). Design language follows the compact resume-dossier style (malekgarahellal.com reference): light theme by default + dark toggle, single max-w-4xl column, section labels with counts (e.g. "Work (2)"), pill tags, row-hover cards.

## 1. Before any change

- Work on a feature branch, never directly on `main` (e.g. `feat/portfolio-v2`).
- Run `npm run doctor` (eslint + tsc + production build) before starting so you know the tree was green.

## 2. Dependency upgrades

- Check with `npm outdated --json`.
- Prefer `npm install pkg@latest` per package over blanket `npm upgrade` so lockfile changes stay explainable.
- After upgrading look at `npm audit` results in devDeps of `eslint-config-next`; do NOT `audit fix --force` - it downgrades Next.js 16 to 14 (breaking).
- Verify `react-icons` still exports every icon imported by components (grep `node_modules/react-icons/si/index.d.ts` / `fa/index.d.ts`) before building.

## 3. Design system

- Sections are single-column, `max-w-4xl mx-auto px-4`, composed in `app/page.tsx`: Hero → Companies → Projects → Open Source → Music → Work → Education → Stack → Footer (+ floating AskMeAnything). Keep section order and the `aria`-friendly structure.
- Theming: CSS variables in `app/globals.css` (`:root` light, `.dark` overrides) mapped through `@theme inline` — `background/card/card-2/foreground/muted/line/accent/accent-soft`. Dark mode is a `.dark` class on `<html>` toggled by `components/ThemeToggle.tsx`, initialized pre-hydration by the inline script in `app/layout.tsx` (keep `suppressHydrationWarning`). Accent: green `#16a34a` (light) / `#22c55e` (dark).
- Shared utility classes live in `globals.css`: `section-label`, `pill`, `row-hover`, `hatch`, `stamp`, `animate-shine`.
- Fonts are Geist + Geist Mono via `next/font` in `app/layout.tsx`. Use `font-mono` for microcopy, years and labels.
- Content data lives inline in each component (Companies, Projects, OpenSource, Music, Work, Education, Stack). Principles: honest data only — real dates, real links; new projects get `isNew` badges and deployed ones get the `live` dot; never copy another person&apos;s projects/companies. Brand icons: use `react-icons/fa` (e.g. `FaGithub`) — lucide-react has no brand icons. Company/project logos: initials tiles by default; swap in a real file under `public/logos/` (see `TODO(logo)` in `Work.tsx`) or paste the owner-provided URL.

## 4. Adding a project

Projects are data in `components/Projects.tsx` (compact rows) or `components/OpenSource.tsx` (repo rows). Each project entry needs:

```ts
{
  name, year,               // display name + year label
  tags: ['E-Commerce'],     // 2 short pills per project (desktop only)
  link,                     // live URL (or GitHub URL if not deployed)
  repo?,                    // GitHub source when it differs from link
  isNew?,                   // "NEW" pill for the latest ones
  live?,                    // green live dot for deployed products
}
```

- New projects go at the top of the Projects array (6 visible + "Show more").
- The section counts derive from the arrays — keep labels accurate.
- Card links use the stretched-link pattern (outer `div` + absolute `a`) — never nest `<a>` inside `<a>` (hydration error).
- New `react-hooks/set-state-in-effect` lint: never call setState synchronously in an effect body; use lazy `useState(() => ...)` initializers and setState only inside callbacks/intervals.

## 5. Release checklist

1. `npm run doctor` - must pass clean (0 errors, production build green).
2. Bump metadata (title/description/openGraph) only if positioning changes.
3. Update the theme only through the tokens in `app/globals.css` — never hard-code colors in components.
4. Commit with a conventional message (`feat: ...`, `chore(deps): ...`), push, open the PR against `main` with the GitHub MCP, and let the owner review & merge.
