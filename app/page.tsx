import Navbar from '@/components/Navbar'
import Background from '@/components/Background'
import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import Divider from '@/components/Divider'
import Work from '@/components/Work'
import Education from '@/components/Education'
import Certificates from '@/components/Certificates'
import Companies from '@/components/Companies'
import Projects from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Stack from '@/components/Stack'
import Artists from '@/components/Artists'
import Chess from '@/components/Chess'
import Anime from '@/components/Anime'
import Games from '@/components/Games'
import Reading from '@/components/Reading'
import Footer from '@/components/Footer'
import AskMeAnything from '@/components/AskMeAnything'

export default function Home() {
  return (
    <main className="relative pb-10">
      <Background />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 z-0 select-none font-sans text-[22vw] font-black leading-none tracking-tighter text-foreground/[0.025]"
      >
        AMINE
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Divider />
        <PhotoGallery />
        <Divider />
        <Work />
        <Education />
        <Certificates />
        <Companies />
        <Projects />
        <OpenSource />
        <Divider />
        <Stack>
          <div className="mt-8 border-t border-line pt-8">
            <h3 className="mb-4 flex flex-wrap items-baseline gap-x-3 text-xl font-semibold leading-tight">
              Personals
              <span className="text-sm font-medium tracking-normal text-muted">· Favourites</span>
            </h3>
            <div className="space-y-8">
              <Artists />
              <div className="border-t border-line pt-8">
                <Chess />
              </div>
              <div className="border-t border-line pt-8">
                <Anime />
              </div>
              <div className="border-t border-line pt-8">
                <Games />
              </div>
              <div className="border-t border-line pt-8">
                <Reading />
              </div>
            </div>
          </div>
        </Stack>
        <Footer />
        <AskMeAnything />
      </div>
    </main>
  )
}
