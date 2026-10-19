import Image from 'next/image'
import pfimage from '@/assets/pfimage.png'
import RotatingSubtitle from '@/components/RotatingSubtitle'

/**
 * Name-header strip (reference structure): avatar + name + subtitle,
 * closed by a full-bleed hairline, then the hatched divider, then the
 * About panel below.
 */
export default function Hero() {
  return (
    <section className="screen-line-bottom relative mx-auto sm:max-w-lg md:max-w-2xl xl:max-w-3xl px-4 pb-6 pt-20">
      <div className="flex items-center gap-3">
        <Image
          src={pfimage}
          alt="Mohamed Amine Ammar"
          width={56}
          height={56}
          priority
          className="size-14 rounded-full border border-line object-cover object-top"
        />
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Mohamed Amine Ammar</h1>
          <RotatingSubtitle
            lines={[
              'Full Stack Software Developer | AI, Microservices & Cloud',
              "i like listening to music and coding :)",
            ]}
          />
        </div>
      </div>
    </section>
  )
}
