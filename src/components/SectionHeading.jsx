import Reveal from './Reveal'

export default function SectionHeading({ index, label, title, children, className = '' }) {
  return (
    <div className={className}>
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          <span>{index}</span>
          <span aria-hidden="true" className="h-px w-10 bg-accent/60" />
          <span>{label}</span>
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-3xl text-4xl leading-[1.02] font-bold text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">{children}</p>
        </Reveal>
      )}
    </div>
  )
}
