import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import PhotoGallery from '@/components/PhotoGallery'
import Divider from '@/components/Divider'
import Companies from '@/components/Companies'
import Projects from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Artists from '@/components/Artists'
import Reading from '@/components/Reading'
import Work from '@/components/Work'
import Education from '@/components/Education'
import Stack from '@/components/Stack'
import Footer from '@/components/Footer'
import AskMeAnything from '@/components/AskMeAnything'

export default function Home() {
  return (
    <main className="relative pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 z-0 select-none font-sans text-[22vw] font-black leading-none tracking-tighter text-foreground/[0.025]"
      >
        AMINE
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <PhotoGallery />
        <Divider />
        <Companies />
        <Projects />
        <OpenSource />
        <Artists />
        <Reading />
        <Divider />
        <Work />
        <Education />
        <Divider />
        <Stack />
        <Footer />
        <AskMeAnything />
      </div>
    </main>
  )
}
