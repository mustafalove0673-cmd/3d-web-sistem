'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ArrowUpRight, MapPin, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'Vista Residence',
    category: 'Konut',
    location: 'İstanbul, Beykoz',
    desc: 'Panoramik boğaz manzaralı 24 villa luxurious site projesi.',
    year: '2024',
    area: '12.500 m²',
    color: '#E63946',
  },
  {
    title: 'Nova Tower',
    category: 'Ticari',
    location: 'Ankara, Çankaya',
    desc: '32 katlı modern ofis binası, LEED sertifikalı.',
    year: '2023',
    area: '28.000 m²',
    color: '#F4A261',
  },
  {
    title: 'Zephyr Villas',
    category: 'Villa',
    location: 'Bodrum, Yalıkavak',
    desc: 'Ege mimarisinden ilham alan özel tasarım havuzlu villa.',
    year: '2024',
    area: '8.200 m²',
    color: '#2A9D8F',
  },
  {
    title: 'Meridian Mall',
    category: 'Ticari',
    location: 'İzmir, Karşıyaka',
    desc: '185 mağazalı, açık hava konseptli alışveriş merkezi.',
    year: '2023',
    area: '45.000 m²',
    color: '#E9C46A',
  },
  {
    title: 'Cedar Park',
    category: 'Site',
    location: 'Antalya, Konyaaltı',
    desc: 'Akıllı ev teknolojili 120 konutluk doğa ile iç içe site.',
    year: '2024',
    area: '22.000 m²',
    color: '#E63946',
  },
  {
    title: 'Atlas Plaza',
    category: 'Ofis',
    location: 'İstanbul, Maslak',
    desc: 'A+ ofis standardında, teknoloji altyapılı iş merkezi.',
    year: '2023',
    area: '35.000 m²',
    color: '#F4A261',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-[85vw] sm:w-[65vw] md:w-[45vw] lg:w-[38vw] flex-shrink-0"
    >
      <div className="group relative rounded-2xl overflow-hidden bg-card border border-white/[0.04] hover:border-white/[0.08] transition-all duration-700 cursor-pointer">
        {/* Image Area */}
        <div className="relative h-[350px] sm:h-[400px] md:h-[450px] overflow-hidden bg-muted">
          {/* Geometric building illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: isHovered ? 2 : 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Building shapes based on project */}
              <div
                className="w-28 h-40 sm:w-36 sm:h-52 rounded-t-lg border border-white/[0.06] relative overflow-hidden"
                style={{ backgroundColor: `${project.color}08` }}
              >
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-6 gap-1.5 p-3">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{
                        backgroundColor: `${project.color}${Math.random() > 0.4 ? '25' : '0D'}`,
                        opacity: isHovered ? 1 : 0.7,
                        transition: 'opacity 0.5s',
                      }}
                    />
                  ))}
                </div>
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-4"
                  style={{ backgroundColor: `${project.color}20` }}
                />
              </div>
              <div
                className="absolute -bottom-0 -right-6 w-16 h-24 rounded-t-lg border border-white/[0.04]"
                style={{ backgroundColor: `${project.color}06` }}
              >
                <div className="absolute inset-2 grid grid-cols-2 grid-rows-4 gap-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-sm"
                      style={{ backgroundColor: `${project.color}15` }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hover overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-60'}`} />

          {/* Category */}
          <div className="absolute top-5 left-5">
            <span
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.category}
            </span>
          </div>

          {/* Arrow */}
          <motion.div
            animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : -45 }}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
          >
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.div>

          {/* Bottom info */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-white/60 mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs">{project.location}</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">{project.title}</h3>
            </div>
            <div className="text-right">
              <div className="text-xs text-white/40">{project.year}</div>
              <div className="text-xs text-white/60">{project.area}</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="px-6 py-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground line-clamp-1">{project.desc}</p>
          <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 ml-4 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="relative py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12" ref={ref}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-16 h-[2px] bg-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] font-heading">Portföy</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-3xl md:text-5xl font-bold tracking-tight"
            >
              <span className="text-foreground">Öne Çıkan </span>
              <span className="text-gradient">Projeler</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-sm max-w-sm leading-relaxed flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 text-primary animate-pulse" />
            Kaydırarak keşfedin
          </motion.p>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div ref={scrollRef} className="horizontal-scroll pl-6 lg:pl-10 pr-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Scroll gradient edges */}
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
    </section>
  )
}
