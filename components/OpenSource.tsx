'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

type Repo = {
  name: string
  desc: string
  lang: string
  year: string
}

const repos: Repo[] = [
  {
    name: 'chess-coach-openings-RAG',
    desc: 'Chess opening coach powered by retrieval augmented generation.',
    lang: 'Python',
    year: '2026',
  },
  {
    name: 'quran-app-react-native',
    desc: 'Modern React Native app for reading, exploring and listening to the Holy Quran.',
    lang: 'TypeScript · Expo',
    year: '2026',
  },
  {
    name: 'image-generator-next-app',
    desc: 'AI creative studio — generate images, edit photos and create videos from one workspace.',
    lang: 'TypeScript · Replicate',
    year: '2026',
  },
  {
    name: 'mail-tracker-golang-fiber',
    desc: 'Lightweight Fiber service for tracked Gmail sending and per-recipient open activity.',
    lang: 'Go · Fiber',
    year: '2026',
  },
  {
    name: 'farm-managment-app',
    desc: 'Farming management desktop app for Tunisian farmers — Fastify backend + Electron client.',
    lang: 'TypeScript · Electron',
    year: '2026',
  },
  {
    name: 'movie-app-go-react',
    desc: 'Full-stack movie explorer with a Go/Gin backend and React (Vite) client.',
    lang: 'Go · Gin',
    year: '2025',
  },
  {
    name: 'video-player-nextjs',
    desc: 'Browser-based synced video player — designed to watch together on one screen.',
    lang: 'TypeScript · Next.js',
    year: '2025',
  },
  {
    name: 'omnitrix-ben10-react',
    desc: 'Fan project recreating the Omnitrix device from Ben 10 — selectable aliens, interactive FX.',
    lang: 'React Native',
    year: '2026',
  },
]

export default function OpenSource() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Open Source ({repos.length})</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">More experiments living in public.</h2>

      <div className="mt-6 overflow-hidden rounded-xl border border-line">
        {repos.map((r, i) => (
          <a
            key={r.name}
            href={`https://github.com/aminammar1/${r.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`row-hover group flex items-center gap-3 px-4 py-3 ${
              i !== repos.length - 1 ? 'border-b border-line' : ''
            }`}
          >
            <FaGithub className="size-4 shrink-0 text-muted" />
            <span className="w-44 shrink-0 truncate font-mono text-[13px] font-medium group-hover:underline group-hover:underline-offset-4">
              {r.name}
            </span>
            <span className="hidden min-w-0 flex-1 truncate text-[13px] text-muted sm:block">{r.desc}</span>
            <span className="pill hidden shrink-0 md:inline-flex">{r.lang}</span>
            <span className="ml-auto flex shrink-0 items-center gap-2 font-mono text-[11px] text-muted sm:ml-0">
              {r.year}
              <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
