'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

type Job = {
  company: string
  initials: string
  logoPath: string | null
  location: string
  role: string
  type: string
  period: string
  summary: string
  tech: string[]
}

const jobs: Job[] = [
  {
    company: 'Pixelium',
    initials: 'PX',
    // TODO(logo): paste your Pixelium logo URL here, or drop the file at
    // public/logos/pixelium.png and set logoPath to '/logos/pixelium.png'.
    logoPath: null,
    location: 'Sousse, Tunisia',
    role: 'Web Development Intern',
    type: 'Full Time',
    period: 'Feb 2024 — May 2024',
    summary:
      'Built a real-time animal tracking platform (Next.js, Fastify, MongoDB) with live dashboards. Improved API performance and code quality via profiling, refactoring, and code reviews in an Agile/Scrum team — later shipped to production as PetPulse.',
    tech: ['Next.js', 'Fastify', 'MongoDB', 'Agile/Scrum'],
  },
  {
    company: 'Independent · Open Source Builder',
    initials: '◆',
    logoPath: null,
    location: 'Monastir, Tunisia (Remote)',
    role: 'Full Stack Developer',
    type: 'Self-directed',
    period: '2024 — Present',
    summary:
      'Designing and shipping complete products end to end: chess microservices on AWS EKS, Go APIs (Echo, Gin, Fiber), a C++/Qt desktop assistant, and AI agent tooling — 12+ deployed projects, 40 public repositories.',
    tech: ['Next.js', 'TypeScript', 'Go', 'AWS', 'Docker', 'LLM/MCP', 'PostgreSQL'],
  },
]

function Logo({ job }: { job: Job }) {
  const [failed, setFailed] = useState(false)
  if (job.logoPath && !failed) {
    return (
      <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-md border border-line bg-card-2">
        <Image src={job.logoPath} alt={`${job.company} logo`} width={28} height={28} onError={() => setFailed(true)} />
      </span>
    )
  }
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-line bg-accent-soft font-mono text-[11px] font-bold text-accent">
      {job.initials}
    </span>
  )
}

export default function Work() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="work" className="mx-auto max-w-4xl scroll-mt-16 px-4 pt-14">
      <p className="section-label">Work ({jobs.length})</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        I&apos;ve been fortunate to work with some amazing companies and people.
      </h2>

      <div className="mt-6 flex flex-col gap-2">
        {jobs.map((job, i) => {
          const isOpen = open === i
          return (
            <div
              key={job.company}
              role="button"
              tabIndex={0}
              onClick={() => setOpen(isOpen ? null : i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setOpen(isOpen ? null : i)
              }}
              className="row-hover cursor-pointer rounded-xl border border-line bg-card p-4 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <Logo job={job} />
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-semibold">{job.company}</p>
                    <p className="truncate text-[11.5px] text-muted">
                      {job.role} · {job.location}
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1 font-mono text-[11px] text-muted">
                  <span className="hidden sm:block">{job.period}</span>
                  <ChevronRight className={`size-3.5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} />
                </div>
              </div>

              {isOpen && (
                <div className="mt-4 border-t border-line pt-3">
                  <p className="mb-1 font-mono text-[11px] text-muted">
                    {job.type} · {job.period}
                  </p>
                  <p className="mb-3 text-[13px] leading-relaxed text-foreground/90">{job.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={`${job.company}-${t}`} className="pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
