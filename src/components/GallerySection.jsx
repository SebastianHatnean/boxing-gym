import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../lib/motion'
import { SectionHeading } from './ui/SectionHeading'

export function GallerySection({ gallery }) {
  return (
    <section className="section-shell">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-5 md:px-8"
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            label="Galerie"
            title="Cadre care sustin atmosfera: intensitate, spatiu si energie de comunitate."
            description="Imaginile sunt centralizate intr-un singur fisier si pot fi inlocuite imediat cu fotografii reale din sala."
          />
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {gallery.map((image, index) => (
            <motion.div
              key={image.src}
              variants={fadeUp}
              className="h-full"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-[2rem] border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
