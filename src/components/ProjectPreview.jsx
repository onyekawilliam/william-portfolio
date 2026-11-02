import { CheckCircle2, ChevronRight, Database, ExternalLink, QrCode, Server, ShoppingBag, Terminal, UtensilsCrossed } from 'lucide-react'

function Scan2DinePreview() {
  return (
    <div className="flex h-full flex-col justify-center p-5 sm:p-7">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-charcoal shadow-2xl">
        {/* App Bar */}
        <div className="border-b border-white/8 bg-coal/90 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded bg-accent/20 text-accent">
                <UtensilsCrossed size={14} />
              </span>
              <div>
                <p className="text-xs font-bold text-bone">The Copper Pan</p>
                <p className="font-mono text-[0.62rem] text-mist">Table #07 · Dine-in</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.65rem] text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Menu Active
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2.5 p-3.5">
          <div className="flex items-center justify-between border border-white/6 bg-ink/60 p-2.5">
            <div>
              <p className="text-xs font-semibold text-bone">Flame-Grilled Burger</p>
              <p className="text-[0.65rem] text-mist">Angus beef, aged cheddar, brioche</p>
              <p className="mt-1 font-mono text-xs font-bold text-accent">$18.00</p>
            </div>
            <button
              type="button"
              className="rounded bg-accent px-2.5 py-1 text-xs font-semibold text-ink"
            >
              + Add
            </button>
          </div>

          <div className="flex items-center justify-between border border-white/6 bg-ink/60 p-2.5">
            <div>
              <p className="text-xs font-semibold text-bone">Crispy Truffle Fries</p>
              <p className="text-[0.65rem] text-mist">Parmesan, herbs, black truffle aioli</p>
              <p className="mt-1 font-mono text-xs font-bold text-accent">$9.50</p>
            </div>
            <button
              type="button"
              className="rounded border border-white/15 px-2.5 py-1 text-xs font-medium text-bone"
            >
              + Add
            </button>
          </div>
        </div>

        {/* Order Sticky Footer */}
        <div className="border-t border-white/8 bg-coal/90 p-3">
          <div className="flex items-center justify-between rounded bg-accent px-3.5 py-2 text-xs font-bold text-ink">
            <span className="flex items-center gap-1.5">
              <ShoppingBag size={13} />
              1 item · $18.00
            </span>
            <span className="flex items-center gap-1">
              Place Order <ChevronRight size={13} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EcommercePreview() {
  return (
    <div className="flex h-full flex-col justify-center p-5 sm:p-7">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-coal shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/8 bg-charcoal/80 px-3.5 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-red-500/70" />
            <span className="size-2 rounded-full bg-amber-500/70" />
            <span className="size-2 rounded-full bg-emerald-500/70" />
            <span className="ml-2 font-mono text-[0.65rem] text-mist">backend/index.js · Node & Express</span>
          </div>
          <span className="font-mono text-[0.62rem] text-accent">REST API</span>
        </div>

        {/* API route display */}
        <div className="space-y-3 p-4 font-mono text-xs">
          <div className="rounded border border-white/8 bg-ink/70 p-3">
            <div className="flex items-center justify-between text-[0.7rem]">
              <span className="text-emerald-400 font-bold">GET</span>
              <span className="text-mist">/</span>
              <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[0.65rem] text-emerald-400">
                200 OK
              </span>
            </div>
            <p className="mt-2 text-[0.65rem] text-white/50">{'{ status: "server running" }'}</p>
          </div>

          <div className="space-y-1.5 text-[0.68rem] text-mist">
            <p className="flex items-center gap-1.5 text-bone">
              <Server size={12} className="text-accent" />
              <span>Express app and JSON parser configured</span>
            </p>
            <p className="flex items-center gap-1.5 text-bone">
              <Database size={12} className="text-accent" />
              <span>MongoDB connected with Mongoose schemas</span>
            </p>
          </div>

          <div className="rounded border border-white/6 bg-charcoal/40 px-2.5 py-1.5 text-[0.65rem] text-white/40">
            $ node index.js → server listening
          </div>
        </div>
      </div>
    </div>
  )
}

const previews = {
  scan2dine: Scan2DinePreview,
  ecommerce: EcommercePreview,
}

export default function ProjectPreview({ type, name }) {
  const Preview = previews[type]
  return (
    <div
      role="img"
      aria-label={`Illustration of the ${name} project (not a screenshot)`}
      className="relative min-h-[19rem] overflow-hidden bg-coal sm:min-h-[22rem] lg:h-full lg:min-h-[24rem]"
    >
      <span className="absolute top-3 left-3 z-10 border border-white/15 bg-ink/80 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-mist uppercase">
        Illustration
      </span>
      <div className="relative h-full transition-transform duration-500 ease-out group-hover/card:scale-[1.02]">
        <Preview />
      </div>
    </div>
  )
}
