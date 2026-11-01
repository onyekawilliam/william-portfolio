import { Atom, Braces, Database, FileCode2, Palette, Route, Server, Wind } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { stack } from '../data/site'

const icons = { Atom, Braces, FileCode2, Palette, Wind, Server, Route, Database }

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="04" label="Tech Stack" title="The tools I build with.">
          The technologies I use across my projects, and keep sharpening with every one I build.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {stack.map((group, g) => (
            <div
              key={group.group}
              className={g === 0 ? 'lg:col-span-7' : 'lg:col-span-5'}
            >
              <Reveal delay={g * 0.08}>
                <div className="border-b border-line pb-4">
                  <h3 className="text-xl font-semibold">{group.group}</h3>
                  <p className="mt-1 text-sm text-mist">{group.note}</p>
                </div>
              </Reveal>

              <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {group.items.map((item, i) => {
                  const Icon = icons[item.icon]
                  return (
                    <Reveal
                      as="li"
                      key={item.name}
                      delay={0.05 + i * 0.05}
                      className="group border border-line bg-charcoal p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60"
                    >
                      <Icon
                        size={26}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="text-mist transition-colors group-hover:text-accent"
                      />
                      <p className="mt-5 font-semibold">{item.name}</p>
                      <p className="mt-1 text-sm leading-snug text-mist">{item.text}</p>
                    </Reveal>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
