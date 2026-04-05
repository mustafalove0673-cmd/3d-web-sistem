'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'

const projects = [
  { title: 'Vista Residence', cat: 'Konut', loc: 'İstanbul, Beykoz', desc: 'Panoramik boğaz manzaralı 24 villa site projesi.', year: '2024', area: '12.500 m²', color: '#2C3E6B' },
  { title: 'Nova Tower', cat: 'Ticari', loc: 'Ankara, Çankaya', desc: '32 katlı modern ofis binası, LEED sertifikalı.', year: '2023', area: '28.000 m²', color: '#C8A97E' },
  { title: 'Zephyr Villas', cat: 'Villa', loc: 'Bodrum, Yalıkavak', desc: 'Ege mimarisinden ilham alan havuzlu villa.', year: '2024', area: '8.200 m²', color: '#5B7DB1' },
  { title: 'Meridian Mall', cat: 'Ticari', loc: 'İzmir, Karşıyaka', desc: '185 mağazalı modern alışveriş merkezi.', year: '2023', area: '45.000 m²', color: '#2C3E6B' },
  { title: 'Cedar Park', cat: 'Site', loc: 'Antalya, Konyaaltı', desc: 'Akıllı ev teknolojili 120 konutluk site.', year: '2024', area: '22.000 m²', color: '#C8A97E' },
]

function ProjectCard({ p, i }: { p: typeof projects[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      className="w-[80vw] sm:w-[60vw] md:w-[42vw] lg:w-[35vw] flex-shrink-0 group"
    >
      <div className="card-lift bg-card rounded-2xl border border-border overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative h-[280px] sm:h-[320px] md:h-[360px] overflow-hidden bg-muted">
          <div className="absolute inset-0 flex items-center justify-center dot-pattern">
            <div className="w-28 h-40 rounded-t-lg border border-white/10 overflow-hidden"
              style={{ backgroundColor: `${p.color}06` }}>
              <div className="absolute inset-3 grid grid-cols-3 grid-rows-6 gap-1.5">
                {Array.from({ length: 18 }).map((_, j) => (
                  <div key={j} className="rounded-sm"
                    style={{ backgroundColor: `${p.color}${Math.random() > 0.4 ? '15' : '08'}` }} />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-white/90 text-foreground">
              {p.cat}
            </span>
          </div>
          <motion.div
            animate={{ scale: 0, rotate: -45 }}
            whileHover={{ scale: 1, rotate: 0 }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-primary flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-1.5 text-white/70 mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-xs">{p.loc}</span>
            </div>
            <h3 className="font-heading font-bold text-xl text-white">{p.title}</h3>
          </div>
          <div className="absolute bottom-4 right-4 text-right">
            <div className="text-[10px] text-white/40">{p.year}</div>
            <div className="text-[10px] text-white/60">{p.area}</div>
          </div>
        </div>
        <div className="px-5 py-4 flex items-center justify-between">
          <p className="text-sm text-muted-foreground line-clamp-1">{p.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-4 mb-4">
            <div className="divider-line" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Portföy</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Öne Çıkan <span className="text-gradient">Projeler</span>
          </h2>
        </motion.div>
      </div>
      <div className="horizontal-scroll pl-6 lg:pl-8 pr-6">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
      </div>
    </section>
  )
}
