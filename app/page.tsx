import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Companies from '@/components/Companies'
import Projects from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Music from '@/components/Music'
import Reading from '@/components/Reading'
import Work from '@/components/Work'
import Education from '@/components/Education'
import Stack from '@/components/Stack'
import Footer from '@/components/Footer'
import AskMeAnything from '@/components/AskMeAnything'

export default function Home() {
  return (
    <main className="pb-10">
      <Navbar />
      <Hero />
      <Companies />
      <Projects />
      <OpenSource />
      <Music />
      <Reading />
      <Work />
      <Education />
      <Stack />
      <Footer />
      <AskMeAnything />
    </main>
  )
}
