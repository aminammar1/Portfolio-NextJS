'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, FileText, X } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Work', path: '#work' },
  { title: 'Projects', path: '#projects' },
  { title: 'Stack', path: '#stack' },
]

function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((entry) => entry.isIntersecting)
        if (intersecting.length === 0) return
        const closest = intersecting.reduce((best, entry) =>
          entry.boundingClientRect.top < best.boundingClientRect.top ? entry : best
        )
        setActive(closest.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => {
      observer.disconnect()
      setActive(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['about', 'work', 'projects', 'stack'])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open ])

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col px-4 pt-6">
        <div className="flex items-center justify-end">
          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/50 px-2 py-0.5 font-medium text-zinc-800 shadow-lg shadow-zinc-900/15 ring-1 ring-zinc-900/5 backdrop-blur md:px-3 dark:bg-zinc-900/70 dark:text-zinc-200 dark:shadow-zinc-800/5 dark:ring-white/10">
              {navLinks.map((l) => {
                const isActive = active === l.path.slice(1)
                return (
                  <li key={l.title}>
                    <Link
                      href={l.path}
                      className={cn(
                        'relative block px-2 py-1.5 text-[15px] transition',
                        isActive ? 'text-accent' : 'hover:text-accent'
                      )}
                    >
                      {l.title}
                      {isActive && (
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                      )}
                    </Link>
                  </li>
                )
              })}
              <li className="flex items-center">
                <a
                  href="/cv_mohamedamineammar_fullstack.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Résumé"
                  className="rounded-full p-1.5 transition-colors hover:text-accent"
                >
                  <FileText className="size-4" />
                </a>
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          <div className="pointer-events-auto md:hidden">
            <button
              onClick={() => setOpen(true)}
              className="group flex items-center rounded-full bg-white/50 px-4 py-2 text-sm font-medium text-zinc-950 shadow-lg shadow-zinc-900/15 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/70 dark:text-zinc-200 dark:shadow-zinc-800/5 dark:ring-white/10"
            >
              Menu
              <ChevronDown className="ml-3 size-3 text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"
            />
            <motion.nav
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 sm:left-auto sm:right-4 sm:w-80 dark:bg-zinc-900 dark:ring-zinc-800"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="-m-1 p-1">
                  <X className="size-6 text-zinc-500 dark:text-zinc-400" />
                </button>
                <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
              </div>
              <ul className="mt-6 flex flex-col gap-1">
                {navLinks.map((l) => (
                  <li key={l.title}>
                    <Link
                      href={l.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block rounded-xl px-3 py-2.5 text-base transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800',
                        active === l.path.slice(1) ? 'text-accent' : 'text-zinc-800 dark:text-zinc-200'
                      )}
                    >
                      {l.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    href="/cv_mohamedamineammar_fullstack.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl px-3 py-2.5 text-base text-zinc-800 transition-colors hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                  >
                    Résumé
                  </a>
                </li>
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
