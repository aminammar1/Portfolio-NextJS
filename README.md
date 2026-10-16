# Portfolio — Mohamed Amine Ammar

Personal portfolio of **Mohamed Amine Ammar** — Full Stack Software Developer (Monastir, Tunisia).
Compact resume-dossier design (light + dark theme) built with Next.js 16, React 19 and Tailwind v4.

**Live:** https://mohamedamineammar-portfolio.vercel.app/

## Sections

| Section        | Content                                                              |
| -------------- | -------------------------------------------------------------------- |
| Hero           | Avatar + name + quip, time greeting, intro, contact grid, heatmap     |
| Companies      | Marquee of places shipped with (Pixelium, OSS, live products)        |
| Projects (12)  | Compact rows: favicon icon, live/NEW dot, tags, repo + visit links    |
| Open Source(8) | Repo rows with description, language pill, year                      |
| Music          | Spotify embed + playlist tiles (TODO: paste real Spotify URL)        |
| Work (2)       | Accordion rows: Pixelium internship + independent builder            |
| Education (4)  | Degree, certifications (Anthropic/AWS/KodeKloud), languages          |
| Stack (38)     | Numbered categories of tools (per the current CV)                    |
| Footer         | AMINE ASCII banner, live Tunis clock, socials, theme toggle          |
| Widget         | Floating “Ask me anything” mailto button                             |

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript**
- **Tailwind CSS v4** with CSS-variable theming (`:root` / `.dark`)
- **framer-motion** for reveal animations (respects `prefers-reduced-motion`)
- **Geist / Geist Mono** via `next/font`
- Light/dark toggle persisted in `localStorage`, applied pre-hydration (no flash)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Script              | What it does                                        |
| ------------------- | --------------------------------------------------- |
| `npm run dev`       | Dev server (Turbopack)                              |
| `npm run build`     | Production build                                    |
| `npm run start`     | Serve the production build                          |
| `npm run lint`      | ESLint                                              |
| `npm run typecheck` | `tsc --noEmit`                                      |
| `npm run doctor`    | lint + typecheck + build (full pre-flight health)    |

## Adding a project

Projects are plain data — edit `components/Projects.tsx` (compact rows) or
`components/OpenSource.tsx` (repo list):

```ts
{ name, year, tags: ['E-Commerce'], link, repo?, isNew?, live? }
```

See `.opencode/skill/portfolio-ship/SKILL.md` for the full maintenance/ship flow
(dep upgrades, doctor checks, design tokens, PR process).

## License

Personal project — all rights reserved.
