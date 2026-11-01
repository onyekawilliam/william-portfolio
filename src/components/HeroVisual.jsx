import { Accessibility, Smartphone } from 'lucide-react'

/**
 * Decorative hero composition: an abstract browser window, an overlapping
 * code card and a ghosted "W" monogram. Purely visual (aria-hidden).
 */
export default function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto aspect-[5/6.4] w-full max-w-md lg:max-w-none">
      {/* Ghosted monogram */}
      <span className="text-outline pointer-events-none absolute -top-4 right-2 font-display text-[12rem] leading-none font-extrabold select-none sm:text-[15rem]">
        W
      </span>

      {/* Browser window */}
      <div className="absolute top-[22%] right-0 left-[8%] border border-white/12 bg-charcoal shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="size-2.5 rounded-full bg-white/15" />
          <span className="ml-3 h-5 flex-1 border border-white/8 bg-ink/60" />
        </div>
        <div className="space-y-5 p-5 sm:p-6">
          <div className="space-y-2.5">
            <div className="h-3 w-1/3 bg-accent" />
            <div className="h-6 w-4/5 bg-bone/90" />
            <div className="h-6 w-3/5 bg-bone/90" />
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full bg-white/10" />
            <div className="h-2 w-11/12 bg-white/10" />
            <div className="h-2 w-2/3 bg-white/10" />
          </div>
          <div className="flex gap-3">
            <div className="h-9 w-24 bg-accent" />
            <div className="h-9 w-24 border border-white/20" />
          </div>
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-[4/3] border border-white/8 bg-graphite p-2">
                <div className={`h-full ${i === 1 ? 'bg-accent/80' : 'bg-white/[0.07]'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code card */}
      <div className="absolute bottom-[4%] left-0 w-[72%] animate-float border border-white/12 bg-coal/95 p-5 font-mono text-[0.72rem] leading-relaxed shadow-[0_30px_60px_-20px_rgb(0_0_0/0.9)] backdrop-blur sm:text-xs">
        <p className="text-white/40">{'// William.jsx'}</p>
        <p>
          <span className="text-accent">const</span> william = {'{'}
        </p>
        <p className="pl-4">
          role: <span className="text-emerald-300">'Frontend Developer'</span>,
        </p>
        <p className="pl-4">
          builds: <span className="text-emerald-300">'React · Tailwind'</span>,
        </p>
        <p className="pl-4">
          open: <span className="text-accent">true</span>,
        </p>
        <p>{'}'}</p>
      </div>

      {/* Floating chips */}
      <div className="absolute top-[50%] right-0 hidden items-center gap-2 border border-white/12 bg-ink/90 px-3.5 py-2 text-xs text-bone backdrop-blur sm:flex">
        <Smartphone size={14} className="text-accent" /> Responsive
      </div>
      <div className="absolute top-[61%] right-[6%] hidden items-center gap-2 border border-white/12 bg-ink/90 px-3.5 py-2 text-xs text-bone backdrop-blur sm:flex">
        <Accessibility size={14} className="text-accent" /> Accessible
      </div>
    </div>
  )
}
