'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

type Project = {
  name: string
  year: string
  tags: string[]
  desc: string
  link: string
  repo?: string
  isNew?: boolean
}

const projects: Project[] = [
  {
    name: 'Chess Puzzle App',
    year: '2026',
    tags: ['Microservices', 'AI/RAG'],
    desc: 'Chess platform on AWS EKS — Lichess API + 4M+ puzzle dataset, RAG-based natural language selection, voice-to-move engine with NLP parsing (OpenAI, Deepgram STT). CI/CD via GitHub Actions behind Nginx.',
    link: 'https://chess-puzzle-next.vercel.app/',
    repo: 'https://github.com/aminammar1/chess-puzzle-next-go',
  },
  {
    name: 'turtles-cli',
    year: '2025',
    tags: ['AI Developer Tools', 'OSS'],
    desc: 'Project prep shell for coding assistants — audits a repo, shapes prompts, manages provider login, tests model connectivity and scaffolds assets before handing work to Claude, Codex or Gemini.',
    link: 'https://github.com/aminammar1/turtles-cli',
    isNew: true,
  },
  {
    name: 'Detective Files',
    year: '2026',
    tags: ['Game', 'Godot 4'],
    desc: 'Single-player 2D noir detective game: native Godot 4 client backed by a server-authoritative Go/Gin API with PostgreSQL and Redis.',
    link: 'https://github.com/aminammar1/detective-files-gadot-go',
    isNew: true,
  },
  {
    name: 'Drone Detect App',
    year: '2026',
    tags: ['Computer Vision', 'YOLO'],
    desc: 'Drone detection platform: YOLO detector (Python) served through a Go/Gin API with Remote ID resolution and Google Sheets export.',
    link: 'https://github.com/aminammar1/drone-detect-app-go',
    isNew: true,
  },
  {
    name: 'Arch Shell Assistant',
    year: '2026',
    tags: ['AI Agent', 'CLI'],
    desc: 'Plain-language → shell-command agent for Arch Linux: explains commands, rates their risk level and asks for confirmation before running anything.',
    link: 'https://github.com/aminammar1/arch-shell-assistant',
    isNew: true,
  },
  {
    name: 'Desktop Personal Assistant',
    year: '2026',
    tags: ['C++ · Qt 6', 'MVVM'],
    desc: 'Production-oriented Windows 11 automation assistant built in small vertical slices with clean architecture, SOLID boundaries and MVVM.',
    link: 'https://github.com/aminammar1/desktop-personal-assistant',
  },
  {
    name: 'Stockfish Analysis Service',
    year: '2026',
    tags: ['Go', 'AWS EC2'],
    desc: 'Hexagonal Go/Gin API driving a remote Stockfish engine on AWS EC2 via SSH — health checks and chess analysis from FEN, PGN, UCI or SAN input.',
    link: 'https://github.com/aminammar1/stockfish-go-ec2',
  },
  {
    name: 'AI CV-JD Matcher',
    year: '2025',
    tags: ['Multi-Agent LLM', 'FastAPI'],
    desc: 'AI-powered recruitment platform automating JD summarization, CV parsing, per-skill analysis and interview scheduling with multi-agent orchestration.',
    link: 'https://ai-powered-recruitment-app.vercel.app',
    repo: 'https://github.com/aminammar1/ai-powered-recruitment-app',
  },
  {
    name: 'Hanouti.tn',
    year: '2025',
    tags: ['E-Commerce', 'Stripe'],
    desc: 'E-commerce platform with cart, admin dashboard, Stripe/PayPal + cash-on-delivery payments and an AI chatbot (Next.js, Node.js, MongoDB, Docker).',
    link: 'https://tunisian-shop-next-js.vercel.app',
    repo: 'https://github.com/aminammar1/TunisianShop-NextJS',
  },
  {
    name: 'PetPulse',
    year: '2025',
    tags: ['Full Stack', 'Realtime'],
    desc: 'Petcare platform with Fastify + MongoDB backend, Next.js frontend, Socket.IO live tracking and a Hugging Face powered layer. Grew out of my Pixelium internship.',
    link: 'https://petcare-platforme-petpulse.vercel.app',
    repo: 'https://github.com/aminammar1/petcare-platform-next-fastify',
  },
  {
    name: 'ElBoutique',
    year: '2025',
    tags: ['E-Commerce', 'NestJS'],
    desc: 'Comprehensive shopping experience with NestJS, MongoDB, Stripe and Next.js.',
    link: 'https://elboutique-store.vercel.app',
    repo: 'https://github.com/aminammar1/elboutique-nextjs-app',
  },
  {
    name: 'CodeTrix',
    year: '2025',
    tags: ['Interviews', 'Convex'],
    desc: 'IT interview practice platform with Convex, Next.js, Tailwind, Docker and Clerk.',
    link: 'https://it-interview-platform.vercel.app',
  },
]

const card = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 9)

  return (
    <section id="projects" className="mx-auto max-w-4xl px-4 pt-14">
      <div className="flex items-baseline justify-between">
        <p className="section-label">Projects (12)</p>
        <a
          href="https://github.com/aminammar1?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          all repositories →
        </a>
      </div>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        I love shipping products and open source software.
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <motion.div
            key={p.name}
            {...card}
            transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
            className="row-hover group relative flex flex-col rounded-xl border border-line bg-card p-4"
          >
            {/* Stretched link covers the whole card */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.name}
              className="absolute inset-0 z-[1] rounded-xl"
            />
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-muted">{p.year}</span>
              {p.isNew ? (
                <span className="inline-flex items-center gap-1 pill !text-accent">
                  <Sparkles className="size-3" />
                  NEW
                </span>
              ) : (
                <span className="font-mono text-[11px] text-transparent transition-colors group-hover:text-muted">
                  #{'0' + (i + 1)}
                </span>
              )}
            </div>
            <h3 className="mt-2.5 text-[15px] font-semibold underline-offset-4 group-hover:underline">
              {p.name}
            </h3>
            <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-muted">{p.desc}</p>
            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {p.tags.map((t) => (
                <span key={`${p.name}-${t}`} className="pill">
                  {t}
                </span>
              ))}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} source code`}
                  className="relative z-[2] inline-flex size-5 items-center justify-center rounded bg-card text-muted transition-colors hover:text-foreground"
                >
                  <FaGithub className="size-3.5" />
                </a>
              )}
              <ArrowUpRight className="size-3.5 text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-md border border-line bg-card px-3 py-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
        >
          {showAll ? 'Show fewer' : `Show more (${projects.length})`}
        </button>
      </div>
    </section>
  )
}
