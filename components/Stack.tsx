'use client'

import React, { useState } from 'react'
import {
  Boxes,
  Cpu,
  Database,
  Hexagon,
  Layers,
  Network,
  Plug,
  Repeat,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import TechIcon from '@/components/TechIcon'
import { TbBrandReactNative } from 'react-icons/tb'

type Item = { label: string; slug?: string; Icon?: React.ComponentType<{ className?: string }> }

const categories: { title: string; items: Item[] }[] = [
  {
    title: 'Programming Languages',
    items: [
      { label: 'JavaScript', slug: 'javascript' },
      { label: 'TypeScript', slug: 'typescript' },
      { label: 'Python', slug: 'python' },
      { label: 'Go', slug: 'go' },
      { label: 'Java', slug: 'openjdk' },
      { label: 'C++', slug: 'cplusplus' },
      { label: 'SQL', Icon: Database },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', slug: 'react' },
      { label: 'Next.js', slug: 'nextdotjs' },
      { label: 'React Native', Icon: TbBrandReactNative },
      { label: 'Tailwind CSS', slug: 'tailwindcss' },
      { label: 'Electron', slug: 'electron' },
      { label: 'Framer Motion', slug: 'framer' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', slug: 'nodedotjs' },
      { label: 'Express', slug: 'express' },
      { label: 'NestJS', slug: 'nestjs' },
      { label: 'Fastify', slug: 'fastify' },
      { label: 'Go (Echo, Gin, Fiber)', slug: 'go' },
      { label: 'FastAPI', slug: 'fastapi' },
    ],
  },
  {
    title: 'Databases & Cloud',
    items: [
      { label: 'PostgreSQL', slug: 'postgresql' },
      { label: 'MongoDB', slug: 'mongodb' },
      { label: 'Redis', slug: 'redis' },
      { label: 'AWS (EC2, EKS)', slug: 'amazonwebservices' },
      { label: 'Docker', slug: 'docker' },
      { label: 'Kubernetes', slug: 'kubernetes' },
      { label: 'CI/CD', Icon: Workflow },
      { label: 'Nginx', slug: 'nginx' },
      { label: 'GitHub Actions', slug: 'githubactions' },
    ],
  },
  {
    title: 'AI & Practices',
    items: [
      { label: 'LLM Integration', Icon: Sparkles },
      { label: 'RAG Pipelines', Icon: Database },
      { label: 'OpenAI API', slug: 'openai' },
      { label: 'Deepgram', slug: 'deepgram' },
      { label: 'MCP', Icon: Plug },
      { label: 'Microservices', Icon: Network },
    ],
  },
  {
    title: 'Architecture & Methodology',
    items: [
      { label: 'Clean Architecture', Icon: Layers },
      { label: 'Hexagonal Architecture', Icon: Hexagon },
      { label: 'SOLID', Icon: ShieldCheck },
      { label: 'Agile/Scrum', Icon: Repeat },
    ],
  },
]

export default function Stack() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? categories : categories.slice(0, 4)
  const total = categories.reduce((n, c) => n + c.items.length, 0)

  return (
    <section id="stack" className="mx-auto max-w-4xl scroll-mt-16 px-4 pt-14">
      <p className="section-label">Stack ({total})</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        Tools, technology and apps I use every day.
      </h2>

      <div className="mt-6 flex flex-col gap-2">
        {visible.map((cat, i) => (
          <div key={cat.title} className="flex flex-col gap-2 py-2 sm:flex-row sm:items-start sm:gap-4">
            <span className="w-36 shrink-0 pt-1 font-mono text-[12px] text-muted">
              {'0' + (i + 1)} {cat.title}
            </span>
            <div className="flex flex-wrap items-center gap-1.5">
              {cat.items.map((item) => (
                <span key={`${cat.title}-${item.label}`} className="pill !gap-1.5 !px-2 !py-1">
                  <TechIcon slug={item.slug} label={item.label} Icon={item.Icon} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-md border border-line bg-card px-3 py-1.5 text-[12px] text-muted transition-colors hover:text-foreground"
        >
          {showAll ? 'Show less' : 'Show more'}
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2 border-t border-line pt-6">
        <Cpu className="size-4 text-accent" />
        <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
          Also in the toolbox
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {['Linux', 'Qt 6', 'Godot 4', 'YOLO', 'RabbitMQ', 'GraphQL', 'Redux', 'Figma', 'Vercel', 'Bun'].map(
          (t) => (
            <span key={t} className="pill !px-2 !py-1">
              <Boxes className="size-3 shrink-0 text-accent" />
              {t}
            </span>
          )
        )}
      </div>
    </section>
  )
}
