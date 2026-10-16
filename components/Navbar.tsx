'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Work', path: '#work' },
  { title: 'Projects', path: '#projects' },
  { title: 'Stack', path: '#stack' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-4">
        <Link href="#about" className="font-mono text-[13px] font-semibold tracking-tight">
          mohamedamine.dev
        </Link>
        <nav className="hidden items-center gap-4 sm:flex">
          {navLinks.map((l) => (
            <Link
              key={l.title}
              href={l.path}
              className="text-[13px] text-muted transition-colors hover:text-accent"
            >
              {l.title}
            </Link>
          ))}
          <a
            href="/mohamedaminammar_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted transition-colors hover:text-accent"
          >
            R&eacute;sum&eacute;
          </a>
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex size-7 items-center justify-center rounded-md text-muted hover:text-foreground"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line px-4 py-3 sm:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.title}>
                <Link
                  href={l.path}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
                >
                  {l.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/mohamedaminammar_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md px-2 py-2 text-sm text-muted hover:bg-card hover:text-foreground"
              >
                R&eacute;sum&eacute;
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
