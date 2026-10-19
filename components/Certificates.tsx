'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Award } from 'lucide-react'
import PanelHeading from '@/components/PanelHeading'

type Certificate = {
  title: string
  issuer: string
  /** Wide scans span the full row instead of sharing it. */
  wide?: boolean
  /** Drop the file in public/certificates/ using this exact name. */
  image: string
}

const certificates: Certificate[] = [
  {
    title: 'AWS Technical Essentials',
    issuer: 'AWS Training & Certification',
    image: '/certificates/amazon.png',
  },
  {
    title: 'Claude Code 101',
    issuer: 'Anthropic',
    image: '/certificates/claudecertif.png',
  },
  {
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    wide: true,
    image: '/certificates/githubcertif.png',
  },
]

function CertificateCard({ certificate }: { certificate: Certificate }) {
  const [failed, setFailed] = useState(false)
  const aspect = certificate.wide ? 'aspect-[1104/398]' : 'aspect-[10/7]'

  return (
    <a
      href={failed ? undefined : certificate.image}
      target="_blank"
      rel="noopener noreferrer"
      title={certificate.title}
      aria-label={`${certificate.title} -- ${certificate.issuer}`}
      className={`group block overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent/50 ${
        certificate.wide ? 'sm:col-span-2' : ''
      }`}
    >
      {failed ? (
        <div className={`flex w-full flex-col items-center justify-center gap-2 bg-card-2 p-4 text-center ${aspect}`}>
          <Award className="size-6 text-muted/60" aria-hidden />
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
            add asset · {certificate.image}
          </p>
        </div>
      ) : (
        <div className={`relative w-full ${aspect}`}>
          <Image
            src={certificate.image}
            alt={`${certificate.title} -- ${certificate.issuer}`}
            fill
            sizes={certificate.wide ? '(min-width: 640px) 100vw, 100vw' : '(min-width: 640px) 50vw, 100vw'}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            onError={() => setFailed(true)}
          />
        </div>
      )}
    </a>
  )
}

export default function Certificates() {
  return (
    <section id="certificates" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 py-6">
      <PanelHeading title="Certificates" count={certificates.length} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certificates.map((c) => (
          <CertificateCard key={c.image} certificate={c} />
        ))}
      </div>
    </section>
  )
}
