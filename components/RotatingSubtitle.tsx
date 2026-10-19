'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const ROTATE_INTERVAL_MS = 4000

export default function RotatingSubtitle({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || lines.length <= 1) return
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % lines.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [lines.length, prefersReducedMotion])

  if (prefersReducedMotion) {
    return <p className="text-[13px] text-muted">{lines[0]}</p>
  }

  return (
    <p className="grid text-[13px] text-muted">
      {/*
        Invisible sizer stack: every line in the same grid cell makes the row
        height the max of all lines, so rotating never shifts content below.
      */}
      {lines.map((line) => (
        <span key={line} aria-hidden className="invisible col-start-1 row-start-1 block w-fit">
          {line}
        </span>
      ))}

      <AnimatePresence mode="wait">
        <motion.span
          key={lines[index]}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="animate-shine col-start-1 row-start-1 block w-fit bg-[length:200%_100%] bg-clip-text text-transparent [background-image:linear-gradient(110deg,var(--color-muted)_40%,var(--color-foreground)_50%,var(--color-muted)_60%)]"
        >
          {lines[index]}
        </motion.span>
      </AnimatePresence>
    </p>
  )
}
