import { useState } from 'react'
import { motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

export function FaqSection({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="section-shell border-y border-white/8 bg-black/20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl px-5 md:px-8"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label="FAQ"
            title="Intrebari normale, raspunsuri directe."
            description="Sectiunea acopera cele mai frecvente blocaje pentru incepatori, parinti si persoane care vor sa reintre in forma."
            align="center"
          />
        </motion.div>

        <div className="mt-10 grid gap-4">
          {faqs.map((item, index) => {
            const isActive = activeIndex === index

            return (
              <motion.div
                key={item.question}
                variants={fadeUp}
                className="rounded-[1.75rem] border border-white/8 bg-white/[0.03] p-2"
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 rounded-[1.25rem] px-5 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-white">{item.question}</span>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/5 p-2 text-white">
                    {isActive ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {isActive ? (
                  <div className="px-5 pb-5 text-sm leading-7 text-zinc-400">{item.answer}</div>
                ) : null}
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
