import { Code2, Compass, Cpu, Layers } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const principles = [
  {
    icon: Code2,
    title: 'Frontend Engineering',
    text: 'Building robust interfaces with React and Tailwind CSS. Clean component hierarchy, reusable logic, and predictable state.',
  },
  {
    icon: Layers,
    title: 'Responsive Design',
    text: 'Creating fluid layouts tested against real screen sizes — ensuring effortless readability from small mobile screens to ultra-wide displays.',
  },
  {
    icon: Compass,
    title: 'Pragmatic Problem Solving',
    text: 'Breaking complex requirements down into maintainable steps. I focus on simplicity over clever, fragile code.',
  },
  {
    icon: Cpu,
    title: 'Ideas into Working Products',
    text: 'Bridging the gap between static wireframes and production software, with functional forms, smooth navigation, and snappy load times.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/6 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="01"
          label="About"
          title="Building clean, responsive web applications that solve real problems."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="space-y-5 text-base leading-relaxed text-mist sm:text-lg lg:col-span-6">
            <p>
              Hi, I’m William, a frontend developer based in Nigeria. I build modern, responsive web
              applications for clients locally and internationally.
            </p>
            <p>
              I focus on the fundamentals that make a website genuinely good to use: crisp visual
              hierarchy, semantic structure, responsive layouts that don't glitch, and accessible
              interactions that work smoothly for every visitor.
            </p>
            <p>
              Beyond the browser, I also work with Node.js, Express, and MongoDB, allowing me to build
              full-stack applications, connect REST APIs, and understand how the frontend integrates
              with the server.
            </p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-6">
            {principles.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={i * 0.06}
                className="group border border-white/8 bg-coal/70 p-6 transition-all duration-300 hover:border-white/16 hover:bg-coal"
              >
                <div className="inline-flex size-9 items-center justify-center rounded border border-white/10 bg-charcoal/80 text-accent">
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-bone">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-mist sm:text-sm">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
