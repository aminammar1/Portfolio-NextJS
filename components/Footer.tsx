'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import ThemeToggle from '@/components/ThemeToggle'

const ASCII = [
  ' █████╗ ███╗   ███╗██╗███╗   ██╗███████╗ ',
  '██╔══██╗████╗ ████║██║████╗  ██║██╔════╝ ',
  '███████║██╔████╔██║██║██╔██╗ ██║█████╗   ',
  '██╔══██║██║╚██╔╝██║██║██║╚██╗██║██╔══╝   ',
  '██║  ██║██║ ╚═╝ ██║██║██║ ╚████║███████╗ ',
  '╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ',
]

function useTunisTime() {
  const [label, setLabel] = useState('--:--')
  const [isDay, setIsDay] = useState(true)
  useEffect(() => {
    const tick = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Africa/Tunis',
        }).format(new Date())
        setLabel(parts)
        const h = Number(parts.slice(0, 2))
        setIsDay(h >= 6 && h < 19)
      } catch {
        /* intl unavailable */
      }
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])
  return { label, isDay }
}

const socials = [
  { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
  { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/', label: 'LinkedIn' },
  { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
  { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
]

export default function Footer() {
  const { label, isDay } = useTunisTime()

  return (
    <footer className="mx-auto max-w-4xl px-4 pb-24 pt-16">
      <div className="overflow-hidden rounded-xl border border-line bg-card p-4">
        <pre className="overflow-x-auto font-mono text-[9px] leading-[1.35] text-accent/80 sm:text-[10px]">
          {ASCII.join('\n')}
        </pre>
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-[11px] text-muted">
          &copy; {new Date().getFullYear()} Mohamed Amine Ammar. All rights reserved.
        </span>

        <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
          <span className="inline-block size-1.5 rounded-sm bg-accent" />
          TUNIS · {label} {isDay ? 'DAY' : 'NIGHT'}
        </span>

        <div className="flex items-center gap-2">
          {socials.map(({ Icon, link, label: name }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
          <Link
            href="#about"
            className="ml-1 font-mono text-[11px] text-muted transition-colors hover:text-accent"
          >
            back to top &uarr;
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
