'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Home, Palette, Ruler, HardHat, Hammer, ArrowUpRight } from 'lucide-react'

const services = [
  { icon: Building, title: 'Konut Yapımı', desc: 'Lüks villa, rezidans ve modern site projeleri.', accent: '#2C3E6B' },
  { icon: Home, title: 'Ticari Yapılar', desc: 'Ofis, AVM ve iş merkezi projeleri.', accent: '#5B7DB1' },
  { icon: Palette, title: 'Dekorasyon', desc: 'İç mekan tasarımı ve dekorasyon.', accent: '#C8A97E' },
  { icon: Ruler, title: 'Mimari Tasarım', desc: 'Ödüllü mimari ve 3D görselleştirme.', accent: '#2C3E6B' },
  { icon: HardHat, title: 'Anahtar Teslim', desc: 'Tasarımdan teslimata komple çözüm.', accent: '#C8A97E' },
  { icon: Hammer, title: 'Yapı Yenileme', desc: 'Restorasyon ve modernizasyon.', accent: '#5B7DB1' },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }} className="flex items-center justify-center gap-4 mb-4">
            <div className="divider-line" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Hizmetler</span>
            <div className="divider-line" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Neler <span className="text-gradient">Yapıyoruz?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Her projede en yüksek standartları uyguluyoruz.
          </motion.p>
        </div>

        {/* Grid — Stagger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group card-lift relative p-7 bg-card rounded-2xl border border-border hover:border-primary/20 cursor-pointer overflow-hidden"
            >
              {/* Top line reveal on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: s.accent }} />

              {/* Number */}
              <span className="absolute top-5 right-5 text-[60px] font-heading font-bold leading-none text-black/[0.02]
                group-hover:text-black/[0.04] transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ backgroundColor: `${s.accent}10` }}>
                  <s.icon className="w-6 h-6" style={{ color: s.accent }} />
                </div>
                <h3 className="font-heading font-bold text-base mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {s.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
