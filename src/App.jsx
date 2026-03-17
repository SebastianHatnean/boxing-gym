import { useEffect } from 'react'
import { AboutSection } from './components/AboutSection'
import { ClassesSection } from './components/ClassesSection'
import { ContactSection } from './components/ContactSection'
import { FaqSection } from './components/FaqSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { TestimonialsSection } from './components/TestimonialsSection'
import { TrainerSection } from './components/TrainerSection'
import { siteContent } from './content/siteContent'

function App() {
  useEffect(() => {
    document.title = siteContent.seo.title

    const ensureMeta = (name, content, attribute = 'name') => {
      let element = document.head.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    ensureMeta('description', siteContent.seo.description)
    ensureMeta('og:title', siteContent.seo.title, 'property')
    ensureMeta('og:description', siteContent.seo.description, 'property')
    ensureMeta('og:type', 'website', 'property')
  }, [])

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar brand={siteContent.brand} navigation={siteContent.navigation} />
      <main>
        <HeroSection
          brand={siteContent.brand}
          hero={siteContent.hero}
          stats={siteContent.stats}
        />
        <AboutSection about={siteContent.about} />
        <ClassesSection classes={siteContent.classes} schedule={siteContent.schedule} />
        <TrainerSection trainer={siteContent.trainer} />
        <TestimonialsSection testimonials={siteContent.testimonials} />
        <GallerySection gallery={siteContent.gallery} />
        <FaqSection faqs={siteContent.faqs} />
        <ContactSection brand={siteContent.brand} contact={siteContent.contact} />
      </main>
      <Footer
        brand={siteContent.brand}
        navigation={siteContent.navigation}
        contact={siteContent.contact}
      />
    </div>
  )
}

export default App
