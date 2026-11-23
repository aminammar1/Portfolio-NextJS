export type ContributionDay = { date: string; count: number }

export type ContributionYear = { days: ContributionDay[]; total: number }

let cached: Promise<ContributionYear | null> | null = null

/**
 * One shared request for the last 364 days of GitHub activity. The hero's
 * power-level scouter and the heatmap both read it, so the API is hit once.
 * Resolves to null when the API is unreachable.
 */
export function loadContributions(): Promise<ContributionYear | null> {
  if (!cached) {
    cached = fetch('https://github-contributions-api.jogruber.de/v4/aminammar1?y=last')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { contributions?: ContributionDay[] }) => {
        if (!data.contributions) return null
        const days = data.contributions.slice(-364)
        return { days, total: days.reduce((s, d) => s + d.count, 0) }
      })
      .catch(() => {
        cached = null
        return null
      })
  }
  return cached
}
