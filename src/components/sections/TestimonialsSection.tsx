'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Vista Residence Sahibi',
    text: 'ÖZKAN Yapı ile hayallerimizdeki evi inşa ettik. Her detay özenle düşünülmüş, zamanında teslim edildi. Profesyonel ekip, kusursuz işçilik.',
    rating: 5,
  },
  {
    name: 'Elif Kaya',
    role: 'Nova Tower Yatırımcı',
    text: 'Ticari projemizde gösterdikleri özen ve teknik bilgi beklentimizin çok üzerindeydi. LEED sertifikası sürecini sorunsuz yönettiler.',
    rating: 5,
  },
  {
    name: 'Mehmet Demir',
    role: 'Zephyr Villas Sahibi',
    text: 'Bodrum\'daki villa projemiz tam istediğimiz gibi oldu. Modern tasarım ve doğa ile iç içe bir yaşam alanı. Kesinlikle tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'Ayşe Çelik',
    role: 'Cedar Park Site Yöneticisi',
    text: '120 konutluk sitemizde akıllı ev teknolojisi entegrasyonu mükemmel oldu. Satış hızı ve müşteri memnuniyeti çok yüksek.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* BG glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] font-heading">Referanslar</span>
            <div className="w-16 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Müşterilerimiz </span>
            <span className="text-gradient">Ne Diyor?</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-white/[0.04] hover:border-primary/15 transition-all duration-700"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/15 mb-4" />

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
