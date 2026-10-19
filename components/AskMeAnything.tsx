'use client'

import React, { useState } from 'react'
import { CornerDownLeft } from 'lucide-react'
import { emitChatActivity } from '@/lib/chat-activity'

export default function AskMeAnything() {
  const [value, setValue] = useState('')

  const send = () => {
    const q = value.trim()
    emitChatActivity({ type: 'submit' })
    const subject = encodeURIComponent('Question from your portfolio')
    const body = encodeURIComponent(q ? `Hi Mohamed,\n\n${q}` : 'Hi Mohamed,')
    window.location.href = `mailto:ammar.mohamdamine@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="fixed inset-x-0 bottom-6 z-50 mx-auto w-full max-w-lg px-4">
      <div className="relative rounded-2xl border border-line bg-card shadow-lg transition-[color,box-shadow] focus-within:ring-[3px] focus-within:ring-accent/30">
        <textarea
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            emitChatActivity({ type: 'keystroke' })
          }}
          onFocus={() => emitChatActivity({ type: 'focus' })}
          onBlur={() => emitChatActivity({ type: 'blur' })}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="Ask me anything..."
          rows={1}
          className="max-h-40 min-h-11 w-full resize-none rounded-2xl border-0 bg-transparent py-3 pl-4 pr-12 text-sm shadow-none outline-none placeholder:text-muted focus-visible:ring-0"
        />
        <button
          onClick={send}
          disabled={!value.trim()}
          aria-label="Send question"
          className="absolute bottom-2 right-2 flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent text-[#080a0c] transition-all hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100"
        >
          <CornerDownLeft className="size-4" />
        </button>
      </div>
    </div>
  )
}
