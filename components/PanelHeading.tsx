import React from 'react'

export default function PanelHeading({
  title,
  count,
  description,
}: {
  title: string
  count?: number
  description?: string
}) {
  return (
    <div className="mb-6">
      <h2 className="mb-2 text-balance text-2xl font-bold leading-tight tracking-tight">
        {title}
        {count !== undefined && (
          <sup className="ml-2.5 text-sm font-medium tracking-normal text-muted">({count})</sup>
        )}
      </h2>
      {description && <p className="mt-2 text-base text-muted">{description}</p>}
    </div>
  )
}
