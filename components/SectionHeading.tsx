import React from 'react'
import KiTitle from '@/components/KiTitle'

type Direct = {
  href: string
  text: string
  icon?: React.ReactNode
}

export default function SectionHeading({
  title,
  count,
  description,
  direct,
}: {
  title: string
  count?: number
  description?: string
  direct?: Direct
}) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <KiTitle title={title} count={count} size="md" />
        {description && <p className="mt-2.5 text-sm text-muted">{description}</p>}
      </div>
      {direct && (
        <a
          href={direct.href}
          target={direct.href.startsWith('http') ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 transition-colors hover:text-accent hover:underline"
        >
          <span className="hidden text-sm md:inline">{direct.text}</span>
          {direct.icon}
        </a>
      )}
    </div>
  )
}
