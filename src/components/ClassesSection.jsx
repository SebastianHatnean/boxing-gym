import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

export function ClassesSection({ classes, schedule }) {
  return (
    <section id="classes" className="section-shell border-y border-white/8 bg-black/20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-5 md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <motion.div variants={fadeUp}>
            <SectionHeading
              label="Clase si program"
              title="Grupe clare, intensitate controlata si program pe care te poti baza."
              description="Fie ca intri pentru conditie, tehnica sau competitie, alegi grupa potrivita si incepi cu un ritm sustenabil."
            />
          </motion.div>

          <motion.div variants={fadeUp} className="glass-panel rounded-[2rem] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-red-300">
              Program club
            </p>
            <div className="mt-6 space-y-4">
              {schedule.map((item) => (
                <div
                  key={item.days}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-4"
                >
                  <span className="text-sm uppercase tracking-[0.16em] text-zinc-300">
                    {item.days}
                  </span>
                  <span className="text-base font-semibold text-white">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {classes.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 transition duration-300 hover:-translate-y-1 hover:border-red-500/30"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-red-300">
                {item.level}
              </span>
              <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Vezi mai mult
                <ArrowUpRight
                  size={16}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
