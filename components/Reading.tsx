import Image from 'next/image'
import { cn } from '@/lib/utils'
import SectionHeading from '@/components/SectionHeading'

type Book = {
  title: string
  author: string
  cover: string | null
  link: string
}

const books: Book[] = [
  { title: 'Clean Architecture', author: 'Robert C. Martin', cover: '/books/clean-architecture.jpg', link: 'https://openlibrary.org/search?q=clean+architecture+robert+martin' },
  { title: 'Building Microservices', author: 'Sam Newman', cover: '/books/building-microservices.jpg', link: 'https://openlibrary.org/search?q=building+microservices+sam+newman' },
  { title: 'The Go Programming Language', author: 'Alan A. A. Donovan · Brian W. Kernighan', cover: '/books/go-programming-language.jpg', link: 'https://openlibrary.org/search?q=the+go+programming+language' },
  { title: 'The Linux Command Line', author: 'William Shotts', cover: '/books/linux-command-line.jpg', link: 'https://openlibrary.org/search?q=the+linux+command+line+shotts' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', cover: '/books/crime-and-punishment-vintage.jpg', link: 'https://openlibrary.org/search?q=crime+and+punishment+dostoevsky' },
  { title: 'Bobby Fischer Teaches Chess', author: 'Bobby Fischer · Stuart Margulies', cover: '/books/bobby-fischer-teaches-chess.jpg', link: 'https://openlibrary.org/search?q=bobby+fischer+teaches+chess' },
  { title: 'My System', author: 'Aron Nimzowitsch', cover: '/books/my-system.jpg', link: 'https://openlibrary.org/search?q=my+system+nimzowitsch' },
  { title: 'Solo Leveling', author: 'Chugong · Dubu', cover: '/books/solo-leveling.jpg', link: 'https://openlibrary.org/search?q=solo+leveling+chugong' },
  { title: 'Berserk', author: 'Kentaro Miura', cover: '/books/berserk.jpg', link: 'https://openlibrary.org/search?q=berserk+kentaro+miura' },
  { title: 'Hunter × Hunter', author: 'Yoshihiro Togashi', cover: '/books/hunterxhunter.jpg', link: 'https://openlibrary.org/search?q=hunter+x+hunter+togashi' },
  { title: 'Dragon Ball', author: 'Akira Toriyama', cover: '/books/dragonball.jpg', link: 'https://openlibrary.org/search?q=dragon+ball+toriyama' },
  { title: 'Naruto', author: 'Masashi Kishimoto', cover: '/books/naruto.jpg', link: 'https://openlibrary.org/search?q=naruto+kishimoto' },
  { title: 'JoJo Part 4: Diamond is Unbreakable', author: 'Hirohiko Araki', cover: '/books/jojo-part4.jpg', link: 'https://openlibrary.org/search?q=jojo+diamond+is+unbreakable' },
  { title: 'The Apothecary Diaries', author: 'Natsu Hyuga', cover: '/books/apothecary.jpg', link: 'https://anilist.co/manga/99022' },
]

function BookCard({ book }: { book: Book }) {
  return (
    <a
      href={book.link}
      target="_blank"
      rel="noreferrer noopener"
      className="group flex flex-col gap-2"
    >
      <div className="relative w-full [perspective:800px]">
        {/* Stacked page edges -- thin offset layers behind the cover simulate
            a closed book's page block, visible on the right/bottom. */}
        <div
          aria-hidden
          className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-sm border border-line/60 bg-card-2"
        />
        <div
          aria-hidden
          className="absolute inset-0 translate-x-[1.5px] translate-y-[1.5px] rounded-sm border border-line/80 bg-card-2"
        />
        <div
          className={cn(
            'relative origin-left overflow-hidden rounded-sm border border-line bg-card-2 shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-out',
            "after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(90deg,rgba(0,0,0,0.118)_0.65%,rgba(255,255,255,0.2)_1.53%,rgba(255,255,255,0.1)_2.38%,rgba(0,0,0,0.05)_3.26%,rgba(255,255,255,0.14)_5.68%,rgba(244,244,244,0)_6.96%)] after:content-['']",
            'group-hover:shadow-[4px_4px_10px_rgba(0,0,0,0.2)] group-hover:[transform:rotateY(-25deg)]'
          )}
        >
          {book.cover ? (
            <Image
              src={book.cover}
              alt={book.title}
              width={200}
              height={300}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="aspect-[2/3] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[2/3] w-full items-center justify-center bg-card-2 p-3">
              <span className="line-clamp-3 text-center text-xs font-medium text-muted">
                {book.title}
              </span>
            </div>
          )}
        </div>
      </div>
      <span className="line-clamp-1 text-sm font-medium">{book.title}</span>
      <span className="-mt-1 truncate font-mono text-[11px] text-muted">{book.author}</span>
    </a>
  )
}

export default function Reading() {
  return (
    <section id="reading" className="scroll-mt-24">
      <SectionHeading title="Reading list" count={books.length} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {books.map((b) => (
          <BookCard key={b.title} book={b} />
        ))}
      </div>
    </section>
  )
}
