'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Dot-matrix wordmark spelling "MOHAMED AMINE". Crisp 5x7 dot glyphs on a
 * canvas, tinted by the brand accent token (hue-shifted toward teal across
 * the name), with a gentle brightness wave. Static under reduced motion.
 */

const WORDMARK = 'MOHAMED AMINE'

type Glyph = string[] // one string per row, '#' = dot, '.' = empty

const GLYPHS: Record<string, Glyph> = {
  A: ['.###.', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
  H: ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#'],
  I: ['###', '.#.', '.#.', '.#.', '.#.', '.#.', '###'],
  M: ['#...#', '##.##', '#.#.#', '#.#.#', '#...#', '#...#', '#...#'],
  N: ['#...#', '##..#', '#.#.#', '#..##', '#...#', '#...#', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
}

const WORD_GAP = 3
const ROWS = 7

/** Column pattern for the whole word: true = dot cell. */
function buildPattern(): { cols: number; pattern: boolean[][] } {
  const cols: boolean[][] = []
  const pushLetter = (ch: string) => {
    const glyph = GLYPHS[ch]
    for (let c = 0; c < glyph[0].length; c++) {
      cols.push(glyph.map((row) => row[c] === '#'))
    }
    cols.push(Array(ROWS).fill(false)) // letter gap
  }
  for (const ch of WORDMARK) {
    if (ch === ' ') {
      for (let i = 0; i < WORD_GAP - 1; i++) cols.push(Array(ROWS).fill(false))
      continue
    }
    pushLetter(ch)
  }
  return { cols: cols.length, pattern: cols }
}

type Palette = { accent: string; background: string; foreground: string; dark: boolean }

function readPalette(probe: HTMLElement): Palette {
  const styles = getComputedStyle(probe)
  return {
    accent: styles.getPropertyValue('--accent').trim(),
    background: styles.getPropertyValue('--background').trim(),
    foreground: styles.getPropertyValue('--foreground').trim(),
    dark: document.documentElement.classList.contains('dark'),
  }
}

function parseHexOrRgba(input: string): [number, number, number] {
  const hex = input.match(/^#([0-9a-f]{6})$/i)
  if (hex) {
    const n = parseInt(hex[1], 16)
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255]
  }
  const rgb = input.match(/rgba?\(([^)]+)\)/)
  if (rgb) {
    const parts = rgb[1].split(/[\s,/]+/).filter(Boolean).slice(0, 3).map(Number)
    return [parts[0], parts[1], parts[2]]
  }
  return [34, 197, 94]
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255
  g /= 255
  b /= 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return [0, 0, l * 100]
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return [h * 360, s * 100, l * 100]
}

/** Accent hue shifted toward teal as we move across the name. */
function inkFor(palette: Palette, t: number, brightness: number): string {
  const [r, g, b] = parseHexOrRgba(palette.accent)
  const [h, s, l] = rgbToHsl(r, g, b)
  const hue = h + t * 55 // green -> teal across the wordmark
  const sat = Math.min(85, Math.max(45, s))
  const light = (l * 0.55 + (palette.dark ? 26 : 30)) * (0.55 + 0.45 * brightness)
  return `hsl(${hue.toFixed(1)} ${sat.toFixed(1)}% ${light.toFixed(1)}%)`
}

export default function SkyWordmark() {
  const reduceMotion = useReducedMotion() ?? false
  const probeRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const probe = probeRef.current
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!probe || !canvas || !ctx) return

    const { cols, pattern } = buildPattern()
    let palette = readPalette(probe)
    let visible = true
    let frame: number | null = null
    let disposed = false
    let cell = 0
    let originX = 0

    const layout = (): void => {
      const dpr = window.devicePixelRatio || 1
      const vw = canvas.clientWidth
      const cw = probe.getBoundingClientRect().width
      if (vw === 0 || cw === 0) return
      cell = cw / cols
      const height = Math.round(cell * ROWS)
      originX = (vw - cw) / 2
      canvas.width = Math.round(vw * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.height = `${height}px`
      palette = readPalette(probe)
      draw(reduceMotion ? 0 : performance.now())
    }

    const draw = (now: number): void => {
      if (cell === 0) return
      const dpr = window.devicePixelRatio || 1
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      const t = now / 1000
      const radius = cell * 0.34
      for (let col = 0; col < cols; col++) {
        const colPattern = pattern[col]
        let anyDot = false
        for (let row = 0; row < ROWS; row++) if (colPattern[row]) { anyDot = true; break }
        if (!anyDot) continue
        const tt = col / (cols - 1)
        for (let row = 0; row < ROWS; row++) {
          if (!colPattern[row]) continue
          const wave = reduceMotion ? 0.82 : 0.82 + 0.18 * Math.sin(t * 1.6 - tt * 7 + row * 0.55)
          ctx.fillStyle = inkFor(palette, tt, wave)
          ctx.beginPath()
          ctx.arc(originX + (col + 0.5) * cell, (row + 0.5) * cell, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const tick = (now: number): void => {
      if (disposed) return
      if (!reduceMotion && visible) {
        draw(now)
        frame = requestAnimationFrame(tick)
      } else {
        frame = null
      }
    }

    const start = (): void => {
      if (frame === null && visible && !reduceMotion) frame = requestAnimationFrame(tick)
    }

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
    })
    const sizing = new ResizeObserver(layout)
    const theme = new MutationObserver(() => {
      palette = readPalette(probe)
      draw(reduceMotion ? 0 : performance.now())
    })

    sizing.observe(canvas)
    sizing.observe(probe)
    visibility.observe(canvas)
    theme.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] })
    layout()

    return () => {
      disposed = true
      visibility.disconnect()
      sizing.disconnect()
      theme.disconnect()
      if (frame !== null) cancelAnimationFrame(frame)
    }
  }, [reduceMotion])

  return (
    <div className="screen-line py-4">
      <div ref={probeRef} className="mx-auto h-0 sm:max-w-lg md:max-w-2xl xl:max-w-3xl" aria-hidden />
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <canvas
          ref={canvasRef}
          className="block w-full select-none"
          role="img"
          aria-label="MOHAMED AMINE, drawn as a dot-matrix wordmark in brand green"
        />
      </div>
    </div>
  )
}
