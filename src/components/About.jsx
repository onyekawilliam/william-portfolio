import { LayoutPanelTop, Lightbulb, MonitorSmartphone, Rocket } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const pillars = [
  {
    icon: LayoutPanelTop,
    title: 'Frontend development',
    text: 'Clean, component-based interfaces built with React and Tailwind CSS.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive web design',
    text: 'Layouts that feel right on every screen, from small phones to wide desktops.',
  },
  {
    icon: Lightbulb,
    title: 'Problem solving',
    text: 'Breaking a tricky requirement into clear steps and finding a practical way through.',
  },
  {
    icon: Rocket,
    title: 'Ideas into products',
    text: 'Taking a concept from a rough idea to something people can actually use.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading index="01" label="About" title="Modern, functional web apps that people enjoy using." />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-mist lg:col-span-6">
            <p>
              Hi, I’m William, a frontend developer with a strong interest in building modern,
              functional and user-friendly web applications. I enjoy the moment a design stops being
              a picture and starts behaving like a real product.
            </p>
            <p>
              I care about the details that make a site feel good to use: clear structure, readable
              typography, smooth interactions and layouts that hold up on any device. I also work
              with Node.js, Express and MongoDB, which lets me understand how the frontend connects
              to the rest of an application.
            </p>
            <p>
              Whether you have a fully formed brief or just an idea, I like working through the
              problem step by step and turning it into a working, polished website.
            </p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-6">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 0.07} className="group bg-ink p-7 transition-colors hover:bg-charcoal">
                <Icon size={26} strokeWidth={1.5} className="text-accent" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-mist">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
