import { useEffect, useState } from 'react'

export const accents = [
  { id: 'orange', name: 'Electric Orange', color: '#ff5a1f', hover: '#ff7440' },
  { id: 'cyan', name: 'Cyber Cyan', color: '#06b6d4', hover: '#22d3ee' },
  { id: 'lime', name: 'Acid Lime', color: '#84cc16', hover: '#a3e635' },
  { id: 'amber', name: 'Solar Amber', color: '#f59e0b', hover: '#fbbf24' },
]

export default function AccentSwitcher({ className = '' }) {
  const [active, setActive] = useState('orange')

  const applyAccent = (accent) => {
    setActive(accent.id)
    document.documentElement.style.setProperty('--accent-color', accent.color)
    document.documentElement.style.setProperty('--accent-hover', accent.hover)
    try {
      localStorage.setItem('william_accent', accent.id)
    } catch {}
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem('william_accent')
      const found = accents.find((a) => a.id === saved)
      if (found) applyAccent(found)
    } catch {}
  }, [])

  return (
    <div
      className={`items-center gap-1.5 rounded-full border border-white/10 bg-coal/80 p-1 backdrop-blur-sm ${
        className.includes('flex') || className.includes('hidden') ? className : `inline-flex ${className}`
      }`}
      role="radiogroup"
      aria-label="Theme accent color"
    >
      {accents.map((accent) => {
        const isSelected = active === accent.id
        return (
          <button
            key={accent.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={`${accent.name} theme`}
            onClick={() => applyAccent(accent)}
            className="group relative size-5 rounded-full transition-transform hover:scale-110 focus:outline-none"
            style={{ backgroundColor: accent.color }}
          >
            {isSelected && (
              <span className="absolute inset-0 m-auto size-1.5 rounded-full bg-ink ring-2 ring-white" />
            )}
          </button>
        )
      })}
    </div>
  )
}
