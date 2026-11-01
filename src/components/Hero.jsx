import { m } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Button from './Button'
import HeroVisual from './HeroVisual'
import LocalTime from './LocalTime'

const ease = [0.22, 1, 0.36, 1]

const rise = (delay) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})

export default function Hero() {
  return (
    <section id="home" className="relative isolate pt-[4.5rem]">
      <div className="container-x grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-12 lg:gap-10 lg:py-16">
        <div className="lg:col-span-7">
          <m.div {...rise(0.05)}>
            <LocalTime className="border border-white/10 bg-coal/70 px-3.5 py-1.5" />
          </m.div>

          <m.p
            {...rise(0.12)}
            className="mt-6 font-mono text-xs tracking-widest text-accent uppercase"
          >
            William · Frontend Developer
          </m.p>

          <m.h1
            {...rise(0.18)}
            className="mt-4 text-[clamp(2.5rem,6.8vw,4.75rem)] leading-[0.98] font-bold text-balance"
          >
            Building Digital Experiences That Make an <span className="text-accent">Impact.</span>
          </m.h1>

          <m.p {...rise(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            I’m William, a frontend developer based in Nigeria working with clients locally and
            worldwide. I build fast, responsive websites and web applications with React and Tailwind
            CSS, focusing on clean architecture, accessible markup, and smooth interactions that feel
            right on every screen.
          </m.p>

          <m.div {...rise(0.38)} className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Button href="#work" size="lg">
              View My Work
              <ArrowDown size={17} className="transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Let’s Talk
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </m.div>

          <m.div {...rise(0.46)} className="mt-10 flex items-center gap-6 border-t border-white/8 pt-6 font-mono text-xs text-mist">
            <div>
              <span className="block font-semibold text-bone">React & Tailwind</span>
              <span className="text-[0.7rem]">Primary Stack</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="block font-semibold text-bone">Node & MongoDB</span>
              <span className="text-[0.7rem]">Full-Stack Capable</span>
            </div>
            <div className="h-6 w-px bg-white/10" />
            <div>
              <span className="block font-semibold text-bone">Worldwide</span>
              <span className="text-[0.7rem]">Remote Friendly</span>
            </div>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="lg:col-span-5"
        >
          <HeroVisual />
        </m.div>
      </div>
    </section>
  )
}
