'use client'

import { useEffect, useState } from 'react'

export function useTunisTime() {
  const [label, setLabel] = useState('--:--')
  const [isDay, setIsDay] = useState(true)

  useEffect(() => {
    const tick = () => {
      try {
        const parts = new Intl.DateTimeFormat('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
          timeZone: 'Africa/Tunis',
        }).format(new Date())
        setLabel(parts)
        const h = Number(parts.slice(0, 2)) + (parts.includes('PM') && parts.slice(0, 2) !== '12' ? 12 : 0)
        setIsDay(h >= 6 && h < 19)
      } catch {
        /* intl unavailable */
      }
    }
    tick()
    const id = setInterval(tick, 30000)
    return () => clearInterval(id)
  }, [])

  return { label, isDay }
}
