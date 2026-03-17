export function PrimaryButton({ href, children, variant = 'solid', className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400'
  const styles =
    variant === 'ghost'
      ? 'border border-white/15 bg-white/5 text-white hover:border-red-500/40 hover:bg-white/10'
      : 'bg-red-600 text-white shadow-[0_0_40px_rgba(220,38,38,0.35)] hover:-translate-y-0.5 hover:bg-red-500'

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  )
}
