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
      <span className="grid size-11 shrink-0 place-items-center border border-white/12 text-accent">
        <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.7rem] tracking-[0.16em] text-mist uppercase">{item.label}</span>
        <span className={`mt-0.5 block truncate ${item.placeholder ? 'text-mist' : 'font-medium text-bone'}`}>
          {item.value}
        </span>
      </span>
    </>
  )

  if (item.placeholder) {
    return (
      <div className="flex items-center gap-4 border border-dashed border-white/20 bg-white/[0.02] p-4">
        {inner}
        <span
          title={`${item.hint} in src/data/site.js`}
          className="shrink-0 border border-accent/50 bg-accent/10 px-2 py-1 font-mono text-[0.62rem] tracking-wider text-accent uppercase"
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
      className="group flex items-center gap-4 border border-line bg-charcoal p-4 transition-colors hover:border-accent/60"
      aria-label={`${item.label}: ${item.value} (opens in a new tab)`}
    >
      {inner}
      <ArrowUpRight
        size={18}
        aria-hidden="true"
        className="shrink-0 text-mist transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
      />
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-coal py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-52 -left-40 size-[34rem] rounded-full bg-accent/[0.08] blur-[130px]"
      />
      <div className="container-x relative">
        <SectionHeading index="05" label="Contact" title="Have a project in mind? Let’s talk.">
          Tell me what you’re building and what you need. Whether it’s a new website, a redesign or a
          fix for something that isn’t working, I’d like to hear about it.
        </SectionHeading>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <ul className="space-y-3">
              {channels.map(({ key, icon }) => (
                <li key={key}>
                  <ContactItem icon={icon} item={contact[key]} />
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-mist">
              Working with clients locally and internationally. Share a few details in the form and
              I’ll reply to discuss the next steps.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
