import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, children, className = '' }) {
  return (
    <div className={className}>
      <Reveal>
        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-accent">
          <span>{index}</span>
          <span className="text-white/20">/</span>
          <span className="tracking-wide text-bone uppercase">{label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-3xl text-3xl leading-[1.08] font-bold text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{children}</p>
        </Reveal>
      )}
    </div>
  )
}
