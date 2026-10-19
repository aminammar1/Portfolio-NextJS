'use client'

import React, { useState } from 'react'
import {
  Cpu,
  Database,
  Hexagon,
  Layers,
  Network,
  Repeat,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import TechIcon from '@/components/TechIcon'
import PanelHeading from '@/components/PanelHeading'
import OpenAIIcon from '@/components/icons/OpenAIIcon'
import { FaAws } from 'react-icons/fa'
import { TbBrandReactNative } from 'react-icons/tb'
import {
  SiBun,
  SiExpress,
  SiFastify,
  SiModelcontextprotocol,
  SiNextdotjs,
  SiOpenjdk,
  SiVercel,
} from 'react-icons/si'

type Item = {
  label: string
  /** Simple Icons CDN slug -- the CDN serves the mark in its original brand color. */
  slug?: string
  Icon?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  /** Brand color for local icons whose CDN slug is dead (AWS, OpenAI, React Native). */
  color?: string
}

/**
 * Brand items load real logos in their original colors (Simple Icons CDN,
 * same source as the reference site). Monochrome brands (black marks:
 * Next.js, Express, Java, Fastify, MCP, Vercel, Bun) use local marks in
 * theme-aware foreground color -- black on light, white on dark, exactly
 * how those brands present their own logos. Concepts without any brand
 * mark (SQL, CI/CD, architecture practices) stay neutral gray -- they are
 * practices, not products. AWS + OpenAI + React Native carry local marks
 * because those slugs are gone from the CDN, tinted with their official
 * brand color.
 */
const categories: { title: string; items: Item[] }[] = [
  {
    title: 'Programming Languages',
    items: [
      { label: 'JavaScript', slug: 'javascript' },
      { label: 'TypeScript', slug: 'typescript' },
      { label: 'Python', slug: 'python' },
      { label: 'Go', slug: 'go' },
      { label: 'Java', Icon: SiOpenjdk, color: 'var(--foreground)' },
      { label: 'C++', slug: 'cplusplus' },
      { label: 'SQL', Icon: Database, color: 'var(--muted)' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { label: 'React', slug: 'react' },
      { label: 'Next.js', Icon: SiNextdotjs, color: 'var(--foreground)' },
      { label: 'React Native', Icon: TbBrandReactNative, color: '#61DAFB' },
      { label: 'Tailwind CSS', slug: 'tailwindcss' },
      { label: 'Electron', slug: 'electron' },
      { label: 'Framer Motion', slug: 'framer' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', slug: 'nodedotjs' },
      { label: 'Express', Icon: SiExpress, color: 'var(--foreground)' },
      { label: 'NestJS', slug: 'nestjs' },
      { label: 'Fastify', Icon: SiFastify, color: 'var(--foreground)' },
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
      { label: 'AWS (EC2, EKS)', Icon: FaAws, color: '#FF9900' },
      { label: 'Docker', slug: 'docker' },
      { label: 'Kubernetes', slug: 'kubernetes' },
      { label: 'CI/CD', Icon: Workflow, color: 'var(--muted)' },
      { label: 'Nginx', slug: 'nginx' },
      { label: 'GitHub Actions', slug: 'githubactions' },
    ],
  },
  {
    title: 'AI & Practices',
    items: [
      { label: 'LLM Integration', Icon: Sparkles, color: 'var(--muted)' },
      { label: 'RAG Pipelines', Icon: Database, color: 'var(--muted)' },
      { label: 'OpenAI API', Icon: OpenAIIcon, color: 'var(--foreground)' },
      { label: 'Deepgram', slug: 'deepgram' },
      { label: 'MCP', Icon: SiModelcontextprotocol, color: 'var(--foreground)' },
      { label: 'Microservices', Icon: Network, color: 'var(--muted)' },
    ],
  },
  {
    title: 'Architecture & Methodology',
    items: [
      { label: 'Clean Architecture', Icon: Layers, color: 'var(--muted)' },
      { label: 'Hexagonal Architecture', Icon: Hexagon, color: 'var(--muted)' },
      { label: 'SOLID', Icon: ShieldCheck, color: 'var(--muted)' },
      { label: 'Agile/Scrum', Icon: Repeat, color: 'var(--muted)' },
    ],
  },
]

const toolbox: Item[] = [
  { label: 'Linux', slug: 'linux' },
  { label: 'Qt 6', slug: 'qt' },
  { label: 'Godot 4', slug: 'godotengine' },
  { label: 'YOLO', slug: 'yolo' },
  { label: 'RabbitMQ', slug: 'rabbitmq' },
  { label: 'GraphQL', slug: 'graphql' },
  { label: 'Redux', slug: 'redux' },
  { label: 'Figma', slug: 'figma' },
  { label: 'Vercel', Icon: SiVercel, color: 'var(--foreground)' },
  { label: 'Bun', Icon: SiBun, color: 'var(--foreground)' },
]

export default function Stack({ children }: { children?: React.ReactNode }) {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? categories : categories.slice(0, 4)
  const total = categories.reduce((n, c) => n + c.items.length, 0)

  return (
    <section id="stack" className="screen-line mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl scroll-mt-24 px-4 pb-4 pt-14">
      <PanelHeading
        title="Stack"
        count={total}
        description="Tools, technology and apps I use every day"
      />

      <div>
        {visible.map((cat, i) => (
          <div key={cat.title} className="grid gap-x-4 gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[12rem_1fr]">
            <div className="flex h-6 items-center truncate text-sm text-muted">
              <span className="mr-1.5 shrink-0 select-none font-mono text-muted/50" aria-hidden>
                {'0' + (i + 1)}
              </span>
              <span className="truncate">{cat.title}</span>
            </div>
            <ul className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <li key={`${cat.title}-${item.label}`} className="flex">
                  <span className="flex h-6 items-center gap-1.5 whitespace-nowrap rounded-full bg-card-2 px-2 font-mono text-xs text-foreground ring-1 ring-line transition-colors">
                    <TechIcon slug={item.slug} label={item.label} Icon={item.Icon} color={item.color} />
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
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
        {toolbox.map(({ label, slug, Icon, color }) => (
          <span key={label} className="pill !px-2 !py-1">
            <TechIcon slug={slug} label={label} Icon={Icon} color={color} />
            {label}
          </span>
        ))}
      </div>

      {children}
    </section>
  )
}
