import React from 'react'
import { MapPin } from 'lucide-react'

const jobs = [
  {
    company: 'Independent · Open Source Builder',
    location: 'Monastir, Tunisia (Remote)',
    role: 'Full Stack Developer',
    type: 'Self-directed',
    period: '2024 — Present',
    summary:
      'Designing and shipping complete products end to end: chess microservices on AWS EKS, Go APIs (Echo, Gin, Fiber), a C++/Qt desktop assistant and AI agent tooling — 12+ deployed projects, 40 public repositories.',
    tech: ['Next.js', 'TypeScript', 'Go', 'AWS', 'Docker', 'LLM/MCP', 'PostgreSQL'],
  },
  {
    company: 'Pixelium',
    location: 'Sousse, Tunisia',
    role: 'Web Development Intern',
    type: 'Full Time',
    period: 'Feb 2024 — May 2024',
    summary:
      'Built a real-time animal tracking platform (Next.js, Fastify, MongoDB) with live dashboards. Improved API performance and code quality through profiling, refactoring and code reviews in an Agile/Scrum team — later shipped to production as PetPulse.',
    tech: ['Next.js', 'Fastify', 'MongoDB', 'Realtime', 'Agile/Scrum'],
  },
]

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Work (2)</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        I&apos;ve learned by shipping — at companies and in public.
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {jobs.map((job) => (
          <div key={job.company} className="row-hover rounded-xl border border-line bg-card p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-semibold">{job.company}</h3>
              <span className="flex items-center gap-1 font-mono text-[12px] text-muted">
                <MapPin className="size-3" />
                {job.location}
              </span>
            </div>
            <div className="mt-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <p className="text-[13px] text-foreground/85">
                {job.role} · <span className="text-muted">{job.type}</span>
              </p>
              <span className="font-mono text-[12px] text-muted">{job.period}</span>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{job.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <span key={`${job.company}-${t}`} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
