import { ArrowUpRight, Code2, Globe, LayoutTemplate, MonitorSmartphone, RefreshCw, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { services } from '../data/site'

const icons = { Globe, LayoutTemplate, MonitorSmartphone, Code2, RefreshCw, Wrench }

export default function Services() {
  return (
    <section id="services" className="relative border-t border-white/6 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading index="03" label="Services" title="Practical frontend services for your business.">
          Direct, reliable development support for startups, businesses, and creators needing a
          dependable web presence.
        </SectionHeading>

        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={(i % 3) * 0.05}
                className="group relative flex flex-col justify-between border border-white/8 bg-coal/60 p-7 transition-all duration-300 hover:border-white/16 hover:bg-coal"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex size-9 items-center justify-center rounded border border-white/10 bg-charcoal/80 text-accent">
                      <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-xs text-white/30">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-bone">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist">{service.text}</p>
                </div>

                <div className="mt-8 border-t border-white/6 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-bone transition-colors group-hover:text-accent"
                    aria-label={`Inquire about ${service.title}`}
                  >
                    Inquire about this
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
