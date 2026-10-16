'use client'

import React from 'react'
import Link from 'next/link'

export default function HeroLinksClient() {
  return (
    <p className="mt-4">
      Explore my{' '}
      <Link
        href="#work"
        className="font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
      >
        work experience
      </Link>
      , browse my{' '}
      <Link
        href="#projects"
        className="font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
      >
        projects
      </Link>{' '}
      and{' '}
      <Link
        href="#projects"
        className="font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
      >
        open source
      </Link>
      , or check out my{' '}
      <Link
        href="#stack"
        className="font-medium underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
      >
        technical stack
      </Link>{' '}
      to see how I bring ideas to life.
    </p>
  )
}
