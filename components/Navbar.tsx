'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Work', path: '#work' },
  { title: 'Projects', path: '#projects' },
  { title: 'Stack', path: '#stack' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
      {/* Desktop */}
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4">
        <Link href="#" className="font-mono text-[13px] font-semibold">
          mohamedamine.dev
        </Link>

        <nav className="flex items-center gap-3">
          <ul className="hidden items-center gap-4 sm:flex">
            {navLinks.map((l) => (
              <li key={l.title}>
                <Link href={l.path} className="text-[13px] text-muted transition-colors hover:text-foreground">
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <a
            href="/mohamedaminammar_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1 text-[13px] text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            <FileText className="size-3.5" />
            Résumé
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex size-7 items-center justify-center rounded-md text-muted hover:text-foreground sm:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </div>

      {/* Mobile */}
      {open && (
        <nav className="border-t border-line px-4 py-3 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.title}>
                <Link
                  href={l.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
                >
                  {l.title}
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/mohamedaminammar_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
              >
                Résumé
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
