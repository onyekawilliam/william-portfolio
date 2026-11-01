import { useEffect, useState } from 'react'

export default function LocalTime({ className = '' }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      try {
        const now = new Date()
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Lagos',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(now)
        setTime(`${formatted} WAT`)
      } catch {
        setTime('WAT')
      }
    }
    update()
    const timer = setInterval(update, 15000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-xs text-mist ${className}`}>
      <span className="relative flex size-2" aria-hidden="true">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
      </span>
      <span>Nigeria {time && `(${time})`}</span>
      <span className="text-white/20">/</span>
      <span className="text-bone">Available for work</span>
    </div>
  )
}
