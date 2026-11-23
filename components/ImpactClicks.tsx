'use client'

import { useEffect } from 'react'

const RAYS = 8

/**
 * Every click lands like a hit: a ring and eight rays burst from the
 * pointer and clean themselves up. Plain DOM nodes + CSS keyframes, so
 * React never re-renders for it. Off under reduced motion.
 */
export default function ImpactClicks() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return
      const burst = document.createElement('div')
      burst.className = 'impact'
      burst.style.left = `${e.clientX}px`
      burst.style.top = `${e.clientY}px`
      burst.appendChild(document.createElement('b'))
      for (let i = 0; i < RAYS; i++) {
        const ray = document.createElement('i')
        ray.style.setProperty('--r', `${(360 / RAYS) * i}deg`)
        burst.appendChild(ray)
      }
      document.body.appendChild(burst)
      setTimeout(() => burst.remove(), 460)
    }

    document.addEventListener('pointerdown', onDown, { passive: true })
    return () => document.removeEventListener('pointerdown', onDown)
  }, [])

  return null
}
