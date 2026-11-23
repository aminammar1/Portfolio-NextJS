'use client'

import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'

/**
 * LazyMotion + `m` components keep framer-motion's footprint on the critical
 * path small (domAnimation feature set only). reducedMotion="user" makes
 * every framer animation honour the OS setting.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}
