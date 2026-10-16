'use client'

import React, { useState } from 'react'

// TODO(spotify): paste your Spotify profile or playlist URL here and the
// album tiles below will link out to it.
const SPOTIFY_URL = 'https://open.spotify.com/'

const playlists = [
  { title: 'late-night commits', hue: 145, tracks: 42 },
  { title: 'deep focus — go', hue: 200, tracks: 35 },
  { title: 'chess grind', hue: 25, tracks: 28 },
  { title: 'monastir mornings', hue: 50, tracks: 31 },
  { title: 'ship it', hue: 265, tracks: 24 },
  { title: 'desert debugging', hue: 15, tracks: 19 },
  { title: 'berserk readings', hue: 0, tracks: 27 },
  { title: 'to the abyss', hue: 220, tracks: 22 },
  { title: 'rage & resolve', hue: 340, tracks: 26 },
  { title: 'war and glory', hue: 45, tracks: 33 },
]

export default function Music() {
  const [failed, setFailed] = useState(false)
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <div className="flex items-baseline justify-between">
        <p className="section-label">Music ({playlists.length})</p>
        <a
          href={SPOTIFY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-[12px] text-muted transition-colors hover:text-accent"
        >
          View profile <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        I love listening to music and creating playlists.
      </h2>

      {!failed ? (
        <div className="mt-6 overflow-hidden rounded-xl border border-line bg-card">
          <iframe
            title="Spotify player"
            src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator&theme=0"
            width="100%"
            height="352"
            loading="lazy"
            onError={() => setFailed(true)}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      ) : null}

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        {playlists.map((p) => (
          <a
            key={p.title}
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="row-hover group flex items-center gap-3 rounded-xl border border-line bg-card p-3"
          >
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-md font-mono text-[13px] font-bold text-white"
              style={{ background: `linear-gradient(135deg, hsl(${p.hue} 55% 38%), hsl(${p.hue} 60% 22%))` }}
            >
              {p.title.charAt(0).toUpperCase()}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[12.5px] font-medium group-hover:underline group-hover:underline-offset-4">
                {p.title}
              </span>
              <span className="block font-mono text-[10.5px] text-muted">{p.tracks} tracks</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
