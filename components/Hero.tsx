'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  AnimatePresence,
  animate,
  m,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
  type Variants,
} from 'framer-motion'
import pfimage from '@/assets/pfimage.jpg'
import RotatingSubtitle from '@/components/RotatingSubtitle'
import FocusLines from '@/components/FocusLines'
import SaiyanAura, { Debris } from '@/components/SaiyanAura'
import { loadContributions } from '@/lib/github-contributions'
import { usePrefersReducedMotion } from '@/lib/use-reduced-motion'
import { cn } from '@/lib/utils'

/*
 * Power-up hero.
 *  t=0.00  focus lines snap in around the avatar
 *  t=0.10  avatar drops in, aura ignites
 *  t=0.25  name letters slam down one by one
 *  t=0.85  impact flash, scouter boots and reads the power level
 *          (= real GitHub contributions over the last year)
 * Press and hold the avatar to charge: aura and shake intensify, rocks
 * tear loose, the scouter climbs. Breaking 9000 transforms: white-out,
 * shockwave, and the whole site goes Super Saiyan gold (data-form on
 * <html>, see globals.css). Charge again for Super Saiyan 2 (lightning).
 * Release springs the reading back to the real number.
 */

const NAME = ['Mohamed', 'Amine', 'Ammar']

const SPARKS = [
  { left: '14%', dx: '-18px', delay: '0s' },
  { left: '26%', dx: '8px', delay: '-0.9s' },
  { left: '38%', dx: '-6px', delay: '-0.35s' },
  { left: '50%', dx: '12px', delay: '-1.2s' },
  { left: '62%', dx: '-10px', delay: '-0.6s' },
  { left: '74%', dx: '16px', delay: '-1.4s' },
  { left: '86%', dx: '-14px', delay: '-0.15s' },
]

const nameGroup: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.25 } },
}

const letter: Variants = {
  hidden: (i: number) => ({ opacity: 0, scale: 2.6, y: -28, rotate: i % 2 ? 12 : -12 }),
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 520, damping: 17 },
  },
}

const INTRO_FLASH_MS = 850
const OVER_9000 = 9000

type Form = 0 | 1 | 2
const FORMS = [
  { name: 'Base form', attr: null, hint: 'Hold to power up' },
  { name: 'Super Saiyan', attr: 'ssj', hint: 'Hold for more' },
  { name: 'Super Saiyan 2', attr: 'ssj2', hint: 'Max power' },
] as const

function applyForm(form: Form) {
  const attr = FORMS[form].attr
  if (attr) document.documentElement.dataset.form = attr
  else delete document.documentElement.dataset.form
}

function AnimeName() {
  let index = 0
  return (
    <h1 className="font-display text-[clamp(2rem,6.2vw,3.1rem)] uppercase leading-[1.08] tracking-wide">
      <span className="sr-only">Mohamed Amine Ammar</span>
      <m.span
        aria-hidden
        className="anime-outline flex flex-wrap gap-x-[0.32em]"
        variants={nameGroup}
        initial="hidden"
        animate="show"
      >
        {NAME.map((word) => (
          <span key={word} className="inline-flex whitespace-nowrap">
            {word.split('').map((ch, i) => (
              <m.span key={`${word}-${i}`} custom={index++} variants={letter} className="anime-fill inline-block">
                {ch}
              </m.span>
            ))}
          </span>
        ))}
      </m.span>
    </h1>
  )
}

function Aura({ charging, form }: { charging: boolean; form: Form }) {
  return (
    <m.div
      aria-hidden
      className="pointer-events-none absolute -inset-[48%]"
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: charging ? 1.2 : form ? 1.08 : 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: charging ? 0 : 0.15 }}
    >
      <div className="aura-glow" />
      <SaiyanAura />
      {SPARKS.map((s) => (
        <span
          key={s.left}
          className="ki-spark"
          style={{ left: s.left, bottom: '22%', '--dx': s.dx, animationDelay: s.delay } as React.CSSProperties}
        />
      ))}
      <svg
        viewBox="0 0 100 100"
        className={cn('absolute inset-0 h-full w-full', charging || form === 2 ? 'opacity-100' : 'opacity-0')}
      >
        <g fill="none" stroke="#bcd3ff" strokeWidth="1.4" strokeLinejoin="bevel" className="aura-bolt">
          <path d="M18 30 L26 38 L22 41 L31 52 L27 54 L35 66" />
          <path d="M82 26 L74 35 L79 38 L70 47 L75 50 L66 60" />
        </g>
        <g
          fill="none"
          stroke="#ffffff"
          strokeWidth="0.8"
          className="aura-bolt"
          style={{ animationDelay: '-0.45s' }}
        >
          <path d="M50 4 L46 12 L52 15 L47 24" />
          <path d="M12 62 L20 64 L17 70 L26 74" />
          <path d="M88 64 L80 67 L84 72 L75 77" />
        </g>
      </svg>
    </m.div>
  )
}

function Scouter({
  display,
  offline,
  over9000,
}: {
  display: MotionValue<string>
  offline: boolean
  over9000: boolean
}) {
  return (
    <m.div
      className="relative mt-6 w-fit"
      initial={{ opacity: 0, x: -30, skewX: -14 }}
      animate={{ opacity: 1, x: 0, skewX: 0 }}
      transition={{ delay: 0.9, type: 'spring', stiffness: 320, damping: 22 }}
    >
      <div className="scouter relative flex items-center gap-4 overflow-hidden py-2 pl-7 pr-8 text-white">
        <span aria-hidden className="scouter-scan absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <span aria-hidden className="relative flex size-2.5 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-orange opacity-70" />
          <span className="relative inline-flex size-2.5 rounded-full bg-orange" />
        </span>
        <span className="relative leading-tight">
          <span className="block font-mono text-[11px] text-white/70 dark:text-muted">Power level</span>
          <span className="block font-mono text-[10px] text-white/50 dark:text-muted/80">
            {offline ? 'GitHub is out of scouter range' : 'GitHub contributions, last year'}
          </span>
        </span>
        <m.span
          className={cn(
            'relative min-w-[4.5ch] text-right font-display text-2xl tabular-nums',
            over9000 ? 'text-orange' : 'text-gold'
          )}
          aria-live="polite"
        >
          {offline ? '???' : display}
        </m.span>
      </div>

      <AnimatePresence>
        {over9000 && (
          <m.p
            key="over"
            className="anime-outline pointer-events-none absolute -right-4 -top-9 whitespace-nowrap font-display text-xl sm:-right-24"
            initial={{ opacity: 0, scale: 2.2, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.15 } }}
            transition={{ type: 'spring', stiffness: 600, damping: 14 }}
          >
            <span className="anime-fill">It&apos;s over 9000!</span>
          </m.p>
        )}
      </AnimatePresence>
    </m.div>
  )
}

export default function Hero() {
  const power = useMotionValue(0)
  const display = useTransform(power, (v) => Math.round(v).toLocaleString('en'))
  const [base, setBase] = useState<number | null>(null)
  const [offline, setOffline] = useState(false)
  const [charging, setCharging] = useState(false)
  const [over9000, setOver9000] = useState(false)
  const [flash, setFlash] = useState(0)
  const [form, setForm] = useState<Form>(0)
  const [burst, setBurst] = useState(0)
  const chargeAnim = useRef<AnimationPlaybackControls | null>(null)
  const baseRef = useRef(0)
  const chargingRef = useRef(false)
  const formRef = useRef<Form>(0)
  const transformedThisCharge = useRef(false)
  const reducedMotion = usePrefersReducedMotion()

  const setFormEverywhere = (next: Form) => {
    formRef.current = next
    setForm(next)
    applyForm(next)
  }

  useMotionValueEvent(power, 'change', (v) => {
    const over = v > OVER_9000
    setOver9000((prev) => (prev === over ? prev : over))
    // Breaking 9000 mid-charge is the transformation moment.
    if (over && chargingRef.current && !transformedThisCharge.current && formRef.current < 2) {
      transformedThisCharge.current = true
      setFormEverywhere((formRef.current + 1) as Form)
      setBurst((n) => n + 1)
    }
  })

  // Leaving the page (or HMR) must not strand the site in gold.
  useEffect(() => () => applyForm(0), [])

  // Intro flash, then boot the scouter with the real reading.
  useEffect(() => {
    const flashTimer = setTimeout(() => setFlash((n) => n + 1), INTRO_FLASH_MS)
    let cancelled = false
    let readAnim: AnimationPlaybackControls | null = null
    const readTimer = setTimeout(() => {
      loadContributions().then((year) => {
        if (cancelled) return
        if (!year) {
          setOffline(true)
          return
        }
        baseRef.current = year.total
        setBase(year.total)
        readAnim = animate(power, year.total, { duration: 1.4, ease: [0.16, 0.84, 0.3, 1] })
      })
    }, INTRO_FLASH_MS)
    return () => {
      cancelled = true
      clearTimeout(flashTimer)
      clearTimeout(readTimer)
      readAnim?.stop()
    }
  }, [power])

  const startCharge = () => {
    if (charging) return
    chargingRef.current = true
    transformedThisCharge.current = false
    setCharging(true)
    chargeAnim.current?.stop()
    const peak = Math.max(12000, (base ?? 0) * 2)
    chargeAnim.current = animate(power, peak, { duration: 1.7, ease: [0.5, 0, 0.9, 0.5] })
  }

  const release = () => {
    if (!charging) return
    chargingRef.current = false
    setCharging(false)
    chargeAnim.current?.stop()
    setFlash((n) => n + 1)
    chargeAnim.current = animate(power, baseRef.current, { type: 'spring', stiffness: 90, damping: 16 })
  }

  return (
    <>
    <AnimatePresence>
      {burst > 0 && !reducedMotion && (
        <m.div
          key={`whiteout-${burst}`}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] bg-[radial-gradient(circle_at_50%_30%,#ffffff_0%,#fff7cc_45%,rgba(255,214,40,0.6)_100%)]"
          initial={{ opacity: 0.85 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        />
      )}
    </AnimatePresence>
    <section
      className={cn(
        'screen-line-bottom relative mx-auto px-4 pb-10 pt-24 sm:max-w-lg md:max-w-2xl xl:max-w-3xl',
        charging && 'is-charging'
      )}
    >
      <div className="shake-on-charge relative z-10 flex flex-col gap-7 sm:flex-row sm:items-center sm:gap-10">
        <div className="relative flex w-36 shrink-0 flex-col items-center gap-3 self-start pt-4 sm:self-center sm:pt-0">
          <div className="relative size-28">
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 size-[620px] -translate-x-1/2 -translate-y-1/2">
              <m.div
                className="size-full [mask-image:radial-gradient(circle,transparent_19%,black_30%,black_42%,transparent_68%)]"
                initial={{ opacity: 0, scale: 1.7 }}
                animate={{ opacity: 1, scale: charging ? 0.92 : 1 }}
                transition={{ duration: 0.45, ease: [0.2, 0.9, 0.3, 1] }}
              >
                <FocusLines className="inset-0 text-ink/25 dark:text-white/20" />
              </m.div>
            </div>

            <Aura charging={charging} form={form} />
            <Debris />

            {/* Transformation shockwave: a ring that blows out past the hero */}
            <AnimatePresence>
              {burst > 0 && (
                <m.span
                  key={`ring-${burst}`}
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-20 rounded-full border-[6px] border-gold shadow-[0_0_30px_8px_rgba(var(--glow),0.7),inset_0_0_24px_4px_rgba(255,255,255,0.8)]"
                  initial={{ opacity: 1, scale: 0.6 }}
                  animate={{ opacity: 0, scale: 9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.1, 0.7, 0.3, 1] }}
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {flash > 0 && (
                <m.span
                  key={flash}
                  aria-hidden
                  className="pointer-events-none absolute -inset-[60%] z-20 rounded-full bg-[radial-gradient(circle,#ffffff_0%,#fff3b0_30%,rgba(255,194,26,0.4)_55%,transparent_72%)]"
                  initial={{ opacity: 1, scale: 0.3 }}
                  animate={{ opacity: 0, scale: 2.2 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                />
              )}
            </AnimatePresence>

            <m.button
              type="button"
              aria-label="Power up: press and hold"
              aria-describedby="power-hint"
              className={cn(
                'relative z-10 block size-28 touch-none select-none overflow-hidden rounded-full border-[3px] border-ink bg-card [-webkit-touch-callout:none] dark:border-gold',
                form > 0 && 'border-gold shadow-[0_0_0_3px_var(--ink),0_0_24px_6px_rgba(var(--glow),0.75)]'
              )}
              initial={{ scale: 0, rotate: -25 }}
              animate={{ scale: charging ? 1.06 : 1, rotate: 0 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 380, damping: 16, delay: charging ? 0 : 0.1 }}
              onPointerDown={(e) => {
                if (e.button === 0) startCharge()
              }}
              onPointerUp={release}
              onPointerLeave={release}
              onPointerCancel={release}
              onContextMenu={(e) => e.preventDefault()}
              onKeyDown={(e) => {
                if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
                  e.preventDefault()
                  startCharge()
                }
              }}
              onKeyUp={(e) => {
                if (e.key === ' ' || e.key === 'Enter') release()
              }}
              onBlur={release}
            >
              <Image
                src={pfimage}
                alt="Mohamed Amine Ammar"
                width={112}
                height={112}
                preload
                draggable={false}
                className="size-full object-cover object-top"
              />
              {/* Transformed: the hair (top of the photo) burns gold */}
              <span
                aria-hidden
                className={cn(
                  'pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#ffd21a_0%,rgba(255,210,26,0.75)_22%,rgba(255,210,26,0)_46%)] mix-blend-screen transition-opacity duration-300',
                  form ? 'opacity-100' : 'opacity-0'
                )}
              />
            </m.button>
          </div>
          <m.div
            className="flex flex-col items-center gap-0.5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {form > 0 && (
              <span className="anime-outline whitespace-nowrap font-display text-sm leading-none">
                <span className="anime-fill">{FORMS[form].name}</span>
              </span>
            )}
            <span id="power-hint" className="font-mono text-[11px] text-muted">
              {charging ? 'Charging…' : FORMS[form].hint}
            </span>
            {form > 0 && !charging && (
              <button
                type="button"
                onClick={() => setFormEverywhere(0)}
                className="font-mono text-[11px] text-muted underline decoration-dotted underline-offset-2 hover:text-accent"
              >
                Power down
              </button>
            )}
            <span className="sr-only" aria-live="polite">
              {form > 0 ? `Transformed: ${FORMS[form].name}` : ''}
            </span>
          </m.div>
        </div>

        <div className="min-w-0">
          <AnimeName />
          <m.div
            className="mt-3 [&_p]:text-[15px]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.35 }}
          >
            <RotatingSubtitle
              lines={[
                'Full Stack Software Developer | AI, Microservices & Cloud',
                "i like listening to music and coding :)",
              ]}
            />
          </m.div>
          <Scouter display={display} offline={offline} over9000={over9000} />
        </div>
      </div>
    </section>
    </>
  )
}
