'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex size-7 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
    >
      {/* Icon visible depends on the active theme — no state needed */}
      <Sun className="size-4 dark:block hidden" />
      <Moon className="size-4 dark:hidden" />
    </button>
  )
}
