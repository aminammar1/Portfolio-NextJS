'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
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

/**
 * Mobile menu with CSS-keyframe enter/exit (a short "closing" phase keeps the
 * 150ms fade-out the AnimatePresence version had) -- no animation library on
 * the critical path.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const active = useActiveSection(['about', 'work', 'projects', 'stack'])

  const close = () => {
    if (!open || closing) return
    setClosing(true)
    closeTimer.current = setTimeout(() => {
      setOpen(false)
      setClosing(false)
    }, 160)
  }

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, closing])

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex flex-col px-4 pt-6">
        <div className="flex items-center justify-end">
          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-md px-2 py-0.5 font-bold text-foreground md:px-3 border-2 border-ink bg-card/90 shadow-[3px_3px_0_var(--ink)] backdrop-blur dark:border-white/15 dark:bg-card/80 dark:shadow-[0_0_22px_-6px_rgba(255,138,31,0.55)]">
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
                        <span className="absolute inset-x-1.5 bottom-0.5 h-[3px] -skew-x-[18deg] rounded-[1px] bg-gradient-to-r from-gold to-orange shadow-[0_0_8px_var(--orange)]" />
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
                  className="rounded-md p-1.5 transition-colors hover:text-accent"
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
              className="group flex items-center rounded-md px-4 py-2 text-sm font-bold text-foreground border-2 border-ink bg-card/90 shadow-[3px_3px_0_var(--ink)] backdrop-blur dark:border-white/15 dark:bg-card/80 dark:shadow-[0_0_22px_-6px_rgba(255,138,31,0.55)]"
            >
              Menu
              <ChevronDown className="ml-3 size-3 text-muted group-hover:text-accent" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          <div
            onClick={close}
            className={cn(
              'fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm dark:bg-black/80',
              closing ? 'menu-fade-out' : 'menu-fade-in'
            )}
          />
          <nav
            className={cn(
              'fixed inset-x-4 top-8 z-50 origin-top rounded-lg border-2 border-ink bg-card p-8 shadow-[5px_5px_0_var(--orange)] sm:left-auto sm:right-4 sm:w-80 dark:border-white/15',
              closing ? 'menu-panel-out' : 'menu-panel-in'
            )}
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <button onClick={close} aria-label="Close menu" className="-m-1 p-1">
                <X className="size-6 text-muted" />
              </button>
              <h2 className="font-display text-sm text-muted">Navigation</h2>
            </div>
            <ul className="mt-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.title}>
                  <Link
                    href={l.path}
                    onClick={close}
                    className={cn(
                      'row-hover block rounded-md px-3 py-2.5 font-display text-lg',
                      active === l.path.slice(1) ? 'text-accent' : 'text-foreground'
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
                  className="row-hover block rounded-md px-3 py-2.5 font-display text-lg text-foreground"
                >
                  Résumé
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  )
}
