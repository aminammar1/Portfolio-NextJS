import Image from 'next/image'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import pfimage from '@/assets/pfimage.png'

const stamps = [
  { top: 'Tunisia', big: 'SHIPPED', bottom: ['PetPulse', '2024'], bg: '#b0432a', rotate: '-8deg' },
  { top: 'Certified', big: 'CLAUDE', bottom: ['Anthropic', '2026'], bg: '#0f766e', rotate: '6deg' },
  { top: 'Cloud', big: 'EKS', bottom: ['AWS', '2025'], bg: '#b45309', rotate: '-5deg' },
  { top: 'OSS', big: 'TURTLES', bottom: ['GitHub', '2025'], bg: '#15803d', rotate: '7deg' },
]

const socials = [
  { Icon: FaInstagram, link: 'https://www.instagram.com/amine_ammr/', label: 'Instagram' },
  { Icon: FaGithub, link: 'https://github.com/aminammar1', label: 'GitHub' },
  { Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/mohamed-amine-ammar/', label: 'LinkedIn' },
  { Icon: FaFacebookF, link: 'https://www.facebook.com/profile.php?id=100009032685978', label: 'Facebook' },
]

export default function PhotoGallery() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-12">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_300px]">
        <div className="text-[15px] leading-relaxed text-foreground/90">
          <p>
            My journey hasn&apos;t been linear. I started with small freelance work and an
            internship at <strong>Pixelium</strong>, building and shipping constantly — chess
            microservices with <strong>RAG</strong> and voice input,{' '}
            <strong>Go APIs</strong> driving remote engines, a <strong>C++/Qt</strong> desktop
            assistant, and developer tooling published as open source.
          </p>
          <p className="mt-4">
            Over time that evolved into designing systems that survive real usage — clean and
            hexagonal architecture, SOLID boundaries, and maintainability over short-term hacks.
          </p>
          <div className="mt-5 flex items-center gap-3">
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
            <span className="font-mono text-[11px] text-muted/70">The stamps peel off.</span>
          </div>
        </div>

        <div className="relative mx-auto h-72 w-64">
          <div className="absolute left-2 top-4 h-56 w-52 rotate-[-7deg] rounded-lg border border-line bg-card-2 shadow-xl" />
          <div className="absolute left-8 top-0 h-60 w-52 rotate-[5deg] overflow-hidden rounded-lg border border-line bg-card shadow-2xl">
            <Image
              src={pfimage}
              alt="Mohamed Amine Ammar"
              fill
              sizes="208px"
              className="object-cover object-top"
            />
          </div>
          {stamps.map((s) => (
            <div
              key={s.big}
              className="stamp absolute h-[88px] py-1 shadow-lg transition-transform duration-300 hover:rotate-0 hover:scale-110"
              style={{ backgroundColor: s.bg, rotate: s.rotate, right: s.big === 'EKS' || s.big === 'TURTLES' ? '-10px' : undefined, left: s.big === 'SHIPPED' || s.big === 'CLAUDE' ? '-12px' : undefined, top: s.big === 'SHIPPED' ? '6px' : s.big === 'CLAUDE' ? '64px' : s.big === 'EKS' ? '120px' : '176px' }}
            >
              <div className="flex h-full w-full flex-col items-center justify-between py-1 text-[#fbf8f1]">
                <span className="text-[5.5px] font-semibold uppercase leading-none tracking-[0.18em]">{s.top}</span>
                <span className="font-display text-[24px] font-bold leading-none">{s.big}</span>
                <span className="flex flex-col items-center gap-[3px] text-[6px] font-semibold uppercase leading-none tracking-[0.14em]">
                  <span>{s.bottom[0]}</span>
                  <span className="opacity-75">{s.bottom[1]}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
