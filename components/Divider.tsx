/**
 * Manga speed-lines band: ink and orange streaks racing right-to-left, on a
 * strip of screentone. One compositor-only transform loop.
 */
export default function Divider() {
  return (
    <div
      aria-hidden="true"
      className="relative left-1/2 h-9 w-screen -translate-x-1/2 overflow-hidden border-y border-line"
    >
      <div className="halftone absolute inset-0 opacity-40 [mask-image:linear-gradient(90deg,transparent,black_20%,black_80%,transparent)]" />
      <div className="speed-strip absolute inset-y-0 left-0" />
    </div>
  )
}
