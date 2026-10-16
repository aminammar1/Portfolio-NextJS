'use client'

import React from 'react'
import { FaSpotify } from 'react-icons/fa'

const SPOTIFY_URL = 'https://open.spotify.com/user/amin740'

export default function Music() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <div className="flex items-baseline justify-between">
        <p className="section-label">Music</p>
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

      <a
        href={SPOTIFY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="row-hover group mt-6 flex items-center gap-4 rounded-xl border border-line bg-card p-4"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#1DB954]/15">
          <FaSpotify className="size-6 text-[#1DB954]" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14px] font-semibold group-hover:underline group-hover:underline-offset-4">
            amin740 on Spotify
          </span>
          <span className="block truncate text-[12.5px] text-muted">
            Playlists and heavy rotation — open my profile to listen along.
          </span>
        </span>
        <span aria-hidden="true" className="shrink-0 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
          &rarr;
        </span>
      </a>
    </section>
  )
}
