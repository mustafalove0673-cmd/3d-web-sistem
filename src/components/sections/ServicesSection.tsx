'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building, Home, Palette, Ruler, HardHat, Hammer, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Konut Yapımı',
    desc: 'Lüks villa, rezidans ve site projeleri.',
    span: 'md:col-span-2',
    accent: '#E63946',
  },
  {
    icon: Home,
    title: 'Ticari Yapılar',
    desc: 'Ofis, AVM ve iş merkezi projeleri.',
    span: '',
    accent: '#F4A261',
  },
  {
    icon: Palette,
    title: 'Dekorasyon',
    desc: 'İç mekan tasarımı ve dekorasyon.',
    span: '',
    accent: '#2A9D8F',
  },
  {
    icon: Ruler,
    title: 'Mimari Tasarım',
    desc: 'Ödüllü mimari projeler ve 3D görselleştirme.',
    span: '',
    accent: '#E9C46A',
  },
  {
    icon: HardHat,
    title: 'Anahtar Teslim',
    desc: 'Tasarımdan teslimata komple çözüm.',
    span: '',
    accent: '#E63946',
  },
  {
    icon: Hammer,
    title: 'Yapı Yenileme',
    desc: 'Restorasyon ve modernizasyon.',
    span: 'md:col-span-2',
    accent: '#F4A261',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-24 md:py-40">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-16 h-[2px] bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] font-heading">Hizmetler</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl font-bold tracking-tight"
            >
              <span className="text-foreground">Neler </span>
              <span className="text-gradient">Yapıyoruz?</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-sm max-w-sm leading-relaxed"
          >
            Her projede en yüksek standartları uyguluyor, 
            beklentilerinizi aşıyoruz.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              className={`group relative p-8 md:p-10 rounded-2xl bg-card border border-white/[0.04] hover:border-white/[0.08] transition-all duration-700 cursor-pointer overflow-hidden ${service.span}`}
            >
              {/* Hover glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ backgroundColor: `${service.accent}10` }}
              />
              {/* Hover line */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: service.accent }}
              />

              <div className="relative">
                {/* Number */}
                <span className="text-[80px] font-heading font-bold absolute -top-8 -left-2 leading-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-500"
                  style={{ backgroundColor: `${service.accent}15` }}
                >
                  <service.icon className="w-6 h-6 transition-colors duration-500" style={{ color: service.accent }} />
                </div>

                <h3 className="font-heading font-bold text-lg mb-2 text-foreground group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
