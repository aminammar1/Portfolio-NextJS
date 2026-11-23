/**
 * Manga focus lines (shuchusen): thin ink wedges converging on the centre.
 * Three variants drawn from a seeded PRNG (identical on server and client)
 * are cycled with a steps() animation in CSS so the lines jitter like a
 * hand-drawn panel -- opacity only, no JS per frame.
 */

function prng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function rays(seed: number, count = 84): string {
  const rand = prng(seed)
  const outer = 150
  let d = ''
  for (let i = 0; i < count; i++) {
    const a = (i / count) * Math.PI * 2 + (rand() - 0.5) * 0.06
    const w = 0.004 + rand() * 0.014
    const inner = 46 + rand() * 30
    const x1 = Math.cos(a - w) * outer
    const y1 = Math.sin(a - w) * outer
    const x2 = Math.cos(a + w) * outer
    const y2 = Math.sin(a + w) * outer
    const tx = Math.cos(a) * inner
    const ty = Math.sin(a) * inner
    d += `M${x1.toFixed(2)} ${y1.toFixed(2)}L${x2.toFixed(2)} ${y2.toFixed(2)}L${tx.toFixed(2)} ${ty.toFixed(2)}Z`
  }
  return d
}

const VARIANTS = [rays(7), rays(1987), rays(4242)]

export default function FocusLines({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden className={`focus-lines pointer-events-none absolute ${className}`}>
      {VARIANTS.map((d, i) => (
        <svg key={i} viewBox="-100 -100 200 200" preserveAspectRatio="xMidYMid slice">
          <path d={d} fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}
