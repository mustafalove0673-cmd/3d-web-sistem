'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Ahmet Yılmaz', role: 'Vista Residence', text: 'Hayallerimizdeki evi inşa ettiler. Her detay özenle düşünülmüş, zamanında teslim edildi.', rating: 5 },
  { name: 'Elif Kaya', role: 'Nova Tower', text: 'Ticari projemizde gösterdikleri teknik bilgi beklentimizin çok üzerindeydi.', rating: 5 },
  { name: 'Mehmet Demir', role: 'Zephyr Villas', text: 'Bodrum\'daki villa projemiz tam istediğimiz gibi oldu. Kesinlikle tavsiye ederim.', rating: 5 },
  { name: 'Ayşe Çelik', role: 'Cedar Park', text: '120 konutluk sitemizde akıllı ev entegrasyonu mükemmel oldu. Satış hızı çok yüksek.', rating: 5 },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 md:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-white/30" />
            <span className="text-xs font-bold text-white/60 uppercase tracking-[0.2em]">Referanslar</span>
            <div className="w-10 h-[2px] bg-white/30" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
            Müşterilerimiz Ne Diyor?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="p-7 rounded-2xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-500"
            >
              <Quote className="w-7 h-7 text-white/10 mb-4" />
              <p className="text-sm text-white/70 leading-relaxed mb-5">{t.text}</p>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
