'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import ThemeToggle from '@/components/ThemeToggle'
import { useTunisTime } from '@/components/TunisTime'

const ASCII = [
  ' █████╗ ███╗   ███╗██╗███╗   ██╗███████╗ ',
  '██╔══██╗████╗ ████║██║████╗  ██║██╔════╝ ',
  '███████║██╔████╔██║██║██╔██╗ ██║█████╗   ',
  '██╔══██║██║╚██╔╝██║██║██║╚██╗██║██╔══╝   ',
  '██║  ██║██║ ╚═╝ ██║██║██║ ╚████║███████╗ ',
  '╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚══════╝ ',
]

function FooterClock() {
  const { label, isDay } = useTunisTime()
  return (
    <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
      <span className="inline-block size-1.5 rounded-sm bg-accent" />
      TUNIS · {label} {isDay ? 'DAY' : 'NIGHT'}
    </span>
  )
}

const socials = [
  { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
  { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/', label: 'LinkedIn' },
  { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
  { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-4 pb-24 pt-16">
      <div className="overflow-hidden rounded-xl border border-line bg-card p-4">
        <pre className="overflow-x-auto bg-gradient-to-r from-accent via-cyan-400 to-violet-400 bg-clip-text font-mono text-[9px] font-bold leading-[1.35] text-transparent sm:text-[10px]">
          {ASCII.join('\n')}
        </pre>
        <div
          aria-hidden="true"
          className="mt-2 h-px w-full opacity-60"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-muted) 1px, transparent 1px)',
            backgroundSize: '8px 1px',
            backgroundRepeat: 'repeat-x',
          }}
        />
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-[11px] text-muted">
          &copy; {new Date().getFullYear()} Mohamed Amine Ammar. All rights reserved.
        </span>

        <FooterClock />

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
