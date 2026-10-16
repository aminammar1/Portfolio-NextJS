import Image from 'next/image'

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
    name: 'Pink Floyd',
    genre: 'Progressive rock',
    image: '/artists/pinkfloyd.png',
    url: 'https://open.spotify.com/artist/69GGBxA162lTqCwzJG5jFk',
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
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Artists ({artists.length})</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        On repeat, on every deploy.
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {artists.map((a) => (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border border-line bg-card-2 transition-colors group-hover:border-accent/50">
              <Image
                src={a.image}
                alt={a.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
              />
            </div>
            <p className="mt-2 truncate text-[13px] font-medium group-hover:underline group-hover:underline-offset-4">
              {a.name}
            </p>
            <p className="truncate font-mono text-[11px] text-muted">{a.genre}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
