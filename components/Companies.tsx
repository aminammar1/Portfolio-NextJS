'use client'

import React from 'react'

const companies = [
  { initials: 'PX', name: 'Pixelium', url: 'https://github.com/aminammar1/petcare-platform-next-fastify' },
  { initials: 'OS', name: 'Independent OSS', url: 'https://github.com/aminammar1?tab=repositories' },
  { initials: 'CP', name: 'Chess Puzzle', url: 'https://chess-puzzle-next.vercel.app/' },
  { initials: 'HT', name: 'Hanouti.tn', url: 'https://tunisian-shop-next-js.vercel.app' },
  { initials: 'PP', name: 'PetPulse', url: 'https://petcare-platforme-petpulse.vercel.app' },
  { initials: 'EB', name: 'ElBoutique', url: 'https://elboutique-store.vercel.app' },
]

export default function Companies() {
  const doubled = [...companies, ...companies]
  return (
    <section className="mx-auto max-w-4xl px-4 pt-12">
      <p className="section-label">Companies I&apos;ve worked with (2)</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        Shipped with an Agile team — and independently, in public.
      </h2>
      <div className="marquee-mask mt-6 overflow-hidden rounded-xl border border-line bg-card py-3">
        <div className="animate-marquee flex w-max gap-2 pr-2">
          {doubled.map((c, i) => (
            <a
              key={`${c.name}-${i}`}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 rounded-lg border border-line bg-card-2 px-3 py-2 text-[12px] font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              <span className="flex size-5 items-center justify-center rounded bg-accent-soft font-mono text-[10px] font-bold text-accent">
                {c.initials}
              </span>
              {c.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
