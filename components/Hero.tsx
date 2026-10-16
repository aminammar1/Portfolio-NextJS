import React from 'react'
import Image from 'next/image'
import pfimage from '@/assets/pfimage.png'
import HeroLinksClient from './HeroLinksClient'

export default function Hero() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 pb-16	pt-12">
      <div className="grid gap-10 md:grid-cols-[1fr_240px]">
        {/* Main column */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Mohamed Amine Ammar</h1>
          <p className="mt-2 text-lg font-medium text-muted">
            Full Stack Software Developer | AI Automation, Microservices &amp; Cloud
          </p>
          <p className="mt-2 font-mono text-[13px] text-muted/80">
            i like chess, golang and late-night side projects :)
          </p>

          <div className="mt-8 text-[15px] leading-relaxed text-foreground/90">
            <p>
              Hello — I&apos;m a Full Stack Software Developer based in{' '}
              <span className="whitespace-nowrap">🇹🇳 Monastir, Tunisia</span>, experienced in
              building scalable web applications, microservices, and AI-powered platforms, from
              design to cloud deployment.
            </p>
            <HeroLinksClient />
          </div>
        </div>

        {/* Side column */}
        <aside className="flex flex-col gap-3 text-[13px] text-muted">
          <Image
            src={pfimage}
            alt="Mohamed Amine Ammar"
            width={88}
            height={88}
            priority
            className="size-[88px] rounded-full border border-line object-cover"
          />
          <p className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-accent" />
            Open to work — remote or onsite
          </p>
          <a href="mailto:ammar.mohamdamine@gmail.com" className="underline-offset-4 transition-colors hover:text-foreground hover:underline">
            ammar.mohamdamine@gmail.com
          </a>
          <a
            href="https://github.com/aminammar1"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            github.com/aminammar1
          </a>
          <a
            href="https://mohamedamineammar-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            mohamedamineammar-portfolio.vercel.app
          </a>
        </aside>
      </div>
    </section>
  )
}
