import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Marquee from '@/components/Marquee'
import Projects from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Education from '@/components/Education'
import Stack from '@/components/Stack'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="pb-10">
      <Navbar />
      <div className="flex flex-col gap-4">
        <Hero />
        <About />
        <Experience />
        <Marquee />
        <Projects />
        <OpenSource />
        <Education />
        <Stack />
        <Footer />
      </div>
    </main>
  )
}
