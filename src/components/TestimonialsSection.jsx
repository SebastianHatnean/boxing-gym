import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { fadeUp } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

export function TestimonialsSection({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [testimonials.length])

  const previous = () =>
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((current) => (current + 1) % testimonials.length)

  return (
    <section id="testimonials" className="section-shell border-y border-white/8 bg-black/20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <SectionHeading
            label="Testimoniale"
            title="Rezultatele se vad in corp, in incredere si in consecventa."
            description="Mesaje construite in ton realist pentru un club local: specifice, credibile si orientate spre experienta."
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              aria-label="Testimonial anterior"
              className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-red-500/30 hover:bg-white/10"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Testimonial urmator"
              className="inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-red-500/30 hover:bg-white/10"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.article
            key={testimonials[activeIndex].name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel rounded-[2rem] p-8 md:p-10"
          >
            <div className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 p-3 text-red-300">
              <Quote size={20} />
            </div>
            <p className="mt-6 max-w-3xl text-2xl leading-[1.5] text-white md:text-3xl">
              “{testimonials[activeIndex].quote}”
            </p>
            <div className="mt-8">
              <p className="text-lg font-semibold text-white">{testimonials[activeIndex].name}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                {testimonials[activeIndex].role}
              </p>
            </div>
          </motion.article>

          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-[1.5rem] border p-5 text-left transition ${
                  index === activeIndex
                    ? 'border-red-500/35 bg-red-500/10'
                    : 'border-white/8 bg-white/[0.03] hover:border-white/15'
                }`}
              >
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-zinc-400">
                  {item.role}
                </p>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-zinc-400">{item.quote}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
