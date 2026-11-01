import { useEffect, useRef } from 'react'

export default function AmbientBackground() {
  const spotlightRef = useRef(null)

  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return

    let rafId = null
    let targetX = window.innerWidth / 2
    let targetY = 240
    let currentX = targetX
    let currentY = targetY

    const onPointerMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      // Smooth interpolation for organic, fluid motion
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      el.style.setProperty('--mouse-x', `${currentX.toFixed(1)}px`)
      el.style.setProperty('--mouse-y', `${currentY.toFixed(1)}px`)
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none"
    >
      {/* 1. Dynamic Interactive Spotlight that follows the cursor with active accent color */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(750px circle at var(--mouse-x, 50%) var(--mouse-y, 25%), rgba(var(--accent-rgb, 255, 90, 31), 0.09), transparent 65%)`,
        }}
      />

      {/* 2. Top atmospheric ambient glow to softly anchor the header and hero */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[55rem] h-[22rem] opacity-40 blur-[100px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(var(--accent-rgb, 255, 90, 31), 0.2), transparent 70%)`,
        }}
      />

      {/* 3. Tactile Film Grain (Eliminates flat digital banding, adds analog texture) */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-screen"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 4. Subtle engineering coordinate marks at margin edges */}
      <div className="container-x relative h-full">
        <div className="absolute top-28 left-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
        <div className="absolute top-28 right-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
        <div className="absolute top-1/2 left-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
        <div className="absolute top-1/2 right-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
        <div className="absolute bottom-28 left-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
        <div className="absolute bottom-28 right-4 font-mono text-[0.65rem] text-white/[0.07] select-none">
          +
        </div>
      </div>
    </div>
  )
}
