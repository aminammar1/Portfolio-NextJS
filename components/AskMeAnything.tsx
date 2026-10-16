'use client'

import React, { useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function AskMeAnything() {
  const [value, setValue] = useState('')

  const send = () => {
    const q = value.trim()
    const subject = encodeURIComponent('Question from your portfolio')
    const body = encodeURIComponent(q ? `Hi Mohamed,\n\n${q}` : 'Hi Mohamed,')
    window.location.href = `mailto:ammar.mohamdamine@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[min(480px,calc(100vw-2rem))] -translate-x-1/2">
      <div className="flex items-end gap-2 rounded-2xl border border-line bg-card/95 p-2 pl-4 shadow-2xl backdrop-blur-md">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Ask me anything..."
          rows={1}
          className="max-h-40 min-h-11 flex-1 resize-none bg-transparent py-2 text-sm outline-none placeholder:text-muted"
        />
        <button
          onClick={send}
          aria-label="Send question"
          className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-[#080a0c] transition-transform hover:scale-105"
        >
          <ArrowUp className="size-4" />
        </button>
      </div>
    </div>
  )
}
