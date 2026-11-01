import { useState } from 'react'
import { Check, Sparkles, Terminal, Wand2 } from 'lucide-react'
import AccentSwitcher from './AccentSwitcher'

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('ui')
  const [toggleOn, setToggleOn] = useState(true)
  const [clickCount, setClickCount] = useState(0)
  const [selectedPill, setSelectedPill] = useState('react')

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Human-crafted interactive craft card */}
      <div className="overflow-hidden border border-white/12 bg-coal shadow-[0_24px_50px_-12px_rgba(0,0,0,0.8)]">
        {/* Card header */}
        <div className="flex items-center justify-between border-b border-white/10 bg-charcoal/70 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-2.5 rounded-full bg-red-500/80" />
            <span className="size-2.5 rounded-full bg-amber-500/80" />
            <span className="size-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs text-mist">frontend-craft.studio</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('ui')}
              className={`px-2.5 py-1 font-mono text-xs transition-colors ${
                activeTab === 'ui' ? 'bg-white/10 text-bone' : 'text-mist hover:text-bone'
              }`}
            >
              Interactive UI
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spec')}
              className={`px-2.5 py-1 font-mono text-xs transition-colors ${
                activeTab === 'spec' ? 'bg-white/10 text-bone' : 'text-mist hover:text-bone'
              }`}
            >
              Specs
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive UI Sandbox */}
        {activeTab === 'ui' ? (
          <div className="space-y-6 p-6">
            {/* Live interactive accent switcher widget */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-mist">01 / Dynamic site accent</span>
                <span className="font-mono text-[0.65rem] text-accent">Real-time reactive</span>
              </div>
              <div className="mt-2.5 flex items-center justify-between border border-white/8 bg-charcoal/60 p-3">
                <span className="text-sm font-medium text-bone">Pick a palette:</span>
                <AccentSwitcher />
              </div>
            </div>

            {/* Interactive component mechanics */}
            <div>
              <span className="font-mono text-xs text-mist">02 / State & Micro-interactions</span>
              <div className="mt-2.5 grid grid-cols-2 gap-3">
                {/* Interactive spring switch */}
                <button
                  type="button"
                  onClick={() => setToggleOn((v) => !v)}
                  className="flex flex-col justify-between border border-white/8 bg-charcoal/60 p-3.5 text-left transition-colors hover:border-white/20"
                >
                  <span className="text-xs text-mist">Fluid state</span>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm font-medium text-bone">
                      {toggleOn ? 'Active' : 'Paused'}
                    </span>
                    <span
                      className={`inline-flex h-5 w-9 items-center rounded-full p-0.5 transition-colors ${
                        toggleOn ? 'bg-accent' : 'bg-white/15'
                      }`}
                    >
                      <span
                        className={`size-4 rounded-full bg-white transition-transform ${
                          toggleOn ? 'translate-x-4' : 'translate-x-0'
                        }`}
                      />
                    </span>
                  </div>
                </button>

                {/* Interactive haptic counter */}
                <button
                  type="button"
                  onClick={() => setClickCount((c) => c + 1)}
                  className="group flex flex-col justify-between border border-white/8 bg-charcoal/60 p-3.5 text-left transition-colors hover:border-accent/40"
                >
                  <span className="text-xs text-mist">Haptic counter</span>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-mono text-sm font-semibold text-bone">
                      {clickCount} {clickCount === 1 ? 'tap' : 'taps'}
                    </span>
                    <span className="text-xs text-accent transition-transform group-hover:scale-125">
                      +1
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Interactive category pills */}
            <div>
              <span className="font-mono text-xs text-mist">03 / Component tags</span>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {[
                  { id: 'react', label: 'React 19' },
                  { id: 'tailwind', label: 'Tailwind CSS' },
                  { id: 'responsive', label: '100% Mobile Ready' },
                  { id: 'a11y', label: 'WCAG Accessible' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPill(item.id)}
                    className={`border px-3 py-1.5 text-xs font-medium transition-colors ${
                      selectedPill === item.id
                        ? 'border-accent bg-accent/15 text-bone'
                        : 'border-white/10 bg-charcoal/40 text-mist hover:text-bone'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Real Developer Specifications */
          <div className="space-y-4 p-6 font-mono text-xs">
            <div className="border border-white/8 bg-charcoal/60 p-4">
              <p className="text-mist">// Engineering Standards</p>
              <div className="mt-3 space-y-2 text-bone">
                <p className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Semantic HTML5 elements throughout
                </p>
                <p className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Clean keyboard focus and skip navigation
                </p>
                <p className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Zero cumulative layout shift (CLS)
                </p>
                <p className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Fast initial paint via lazy animation loading
                </p>
                <p className="flex items-center gap-2">
                  <Check size={14} className="text-accent" />
                  Tested across 320px to 1440px viewports
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between border border-white/8 bg-charcoal/40 p-3 text-mist">
              <span>Node runtime: ES Modules</span>
              <span className="text-accent">Production build</span>
            </div>
          </div>
        )}

        {/* Footer status bar */}
        <div className="flex items-center justify-between border-t border-white/8 bg-charcoal/90 px-4 py-2.5 font-mono text-[0.7rem] text-mist">
          <span className="flex items-center gap-1.5">
            <Terminal size={12} className="text-accent" /> Clean component state
          </span>
          <span className="text-bone">Try clicking the controls above</span>
        </div>
      </div>
    </div>
  )
}
