'use client'

import React from 'react'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import Contributions from './Contributions'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-4xl px-4 pb-10 pt-16">
      {/* GitHub contributions */}
      <p className="section-label mb-3">GitHub Contributions (2025)</p>
      <Contributions />

      {/* Socials + meta */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono text-[12px] text-muted">
          © {new Date().getFullYear()} Mohamed Amine Ammar
        </span>

        <div className="flex items-center gap-3">
          {[
            { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
            { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar', label: 'LinkedIn' },
            { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
            { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
          ].map(({ Icon, link, label }) => (
            <a
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="#about" className="font-mono text-[12px] text-muted transition-colors hover:text-foreground">
            back to top ↑
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  )
}
