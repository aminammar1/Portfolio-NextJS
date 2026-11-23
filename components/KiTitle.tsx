'use client'

import { m, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

// The slash charges in from the left like a beam ...
const slash: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.32, ease: [0.2, 0.9, 0.3, 1] } },
}

// ... and the title lands on top of it with a quick impact.
const word: Variants = {
  hidden: { opacity: 0, x: -24, skewX: -18 },
  show: { opacity: 1, x: 0, skewX: 0, transition: { type: 'spring', stiffness: 520, damping: 22 } },
}

const orb: Variants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 600, damping: 12 } },
}

/**
 * Section title card: heavy display type over a skewed gold-to-orange ki
 * slash, with the item count sitting in a glowing orb. Plays once when it
 * scrolls into view.
 */
export default function KiTitle({
  title,
  count,
  size = 'lg',
}: {
  title: string
  count?: number
  size?: 'lg' | 'md'
}) {
  return (
    <m.h2
      className={cn(
        'relative isolate inline-flex items-center gap-3 font-display leading-none text-foreground',
        size === 'lg' ? 'text-[1.75rem]' : 'text-xl'
      )}
      variants={group}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
    >
      <m.span
        aria-hidden
        variants={slash}
        className={cn(
          'absolute -z-10 origin-left -skew-x-[18deg] rounded-[2px] bg-gradient-to-r from-gold via-orange to-orange/0',
          size === 'lg' ? '-left-2 bottom-[-0.08em] h-[0.5em] w-[calc(100%+1.5rem)]' : '-left-1.5 bottom-[-0.06em] h-[0.45em] w-[calc(100%+1rem)]'
        )}
      />
      <m.span variants={word} className="inline-block">
        {title}
      </m.span>
      {count !== undefined && (
        <m.span
          variants={orb}
          aria-label={`(${count})`}
          className={cn(
            'inline-flex shrink-0 items-center justify-center rounded-full border-2 border-ink bg-[radial-gradient(circle_at_34%_30%,#fff6cf_0%,#ffc21a_38%,#ff7a1a_72%,#d9480f_100%)] font-sans font-bold text-ink shadow-[0_0_14px_rgba(255,138,31,0.55)]',
            size === 'lg' ? 'size-8 text-[13px]' : 'size-6 text-[11px]'
          )}
        >
          {count}
        </m.span>
      )}
    </m.h2>
  )
}
