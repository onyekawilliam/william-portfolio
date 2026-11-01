import { Github } from 'lucide-react'
import Logo from './Logo'
import AccentSwitcher from './AccentSwitcher'
import { navLinks, site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-ink">
      <div className="container-x py-12 sm:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-xs leading-relaxed text-mist">
              Frontend developer based in Nigeria. Building thoughtful, responsive websites for clients
              locally and internationally.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-xs text-mist transition-colors hover:text-bone">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <AccentSwitcher />
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 bg-coal/70 px-3.5 py-1.5 text-xs text-mist transition-colors hover:border-white/20 hover:text-bone"
            >
              <Github size={14} aria-hidden="true" />
              GitHub
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/8 pt-6 font-mono text-[0.72rem] text-mist sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. Built with care &amp; craft.
          </p>
          <p>React 19 · Tailwind CSS · Vite</p>
        </div>
      </div>
    </footer>
  )
}
