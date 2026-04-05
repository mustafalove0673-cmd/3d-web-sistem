'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, ArrowUpRight, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Merkez Park Rezidans',
    category: 'Konut',
    location: 'Ankara, Çankaya',
    year: '2023',
    desc: '32 daireli modern rezidans projesi. Yerden ısıtma, akıllı ev sistemi ve peyzaj bahçe.',
    area: '4.500 m²',
    gradient: 'from-amber-800 via-amber-900 to-stone-900',
    accent: '#d4a843',
  },
  {
    id: 2,
    title: 'TechPark Ofis',
    category: 'Ticari',
    location: 'İstanbul, Ataşehir',
    year: '2023',
    desc: '15 katlı A+ ofis binası. Lobi, kafeterya ve otopark.',
    area: '8.200 m²',
    gradient: 'from-slate-700 via-zinc-800 to-neutral-900',
    accent: '#94a3b8',
  },
  {
    id: 3,
    title: 'Green Valley Villas',
    category: 'Konut',
    location: 'Bolu, Mudurnu',
    year: '2022',
    desc: '12 adet lüks villa. Doğayla iç içe, özel havuz ve bahçe.',
    area: '6.800 m²',
    gradient: 'from-emerald-800 via-green-900 to-emerald-950',
    accent: '#34d399',
  },
  {
    id: 4,
    title: 'LogiDepo Endüstriyel',
    category: 'Endüstriyel',
    location: 'Kocaeli, Gebze',
    year: '2022',
    desc: 'Büyük ebatlı depolama ve lojistik tesisi.',
    area: '12.000 m²',
    gradient: 'from-orange-800 via-red-900 to-stone-900',
    accent: '#fb923c',
  },
  {
    id: 5,
    title: 'Deniz Otel Resort',
    category: 'Otel',
    location: 'Antalya, Konyaaltı',
    year: '2021',
    desc: '120 odalı 5 yıldızlı otel. Deniz manzaralı teras, spa ve aquapark.',
    area: '15.000 m²',
    gradient: 'from-cyan-700 via-teal-800 to-slate-900',
    accent: '#22d3ee',
  },
  {
    id: 6,
    title: 'İstanbul Mall AVM',
    category: 'Ticari',
    location: 'İstanbul, Başakşehir',
    year: '2021',
    desc: '200+ mağazalı modern alışveriş merkezi. Eğlence ve yemek katları.',
    area: '45.000 m²',
    gradient: 'from-rose-800 via-pink-900 to-slate-900',
    accent: '#f472b6',
  },
  {
    id: 7,
    title: 'Vadi Life Villaları',
    category: 'Konut',
    location: 'İzmir, Urla',
    year: '2024',
    desc: '8 adet minimalist villa. Akıllı ev teknolojisi ve panoramik deniz manzarası.',
    area: '3.200 m²',
    gradient: 'from-sky-800 via-blue-900 to-slate-900',
    accent: '#38bdf8',
  },
  {
    id: 8,
    title: 'Osmangazi Fabrika',
    category: 'Endüstriyel',
    location: 'Bursa, Osmangazi',
    year: '2024',
    desc: 'Otomotiv yan sanayi fabrika binası. Modern üretim hatları.',
    area: '20.000 m²',
    gradient: 'from-zinc-700 via-gray-800 to-stone-900',
    accent: '#a1a1aa',
  },
]

const categories = ['Tümü', 'Konut', 'Ticari', 'Endüstriyel', 'Otel']

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCat, setActiveCat] = useState('Tümü')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filtered = activeCat === 'Tümü' ? projects : projects.filter((p) => p.category === activeCat)

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
                Projelerimiz
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground"
            >
              Tamamlanan{' '}
              <span className="text-gradient-gold">Projeler</span>
            </motion.h2>
          </div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 ${
                  activeCat === cat
                    ? 'bg-accent text-white shadow-lg shadow-accent/20'
                    : 'bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer rounded-2xl overflow-hidden border border-border hover:border-accent/20 hover:shadow-2xl hover:shadow-accent/[0.08] transition-all duration-500 ${
                  i === 0 || i === 5 ? 'md:col-span-2 md:row-span-1' : ''
                }`}
              >
                {/* Card background - gradient placeholder for image */}
                <div className={`relative h-64 md:h-72 bg-gradient-to-br ${project.gradient}`}>
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
                  </div>

                  {/* Building silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-48 md:w-40 md:h-56 bg-white/[0.06] rounded-lg backdrop-blur-[1px] border border-white/[0.08] relative overflow-hidden">
                        {/* Windows grid */}
                        <div className="absolute inset-3 grid grid-cols-3 gap-1.5">
                          {Array.from({ length: 12 }).map((_, w) => (
                            <div
                              key={w}
                              className="w-full aspect-square bg-white/[0.08] rounded-sm"
                              style={{ opacity: Math.random() * 0.5 + 0.2 }}
                            />
                          ))}
                        </div>
                        {/* Door */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-white/[0.1] rounded-t-md" />
                      </div>
                      {/* Ground */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/[0.05] rounded-full" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-sm"
                      style={{
                        backgroundColor: `${project.accent}20`,
                        color: project.accent,
                        border: `1px solid ${project.accent}30`,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>

                  {/* Bottom info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-4 text-white/60 text-sm">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{project.year}</span>
                      </div>
                      <span className="text-white/40">{project.area}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-card rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Header gradient */}
              <div className={`h-48 bg-gradient-to-br ${selectedProject.gradient} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-36 bg-white/[0.06] rounded-lg border border-white/[0.08]">
                    <div className="p-2 grid grid-cols-3 gap-1">
                      {Array.from({ length: 9 }).map((_, w) => (
                        <div key={w} className="w-full aspect-square bg-white/[0.08] rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="px-3 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase"
                    style={{
                      backgroundColor: `${selectedProject.accent}15`,
                      color: selectedProject.accent,
                    }}
                  >
                    {selectedProject.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-black text-foreground mb-2">{selectedProject.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{selectedProject.desc}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">Toplam Alan</div>
                    <div className="text-lg font-black text-foreground">{selectedProject.area}</div>
                  </div>
                  <button className="px-6 py-2.5 rounded-full bg-accent text-white text-sm font-bold hover:bg-accent/90 transition-colors">
                    Detayları Gör
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
