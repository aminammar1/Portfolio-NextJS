const DOTS = 28

/**
 * CSS-only: both chomp halves animate via keyframes on the compositor, so the
 * strip costs no main-thread time even when it runs (unlike the framer-motion
 * version, which drove JS on every frame for as long as the page was open).
 */
export default function PacmanStrip() {
  return (
    <div aria-hidden className="relative h-8 overflow-hidden motion-reduce:hidden">
      <div className="absolute inset-x-4 inset-y-0 flex items-center justify-between">
        {Array.from({ length: DOTS }).map((_, i) => (
          <span key={i} className="size-1.5 rounded-full bg-muted/50" />
        ))}
      </div>
      <div className="pacman-runner absolute inset-y-0 left-0 flex items-center">
        <div className="relative size-7">
          <div className="pacman-top absolute inset-x-0 top-0 h-1/2 origin-bottom bg-[#ffcc00] [border-radius:14px_14px_0_0]" />
          <div className="pacman-bottom absolute inset-x-0 bottom-0 h-1/2 origin-top bg-[#ffcc00] [border-radius:0_0_14px_14px]" />
          <span className="absolute left-1/2 top-[5px] size-[3px] -translate-x-1/2 rounded-full bg-black/80" />
        </div>
      </div>
    </div>
  )
}
