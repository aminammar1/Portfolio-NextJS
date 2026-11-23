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
      <div className="relative rounded-xl border-2 border-ink bg-card shadow-[4px_4px_0_var(--ink)] transition-shadow focus-within:shadow-[4px_4px_0_var(--orange)] dark:border-white/15 dark:shadow-[0_0_24px_-6px_rgba(77,130,255,0.6)] dark:focus-within:shadow-[0_0_28px_-4px_rgba(255,138,31,0.7)]">
        {/* speech-bubble tail */}
        <span aria-hidden className="absolute -bottom-[9px] left-8 size-4 rotate-45 border-b-2 border-r-2 border-ink bg-card dark:border-white/15" />
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
          className="relative max-h-40 min-h-11 w-full resize-none rounded-xl border-0 bg-transparent py-3 pl-4 pr-12 text-sm shadow-none outline-none placeholder:text-muted focus-visible:ring-0"
        />
        <button
          onClick={send}
          disabled={!value.trim()}
          aria-label="Send question"
          className="absolute bottom-1.5 right-1.5 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-[radial-gradient(circle_at_34%_30%,#fff6cf_0%,#ffc21a_38%,#ff7a1a_72%,#d9480f_100%)] text-ink shadow-[0_0_14px_rgba(255,138,31,0.6)] transition-transform hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:scale-100"
        >
          <CornerDownLeft className="size-4" />
        </button>
      </div>
    </div>
  )
}
