import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { fadeUp, floatAnimation, staggerContainer } from '../lib/motion'
import { PrimaryButton } from './ui/PrimaryButton'

export function HeroSection({ brand, hero, stats }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.28),transparent_38%),radial-gradient(circle_at_80%_28%,rgba(127,29,29,0.35),transparent_32%),linear-gradient(180deg,#090909_0%,#050505_60%,#090909_100%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(270deg,rgba(220,38,38,0.15),transparent)] blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100svh-81px)] max-w-7xl items-center gap-16 px-5 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-red-200"
          >
            <Sparkles size={14} />
            {hero.eyebrow}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl font-display text-6xl font-bold uppercase italic leading-[0.88] tracking-[0.01em] text-white sm:text-7xl md:text-8xl lg:text-[7.6rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href={hero.primaryCta.href}>{hero.primaryCta.label}</PrimaryButton>
            <PrimaryButton href={hero.secondaryCta.href} variant="ghost">
              <span className="mr-2 inline-flex rounded-full border border-white/10 bg-white/10 p-1">
                <Play size={14} />
              </span>
              {hero.secondaryCta.label}
            </PrimaryButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-5">
                <p className="text-3xl font-black text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-zinc-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-8 top-20 hidden h-56 w-56 rounded-full bg-red-700/20 blur-3xl lg:block" />
          <motion.div
            animate={reduceMotion ? undefined : floatAnimation}
            className="absolute -left-6 top-10 z-20 hidden w-52 rounded-3xl border border-white/10 bg-black/70 p-5 shadow-2xl lg:block"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-300">Focus</p>
            <p className="mt-3 text-lg font-semibold text-white">{hero.floatingCard.title}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{hero.floatingCard.description}</p>
          </motion.div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_100%)]" />
            <img
              src={hero.image.src}
              alt={hero.image.alt}
              className="h-[560px] w-full object-cover object-center md:h-[680px]"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <div className="glass-panel rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.32em] text-red-300">{brand.city}</p>
                <div className="mt-4 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-2xl font-semibold uppercase text-white md:text-3xl">
                      {brand.name}
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">{brand.tagline}</p>
                  </div>
                  <span className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200 md:inline-flex">
                    <ArrowRight size={14} className="mr-2" />
                    Trial class
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
