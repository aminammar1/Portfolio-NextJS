'use client'

import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/lib/use-reduced-motion'

const ROTATE_INTERVAL_MS = 4000
const SWAP_MS = 300

/**
 * CSS-driven line swap: the outgoing line slides up/out while the incoming
 * one slides in (same choreography the framer-motion AnimatePresence version
 * had), but with zero animation library on the critical path.
 */
export default function RotatingSubtitle({ lines }: { lines: string[] }) {
  const [index, setIndex] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const indexRef = useRef(0)
  const swapTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion || lines.length <= 1) return
    const timer = setInterval(() => {
      const next = (indexRef.current + 1) % lines.length
      setPrevious(indexRef.current)
      indexRef.current = next
      setIndex(next)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [lines.length, prefersReducedMotion])

  useEffect(() => {
    if (previous === null) return
    swapTimer.current = setTimeout(() => setPrevious(null), SWAP_MS)
    return () => {
      if (swapTimer.current) clearTimeout(swapTimer.current)
    }
  }, [previous])

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

      {previous !== null && (
        <span
          key={`out-${lines[previous]}`}
          aria-hidden="true"
          className="subtitle-out animate-shine col-start-1 row-start-1 block w-fit bg-[length:200%_100%] bg-clip-text text-transparent [background-image:linear-gradient(110deg,var(--color-muted)_40%,var(--color-foreground)_50%,var(--color-muted)_60%)]"
        >
          {lines[previous]}
        </span>
      )}
      <span
        key={`in-${lines[index]}`}
        className="subtitle-in animate-shine col-start-1 row-start-1 block w-fit bg-[length:200%_100%] bg-clip-text text-transparent [background-image:linear-gradient(110deg,var(--color-muted)_40%,var(--color-foreground)_50%,var(--color-muted)_60%)]"
      >
        {lines[index]}
      </span>
    </p>
  )
}
