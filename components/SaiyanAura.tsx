import { prng } from '@/lib/prng'

/**
 * Super Saiyan aura: a spiky, cel-shaded flame silhouette around the avatar,
 * tips licking upward. Three frames are generated from a seeded PRNG (same
 * markup on server and client) and flipped with a steps() animation in CSS,
 * the two-tone flicker of a hand-drawn aura. Each frame is its own <svg> so
 * the flicker is an opacity change the compositor handles alone.
 *
 * Geometry is in a -100..100 box that maps onto the aura container; the
 * avatar's edge sits at ~51 units.
 */

type Pt = [number, number]

const fmt = ([x, y]: Pt) => `${x.toFixed(1)} ${y.toFixed(1)}`

function polar(angle: number, r: number): Pt {
  // angle 0 = straight up, clockwise
  return [Math.sin(angle) * r, -Math.cos(angle) * r]
}

function flame(seed: number, { inner, reach, spikes }: { inner: number; reach: number; spikes: number }): string {
  const rand = prng(seed)
  const step = (Math.PI * 2) / spikes
  const jitter = (rand() - 0.5) * step * 0.5
  const valley = (i: number): Pt => {
    const a = i * step - step / 2 + jitter
    const up = Math.max(0, Math.cos(a))
    return polar(a, inner * (1 + up * 0.12))
  }

  let d = `M${fmt(valley(0))}`
  for (let i = 0; i < spikes; i++) {
    const a = i * step + jitter + (rand() - 0.5) * step * 0.3
    const up = Math.max(0, Math.cos(a))
    const down = Math.max(0, -Math.cos(a))
    // Tall at the crown, short and tucked in under the chin.
    const len = reach * (0.55 + rand() * 0.55) * (1 + up * up * 1.4) * (1 - down * 0.6)
    const [tx, ty] = polar(a, inner + len)
    // Side tongues bend upward, like flame in an updraft.
    const tip: Pt = [tx * (1 - 0.12 * (1 - up)), ty - len * 0.5 * (1 - up) * (1 - down * 0.7)]
    const v0 = valley(i)
    const v1 = valley(i + 1)
    // Concave flanks: control points hug the body, so each tongue tapers to a point.
    const c0: Pt = [(v0[0] * 2 + tip[0]) / 3, (v0[1] * 2 + tip[1]) / 3 - len * 0.18]
    const c1: Pt = [(v1[0] * 2 + tip[0]) / 3, (v1[1] * 2 + tip[1]) / 3 - len * 0.18]
    d += `Q${fmt(c0)} ${fmt(tip)}Q${fmt(c1)} ${fmt(v1)}`
  }
  return `${d}Z`
}

const FRAMES = [11, 404, 9001].map((seed) => ({
  outer: flame(seed, { inner: 56, reach: 22, spikes: 15 }),
  inner: flame(seed * 7 + 3, { inner: 52, reach: 12, spikes: 11 }),
}))

export default function SaiyanAura() {
  return (
    <div aria-hidden className="saiyan-aura">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="aura-outer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="aura-stop-hi" />
            <stop offset="55%" className="aura-stop-mid" />
            <stop offset="100%" className="aura-stop-lo" />
          </linearGradient>
        </defs>
      </svg>
      {FRAMES.map((f, i) => (
        <svg key={i} viewBox="-100 -100 200 200" className="saiyan-aura-frame">
          <path d={f.outer} className="aura-outer" />
          <path d={f.inner} className="aura-inner" />
        </svg>
      ))}
    </div>
  )
}

/*
 * Rocks tearing loose and floating up while powering up. Rendered always,
 * shown (display) only under .is-charging, so idle cost is zero.
 */
const ROCKS = [
  { x: '-38%', s: 14, d: 1.5, delay: 0, r: 160, shape: 0 },
  { x: '-22%', s: 8, d: 1.1, delay: -0.4, r: -220, shape: 1 },
  { x: '-8%', s: 19, d: 1.8, delay: -1.1, r: 120, shape: 2 },
  { x: '6%', s: 10, d: 1.2, delay: -0.7, r: -180, shape: 0 },
  { x: '19%', s: 16, d: 1.6, delay: -0.2, r: 200, shape: 1 },
  { x: '33%', s: 6, d: 1, delay: -0.9, r: -140, shape: 2 },
  { x: '44%', s: 13, d: 1.4, delay: -1.3, r: 240, shape: 0 },
  { x: '-46%', s: 6, d: 1.05, delay: -0.6, r: 200, shape: 2 },
  { x: '52%', s: 10, d: 1.3, delay: -0.15, r: -260, shape: 1 },
]

export function Debris() {
  return (
    <div aria-hidden className="debris">
      {ROCKS.map((k) => (
        <span
          key={k.x}
          className={`debris-rock debris-shape-${k.shape}`}
          style={
            {
              left: `calc(50% + ${k.x})`,
              width: k.s,
              height: k.s * 0.8,
              animationDuration: `${k.d}s`,
              animationDelay: `${k.delay}s`,
              '--spin': `${k.r}deg`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
