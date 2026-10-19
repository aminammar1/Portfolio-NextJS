'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Briefcase, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import PanelHeading from '@/components/PanelHeading'

type Position = {
  role: string
  type: string
  period: string
  summary: string
  tech: string[]
}

type Job = {
  company: string
  initials: string
  logoPath: string | null
  url: string | null
  location: string
  isCurrent?: boolean
  positions: Position[]
}

const jobs: Job[] = [
  {
    company: 'Pixelium',
    initials: 'PX',
    logoPath: '/work/pixelium.svg',
    url: 'https://pixelium.tech',
    location: 'Sousse, Tunisia',
    positions: [
      {
        role: 'Web Development Intern',
        type: 'Full Time',
        period: 'Feb 2024 — May 2024',
        summary:
          'Built a real-time animal tracking platform (Next.js, Fastify, MongoDB) with live dashboards. Improved API performance and code quality via profiling, refactoring, and code reviews in an Agile/Scrum team. It later shipped to production as PetPulse.',
        tech: ['Next.js', 'Fastify', 'MongoDB', 'Agile/Scrum'],
      },
    ],
  },
  {
    company: 'Independent · Open Source Builder',
    initials: 'OS',
    logoPath: null,
    url: 'https://github.com/aminammar1?tab=repositories',
    location: 'Monastir, Tunisia (Remote)',
    isCurrent: true,
    positions: [
      {
        role: 'Full Stack Developer',
        type: 'Self-directed',
        period: '2024 — Present',
        summary:
          'Designing and shipping complete products end to end: chess microservices on AWS EKS, Go APIs (Echo, Gin, Fiber), a C++/Qt desktop assistant, and AI agent tooling. 12+ deployed projects, 40 public repositories.',
        tech: ['Next.js', 'TypeScript', 'Go', 'AWS', 'Docker', 'LLM/MCP', 'PostgreSQL'],
      },
    ],
  },
]

function Logo({ job }: { job: Job }) {
  const [failed, setFailed] = useState(false)
  if (job.logoPath && !failed) {
    return (
      <span className="relative size-10 shrink-0 overflow-hidden rounded-md border border-line bg-card">
        <Image
          src={job.logoPath}
          alt={`${job.company} logo`}
          fill
          sizes="40px"
          className="object-cover grayscale transition-all duration-200 group-hover:grayscale-0"
          onError={() => setFailed(true)}
        />
      </span>
    )
  }
  return (
    <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-line bg-card font-mono text-[12px] font-bold text-muted">
      {job.initials}
    </span>
  )
}

export default function Work() {
  const [open, setOpen] = useState<string | null>(`${jobs[0].company}-0`)

  return (
    <section id="work" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 pb-2 pt-14">
      <PanelHeading
        title="Work"
        count={jobs.length}
        description="I've been fortunate to work with amazing people"
      />

      <div>
        {jobs.map((job) => (
          <div key={job.company} className="border-b border-line py-6 last:border-b-0">
            <div className="group flex items-center gap-3">
              <Logo job={job} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  {job.url ? (
                    <a
                      href={job.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="truncate text-sm font-semibold hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="truncate text-sm font-semibold">{job.company}</span>
                  )}
                  {job.isCurrent && (
                    <span className="relative flex size-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                    </span>
                  )}
                </div>
                <p className="truncate text-xs text-muted">{job.location}</p>
              </div>
              {job.url && (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${job.company} link`}
                  className="shrink-0 text-muted transition-colors hover:text-accent"
                >
                  <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>

            <div className="mb-1 ml-5 mt-2 border-l border-dashed border-line pl-5">
              {job.positions.map((pos, pi) => {
                const key = `${job.company}-${pi}`
                const isOpen = open === key
                return (
                  <div key={key}>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpen(isOpen ? null : key)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') setOpen(isOpen ? null : key)
                      }}
                      className="-mx-2 flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 outline-none transition-colors hover:bg-card-2 focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <Briefcase className="size-4 shrink-0 text-muted" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{pos.role}</p>
                        <p className="truncate text-xs text-muted">
                          {pos.type} · {pos.period}
                        </p>
                      </div>
                      <ChevronDown
                        className={cn('size-4 shrink-0 text-muted transition-transform', isOpen && 'rotate-180')}
                      />
                    </div>
                    <div
                      className={cn(
                        'grid transition-all duration-300 ease-out',
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-3 pl-7">
                          <p className="mb-3 text-[13px] leading-relaxed text-muted">{pos.summary}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {pos.tech.map((t) => (
                              <span key={`${key}-${t}`} className="pill">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
