'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'İş Adamı',
    project: 'Villa Projesi',
    text: 'YapıPro ekibi villa projemizi hayal ettiğimizden çok daha güzel bir şekilde tamamladı. İşçilik kalitesi ve zamanında teslim konusunda son derece profesyoneller.',
    rating: 5,
    initials: 'AY',
  },
  {
    id: 2,
    name: 'Elif Demir',
    role: 'Mimar',
    project: 'Ofis Binası',
    text: 'Ticari projemizde YapıPro ile çalışmak büyük bir zevkti. Mühendislik çözümleri ve inşaat kalitesi beklediğimizin çok üzerindeydi.',
    rating: 5,
    initials: 'ED',
  },
  {
    id: 3,
    name: 'Mehmet Kaya',
    role: 'Yatırımcı',
    project: 'Rezidans Projesi',
    text: 'Rezidans projemizi zamanında ve bütçe dahilinde teslim ettiler. Malzeme kalitesi ve detaylara gösterilen özen gerçekten takdire şayan.',
    rating: 5,
    initials: 'MK',
  },
  {
    id: 4,
    name: 'Zeynep Arslan',
    role: 'Otel Yöneticisi',
    project: 'Otel İnşaatı',
    text: 'Otel projemizde her aşamada iletişimleri mükemmeldi. Sorunlara hızlı çözümler ürettiler ve projeyi kusursuz tamamladılar.',
    rating: 5,
    initials: 'ZA',
  },
  {
    id: 5,
    name: 'Can Öztürk',
    role: 'Fabrika Müdürü',
    project: 'Endüstriyel Tesis',
    text: 'Fabrika projemizde teknik becerileri ve proje yönetimleri çok başarılıydı. Zorlu zemin koşullarına rağmen projeyi başarıyla tamamladılar.',
    rating: 5,
    initials: 'CÖ',
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" ref={ref} className="relative py-24 md:py-32 bg-muted/50 overflow-hidden">
      <div className="absolute inset-0 dot-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
              Referanslar
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-5"
          >
            Müşterilerimiz Ne{' '}
            <span className="text-gradient-gold">Diyor?</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative bg-card rounded-3xl p-8 md:p-12 border border-border shadow-xl shadow-black/[0.03]"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 md:top-12 md:right-12">
                <Quote className="w-12 h-12 text-accent/10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
                &ldquo;{testimonials[active].text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-white font-bold text-sm">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonials[active].name}</div>
                    <div className="text-sm text-muted-foreground">{testimonials[active].role}</div>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-muted-foreground font-medium">Proje</div>
                  <div className="text-sm font-bold text-accent">{testimonials[active].project}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-accent' : 'w-2 bg-border hover:bg-accent/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
