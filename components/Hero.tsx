'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, Mail, MapPin } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import pfimage from '@/assets/pfimage.png'
import Contributions from '@/components/Contributions'

function greetingFor(hour: number) {
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export default function Hero() {
  const [greet, setGreet] = useState(() =>
    typeof window === 'undefined' ? 'Good afternoon' : greetingFor(new Date().getHours())
  )

  useEffect(() => {
    const id = setInterval(() => setGreet(greetingFor(new Date().getHours())), 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="about" className="mx-auto max-w-4xl scroll-mt-16 px-4 pb-14 pt-20">
      <div className="flex items-center gap-3">
        <Image
          src={pfimage}
          alt="Mohamed Amine Ammar"
          width={56}
          height={56}
          priority
          className="size-14 rounded-full border border-line object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Mohamed Amine Ammar</h1>
          <p className="text-[13px] text-muted">i like chess, golang and late-night side projects :)</p>
        </div>
      </div>

      <h2 className="mt-8 text-xl font-semibold tracking-tight">{greet}</h2>
      <p className="mt-1 text-[14px] text-muted">
        I&apos;m a Full Stack Software Developer based in 🇹🇳 Monastir, Tunisia.
      </p>

      <div className="mt-5 text-[15px] leading-relaxed text-foreground/90">
        <p>
          Hi, I&apos;m Mohamed Amine Ammar. I turn ideas into real, scalable systems — web
          platforms, microservices and AI-powered products, from first sketch to cloud deployment.
        </p>
        <p className="mt-3">
          I started with freelance work and an internship at Pixelium, then kept shipping — chess
          microservices on AWS EKS, Go APIs (Echo, Gin, Fiber), a C++/Qt desktop assistant, and
          developer tooling published as open source. My philosophy is simple:{' '}
          <span className="font-medium text-accent">I don&apos;t build features, I build systems.</span>{' '}
          View my{' '}
          <Link href="#work" className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent">
            WORK
          </Link>
          , explore my{' '}
          <Link href="#projects" className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent">
            PROJECTS
          </Link>{' '}
          or check out my{' '}
          <Link href="#stack" className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent">
            STACK
          </Link>{' '}
          to see how I bring ideas to life.
        </p>
      </div>

      <div className="mt-6 grid gap-2 font-mono text-[12.5px] sm:grid-cols-2">
        <p className="flex items-center gap-2 text-muted">
          <MapPin className="size-3.5 shrink-0 text-accent" />
          <span>Monastir, Tunisia (Remote)</span>
        </p>
        <p className="flex items-center gap-2 text-muted">
          <span className="inline-block size-1.5 rounded-full bg-accent" />
          <span>Open to work — remote or onsite</span>
        </p>
        <a href="mailto:ammar.mohamdamine@gmail.com" className="flex items-center gap-2 text-muted transition-colors hover:text-accent">
          <Mail className="size-3.5 shrink-0 text-accent" />
          <span className="truncate">ammar.mohamdamine@gmail.com</span>
        </a>
        <a
          href="https://mohamedamineammar-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <Globe className="size-3.5 shrink-0 text-accent" />
          <span className="truncate">mohamedamineammar-portfolio.vercel.app</span>
        </a>
        <a
          href="https://github.com/aminammar1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <FaGithub className="size-3.5 shrink-0 text-accent" />
          <span className="truncate">github.com/aminammar1</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mohamed-amine-ammar/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <FaLinkedinIn className="size-3.5 shrink-0 text-accent" />
          <span className="truncate">linkedin.com/in/mohamed-amine-ammar</span>
        </a>
      </div>

      <div className="mt-6">
        <p className="section-label mb-3">GitHub Contributions</p>
        <Contributions />
      </div>
    </section>
  )
}
