'use client'

import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

function generateSquares(count: number, width: number, height: number): Array<{ id: number; pos: [number, number] }> {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    pos: [Math.floor((Math.random() * width) / 100), Math.floor((Math.random() * height) / 100)] as [number, number],
  }))
}

const SQUARES_MASK =
  'linear-gradient(to right, black, black calc(50% - 32rem), rgb(0 0 0 / 0.25) calc(50% - 22rem), rgb(0 0 0 / 0.25) calc(50% + 22rem), black calc(50% + 32rem))'

export default function Background() {
  const prefersReducedMotion = useReducedMotion()
  const [squares, setSquares] = useState<Array<{ id: number; pos: [number, number] }>>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
    setSquares(generateSquares(20, window.innerWidth, window.innerHeight))
  }, [])

  const updateSquarePosition = (id: number) => {
    if (typeof window === 'undefined') return
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: [
                Math.floor((Math.random() * window.innerWidth) / 100),
                Math.floor((Math.random() * window.innerHeight) / 100),
              ],
            }
          : sq
      )
    )
  }

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
      {isMounted && !prefersReducedMotion && (
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(110%_120%_at_top_right,white,transparent)]">
          <svg
            className="h-full w-full text-gray-900 dark:text-white"
            style={{ maskImage: SQUARES_MASK, WebkitMaskImage: SQUARES_MASK }}
            aria-hidden="true"
          >
            <g transform="translate(-1 -1)">
              {squares.map(({ pos: [x, y], id }, index) => (
                <motion.rect
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.1 }}
                  transition={{ duration: 8, repeat: 1, delay: index * 0.2, repeatType: 'reverse' }}
                  onAnimationComplete={() => updateSquarePosition(id)}
                  key={`${x}-${y}-${index}`}
                  width={99}
                  height={99}
                  x={x * 100 + 1}
                  y={y * 100 + 1}
                  fill="currentColor"
                  strokeWidth="0"
                />
              ))}
            </g>
          </svg>
        </div>
      )}

      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/502] w-[69.25rem] bg-gradient-to-r from-[#02ff84] to-[#00a6ff] opacity-10 dark:opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
        <div
          className="aspect-[200/45] w-[20.25rem] bg-gradient-to-r from-[#3002ff] to-[#00ffff] opacity-10 dark:opacity-20"
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
        />
      </div>
    </div>
  )
}
