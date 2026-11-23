/**
 * Page backdrop.
 *  light: daytime sky -- blue zenith fading to haze, soft cumulus clouds
 *  dark : night battle -- indigo sky with an orange ki glow and stars
 * Both carry a manga screentone in the top corner and slow-rising ki
 * particles. Deterministic markup (no random values) so it renders on the
 * server; every animation is a CSS transform/opacity loop.
 */

const PARTICLES = [
  { left: '4%', size: 6, d: 26, delay: -3, dx: 30, color: 'var(--gold)', o: 0.55 },
  { left: '11%', size: 3, d: 19, delay: -11, dx: -20, color: 'var(--blue)', o: 0.6 },
  { left: '19%', size: 4, d: 31, delay: -20, dx: 15, color: 'var(--orange)', o: 0.45 },
  { left: '27%', size: 2, d: 23, delay: -7, dx: 25, color: 'var(--gold)', o: 0.7 },
  { left: '36%', size: 5, d: 35, delay: -28, dx: -30, color: 'var(--blue)', o: 0.35 },
  { left: '45%', size: 3, d: 21, delay: -15, dx: 10, color: 'var(--orange)', o: 0.5 },
  { left: '57%', size: 4, d: 29, delay: -2, dx: -15, color: 'var(--gold)', o: 0.5 },
  { left: '66%', size: 2, d: 18, delay: -9, dx: 20, color: 'var(--blue)', o: 0.7 },
  { left: '74%', size: 6, d: 33, delay: -24, dx: -25, color: 'var(--orange)', o: 0.4 },
  { left: '82%', size: 3, d: 24, delay: -13, dx: 18, color: 'var(--gold)', o: 0.6 },
  { left: '90%', size: 4, d: 27, delay: -5, dx: -12, color: 'var(--blue)', o: 0.5 },
  { left: '96%', size: 2, d: 20, delay: -17, dx: -22, color: 'var(--orange)', o: 0.6 },
]

const STARS =
  '12vw 8vh 0 0 #fff, 22vw 18vh 0 0 rgba(255,255,255,.6), 35vw 5vh 0 0 #fff, 48vw 14vh 0 0 rgba(255,255,255,.5), 61vw 9vh 0 0 #fff, 73vw 22vh 0 0 rgba(255,255,255,.7), 86vw 6vh 0 0 #fff, 94vw 17vh 0 0 rgba(255,255,255,.5), 7vw 31vh 0 0 rgba(255,255,255,.5), 29vw 38vh 0 0 #fff, 54vw 33vh 0 0 rgba(255,255,255,.6), 79vw 41vh 0 0 rgba(255,255,255,.5), 16vw 56vh 0 0 rgba(255,255,255,.4), 42vw 62vh 0 0 rgba(255,255,255,.5), 68vw 58vh 0 0 rgba(255,255,255,.4), 91vw 66vh 0 0 rgba(255,255,255,.5), 4vw 78vh 0 0 rgba(255,255,255,.35), 33vw 84vh 0 0 rgba(255,255,255,.4), 59vw 88vh 0 0 rgba(255,255,255,.35), 84vw 92vh 0 0 rgba(255,255,255,.4)'

function Cloud({ className }: { className: string }) {
  return (
    <div aria-hidden className={`absolute ${className}`}>
      <div className="absolute bottom-0 left-0 h-[42%] w-full rounded-full bg-white" />
      <div className="absolute bottom-[18%] left-[14%] h-[70%] w-[38%] rounded-full bg-white" />
      <div className="absolute bottom-[14%] left-[40%] h-full w-[42%] rounded-full bg-white" />
    </div>
  )
}

export default function Background() {
  return (
    <div className="fixed inset-0 isolate -z-50 overflow-hidden" aria-hidden="true">
      {/* Sky */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#bfdcff_0%,#dcecff_28%,#f2f7ff_60%)] dark:bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,rgba(255,138,31,0.16),transparent_70%),radial-gradient(ellipse_60%_50%_at_10%_20%,rgba(77,130,255,0.18),transparent_70%),linear-gradient(180deg,#0a1140_0%,#070b24_55%)]" />

      {/* Super Saiyan form: golden light floods the sky (fades in via CSS) */}
      <div className="ssj-sky absolute inset-0" />

      {/* Clouds (day only) */}
      <div className="dark:hidden">
        <Cloud className="left-[-4%] top-[9%] h-16 w-56 opacity-80" />
        <Cloud className="right-[6%] top-[4%] h-12 w-40 opacity-70" />
        <Cloud className="right-[-6%] top-[34%] h-20 w-72 opacity-50" />
        <Cloud className="left-[8%] top-[62%] h-14 w-48 opacity-40" />
      </div>

      {/* Stars (night only) */}
      <div className="hidden dark:block">
        <span className="absolute left-0 top-0 size-[2px] rounded-full" style={{ boxShadow: STARS }} />
      </div>

      {/* Screentone corner */}
      <div className="halftone absolute right-0 top-0 h-[70vh] w-[60vw] opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_0%,transparent_65%)]" />

      {/* Ki particles */}
      {PARTICLES.map((p) => (
        <span
          key={p.left}
          className="ki-particle"
          style={
            {
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDelay: `${p.delay}s`,
              '--d': `${p.d}s`,
              '--dx': `${p.dx}px`,
              '--o': p.o,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
