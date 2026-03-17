import boxingLogo from '../assets/boxing-logo-removebg.png'
import { Instagram, MessageCircle } from 'lucide-react'

export function Footer({ brand, navigation, contact }) {
  const socialLinks = (contact?.socials ?? []).filter((item) => {
    const label = (item?.label ?? '').toLowerCase()
    return label.includes('instagram') || label.includes('whatsapp')
  })

  return (
    <footer className="border-t border-white/8 bg-black/60">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div>
          <a href="#home" className="flex items-center gap-4">
            <span className="flex size-16 items-center justify-center overflow-hidden p-1 md:size-24">
              <img
                src={boxingLogo}
                alt={`${brand.name} logo`}
                className="h-full w-full object-contain"
              />
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white md:text-base">
              {brand.name}
            </p>
          </a>
        </div>

        <div className="flex flex-wrap gap-4 lg:justify-center">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.18em] text-zinc-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 lg:justify-end">
          {socialLinks.map((item) => {
            const label = (item.label ?? '').toLowerCase()
            const Icon = label.includes('instagram') ? Instagram : MessageCircle

            return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={item.label}
              title={item.label}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
            >
              <Icon className="size-5" />
            </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
