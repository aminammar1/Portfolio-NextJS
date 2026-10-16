import Image from 'next/image'

type Book = {
  title: string
  author: string
  cover: string | null
  tag: string
}

const books: Book[] = [
  { title: 'Solo Leveling', author: 'Chugong · Dubu', cover: '/books/solo-leveling.jpg', tag: 'manhwa' },
  { title: 'Berserk', author: 'Kentaro Miura', cover: '/books/berserk.jpg', tag: 'manga' },
  { title: 'Hunter × Hunter', author: 'Yoshihiro Togashi', cover: '/books/hunterxhunter.jpg', tag: 'manga' },
  { title: 'Dragon Ball', author: 'Akira Toriyama', cover: '/books/dragonball.jpg', tag: 'manga' },
  { title: 'Naruto', author: 'Masashi Kishimoto', cover: '/books/naruto.jpg', tag: 'manga' },
  { title: 'أرض السافلين', author: 'أحمد خالد مصطفى', cover: '/books/ard-elsafileen.jpg', tag: 'رواية' },
  { title: 'أنتيخريستوس', author: 'أحمد خالد مصطفى', cover: '/books/antichristos.jpg', tag: 'رواية' },
  { title: 'كفاحي', author: 'أدولف هتلر', cover: null, tag: 'ترجمة عربية' },
]

export default function Reading() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-14">
      <p className="section-label">Reading ({books.length})</p>
      <h2 className="mt-1 text-xl font-semibold tracking-tight">
        Manga and novels on my shelf.
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {books.map((b) => (
          <div key={b.title} className="group">
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-line bg-card-2 transition-colors group-hover:border-accent/50">
              {b.cover ? (
                <Image
                  src={b.cover}
                  alt={`${b.title} cover`}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div
                  className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center"
                  style={{ background: 'linear-gradient(150deg, #3d0a0a, #120606)' }}
                >
                  <span className="text-3xl font-bold text-red-100/90">كفاحي</span>
                  <span className="font-mono text-[10px] text-red-100/60">أدولف هتلر</span>
                </div>
              )}
              <span className="absolute left-2 top-2 rounded bg-black/60 px-1.5 py-0.5 font-mono text-[9px] font-semibold text-white/90 backdrop-blur-sm">
                {b.tag}
              </span>
            </div>
            <p className="mt-2 truncate text-[13px] font-medium">{b.title}</p>
            <p className="truncate font-mono text-[11px] text-muted">{b.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
