import React from 'react'

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
        <h2 className="mb-2 flex items-center gap-1.5 text-lg font-semibold">
          {title}
          {count !== undefined && (
            <sup className="ml-2.5 text-xs font-medium tracking-normal text-muted">
              ({count})
            </sup>
          )}
        </h2>
        {description && <p className="text-sm text-muted">{description}</p>}
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
