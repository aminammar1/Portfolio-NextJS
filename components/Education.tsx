import React from 'react'
import { GraduationCap, Award, Languages as LanguagesIcon } from 'lucide-react'

const education = [
  {
    school: 'Faculty of Sciences of Monastir',
    degree: "Bachelor's Degree in Software Engineering",
    period: '2021 — 2024',
    place: 'Monastir, Tunisia',
  },
]

const certifications = [
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: '2026' },
  { name: 'AWS Technical Essentials', issuer: 'Amazon Web Services', year: '2025' },
  { name: 'Docker Basics for DevOps', issuer: 'KodeKloud', year: '2025' },
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
]

export default function Education() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Education &amp; Certifications (4)</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">My academic background.</h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {/* Education */}
        <div className="flex flex-col gap-3">
          {education.map((e) => (
            <div key={e.school} className="row-hover flex items-start gap-3 rounded-xl border border-line bg-card p-4">
              <GraduationCap className="mt-0.5 size-4 shrink-0 text-accent" />
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div>
                  <p className="text-[14px] font-semibold">{e.school}</p>
                  <p className="text-[13px] text-muted">{e.degree}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[12px] text-muted">{e.period}</p>
                  <p className="font-mono text-[11px] text-muted/70">{e.place}</p>
                </div>
              </div>
            </div>
          ))}
          {/* Languages */}
          <div className="rounded-xl border border-line bg-card p-4">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-muted">
              <LanguagesIcon className="size-3.5 text-accent" />
              Languages
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {languages.map((l) => (
                <span key={l.name} className="pill">
                  {l.name} · {l.level}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-col gap-3">
          {certifications.map((c) => (
            <div key={c.name} className="row-hover flex items-start gap-3 rounded-xl border border-line bg-card p-4">
              <Award className="mt-0.5 size-4 shrink-0 text-accent" />
              <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div>
                  <p className="text-[14px] font-semibold">{c.name}</p>
                  <p className="text-[13px] text-muted">{c.issuer}</p>
                </div>
                <span className="font-mono text-[12px] text-muted">{c.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
