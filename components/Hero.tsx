'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Award, Clock, Globe, Mail, MapPin } from 'lucide-react'
import pfimage from '@/assets/pfimage.png'
import Contributions from '@/components/Contributions'
import { useTunisTime } from '@/components/TunisTime'

function greetingFor(hour: number) {
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-card text-muted">
      {children}
    </span>
  )
}

export default function Hero() {
  const [greet, setGreet] = useState(() =>
    typeof window === 'undefined' ? 'Good afternoon' : greetingFor(new Date().getHours())
  )
  const { label: tunisTime } = useTunisTime()

  useEffect(() => {
    const id = setInterval(() => setGreet(greetingFor(new Date().getHours())), 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="relative mx-auto max-w-4xl scroll-mt-16 px-4 pb-6 pt-20">
      <div aria-hidden="true" className="bg-blueprint pointer-events-none absolute inset-0" />
      <div className="relative">
        <div className="flex items-center gap-3">
          <Image
            src={pfimage}
            alt="Mohamed Amine Ammar"
            width={56}
            height={56}
            priority
            className="size-14 rounded-full border border-line object-cover object-top"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Mohamed Amine Ammar</h1>
            <p className="text-[13px] text-muted">
              Full Stack Software Developer | AI Automation, Microservices &amp; Cloud
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-xl font-semibold tracking-tight">{greet}</h2>
        <p className="mt-1 text-[14px] text-muted">
          I&apos;m a Full Stack Software Developer based in 🇹🇳 Monastir, Tunisia.
        </p>

        <div className="mt-5 text-[15px] leading-relaxed text-foreground/90">
          <p>
            Hi, I&apos;m Mohamed Amine Ammar. I turn ideas into real, scalable systems — web
            platforms, microservices and AI-powered products, from first sketch to cloud
            deployment.
          </p>
          <p className="mt-3">
            I started with freelance work and an internship at Pixelium, then kept shipping —
            chess microservices on AWS EKS, Go APIs (Echo, Gin, Fiber), a C++/Qt desktop
            assistant, and developer tooling published as open source. My philosophy is
            simple:{' '}
            <span className="font-medium text-accent">
              I don&apos;t build features, I build systems.
            </span>{' '}
            View my{' '}
            <Link
              href="#work"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              WORK
            </Link>
            , explore my{' '}
            <Link
              href="#projects"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              PROJECTS
            </Link>{' '}
            or check out my{' '}
            <Link
              href="#stack"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              STACK
            </Link>{' '}
            to see how I bring ideas to life.
          </p>
        </div>

        <div className="mt-6">
          <p className="section-label mb-3">GitHub Contributions</p>
          <Contributions />
        </div>

        <div className="mt-6 grid gap-x-8 gap-y-2.5 font-mono text-[12.5px] text-muted sm:grid-cols-2">
          <p className="flex items-center gap-2.5">
            <IconBox>
              <MapPin className="size-3.5" />
            </IconBox>
            <span>Monastir, Tunisia (Remote)</span>
          </p>
          <p className="flex items-center gap-2.5">
            <IconBox>
              <Clock className="size-3.5" />
            </IconBox>
            <span>
              {tunisTime} PM <span className="text-muted/60">{'//'} same time</span>
            </span>
          </p>
          <a
            href="mailto:ammar.mohamdamine@gmail.com"
            className="flex items-center gap-2.5 transition-colors hover:text-accent"
          >
            <IconBox>
              <Mail className="size-3.5" />
            </IconBox>
            <span className="truncate">ammar.mohamdamine@gmail.com</span>
          </a>
          <a
            href="https://mohamedamineammar-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 transition-colors hover:text-accent"
          >
            <IconBox>
              <Globe className="size-3.5" />
            </IconBox>
            <span className="truncate">mohamedamineammar-portfolio.vercel.app</span>
          </a>
          <p className="flex items-center gap-2.5 sm:col-span-2">
            <IconBox>
              <Award className="size-3.5" />
            </IconBox>
            <span className="text-accent">#1 OSS contributor in Tunisia</span>
          </p>
        </div>
      </div>
    </section>
  )
}
