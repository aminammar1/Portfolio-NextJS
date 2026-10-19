'use client'

import { motion } from 'framer-motion'

const DOTS = 28

export default function PacmanStrip() {
  return (
    <div aria-hidden className="relative h-8 overflow-hidden motion-reduce:hidden">
      <div className="absolute inset-x-4 inset-y-0 flex items-center justify-between">
        {Array.from({ length: DOTS }).map((_, i) => (
          <span key={i} className="size-1.5 rounded-full bg-muted/50" />
        ))}
      </div>
      <div className="pacman-runner absolute inset-y-0 left-0 flex items-center">
        <div className="relative size-7">
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 origin-bottom bg-[#ffcc00] [border-radius:14px_14px_0_0]"
            animate={{ rotate: [0, -30, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.32, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 origin-top bg-[#ffcc00] [border-radius:0_0_14px_14px]"
            animate={{ rotate: [0, 30, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.32, ease: 'linear' }}
          />
          <span className="absolute left-1/2 top-[5px] size-[3px] -translate-x-1/2 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
