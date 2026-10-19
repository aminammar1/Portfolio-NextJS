'use client'

import React, { useState } from 'react'
import Image from 'next/image'

function monogram(label: string): string {
  const words = label.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean)
  if (words.length === 0) return '?'
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

export default function TechIcon({
  slug,
  label,
  Icon,
  color,
  className = 'size-3',
}: {
  slug?: string
  label: string
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  /** Original brand color for local marks (overrides the accent tint). */
  color?: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (Icon) {
    return (
      <Icon
        className={`${className} shrink-0${color ? '' : ' text-accent'}`}
        style={color ? { color } : undefined}
      />
    )
  }

  if (!slug || failed) {
    return (
      <span className="flex size-3.5 shrink-0 items-center justify-center rounded-[3px] bg-accent-soft font-mono text-[7px] font-bold text-accent">
        {monogram(label)}
      </span>
    )
  }

  return (
    <Image
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={12}
      height={12}
      unoptimized
      onError={() => setFailed(true)}
      className={`${className} shrink-0`}
    />
  )
}
