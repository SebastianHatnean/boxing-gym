import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import boxingLogo from '../assets/boxing-logo-removebg.png'

export function Navbar({ brand, navigation }) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry?.target?.id) {
          setActive(`#${visibleEntry.target.id}`)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.2, 0.4, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [navigation])

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-4">
          <span className="flex size-16 items-center justify-center overflow-hidden p-1 md:size-24">
            <img
              src={boxingLogo}
              alt={`${brand.name} logo`}
              className="h-full w-full object-contain"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium uppercase tracking-[0.18em] transition ${
                active === item.href ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:0751968937"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-200 transition hover:text-white"
          >
            <Phone size={16} />
            {brand.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-red-500"
          >
            Clasa de proba
          </a>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-3 text-white lg:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Inchide meniul' : 'Deschide meniul'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-black/90 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 md:px-8">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-200"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white"
              >
                Programeaza acum
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
