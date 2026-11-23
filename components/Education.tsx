import React from 'react'
import { GraduationCap } from 'lucide-react'
import PanelHeading from '@/components/PanelHeading'

const education = [
  {
    school: 'Faculty of Sciences of Monastir',
    degree: 'Bachelor\u2019s Degree, Software Engineering',
    period: '2021 — 2024',
    location: 'Monastir, Tunisia',
  },
  {
    school: 'Lycée Fatouma Bourguiba',
    degree: 'Baccalauréat',
    period: '2021',
    location: 'Monastir, Tunisia',
  },
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
]

export default function Education() {
  return (
    <section id="education" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 pb-2 pt-14">
      <PanelHeading title="Education" count={education.length} />

      <div>
        {education.map((e) => (
          <div
            key={e.school}
            className="row-hover flex items-center gap-3 rounded-md border-b border-line px-3 py-4 last:border-b-0"
          >
            <GraduationCap className="size-4 shrink-0 text-accent" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">{e.school}</p>
              <p className="truncate text-xs text-muted">
                {e.degree} · {e.period} · {e.location}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5 px-2">
        {languages.map((l) => (
          <span key={l.name} className="pill">
            {l.name} · {l.level}
          </span>
        ))}
      </div>
    </section>
  )
}
