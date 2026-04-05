'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { MapPin, Calendar, X, ArrowUpRight } from 'lucide-react'

const projects = [
  { id: 1, title: 'Merkez Park Rezidans', cat: 'Konut', loc: 'Ankara', year: '2024', area: '4.500 m²', grad: 'from-amber-800 via-stone-800 to-zinc-900' },
  { id: 2, title: 'TechPark Ofis', cat: 'Ticari', loc: 'İstanbul', year: '2024', area: '8.200 m²', grad: 'from-slate-700 via-zinc-800 to-neutral-900' },
  { id: 3, title: 'Green Valley Villas', cat: 'Konut', loc: 'Bolu', year: '2023', area: '6.800 m²', grad: 'from-emerald-800 via-green-900 to-emerald-950' },
  { id: 4, title: 'LogiDepo Tesis', cat: 'Endüstriyel', loc: 'Kocaeli', year: '2023', area: '12.000 m²', grad: 'from-orange-800 via-red-900 to-stone-900' },
  { id: 5, title: 'Deniz Otel Resort', cat: 'Otel', loc: 'Antalya', year: '2023', area: '15.000 m²', grad: 'from-cyan-700 via-teal-800 to-slate-900' },
  { id: 6, title: 'İstanbul Mall', cat: 'Ticari', loc: 'İstanbul', year: '2022', area: '45.000 m²', grad: 'from-rose-800 via-pink-900 to-slate-900' },
]

const cats = ['Tümü', 'Konut', 'Ticari', 'Endüstriyel', 'Otel']

export default function ProjectsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [cat, setCat] = useState('Tümü')
  const [sel, setSel] = useState<typeof projects[0] | null>(null)

  const filtered = cat === 'Tümü' ? projects : projects.filter(p => p.cat === cat)

  return (
    <section id="projects" ref={ref} className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent">Projeler</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-3">Tamamlanan <span className="text-gradient-gold">Projelerimiz</span></h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex gap-2 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-[11px] font-bold tracking-wide uppercase transition-all duration-300 ${
                  cat === c ? 'bg-accent text-dark-card shadow-lg shadow-accent/20' : 'glass text-muted-foreground hover:text-foreground'
                }`}
              >{c}</button>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id} layout
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                onClick={() => setSel(p)}
                className="group cursor-pointer border-gradient rounded-2xl overflow-hidden hover:glow transition-shadow duration-500"
              >
                {/* Image area */}
                <div className={`relative h-56 bg-gradient-to-br ${p.grad} overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_60%)]" />
                  {/* Building silhouette */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-40 bg-white/[0.05] rounded-lg border border-white/[0.06] relative overflow-hidden">
                      <div className="absolute inset-2 grid grid-cols-3 gap-1">
                        {Array.from({ length: 9 }).map((_, w) => (
                          <div key={w} className="bg-white/[0.06] rounded-sm aspect-square" />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Cat badge */}
                  <span className="absolute top-4 left-4 text-[10px] font-bold px-3 py-1 rounded-full glass text-foreground/80">
                    {p.cat}
                  </span>
                  {/* Arrow */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                    <ArrowUpRight className="w-4 h-4 text-accent" />
                  </div>
                  {/* Bottom info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">{p.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-[12px] text-white/50">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{p.loc}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.year}</span>
                      <span>{p.area}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSel(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-lg w-full glass-strong rounded-2xl overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${sel.grad} relative`}>
                <button onClick={() => setSel(null)} className="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold px-3 py-0.5 rounded-full bg-accent/10 text-accent">{sel.cat}</span>
                <h3 className="text-2xl font-black mt-3 mb-1">{sel.title}</h3>
                <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" /> {sel.loc} • {sel.year}
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">
                  Profesyonel ekip ve modern teknolojiyle hayata geçirilmiş bir {sel.cat.toLowerCase()} projesi.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-[10px] text-muted-foreground">Toplam Alan</div>
                    <div className="text-lg font-black text-gradient-gold">{sel.area}</div>
                  </div>
                  <button className="btn-shine magnetic bg-accent text-dark-card text-[13px] font-bold px-6 py-2.5 rounded-full glow">
                    Detaylar
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
