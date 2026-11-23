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
import MotionProvider from '@/components/MotionProvider'
import KiBeam from '@/components/KiBeam'
import ImpactClicks from '@/components/ImpactClicks'

export default function Home() {
  return (
    <MotionProvider>
    <main className="relative overflow-x-clip pb-10">
      <Background />
      <KiBeam />
      <ImpactClicks />
      {/* Title-card katakana (アミン = Amine), outlined, running down the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed right-3 top-1/2 z-0 hidden -translate-y-1/2 select-none font-display text-[min(15vh,8rem)] leading-[1.05] text-transparent [-webkit-text-stroke:1.5px_var(--line)] [writing-mode:vertical-rl] xl:block"
      >
        アミン
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
            <h3 className="mb-6 flex flex-wrap items-baseline gap-x-3 font-display text-2xl leading-tight">
              Personals
              <span className="font-sans text-sm font-medium tracking-normal text-muted">· Favourites</span>
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
    </MotionProvider>
  )
}
