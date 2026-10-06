import { useCallback, useEffect, useState } from 'react'
import { ScrollTrigger } from './lib/gsap'
import Preloader from './components/Preloader/Preloader'
import Cursor from './components/Cursor/Cursor'
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import About from './components/About/About'
import Stack from './components/Stack/Stack'
import Projects from './components/Projects/Projects'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  // `revealed` flips when the preloader starts lifting, so the hero intro plays underneath it.
  const [revealed, setRevealed] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const onReveal = useCallback(() => setRevealed(true), [])
  const onDone = useCallback(() => setLoaded(true), [])

  // Layout can shift once web fonts and images arrive — recalculate trigger positions.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [])

  return (
    <>
      {!loaded && <Preloader onReveal={onReveal} onDone={onDone} />}
      <Cursor />
      <Nav ready={revealed} />
      <main>
        <Hero ready={revealed} />
        <Marquee />
        <About />
        <Stack />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
