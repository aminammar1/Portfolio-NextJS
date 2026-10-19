'use client'

import React, { useState } from 'react'
import Image from 'next/image'

// Honest version: one real internship + independent work. No fake logos.
const entries = [
  {
    initials: 'PX',
    logo: '/work/pixelium.svg',
    name: 'Pixelium',
    detail: 'Software Engineer Intern · Sousse',
    url: '#work',
  },
  {
    initials: 'IN',
    logo: null,
    name: 'Independent',
    detail: 'Freelance · Monastir (Remote)',
    url: 'mailto:ammar.mohamdamine@gmail.com',
  },
  {
    initials: 'OS',
    logo: null,
    name: 'Open Source',
    detail: 'Public repos · GitHub',
    url: 'https://github.com/aminammar1?tab=repositories',
  },
]

function EntryLogo({ initials, logo, name }: { initials: string; logo: string | null; name: string }) {
  const [failed, setFailed] = useState(false)
  if (logo && !failed) {
    return (
      <span className="relative size-9 shrink-0 overflow-hidden rounded-md border border-line bg-card">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="36px"
          className="object-cover"
          onError={() => setFailed(true)}
        />
      </span>
    )
  }
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-accent-soft font-mono text-[12px] font-bold text-accent">
      {initials}
    </span>
  )
}

export default function Companies() {
  return (
    <section className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 py-6">
      <div className="grid gap-2 sm:grid-cols-3">
        {entries.map((e) => (
          <a
            key={e.name}
            href={e.url}
            target={e.url.startsWith('http') || e.url.startsWith('mailto') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-line bg-card px-3 py-3 transition-colors hover:border-accent/50"
          >
            <EntryLogo initials={e.initials} logo={e.logo} name={e.name} />
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold group-hover:text-accent">
                {e.name}
              </span>
              <span className="block truncate text-xs text-muted">{e.detail}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
