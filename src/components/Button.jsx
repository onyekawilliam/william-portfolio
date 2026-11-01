const base =
  'group inline-flex items-center justify-center gap-2.5 font-medium whitespace-nowrap transition-all duration-200 ' +
  'disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px'

const variants = {
  primary: 'bg-accent text-ink hover:bg-accent-hover hover:shadow-[0_0_0_4px_rgb(255_90_31/0.18)]',
  outline: 'border border-white/20 text-bone hover:border-accent hover:text-accent',
  ghost: 'text-bone hover:text-accent',
}

const sizes = {
  sm: 'h-10 px-5 text-sm',
  md: 'h-12 px-7 text-[0.95rem]',
  lg: 'h-14 px-8 text-base',
}

/** Renders an <a> when `href` is given, otherwise a <button>. */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  children,
  ...props
}) {
  const displayClass = className.includes('flex') || className.includes('hidden') ? '' : 'inline-flex'
  const classes = `group ${displayClass} items-center justify-center gap-2.5 font-medium whitespace-nowrap transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60 active:translate-y-px ${variants[variant]} ${sizes[size]} ${className}`
  if (href) {
    const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
    return (
      <a href={href} className={classes} {...extra} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
