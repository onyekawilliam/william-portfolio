import { ArrowUpRight, Code2, Globe, LayoutTemplate, MonitorSmartphone, RefreshCw, Wrench } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { services } from '../data/site'

const icons = { Globe, LayoutTemplate, MonitorSmartphone, Code2, RefreshCw, Wrench }

export default function Services() {
  return (
    <section id="services" className="relative border-y border-line bg-coal py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="03" label="Services" title="How I can help your business online.">
          Practical frontend services for businesses, startups and individuals who need a website that
          looks professional and works properly.
        </SectionHeading>

        <ul className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon]
            return (
              <Reveal
                as="li"
                key={service.title}
                delay={(i % 3) * 0.07}
                className="group relative flex flex-col bg-coal p-8 transition-colors duration-300 hover:bg-charcoal"
              >
                <div className="flex items-start justify-between">
                  <Icon size={30} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
                  <span className="font-mono text-xs text-mist/70">0{i + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl leading-tight font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-mist">{service.text}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-bone transition-colors hover:text-accent"
                  aria-label={`Discuss ${service.title}`}
                >
                  Discuss this
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                />
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
