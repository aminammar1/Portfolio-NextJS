import React from 'react'

const milestones = [
  {
    year: '2026',
    tag: 'CERT',
    title: 'Claude Code in Action',
    text: 'Certified by Anthropic on agentic coding workflows — paired with AWS Technical Essentials and Docker for DevOps.',
  },
  {
    year: '2026',
    tag: 'OSS',
    title: 'turtles-cli ships',
    text: 'Open-source prep shell for coding assistants — repo audits, prompt shaping and provider connectivity checks.',
  },
  {
    year: '2025',
    tag: 'CLOUD',
    title: 'First EKS deployment',
    text: 'Chess microservices deployed on AWS EKS behind an Nginx gateway, with CI/CD via GitHub Actions.',
  },
  {
    year: '2024',
    tag: 'SHIPPED',
    title: 'Pixelium → PetPulse',
    text: 'My internship real-time tracking platform grew out into a full production petcare platform.',
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-4xl px-4">
      <div className="rounded-xl border border-line bg-card p-6">
        <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
          <p>
            Hi, I&apos;m Mohamed Amine Ammar. I&apos;m a Full Stack Software Developer focused on
            turning ideas into real, scalable systems — web platforms, microservices and
            AI-powered products, from first design sketch to cloud deployment.
          </p>
          <p>
            My journey started with small freelance work and a web development internship at
            Pixelium, where I shipped a real-time tracking platform in an Agile team. I&apos;ve
            been building and shipping constantly since — chess microservices with RAG and
            voice input, Go APIs driving remote engines, desktop assistants in C++/Qt, and
            developer tooling published as open source.
          </p>
          <p>
            My philosophy is simple: <span className="font-medium">I don&apos;t build features, I
            build systems.</span>{' '}
            I care about clean and hexagonal architecture, SOLID boundaries, and maintainability
            over short-term hacks — structures that survive real usage in production.
          </p>
        </div>

        {/* Milestones */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {milestones.map((m) => (
            <div
              key={`${m.year}-${m.tag}`}
              className="row-hover rounded-lg border border-line bg-card-2 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-muted">{m.year}</span>
                <span className="pill !px-1.5 !text-[10px] !text-accent">{m.tag}</span>
              </div>
              <p className="mt-3 text-[13px] font-semibold">{m.title}</p>
              <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
