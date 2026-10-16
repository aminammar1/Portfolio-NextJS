'use client'

import React from 'react'

const rowA = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'FastAPI', 'Fastify', 'NestJS',
]
const rowB = [
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Nginx', 'GitHub Actions',
]

function Track({ items, reverse }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items]
  return (
    <div className="marquee-mask overflow-hidden py-2">
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {doubled.map((label, i) => (
          <span key={`${label}-${i}`} className="pill mx-1.5">
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section aria-label="Technologies" className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label mb-4">Technologies I work with (16)</p>
      <div className="rounded-xl border border-line bg-card py-3">
        <Track items={rowA} />
        <Track items={rowB} reverse />
      </div>
    </section>
  )
}
