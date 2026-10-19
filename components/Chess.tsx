import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'

type Player = {
  name: string
  epithet: string
  image: string
  url: string
}

const players: Player[] = [
  {
    name: 'Magnus Carlsen',
    epithet: 'World No. 1 · GOAT',
    image: '/chess/magnus.jpg',
    url: 'https://en.wikipedia.org/wiki/Magnus_Carlsen',
  },
  {
    name: 'Garry Kasparov',
    epithet: 'The Boss · 15 yrs No. 1',
    image: '/chess/kasparov.jpg',
    url: 'https://en.wikipedia.org/wiki/Garry_Kasparov',
  },
  {
    name: 'Hikaru Nakamura',
    epithet: 'Speed chess king',
    image: '/chess/hikaru.jpg',
    url: 'https://en.wikipedia.org/wiki/Hikaru_Nakamura',
  },
  {
    name: 'Alireza Firouzja',
    epithet: 'Youngest 2800 ever',
    image: '/chess/alireza.jpg',
    url: 'https://en.wikipedia.org/wiki/Alireza_Firouzja',
  },
  {
    name: 'Daniil Dubov',
    epithet: 'Creative genius',
    image: '/chess/dubov.jpg',
    url: 'https://en.wikipedia.org/wiki/Daniil_Dubov',
  },
]

export default function Chess() {
  return (
    <section id="chess" className="scroll-mt-24">
      <SectionHeading
        title="Chess"
        count={players.length}
        description="My favorite players, on and off the board"
        direct={{ href: 'https://www.chess.com', text: 'chess.com' }}
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {players.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-card-2">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="line-clamp-1 text-sm font-medium">{p.name}</span>
            <span className="-mt-1 truncate font-mono text-[11px] text-muted">{p.epithet}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
