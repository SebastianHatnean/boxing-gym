export function SectionHeading({ label, title, description, align = 'left' }) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment}`}>
      {label ? (
        <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-red-300/80">
          {label}
        </span>
      ) : null}
      <div className="space-y-4">
        <h2 className="font-display text-4xl font-semibold uppercase leading-[0.95] tracking-[0.02em] text-white md:text-6xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-7 text-zinc-300 md:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  )
}
