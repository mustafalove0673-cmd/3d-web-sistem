'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Home, Factory, Paintbrush, Hammer, Ruler, Landmark, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: Home, title: 'Konut İnşaatı', desc: 'Villa, apartman, rezidans projeleri.', tag: 'Popüler' },
  { icon: Building2, title: 'Ticari Yapılar', desc: 'Ofis, AVM, iş merkezi projeleri.', tag: null },
  { icon: Factory, title: 'Endüstriyel', desc: 'Fabrika, depo ve üretim tesisleri.', tag: null },
  { icon: Landmark, title: 'Otel & Turizm', desc: 'Otel, resort, tatil köyleri.', tag: 'Yeni' },
  { icon: Ruler, title: 'Mimarlık', desc: 'Özgün tasarım ve 3D modelleme.', tag: null },
  { icon: Paintbrush, title: 'Dekorasyon', desc: 'İç mekan tasarımı ve uygulama.', tag: null },
  { icon: Hammer, title: 'Restorasyon', desc: 'Eski yapı onarımı ve yenileme.', tag: null },
  { icon: Building2, title: 'Altyapı', desc: 'Temel, zemin ve altyapı işleri.', tag: null },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 dot-bg" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent">Hizmetlerimiz</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 25 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-5">
            Kapsamlı İnşaat <span className="text-gradient-gold">Çözümleri</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-[15px] leading-relaxed">
            Projenizin her aşamasında profesyonel destek
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="card-3d group relative border-gradient rounded-2xl p-6 cursor-pointer hover:glow transition-shadow duration-500"
            >
              {/* Tag */}
              {s.tag && (
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                    {s.tag}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-400">
                <s.icon className="w-6 h-6 text-accent group-hover:text-dark-card transition-colors duration-400" />
              </div>

              <h3 className="text-[15px] font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">{s.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">{s.desc}</p>

              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Detaylar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
