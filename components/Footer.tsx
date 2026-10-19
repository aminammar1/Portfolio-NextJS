'use client'

import React from 'react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Moon, Sun, Sunrise, Sunset } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import SkyWordmark from '@/components/SkyWordmark'
import PacmanStrip from '@/components/PacmanStrip'
import { useTunisTime } from '@/components/TunisTime'
import { cn } from '@/lib/utils'

type Phase = 'dawn' | 'day' | 'dusk' | 'night'

function phaseFor(hour: number): Phase {
  if (hour >= 5 && hour < 7) return 'dawn'
  if (hour >= 7 && hour < 18) return 'day'
  if (hour >= 18 && hour < 20) return 'dusk'
  return 'night'
}

const PHASE_META: Record<Phase, { gradient: string; glow: string; Icon: typeof Sun; label: string }> = {
  dawn: {
    gradient: 'from-lime-300 via-emerald-300 to-cyan-300',
    glow: 'rgba(163, 230, 53, 0.4)',
    Icon: Sunrise,
    label: 'dawn',
  },
  day: {
    gradient: 'from-sky-500 via-cyan-400 to-blue-500',
    glow: 'rgba(56, 189, 248, 0.4)',
    Icon: Sun,
    label: 'day',
  },
  dusk: {
    gradient: 'from-emerald-400 via-teal-300 to-cyan-400',
    glow: 'rgba(52, 211, 153, 0.4)',
    Icon: Sunset,
    label: 'dusk',
  },
  night: {
    gradient: 'from-indigo-300 via-slate-200 to-cyan-200',
    glow: 'rgba(165, 180, 252, 0.35)',
    Icon: Moon,
    label: 'night',
  },
}

function useTunisPhase(): Phase {
  const [phase, setPhase] = React.useState<Phase>('day')
  React.useEffect(() => {
    const compute = () => {
      const hour = Number(
        new Intl.DateTimeFormat('en-GB', { hour: '2-digit', hour12: false, timeZone: 'Africa/Tunis' }).format(
          new Date()
        )
      )
      setPhase(phaseFor(hour))
    }
    compute()
    const id = setInterval(compute, 60000)
    return () => clearInterval(id)
  }, [])
  return phase
}

function SkyClock() {
  const { label } = useTunisTime()
  const phase = useTunisPhase()
  const meta = PHASE_META[phase]
  return (
    <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted sm:inline-flex">
      <span
        aria-hidden
        className={cn('size-2 shrink-0 rounded-[1px] bg-gradient-to-r', meta.gradient)}
        style={{ boxShadow: `0 0 8px ${meta.glow}` }}
      />
      <span>
        Monastir · <time>{label}</time>
      </span>
      <span className="text-muted/60">{meta.label}</span>
    </span>
  )
}

const socials = [
  { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
  { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
  { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/', label: 'LinkedIn' },
  { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="w-full space-y-4 border-t border-line px-2 py-4">
      <div className="mx-auto flex sm:max-w-lg md:max-w-2xl xl:max-w-3xl items-center gap-4 px-4">
        {socials.map(({ Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-foreground/80 transition-all duration-200 hover:text-accent"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>

      <div className="mx-auto flex sm:max-w-lg md:max-w-2xl xl:max-w-3xl items-center justify-between px-4">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold tracking-wide text-accent">MOHAMED AMINE</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <SkyClock />
          <ThemeToggle />
        </div>
      </div>

      <div className="mx-auto mb-20 sm:max-w-lg md:max-w-2xl xl:max-w-3xl px-4 pt-2">
        <PacmanStrip />
        <div className="mt-2">
          <SkyWordmark />
        </div>
      </div>    </footer>
  )
}
