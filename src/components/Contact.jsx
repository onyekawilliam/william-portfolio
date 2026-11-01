import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ContactForm from './ContactForm'
import Reveal from './Reveal'
import { contact } from '../data/site'

const channels = [
  { key: 'email', icon: Mail },
  { key: 'whatsapp', icon: MessageCircle },
  { key: 'github', icon: Github },
  { key: 'linkedin', icon: Linkedin },
].filter(({ key }) => {
  const item = contact[key]
  return item && Boolean(item.value?.trim())
})

function ContactItem({ icon: Icon, item }) {
  const inner = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded border border-white/10 bg-charcoal/80 text-accent">
        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.68rem] tracking-wider text-mist uppercase">{item.label}</span>
        <span className={`mt-0.5 block truncate text-sm ${item.placeholder ? 'text-mist' : 'font-medium text-bone'}`}>
          {item.value}
        </span>
      </span>
    </>
  )

  if (item.placeholder) {
    return (
      <div className="flex items-center gap-4 border border-dashed border-white/15 bg-white/[0.02] p-3.5">
        {inner}
        <span
          title={`${item.hint} in src/data/site.js`}
          className="shrink-0 border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-accent uppercase"
        >
          Replace me
        </span>
      </div>
    )
  }

  return (
    <a
      href={item.href(item.value)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 border border-white/8 bg-coal/70 p-3.5 transition-all duration-200 hover:border-white/20 hover:bg-coal"
      aria-label={`${item.label}: ${item.value} (opens in a new tab)`}
    >
      {inner}
      <ArrowUpRight
        size={16}
        aria-hidden="true"
        className="shrink-0 text-mist transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
      />
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/6 py-20 sm:py-28">
      <div className="container-x relative">
        <SectionHeading index="05" label="Contact" title="Have a project in mind? Let’s talk.">
          Tell me what you’re building and what you need. Whether it’s a new website from scratch, a
          redesign, or practical frontend improvements, I’d be glad to discuss it.
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <ul className="space-y-2.5">
              {channels.map(({ key, icon }) => (
                <li key={key}>
                  <ContactItem icon={icon} item={contact[key]} />
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/8 pt-5 text-xs text-mist leading-relaxed">
              <p className="font-semibold text-bone">Based in Nigeria · Available Globally</p>
              <p className="mt-1">
                Flexible across time zones for remote contracts. Drop me an email or a quick WhatsApp
                message anytime.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
