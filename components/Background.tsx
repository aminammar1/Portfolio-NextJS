'use client'

import { useEffect, useRef, useState } from 'react'

type Square = { id: number; pos: [number, number]; delay: number }

function generateSquares(count: number, width: number, height: number): Square[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: [Math.floor((Math.random() * width) / 100), Math.floor((Math.random() * height) / 100)],
    delay: i * 0.2,
  }))
}

const SQUARES_MASK =
  'linear-gradient(to right, black, black calc(50% - 32rem), rgb(0 0 0 / 0.25) calc(50% - 22rem), rgb(0 0 0 / 0.25) calc(50% + 22rem), black calc(50% + 32rem))'

export default function Background() {
  const [squares, setSquares] = useState<Square[]>([])
  const squaresRef = useRef<HTMLDivElement>(null)
  const hasSquares = squares.length > 0

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // eslint-disable-next-line react-hooks/set-state-in-effect -- random per-client grid cells; the original component did the same
    setSquares(generateSquares(20, window.innerWidth, window.innerHeight))
  }, [])

  useEffect(() => {
    if (!hasSquares) return
    // Re-roll each square's grid cell when its fade loop restarts. Handled on
    // the DOM node directly -- no React state, no re-renders, ever.
    const container = squaresRef.current
    if (!container) return
    const onIteration = (event: AnimationEvent) => {
      const target = event.target
      if (!(target instanceof HTMLElement) || !target.classList.contains('bg-square')) return
      target.style.left = `${Math.floor((Math.random() * window.innerWidth) / 100) * 100 + 1}px`
      target.style.top = `${Math.floor((Math.random() * window.innerHeight) / 100) * 100 + 1}px`
    }
    container.addEventListener('animationiteration', onIteration)
    return () => container.removeEventListener('animationiteration', onIteration)
  }, [hasSquares])

  return (
    <div className="fixed left-0 top-0 isolate -z-50 h-full w-full overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(110%_120%_at_top_right,white,transparent)]"
        style={{ stroke: 'var(--color-line)' }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="bg-grid" width={100} height={100} x={-1} y={-1} patternUnits="userSpaceOnUse">
            <path d="M.5 100V.5H100" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#bg-grid)" />
      </svg>

      {hasSquares && (
        <div
          ref={squaresRef}
          className="absolute inset-0 -z-10 [mask-image:radial-gradient(110%_120%_at_top_right,white,transparent)]"
          style={{ maskImage: SQUARES_MASK, WebkitMaskImage: SQUARES_MASK }}
          aria-hidden="true"
        >
          {squares.map(({ pos: [x, y], id, delay }) => (
            <div
              key={id}
              className="bg-square size-[99px] text-gray-900 dark:text-white"
              style={{ left: x * 100 + 1, top: y * 100 + 1, animationDelay: `${delay}s` }}
            />
          ))}
        </div>
      )}

      {/*
        Pre-softened radial gradients instead of the old blur-3xl star shapes:
        same soft green/cyan glow, but painted once into a static layer. A
        full-viewport 64px blur costs large GPU textures on every composited
        frame on phones.
      */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 h-[31.4rem] w-[69.25rem] sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 36% 58% at 30% 50%, rgba(2,255,132,0.14), transparent 70%), radial-gradient(ellipse 32% 62% at 60% 50%, rgba(0,166,255,0.14), transparent 70%)',
        }}
      />
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 h-[4.5rem] w-[20.25rem] sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 44% 55% at 32% 50%, rgba(48,2,255,0.14), transparent 72%), radial-gradient(ellipse 44% 55% at 66% 50%, rgba(0,255,255,0.14), transparent 72%)',
        }}
      />
    </div>
  )
}
