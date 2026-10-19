'use client'

import { useSyncExternalStore } from 'react'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

const subscribe = () => () => {}

/**
 * Time-of-day greeting. No inline script (React never executes scripts
 * rendered client-side) -- the server renders its own snapshot and the
 * client corrects it at hydration; suppressHydrationWarning covers the
 * rare hour-boundary difference.
 */
export default function HelloTitle() {
  const greeting = useSyncExternalStore(subscribe, getGreeting, getGreeting)

  return (
    <h2 className="text-2xl font-bold tracking-tight" suppressHydrationWarning>
      {greeting}
    </h2>
  )
}
