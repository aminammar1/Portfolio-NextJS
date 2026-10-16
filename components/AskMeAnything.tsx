'use client'

import React from 'react'
import { Mail } from 'lucide-react'

// TODO: paste your email below if different
const MAILTO = 'mailto:ammar.mohamdamine@gmail.com?subject=Hello%20from%20your%20portfolio&body=Hi%20Mohamed%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20talk%20about%3A'

export default function AskMeAnything() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <a
        href={MAILTO}
        className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent-soft hover:text-accent hover:border-accent shadow-xl"
      >
        <Mail className="size-4 text-accent" />
        Ask me anything… <span aria-hidden="true">→</span>
      </a>
    </div>
  )
}
