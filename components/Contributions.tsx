'use client'

import React, { useEffect, useState } from 'react'

type Day = { date: string; count: number }

function levelFor(count: number): number {
  if (count === 0) return 0
  if (count <= 3) return 1
  if (count <= 7) return 2
  if (count <= 15) return 3
  return 4
}

export default function Contributions() {
  const [days, setDays] = useState<Day[] | null>(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    let cancelled = false
    fetch('https://github-contributions-api.jogruber.de/v4/aminammar1?y=last')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { contributions: Day[] }) => {
        if (cancelled || !data.contributions) return
        setDays(data.contributions.slice(-364))
        setTotal(data.contributions.slice(-364).reduce((s, d) => s + d.count, 0))
      })
      .catch(() => {})
    return () => {
      cancelled = true
    }
  }, [])

  if (!days) {
    return (
      <a
        href="https://github.com/aminammar1"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-24 items-center justify-center rounded-xl border border-line bg-card text-[12px] text-muted underline-offset-4 hover:text-foreground hover:underline"
      >
        view my GitHub activity →
      </a>
    )
  }

  // Build a 7-row × N-column grid (weeks), starting from the first Sunday in the data
  const pad = (7 - new Date(`${days[0].date}T00:00:00Z`).getUTCDay()) % 7
  const cells: (Day | null)[] = [...Array(pad).fill(null), ...days]
  const weekCount = Math.ceil(cells.length / 7)

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthLabels: { week: number; label: string }[] = []
  let lastMonth = -1
  for (let w = 0; w < weekCount; w++) {
    const first = cells.slice(w * 7, w * 7 + 7).find(Boolean)
    if (!first) continue
    const m = Number(first.date.slice(5, 7)) - 1
    if (m !== lastMonth) {
      monthLabels.push({ week: w, label: monthNames[m] })
      lastMonth = m
    }
  }

  return (
    <div className="rounded-xl border border-line bg-card p-4">
      <div className="mt-1 overflow-x-auto">
        <div className="relative w-max">
          <div className="relative mb-1 h-3" style={{ width: weekCount * 13 - 3 }}>
            {monthLabels.map(({ week, label }) => (
              <span
                key={`${week}-${label}`}
                className="absolute top-0 font-mono text-[9px] text-muted"
                style={{ left: week * 13 }}
              >
                {label}
              </span>
            ))}
          </div>
          <div
            className="grid w-max gap-[3px] pb-1"
            style={{ gridTemplateRows: 'repeat(7, 10px)', gridAutoFlow: 'column' }}
          >
            {cells.map((d, i) =>
              d ? (
                <span
                  key={d.date}
                  title={`${d.count} contribution${d.count === 1 ? '' : 's'} on ${d.date}`}
                  className="size-[10px] rounded-[2px]"
                  style={{ background: `var(--heat-${levelFor(d.count)})` }}
                />
              ) : (
                <span key={`pad-${i}`} className="size-[10px] rounded-[2px] opacity-0" />
              )
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[11px] text-muted">
        <span>
          {total.toLocaleString('en')} contributions in the last year
        </span>
        <span className="flex items-center gap-1.5 text-[10px]">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <span
              key={l}
              className="size-[9px] rounded-[2px]"
              style={{ background: `var(--heat-${l})` }}
            />
          ))}
          More
        </span>
      </div>
    </div>
  )
}
