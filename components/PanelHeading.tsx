import React from 'react'
import KiTitle from '@/components/KiTitle'

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
      <KiTitle title={title} count={count} />
      {description && <p className="mt-3 text-base text-muted">{description}</p>}
    </div>
  )
}
