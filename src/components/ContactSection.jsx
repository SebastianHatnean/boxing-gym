import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

const initialForm = {
  name: '',
  phone: '',
  goal: '',
  message: '',
}

export function ContactSection({ brand, contact }) {
  const [formState, setFormState] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const buildMailto = () => {
    const email = brand?.email
    if (!email) return null

    const goalLabel =
      formState.goal === 'fitness'
        ? 'Fitness boxing'
        : formState.goal === 'beginner'
          ? 'Incepator'
          : formState.goal === 'youth'
            ? 'Copil / junior'
            : formState.goal === 'performance'
              ? 'Performanta'
              : formState.goal

    const subject = `Cerere clasa de proba — ${formState.name || 'Suceava Boxing Club'}`

    const body = [
      `Nume: ${formState.name}`,
      `Telefon: ${formState.phone}`,
      `Obiectiv: ${goalLabel || '-'}`,
      '',
      formState.message ? `Mesaj:\n${formState.message}` : 'Mesaj: -',
    ].join('\n')

    return `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      body,
    )}`
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    const mailto = buildMailto()
    if (mailto) {
      window.location.href = mailto
    }
  }

  return (
    <section id="contact" className="section-shell">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-5 md:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div variants={fadeUp} className="space-y-8">
            <SectionHeading
              label="Contact"
              title="Intra in sala cu un mesaj simplu si un obiectiv clar."
              description={contact.intro}
            />

            <div className="grid gap-4">
              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 p-3 text-red-300">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Telefon</p>
                    <a href="tel:0751968937" className="mt-2 block text-xl font-semibold text-white">
                      {brand.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 p-3 text-red-300">
                    <Instagram size={18} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Instagram</p>
                    <a
                      href={contact.socials[0].href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-xl font-semibold text-white"
                    >
                      @{brand.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-start gap-4">
                  <span className="inline-flex rounded-full border border-red-500/20 bg-red-500/10 p-3 text-red-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-zinc-400">Locatie</p>
                    <p className="mt-2 text-base leading-7 text-zinc-300">{contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-6">
            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <form className="grid gap-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-zinc-300">
                    Nume
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500/35"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-zinc-300">
                    Telefon
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500/35"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Obiectiv
                  <select
                    name="goal"
                    value={formState.goal}
                    onChange={handleChange}
                    required
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500/35"
                  >
                    <option value="" className="bg-zinc-950">
                      Alege o optiune
                    </option>
                    <option value="fitness" className="bg-zinc-950">
                      Fitness boxing
                    </option>
                    <option value="beginner" className="bg-zinc-950">
                      Incepator
                    </option>
                    <option value="youth" className="bg-zinc-950">
                      Copil / junior
                    </option>
                    <option value="performance" className="bg-zinc-950">
                      Performanta
                    </option>
                  </select>
                </label>

                <label className="grid gap-2 text-sm text-zinc-300">
                  Mesaj
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Spune-ne ce tip de antrenament cauti."
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-red-500/35"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex justify-center rounded-full bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-red-500"
                >
                  Trimite cererea
                </button>

                {submitted ? (
                  <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm leading-6 text-emerald-200">
                    Formular valid. Verifica mail-ul pentru confirmare si trimitere.
                  </p>
                ) : null}
              </form>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <iframe
                title="Harta Suceava Boxing Club"
                src={contact.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[340px] w-full border-0 grayscale"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
