import { m } from 'framer-motion'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Button from './Button'
import HeroVisual from './HeroVisual'

const ease = [0.22, 1, 0.36, 1]

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-[4.5rem]">
      {/* Background details */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[42rem] rounded-full bg-accent/[0.09] blur-[140px]"
      />

      <div className="container-x grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-center gap-14 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="lg:col-span-7">
          <m.div {...rise(0.05)}>
            <p className="inline-flex items-center gap-3 border border-white/12 bg-white/[0.03] px-4 py-2 text-sm text-bone">
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for freelance projects
            </p>
          </m.div>

          <m.p
            {...rise(0.12)}
            className="mt-8 font-mono text-xs tracking-[0.22em] text-accent uppercase sm:text-sm"
          >
            William · Frontend Developer
          </m.p>

          <m.h1
            {...rise(0.18)}
            className="mt-5 text-[clamp(2.75rem,7.4vw,5.25rem)] leading-[0.96] font-extrabold text-balance"
          >
            Building Digital Experiences That Make an <span className="text-accent">Impact.</span>
          </m.h1>

          <m.p {...rise(0.3)} className="mt-7 max-w-xl text-lg leading-relaxed text-mist sm:text-xl">
            I’m William, a frontend developer who designs and builds fast, responsive websites and
            web applications that look sharp and are simple to use, for clients locally and
            internationally.
          </m.p>

          <m.div {...rise(0.4)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#work" size="lg">
              View My Work
              <ArrowDown size={18} className="transition-transform group-hover:translate-y-0.5" />
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Let’s Talk
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="lg:col-span-5"
        >
          <HeroVisual />
        </m.div>
      </div>
    </section>
  )
}
