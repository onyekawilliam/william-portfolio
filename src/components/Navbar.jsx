import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import AccentSwitcher from './AccentSwitcher'
import useActiveSection from '../hooks/useActiveSection'
import { navLinks } from '../data/site'

const sectionIds = ['home', 'about', 'work', 'services', 'stack', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const current = useActiveSection(sectionIds)
  // "Tech stack" has no nav item of its own, so keep "Services" highlighted there.
  const active = current === 'stack' ? 'services' : current
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu open: lock page scroll, close on Escape, keep Tab focus inside the menu.
  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab') return
      const focusable = [
        toggleRef.current,
        ...(menuRef.current?.querySelectorAll('a, button') ?? []),
      ].filter(Boolean)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    // Close the menu automatically if the viewport grows past the mobile breakpoint.
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled && !open
          ? 'border-b border-white/8 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-[4.5rem] items-center justify-between">
        <Logo onClick={close} />

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'page' : undefined}
                className={`relative px-4 py-2 text-sm transition-colors hover:text-bone ${
                  active === link.id ? 'text-bone' : 'text-mist'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                    active === link.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <AccentSwitcher />
          </div>

          <Button href="#contact" size="sm" className="hidden md:inline-flex">
            Let’s Talk
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-11 place-items-center border border-white/15 text-bone transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>

    <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            ref={menuRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[4.5rem] z-40 flex flex-col overflow-y-auto bg-ink px-5 pt-8 pb-10 md:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map((link, i) => (
                <m.li
                  key={link.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                  className="border-b border-white/10"
                >
                  <a
                    href={`#${link.id}`}
                    onClick={close}
                    aria-current={active === link.id ? 'page' : undefined}
                    className={`flex items-baseline justify-between py-5 font-display text-4xl font-bold tracking-tight transition-colors hover:text-accent ${
                      active === link.id ? 'text-accent' : 'text-bone'
                    }`}
                  >
                    {link.label}
                    <span className="font-mono text-xs text-mist">0{i + 1}</span>
                  </a>
                </m.li>
              ))}
            </ul>
            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="font-mono text-xs text-mist">Accent Color:</span>
              <AccentSwitcher />
            </div>

            <Button href="#contact" size="lg" onClick={close} className="mt-6 w-full">
              Let’s Talk
              <ArrowUpRight size={18} />
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
