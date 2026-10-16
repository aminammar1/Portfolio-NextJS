import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ArrowUpRight } from 'lucide-react'

const repos = [
  {
    name: 'chess-coach-openings-RAG',
    lang: 'Jupyter · Python',
    desc: 'Chess opening coach powered by retrieval augmented generation.',
    year: '2026',
  },
  {
    name: 'quran-app-react-native',
    lang: 'TypeScript · Expo',
    desc: 'Modern React Native app for reading, exploring and listening to the Holy Quran.',
    year: '2026',
  },
  {
    name: 'video-player-nextjs',
    lang: 'TypeScript · Next.js',
    desc: 'Browser-based synced video player — designed to watch together on one screen.',
    year: '2025',
  },
  {
    name: 'image-generator-next-app',
    lang: 'TypeScript · Replicate',
    desc: 'AI creative studio — generate images, edit photos and create videos from one workspace.',
    year: '2026',
  },
  {
    name: 'mail-tracker-golang-fiber',
    lang: 'Go · Fiber',
    desc: 'Lightweight Fiber service for tracked Gmail sending and per-recipient open activity.',
    year: '2026',
  },
  {
    name: 'farm-managment-app',
    lang: 'TypeScript · Electron',
    desc: 'Farming management desktop app for Tunisian farmers — Fastify backend + Electron client.',
    year: '2026',
  },
  {
    name: 'movie-app-go-react',
    lang: 'Go · Gin · MongoDB',
    desc: 'Full-stack movie explorer with a Go/Gin backend and React (Vite) client.',
    year: '2025',
  },
  {
    name: 'omnitrix-ben10-react',
    lang: 'React Native',
    desc: 'Fan project recreating the Omnitrix device from Ben 10 — selectable aliens, interactive FX.',
    year: '2026',
  },
]

export default function OpenSource() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Open Source (8)</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        More experiments living in public.
      </h2>

      <div className="mt-6 overflow-hidden rounded-xl border border-line">
        {repos.map((r, i) => (
          <a
            key={r.name}
            href={`https://github.com/aminammar1/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`row-hover group flex items-center gap-4 px-4 py-3 ${
              i !== repos.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <FaGithub className="size-4 shrink-0 text-muted" />
            <span className="w-48 shrink-0 truncate font-mono text-[13px] font-medium underline-offset-4 group-hover:underline">
              {r.name}
            </span>
            <span className="hidden flex-1 truncate text-[13px] text-muted sm:block">
              {r.desc}
            </span>
            <span className="pill hidden md:inline-flex">{r.lang}</span>
            <span className="ml-auto flex items-center gap-2 font-mono text-[11px] text-muted">
              {r.year}
              <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
