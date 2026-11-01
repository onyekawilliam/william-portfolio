import { m } from 'framer-motion'

/** Fades and lifts children into view once, as they scroll in. */
export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = m[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
