import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'

type Game = {
  name: string
  note: string
  image: string
  url: string
}

const games: Game[] = [
  {
    name: 'The Witcher 3',
    note: 'What a good story feels like',
    image: '/games/292030.jpg',
    url: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
  },
  {
    name: 'God of War',
    note: 'Boy. What a ride',
    image: '/games/1593500.jpg',
    url: 'https://store.steampowered.com/app/1593500/God_of_War/',
  },
  {
    name: 'Persona 5 Royal',
    note: '100 hours well spent',
    image: '/games/1687950.jpg',
    url: 'https://store.steampowered.com/app/1687950/Persona_5_Royal/',
  },
  {
    name: 'Life is Strange',
    note: 'Hella emotional',
    image: '/games/319630.jpg',
    url: 'https://store.steampowered.com/app/319630/Life_Is_Strange__Episode_1/',
  },
  {
    name: 'Assassin\u2019s Creed II',
    note: 'Ezio Auditore da Firenze',
    image: '/games/33230.jpg',
    url: 'https://store.steampowered.com/app/33230/Assassins_Creed_2/',
  },
]

export default function Games() {
  return (
    <section id="games" className="scroll-mt-24">
      <SectionHeading
        title="Games"
        count={games.length}
        description="Finished, loved, would replay tomorrow"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {games.map((g) => (
          <a
            key={g.name}
            href={g.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-card-2">
              <Image
                src={g.image}
                alt={g.name}
                fill
                sizes="(max-width: 640px) 50vw, 20vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="line-clamp-1 text-sm font-medium">{g.name}</span>
            <span className="-mt-1 truncate font-mono text-[11px] text-muted">{g.note}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
