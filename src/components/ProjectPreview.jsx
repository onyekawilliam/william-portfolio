import { ArrowRight, Database, Server } from 'lucide-react'

/**
 * Designed (illustrative) previews. They are NOT screenshots of the real
 * applications; they are composed from simple shapes to hint at each project.
 */

// Decorative QR-style pattern (deterministic, not scannable).
const QR_SIZE = 11
const qrCells = (() => {
  const cells = []
  let seed = 11
  for (let r = 0; r < QR_SIZE; r++) {
    for (let c = 0; c < QR_SIZE; c++) {
      const finder =
        (r < 3 && c < 3) || (r < 3 && c >= QR_SIZE - 3) || (r >= QR_SIZE - 3 && c < 3)
      seed = (seed * 9301 + 49297) % 233280
      if (finder || seed / 233280 > 0.52) cells.push([r, c, finder])
    }
  }
  return cells
})()

function Scan2DinePreview() {
  return (
    <div className="relative flex h-full items-center justify-center gap-6 px-6">
      {/* Table card with QR */}
      <div className="hidden w-40 -rotate-3 border border-white/12 bg-bone p-4 text-ink sm:block">
        <p className="font-mono text-[0.6rem] tracking-widest uppercase">Table 07</p>
        <svg viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`} className="mt-3 w-full" shapeRendering="crispEdges">
          {qrCells.map(([r, c, finder]) => (
            <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill={finder ? '#ff5a1f' : '#0a0a0a'} />
          ))}
        </svg>
        <p className="mt-3 text-center text-[0.65rem] font-semibold tracking-wide uppercase">Scan to order</p>
      </div>

      {/* Phone with menu */}
      <div className="w-44 border border-white/15 bg-ink p-3 shadow-[0_24px_60px_-18px_rgb(0_0_0/0.9)] sm:w-48 sm:rounded-[1.25rem]">
        <div className="mx-auto mb-3 h-1 w-10 bg-white/20" />
        <div className="mb-3 hidden h-16 bg-gradient-to-br from-accent/90 to-accent/30 sm:block" />
        <div className="space-y-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex items-center gap-2.5 border border-white/8 bg-charcoal p-2">
              <div className="size-9 shrink-0 bg-graphite" />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-3/4 bg-bone/80" />
                <div className="h-1.5 w-1/2 bg-white/15" />
              </div>
              <div className="grid size-5 place-items-center bg-accent text-[0.7rem] leading-none font-bold text-ink">
                +
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 grid h-9 place-items-center bg-accent text-xs font-semibold text-ink">Place order</div>
      </div>
    </div>
  )
}

function EcommercePreview() {
  const nodes = [
    { icon: Server, label: 'Express', sub: 'server' },
    { icon: Database, label: 'MongoDB', sub: 'via Mongoose' },
  ]
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-5 px-5 pb-6 sm:gap-6 sm:px-6">
      <p className="font-mono text-[0.65rem] tracking-[0.22em] text-mist uppercase">Backend foundation</p>
      <div className="flex w-full max-w-md items-center justify-center gap-3 sm:gap-5">
        <div className="hidden border border-dashed border-white/20 px-4 py-5 text-center sm:block">
          <p className="font-mono text-xs text-mist">Client</p>
          <p className="mt-1 text-[0.65rem] text-mist/60">not in repo yet</p>
        </div>
        <ArrowRight size={18} className="hidden shrink-0 text-accent sm:block" />
        {nodes.map(({ icon: Icon, label, sub }, i) => (
          <div key={label} className="flex items-center gap-3 sm:gap-5">
            <div className="border border-white/15 bg-charcoal px-4 py-5 text-center shadow-[0_20px_50px_-20px_rgb(0_0_0/0.9)]">
              <Icon size={22} strokeWidth={1.5} className="mx-auto text-accent" />
              <p className="mt-2 text-sm font-semibold">{label}</p>
              <p className="font-mono text-[0.6rem] text-mist">{sub}</p>
            </div>
            {i < nodes.length - 1 && <ArrowRight size={18} className="shrink-0 text-accent" />}
          </div>
        ))}
      </div>
      <div className="w-full max-w-md border border-white/10 bg-ink/80 p-4 font-mono text-[0.7rem] leading-relaxed">
        <p>
          <span className="text-accent">$</span> node index.js
        </p>
        <p className="text-white/50">listening to port …</p>
      </div>
    </div>
  )
}

function PortfolioPreview() {
  return (
    <div className="relative flex h-full items-center justify-center px-6">
      <div className="w-full max-w-md border border-white/12 bg-ink shadow-[0_24px_60px_-18px_rgb(0_0_0/0.9)]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="size-2 rounded-full bg-white/15" />
          <span className="ml-2 h-3.5 flex-1 border border-white/8" />
        </div>
        <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
          <div className="h-2.5 w-14 bg-bone" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 bg-white/20" />
            <div className="h-1.5 w-8 bg-white/20" />
            <div className="h-1.5 w-8 bg-white/20" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 p-5">
          <div className="col-span-3 space-y-3">
            <div className="h-2 w-1/3 bg-accent" />
            <div className="h-4 w-full bg-bone/90" />
            <div className="h-4 w-4/5 bg-bone/90" />
            <div className="h-1.5 w-full bg-white/12" />
            <div className="h-1.5 w-2/3 bg-white/12" />
            <div className="h-6 w-20 bg-accent" />
          </div>
          <div className="col-span-2 grid place-items-center">
            <div className="size-20 rounded-full border-2 border-accent/70 bg-graphite" />
          </div>
        </div>
      </div>
    </div>
  )
}

const previews = {
  scan2dine: Scan2DinePreview,
  ecommerce: EcommercePreview,
  portfolio: PortfolioPreview,
}

export default function ProjectPreview({ type }) {
  const Preview = previews[type]
  return (
    <div
      role="img"
      aria-label="Designed illustration representing the project (not a screenshot)"
      className="relative h-[19.5rem] overflow-hidden bg-coal sm:h-[22rem] lg:h-full lg:min-h-[24rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(255_90_31/0.16),transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(rgb(255_255_255/0.07)_1px,transparent_1px)] [background-size:20px_20px]"
      />
      <div aria-hidden="true" className="relative h-full transition-transform duration-700 ease-out group-hover/card:scale-[1.04]">
        <Preview />
      </div>
      <span className="absolute bottom-3 left-4 font-mono text-[0.6rem] tracking-widest text-mist/70 uppercase">
        Illustrative preview
      </span>
    </div>
  )
}
