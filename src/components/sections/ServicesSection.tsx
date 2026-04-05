'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Building2, Home, Warehouse, Paintbrush, Ruler, Hammer,
  ArrowUpRight, Factory, Hotel, Landmark
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Konut İnşaatı',
    desc: 'Villa, apartman ve rezidans projelerinde modern yaşam alanları tasarlıyoruz.',
    tags: ['Villa', 'Apartman', 'Rezidans'],
    color: 'from-accent/10 to-accent/0',
    span: 'sm:col-span-2 lg:col-span-2',
  },
  {
    icon: Building2,
    title: 'Ticari Yapılar',
    desc: 'Ofis, AVM ve iş merkezi projelerinde işlevsel çözümler sunuyoruz.',
    tags: ['Ofis', 'AVM', 'İş Merkezi'],
    color: 'from-gold/10 to-gold/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
  {
    icon: Factory,
    title: 'Endüstriyel Tesisler',
    desc: 'Fabrika, depo ve üretim tesisleri inşa ediyoruz.',
    tags: ['Fabrika', 'Depo'],
    color: 'from-accent/10 to-accent/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
  {
    icon: Hotel,
    title: 'Otel & Turizm',
    desc: 'Otel, resort ve turizm tesisleri projelendiriyoruz.',
    tags: ['Otel', 'Resort'],
    color: 'from-gold/10 to-gold/0',
    span: 'sm:col-span-2 lg:col-span-1',
  },
  {
    icon: Ruler,
    title: 'Mimarlık & Tasarım',
    desc: 'Özgün mimari tasarım ve 3D görselleştirme hizmeti.',
    tags: ['Tasarım', '3D Modelleme'],
    color: 'from-accent/10 to-accent/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
  {
    icon: Paintbrush,
    title: 'Dekorasyon & İç Mimarlık',
    desc: 'İç mekan tasarımı ve dekorasyon uygulamaları.',
    tags: ['İç Mekan', 'Dekorasyon'],
    color: 'from-gold/10 to-gold/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
  {
    icon: Hammer,
    title: 'Restorasyon & Yenileme',
    desc: 'Eski yapıların onarımı ve modernize edilmesi.',
    tags: ['Restorasyon', 'Yenileme'],
    color: 'from-accent/10 to-accent/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
  {
    icon: Landmark,
    title: 'Altyapı & Zemin',
    desc: 'Temel, zemin etüdü ve altyapı projeleri.',
    tags: ['Zemin', 'Altyapı'],
    color: 'from-gold/10 to-gold/0',
    span: 'sm:col-span-1 lg:col-span-1',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="relative py-24 md:py-32 bg-muted/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 diagonal-lines" />

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
              Hizmetlerimiz
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-5"
          >
            Kapsamlı İnşaat{' '}
            <span className="text-gradient-gold">Çözümleri</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            Projenizin her aşamasında profesyonel destek sunuyoruz
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-accent/20 transition-all duration-500 hover-lift cursor-pointer overflow-hidden ${service.span}`}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Arrow icon top right */}
              <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-accent/0 flex items-center justify-center group-hover:bg-accent transition-all duration-500">
                <ArrowUpRight className="w-4 h-4 text-accent group-hover:text-white transition-colors duration-500" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-muted text-muted-foreground group-hover:bg-accent/10 group-hover:text-accent transition-all duration-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom line accent */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent to-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
