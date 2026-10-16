'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import { FileText, Menu, X } from 'lucide-react'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Work', path: '#work' },
  { title: 'Projects', path: '#projects' },
  { title: 'Stack', path: '#stack' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed inset-x-0 top-3 z-50 px-4">
      <div className="mx-auto flex max-w-4xl justify-end">
        <nav className="flex items-center gap-1 rounded-full border border-line bg-card/90 py-1.5 pl-4 pr-1.5 shadow-lg backdrop-blur-md">
          <ul className="hidden items-center gap-4 sm:flex">
            {navLinks.map((l) => (
              <li key={l.title}>
                <Link
                  href={l.path}
                  className="text-[13px] font-medium text-muted transition-colors hover:text-accent"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/mohamedaminammar_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Résumé"
            className="hidden size-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent sm:inline-flex"
          >
            <FileText className="size-4" />
          </a>
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="inline-flex size-7 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent sm:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </nav>
      </div>
      {open && (
        <div className="mx-auto mt-2 flex max-w-4xl justify-end">
          <nav className="w-44 rounded-2xl border border-line bg-card/95 p-2 shadow-lg backdrop-blur-md sm:hidden">
            <ul className="flex flex-col">
              {navLinks.map((l) => (
                <li key={l.title}>
                  <Link
                    href={l.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-card-2 hover:text-foreground"
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
                  className="block rounded-xl px-3 py-2 text-sm text-muted transition-colors hover:bg-card-2 hover:text-foreground"
                >
                  R&eacute;sum&eacute;
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
}
