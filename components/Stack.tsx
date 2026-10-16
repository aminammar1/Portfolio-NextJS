import React from 'react'

const categories: { title: string; items: string[] }[] = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'Electron', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'Fastify', 'Go (Echo, Gin, Fiber)', 'FastAPI'],
  },
  {
    title: 'Databases & Cloud',
    items: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS (EC2, EKS)',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Nginx',
      'GitHub Actions',
    ],
  },
  {
    title: 'AI & Practices',
    items: [
      'LLM Integration',
      'RAG Pipelines',
      'OpenAI API',
      'Deepgram',
      'MCP',
      'Microservices',
    ],
  },
  {
    title: 'Architecture & Methodology',
    items: ['Clean Architecture', 'Hexagonal Architecture', 'SOLID', 'Agile/Scrum'],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Stack (38)</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        Tools and technologies I use every day.
      </h2>

      <div className="mt-6 flex flex-col gap-4">
        {categories.map((cat, i) => (
          <div
            key={cat.title}
            className="flex flex-col gap-2 rounded-xl border border-line bg-card p-4 sm:flex-row sm:items-start sm:gap-4"
          >
            <span className="w-32 shrink-0 pt-1 font-mono text-[12px] text-muted">
              {'0' + (i + 1)} · {cat.title.split(' &')[0].replace('Programming ', '')}
            </span>
            <div className="flex flex-wrap items-center justify-start gap-2">
              {cat.items.map((item) => (
                <span key={`${cat.title}-${item}`} className="pill !py-1">
                  {item}
                </span>
              ))}
            </div>
            {/* full title for screen readers */}
            <span className="sr-only">{cat.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
