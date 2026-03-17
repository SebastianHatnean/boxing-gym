import { motion } from 'framer-motion'
import { ShieldCheck, Target, Users } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

const icons = {
  Tehnica: Target,
  Conditie: ShieldCheck,
  Comunitate: Users,
}

export function AboutSection({ about }) {
  return (
    <section id="about" className="section-shell">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <motion.div variants={fadeUp} className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-red-600/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="h-[520px] w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-8">
          <SectionHeading
            label={about.label}
            title={about.title}
            description={about.description}
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {about.highlights.map((item) => {
              const Icon = icons[item.title]

              return (
                <div key={item.title} className="glass-panel rounded-3xl p-5">
                  <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 p-3 text-red-300">
                    <Icon size={20} />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                </div>
              )
            })}
          </div>

          <ul className="grid gap-3">
            {about.bullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-zinc-300"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
