import { ChevronRight, Lock, Receipt, ShoppingBag, Smartphone, UtensilsCrossed, Users } from 'lucide-react'

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

function KrisgenPreview() {
  return (
    <div className="flex h-full flex-col justify-center p-5 sm:p-7">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-charcoal shadow-2xl">
        {/* Admin order summary */}
        <div className="flex items-center justify-between border-b border-white/8 bg-coal/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded bg-accent/20 text-accent">
              <Smartphone size={14} />
            </span>
            <div>
              <p className="text-xs font-bold text-bone">Order summary</p>
              <p className="font-mono text-[0.62rem] text-mist">Sample figures</p>
            </div>
          </div>
          <span className="rounded-full border border-white/15 px-2 py-0.5 font-mono text-[0.62rem] text-mist">Admin view</span>
        </div>

        <div className="space-y-3 p-4">
          <div className="space-y-1.5 rounded border border-white/8 bg-ink/60 p-3 font-mono text-xs">
            <div className="flex justify-between text-mist"><span>Selling price</span><span className="text-bone">100.00</span></div>
            <div className="flex justify-between text-mist"><span className="flex items-center gap-1"><Lock size={11} /> Cost price</span><span className="text-bone">80.00</span></div>
            <div className="flex justify-between border-t border-white/8 pt-1.5 font-bold text-bone"><span>Profit</span><span className="text-accent">20.00</span></div>
          </div>

          <div className="space-y-1.5 text-[0.68rem] text-mist">
            <p className="flex items-center gap-1.5 text-bone">
              <Receipt size={12} className="text-accent" />
              <span>Commission is a share of the profit</span>
            </p>
            <p className="flex items-center gap-1.5 text-bone">
              <Users size={12} className="text-accent" />
              <span>One level only: seller and their referrer</span>
            </p>
            <p className="flex items-center gap-1.5 text-bone">
              <Lock size={12} className="text-accent" />
              <span>Cost price is never shown to customers</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const previews = {
  scan2dine: Scan2DinePreview,
  krisgen: KrisgenPreview,
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
