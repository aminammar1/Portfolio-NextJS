/**
 * Tiny seeded PRNG (Park-Miller). Decorative SVG generated from it renders
 * identically on server and client -- never use Math.random() in render.
 */
export function prng(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}
