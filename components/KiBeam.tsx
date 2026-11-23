'use client'

import { m, useScroll, useSpring, useTransform } from 'framer-motion'

/**
 * Scroll progress as an energy beam across the top of the viewport: a
 * white-hot core in a ki sheath (blue, gold once transformed), with a glowing head at the tip.
 */
export default function KiBeam() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.4 })
  const headX = useTransform(progress, (v) => `calc(${(v * 100).toFixed(3)}vw - 10px)`)
  const headOpacity = useTransform(progress, [0, 0.01], [0, 1])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-2">
      <m.div
        className="absolute inset-x-0 top-0 h-[4px] origin-left bg-[linear-gradient(180deg,var(--beam)_0%,#ffffff_45%,#ffffff_55%,var(--beam)_100%)] shadow-[0_0_10px_2px_var(--beam)]"
        style={{ scaleX: progress }}
      />
      <m.div
        className="absolute -top-2 left-0 size-5 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#ffffff_28%,var(--beam)_60%,transparent_72%)]"
        style={{ x: headX, opacity: headOpacity }}
      />
    </div>
  )
}
