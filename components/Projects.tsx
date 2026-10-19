'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

type Project = {
  name: string
  year: string
  tags: string[]
  link: string
  repo?: string
  shot?: string
  note: string
}

function hostOf(url: string): string | null {
  try {
    const h = new URL(url).hostname
    return h === 'github.com' ? null : h
  } catch {
    return null
  }
}

const projects: Project[] = [
  {
    name: 'Chess Puzzle App',
    year: '2026',
    tags: ['Microservices', 'RAG'],
    link: 'https://chess-puzzle-next.vercel.app/',
    repo: 'https://github.com/aminammar1/chess-puzzle-next-go',
    shot: '/projects/image1.png',
    note: 'Live',
  },
  {
    name: 'AI CV-JD Matcher',
    year: '2025',
    tags: ['Multi-Agent', 'FastAPI'],
    link: 'https://ai-powered-recruitment-app.vercel.app',
    repo: 'https://github.com/aminammar1/ai-powered-recruitment-app',
    shot: '/projects/image6.png',
    note: 'Live',
  },
  {
    name: 'Hanouti.tn',
    year: '2025',
    tags: ['E-Commerce', 'Stripe'],
    link: 'https://tunisian-shop-next-js.vercel.app',
    repo: 'https://github.com/aminammar1/TunisianShop-NextJS',
    shot: '/projects/image2.png',
    note: 'Live',
  },
  {
    name: 'PetPulse',
    year: '2025',
    tags: ['Full Stack', 'Realtime'],
    link: 'https://petcare-platforme-petpulse.vercel.app',
    repo: 'https://github.com/aminammar1/petcare-platform-next-fastify',
    shot: '/projects/image5.jpg',
    note: 'Live',
  },
  {
    name: 'ElBoutique',
    year: '2025',
    tags: ['NestJS', 'Stripe'],
    link: 'https://elboutique-store.vercel.app',
    repo: 'https://github.com/aminammar1/elboutique-nextjs-app',
    shot: '/projects/image3.png',
    note: 'Live',
  },
  {
    name: 'CodeTrix',
    year: '2025',
    tags: ['Convex', 'Clerk'],
    link: 'https://it-interview-platform.vercel.app',
    shot: '/projects/image7.png',
    note: 'Live',
  },
]

function ProjectIcon({ project }: { project: Project }) {
  const host = hostOf(project.link)
  const [failed, setFailed] = useState(false)
  if (project.shot && !failed) {
    return (
      <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-line bg-card-2">
        <Image
          src={project.shot}
          alt=""
          fill
          sizes="36px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </span>
    )
  }
  if (!host || failed) {
    const words = project.name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean)
    const initials =
      words.length > 1
        ? (words[0][0] + words[1][0]).toUpperCase()
        : project.name.slice(0, 2).toUpperCase()
    return (
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-accent-soft font-mono text-[11px] font-bold text-accent">
        {initials}
      </span>
    )
  }
  return (
    <span className="flex size-8 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-card-2">
      <Image
        src={`https://www.google.com/s2/favicons?domain=${host}&sz=64`}
        alt=""
        width={20}
        height={20}
        unoptimized
        onError={() => setFailed(true)}
      />
    </span>
  )
}

import PanelHeading from '@/components/PanelHeading'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 pb-2 pt-14">
      <PanelHeading
        title="Projects"
        count={projects.length}
        description="I love shipping products and open source software"
      />

      <div className="mt-6 flex flex-col">
        {visible.map((p) => (
          <div
            key={p.name}
            role="link"
            tabIndex={0}
            onClick={() => window.open(p.link, '_blank', 'noopener')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                window.open(p.link, '_blank', 'noopener')
              }
            }}
            className="group relative -mx-2 flex cursor-pointer items-center gap-3 rounded-lg border-b border-line px-2 py-3 outline-none transition-colors last:border-b-0 hover:bg-card-2 focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ProjectIcon project={p} />
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2">
                <span className="truncate text-sm font-semibold">{p.name}</span>
                <span className="relative flex size-2 shrink-0" title={p.note}>
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
              </span>
              <span className="mt-0.5 block text-xs text-muted">{p.year}</span>
            </span>
            <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
              {p.tags.slice(0, 2).map((t) => (
                <span key={`${p.name}-${t}`} className="pill">
                  {t}
                </span>
              ))}
            </div>
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} source code`}
                onClick={(e) => e.stopPropagation()}
                className="relative z-[2] hidden shrink-0 rounded p-1 text-muted transition-colors hover:bg-card hover:text-foreground sm:block"
              >
                <FaGithub className="size-4" />
              </a>
            )}
            <ArrowUpRight className="size-4 shrink-0 text-muted" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-md border border-line bg-card px-3 py-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
        >
          {showAll ? 'Show less' : `Show more (${projects.length})`}
        </button>
      </div>
    </section>
  )
}
