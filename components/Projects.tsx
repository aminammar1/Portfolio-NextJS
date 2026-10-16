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
  isNew?: boolean
  live?: boolean
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
    live: true,
  },
  {
    name: 'turtles-cli',
    year: '2025',
    tags: ['AI Tools', 'OSS'],
    link: 'https://github.com/aminammar1/turtles-cli',
    isNew: true,
  },
  {
    name: 'Detective Files',
    year: '2026',
    tags: ['Godot 4', 'Go/Gin'],
    link: 'https://github.com/aminammar1/detective-files-gadot-go',
    isNew: true,
  },
  {
    name: 'Drone Detect App',
    year: '2026',
    tags: ['YOLO', 'Go/Gin'],
    link: 'https://github.com/aminammar1/drone-detect-app-go',
    isNew: true,
  },
  {
    name: 'Arch Shell Assistant',
    year: '2026',
    tags: ['AI Agent', 'CLI'],
    link: 'https://github.com/aminammar1/arch-shell-assistant',
    isNew: true,
  },
  {
    name: 'Desktop Personal Assistant',
    year: '2026',
    tags: ['C++ · Qt 6', 'MVVM'],
    link: 'https://github.com/aminammar1/desktop-personal-assistant',
  },
  {
    name: 'Stockfish Analysis Service',
    year: '2026',
    tags: ['Go', 'AWS EC2'],
    link: 'https://github.com/aminammar1/stockfish-go-ec2',
  },
  {
    name: 'AI CV-JD Matcher',
    year: '2025',
    tags: ['Multi-Agent', 'FastAPI'],
    link: 'https://ai-powered-recruitment-app.vercel.app',
    repo: 'https://github.com/aminammar1/ai-powered-recruitment-app',
    live: true,
  },
  {
    name: 'Hanouti.tn',
    year: '2025',
    tags: ['E-Commerce', 'Stripe'],
    link: 'https://tunisian-shop-next-js.vercel.app',
    repo: 'https://github.com/aminammar1/TunisianShop-NextJS',
    live: true,
  },
  {
    name: 'PetPulse',
    year: '2025',
    tags: ['Full Stack', 'Realtime'],
    link: 'https://petcare-platforme-petpulse.vercel.app',
    repo: 'https://github.com/aminammar1/petcare-platform-next-fastify',
    live: true,
  },
  {
    name: 'ElBoutique',
    year: '2025',
    tags: ['NestJS', 'Stripe'],
    link: 'https://elboutique-store.vercel.app',
    repo: 'https://github.com/aminammar1/elboutique-nextjs-app',
    live: true,
  },
  {
    name: 'CodeTrix',
    year: '2025',
    tags: ['Convex', 'Clerk'],
    link: 'https://it-interview-platform.vercel.app',
  },
]

function ProjectIcon({ project }: { project: Project }) {
  const host = hostOf(project.link)
  const [failed, setFailed] = useState(false)
  if (!host || failed) {
    return (
      <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-line bg-card-2">
        <FaGithub className="size-4 text-muted" />
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

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="projects" className="mx-auto max-w-4xl scroll-mt-16 px-4 pt-14">
      <div className="flex items-baseline justify-between">
        <p className="section-label">Projects ({projects.length})</p>
        <a
          href="https://github.com/aminammar1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          all repositories &rarr;
        </a>
      </div>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        I love shipping products and open source software.
      </h2>

      <div className="mt-6 flex flex-col gap-2">
        {visible.map((p) => (
          <div
            key={p.name}
            className="row-hover group relative flex items-center gap-3 rounded-xl border border-line bg-card px-3 py-2.5"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="absolute inset-0 z-[1] rounded-xl"
            />
            <ProjectIcon project={p} />
            <span className="min-w-0 flex-1 truncate text-[13px] font-medium group-hover:underline group-hover:underline-offset-4">
              {p.name}
            </span>
            {p.isNew ? (
              <span className="pill shrink-0 !text-accent">NEW</span>
            ) : p.live ? (
              <span className="live-dot shrink-0" />
            ) : (
              <span className="hidden shrink-0 font-mono text-[10px] text-muted/60 sm:block">{p.year}</span>
            )}
            <div className="hidden shrink-0 gap-1 md:flex">
              {p.tags.map((t) => (
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
                className="relative z-[2] hidden shrink-0 rounded p-1 text-muted transition-colors hover:bg-card-2 hover:text-foreground sm:block"
              >
                <FaGithub className="size-3.5" />
              </a>
            )}
            <ArrowUpRight className="size-4 shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
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
