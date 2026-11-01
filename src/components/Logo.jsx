import { site } from '../data/site'

export default function Logo({ className = '', onClick }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      aria-label={`${site.name}, back to top`}
      className={`inline-flex items-baseline gap-2 ${className}`}
    >
      <span className="font-display text-2xl font-extrabold tracking-tight">
        {site.name}
        <span className="text-accent">.</span>
      </span>
      <span className="hidden font-mono text-[0.65rem] tracking-[0.18em] text-mist uppercase sm:inline">
        Frontend Dev
      </span>
    </a>
  )
}
