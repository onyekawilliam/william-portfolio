import { Atom, Braces, Database, FileCode2, Palette, Route, Server, Wind } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { stack } from '../data/site'

const icons = { Atom, Braces, FileCode2, Palette, Wind, Server, Route, Database }

export default function TechStack() {
  return (
    <section id="stack" className="relative border-t border-white/6 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="04" label="Tech Stack" title="Core technologies and practical tooling.">
          The languages, frameworks, and libraries I use to build responsive, accessible, and fast web
          applications.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {stack.map((group, g) => (
            <div
              key={group.group}
              className={g === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <Reveal delay={g * 0.08}>
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-lg font-bold text-bone">{group.group}</h3>
                  <p className="mt-1 text-xs text-mist">{group.note}</p>
                </div>
              </Reveal>

              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item, i) => {
                  const Icon = icons[item.icon]
                  return (
                    <Reveal
                      as="li"
                      key={item.name}
                      delay={0.04 + i * 0.04}
                      className="group border border-white/8 bg-coal/60 p-4 transition-all duration-300 hover:border-white/16 hover:bg-coal"
                    >
                      <div className="inline-flex size-8 items-center justify-center rounded border border-white/8 bg-charcoal/80 text-mist transition-colors group-hover:text-accent">
                        <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                      </div>
                      <p className="mt-3 font-semibold text-bone text-sm">{item.name}</p>
                      <p className="mt-1 text-xs leading-snug text-mist">{item.text}</p>
                    </Reveal>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 rounded border border-white/8 bg-coal/40 p-4 font-mono text-xs text-mist flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>Engineering mindset: Semantic HTML5 · Responsive Viewports · Predictable State</span>
            <span className="text-accent font-semibold">Quality over quantity</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
