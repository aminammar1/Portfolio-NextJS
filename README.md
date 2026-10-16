# Portfolio — Mohamed Amine Ammar

Personal portfolio of **Mohamed Amine Ammar** — Full Stack Software Developer (Monastir, Tunisia).
Compact resume-dossier design (light + dark theme) built with Next.js 16, React 19 and Tailwind v4.

**Live:** https://mohamedamineammar-portfolio.vercel.app/

## Sections

| Section        | Content                                                     |
| -------------- | ----------------------------------------------------------- |
| Intro          | Name, role, hello paragraph, contact column with avatar      |
| About          | Narrative + milestone cards (CERT / OSS / CLOUD / SHIPPED)   |
| Work (2)       | Pixelium internship + independent open-source builder        |
| Technologies   | Marquee of the day-to-day stack                              |
| Projects (12)  | Flagship shipped products (live + source links, NEW badges)  |
| Open Source(8) | Repo list with language pills                                |
| Education (4)  | Degree, certifications, languages                            |
| Stack (38)     | Numbered categories of tools (per the current CV)            |
| Footer         | Live GitHub contributions heatmap, socials, theme toggle     |

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

Projects are plain data — edit `components/Projects.tsx` (flagship grid) or
`components/OpenSource.tsx` (repo list):

```ts
{ name, year, tags: ['E-Commerce'], desc, link, repo?, isNew? }
```

See `.opencode/skill/portfolio-ship/SKILL.md` for the full maintenance/ship flow
(dep upgrades, doctor checks, design tokens, PR process).

## License

Personal project — all rights reserved.
