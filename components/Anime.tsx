import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'

type Show = {
  name: string
  note: string
  image: string
  url: string
}

const shows: Show[] = [
  {
    name: 'Dragon Ball',
    note: 'The one that started it all',
    image: '/anime/db.jpg',
    url: 'https://anilist.co/anime/223/Dragon-Ball/',
  },
  {
    name: 'Hunter × Hunter',
    note: 'Best power system ever written',
    image: '/anime/hxh.jpg',
    url: 'https://anilist.co/anime/11061/Hunter-x-Hunter-2011/',
  },
  {
    name: 'JoJo',
    note: 'Bizarre and proud of it',
    image: '/anime/jojo.jpg',
    url: 'https://anilist.co/anime/14719/JoJo-no-Kimyou-na-Bouken/',
  },
  {
    name: 'Naruto',
    note: 'Never give up on a hard bug',
    image: '/anime/naruto.jpg',
    url: 'https://anilist.co/anime/20/Naruto/',
  },
  {
    name: 'Fullmetal Alchemist',
    note: 'Equivalent exchange',
    image: '/anime/fma.jpg',
    url: 'https://anilist.co/anime/5114/Fullmetal-Alchemist-Brotherhood/',
  },
  {
    name: 'Black Clover',
    note: 'Surpass your limits',
    image: '/anime/blackclover.jpg',
    url: 'https://anilist.co/anime/97986/Black-Clover/',
  },
  {
    name: 'Bleach',
    note: 'Bankai hours',
    image: '/anime/bleach.jpg',
    url: 'https://anilist.co/anime/269/Bleach/',
  },
]

export default function Anime() {
  return (
    <section id="anime" className="scroll-mt-24">
      <SectionHeading
        title="Anime"
        count={shows.length}
        description="My favorites, rewatched more times than I admit"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {shows.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-card-2">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="line-clamp-1 text-sm font-medium">{s.name}</span>
            <span className="-mt-1 truncate font-mono text-[11px] text-muted">{s.note}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
