import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

export function TrainerSection({ trainer }) {
  return (
    <section id="trainer" className="section-shell">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <motion.div variants={fadeUp} className="space-y-8">
          <SectionHeading
            label="Antrenor"
            title="Un profil construit pentru incredere acum si extindere rapida mai tarziu."
            description={trainer.bio}
          />

          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-300">
              {trainer.role}
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">{trainer.name}</h3>
            <ul className="mt-6 grid gap-3">
              {trainer.achievements.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative">
          <div className="absolute -bottom-8 right-0 h-36 w-36 rounded-full bg-red-600/20 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={trainer.image.src}
              alt={trainer.image.alt}
              className="h-[560px] w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
