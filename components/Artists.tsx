import Image from 'next/image'
import SectionHeading from '@/components/SectionHeading'

type Artist = {
  name: string
  genre: string
  image: string
  url: string
}

const artists: Artist[] = [
  {
    name: 'Metallica',
    genre: 'Thrash metal',
    image: '/artists/metallica.jpg',
    url: 'https://open.spotify.com/artist/2ye2Wgw4gimLv9eAKaQGXAT',
  },
  {
    name: 'Billie Eilish',
    genre: 'Alt pop',
    image: '/artists/billieeilish.jpg',
    url: 'https://open.spotify.com/search/Billie%20Eilish',
  },
  {
    name: 'Eminem',
    genre: 'Hip-hop',
    image: '/artists/eminem.jpg',
    url: 'https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRRy',
  },
  {
    name: 'Redstar Radi',
    genre: 'Hip-hop · TN',
    image: '/artists/redstar-radi.jpg',
    url: 'https://open.spotify.com/search/Redstar%20Radi',
  },
]

export default function Artists() {
  return (
    <section id="artists" className="scroll-mt-24">
      <SectionHeading title="Artists" count={artists.length} description="On repeat, on every deploy" />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {artists.map((a) => (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-2"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-card-2">
              <Image
                src={a.image}
                alt={a.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <span className="line-clamp-1 text-sm font-medium">{a.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
