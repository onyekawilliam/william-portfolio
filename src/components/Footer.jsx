import { Github } from 'lucide-react'
import Logo from './Logo'
import { navLinks, site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-mist">
              {site.role} building clean, responsive and user-friendly websites.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} className="text-sm text-mist transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 self-start border border-white/15 px-4 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} aria-hidden="true" />
            GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-mist sm:flex-row sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>Designed &amp; built with React, Vite and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
