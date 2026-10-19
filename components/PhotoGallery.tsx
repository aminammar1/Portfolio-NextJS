'use client'

import { Clock, Globe, Mail, MapPin } from 'lucide-react'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import GalleryStack, { type GalleryCard } from '@/components/GalleryStack'
import { GalleryStampsHint } from '@/components/GalleryStamps'
import Contributions from '@/components/Contributions'
import HelloTitle from '@/components/HelloTitle'
import { useTunisTime } from '@/components/TunisTime'

const cards: GalleryCard[] = [
  {
    id: 1,
    type: 'image',
    imageUrl: '/gallery/photo-2.png',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff',
    story: 'Above the old city, Zitouna minaret behind me. Tunisia is where everything I build starts.',
  },
  {
    id: 2,
    type: 'text',
    text: 'Chess is my other compiler.',
    subtext: 'Magnus, Kasparov, Hikaru, Alireza, Dubov. On repeat.',
    backgroundColor: '#0f2b46',
    textColor: '#ffffff',
  },
  {
    id: 3,
    type: 'image',
    imageUrl: '/gallery/photo-1.png',
    backgroundColor: '#2d2d2d',
    textColor: '#ffffff',
    story: 'Night mode, always. Most of my commits happen after midnight.',
  },
  {
    id: 4,
    type: 'image',
    imageUrl: '/gallery/photo-3.png',
    backgroundColor: '#5c2a1a',
    textColor: '#ffffff',
    story: 'Itachi on the shirt, Naruto on the shelf. The anime influence is permanent.',
  },
]

const socials = [
  { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
  { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
  { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/', label: 'LinkedIn' },
  { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
]

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-card text-muted">
      {children}
    </span>
  )
}

/**
 * About panel (reference structure): greeting header with a full-bleed
 * hairline below, then intro, contributions and facts, then the photo
 * gallery zone. Sits right under the hatched divider that follows the
 * name-header strip.
 */
export default function PhotoGallery() {
  const { label: tunisTime } = useTunisTime()

  return (
    <section id="about" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24">
      <header className="screen-line-bottom px-4 pb-4 pt-5">
        <HelloTitle />
        <p className="mt-2 text-[14px] text-muted">
          I&apos;m a Full Stack Software Developer based in 🇹🇳 Monastir, Tunisia.
        </p>
      </header>

      <div className="px-4 pb-6 pt-8">
        <div className="text-[15px] leading-relaxed text-foreground/90">
          <p>
            Hi, I&apos;m Mohamed Amine Ammar. I got my first computer at 8 years old and I
            never really left the screen since. Back then it was video games and curiosity.
            Today it is web platforms, microservices and AI products, built from first
            sketch to cloud deployment.
          </p>
          <p className="mt-3">
            All my life I have been the friend people call when something tech breaks. I
            genuinely like that. Figuring out problems is what I do best. I started with
            freelance work and an internship at Pixelium, then kept shipping. Chess engines
            on AWS, Go APIs, a C++ desktop assistant, open source tools. My rule is
            simple:{' '}
            <span className="font-medium text-accent">
              I don&apos;t build features, I build systems.
            </span>{' '}
            View my{' '}
            <a
              href="#work"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              WORK
            </a>
            , explore my{' '}
            <a
              href="#projects"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              PROJECTS
            </a>{' '}
            or check out my{' '}
            <a
              href="#stack"
              className="font-semibold underline decoration-accent/60 decoration-2 underline-offset-4 hover:text-accent"
            >
              STACK
            </a>{' '}
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
              {tunisTime} <span className="text-muted/60">{'//'} same time</span>
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
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="space-y-6 text-[15px] leading-relaxed text-foreground/90 lg:w-3/5">
            <p>
              I grew up on video games, anime and chess. The Witcher 3 showed me what a good
              story feels like. Naruto taught me to never give up on a hard bug. Chess taught
              me to think five moves ahead, which turns out to be exactly what system design
              is.
            </p>
            <p>
              Since I was a kid I fixed computers for friends and family. That never stopped,
              it just became my job. After freelance gigs and an internship at{' '}
              <strong>Pixelium</strong>, I now build systems that survive real usage. Clean
              architecture, honest code, no short term hacks.
            </p>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-2">
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, link, label }) => (
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
              <GalleryStampsHint />
            </div>
          </div>

          <div className="relative lg:w-2/5">
            <div className="lg:sticky lg:top-8">
              <div className="mb-6 rounded-3xl p-12 lg:p-0">
                <GalleryStack cards={cards} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
