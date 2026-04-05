'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const houses = [
  {
    id: 1,
    title: 'Ahşap Ev',
    size: '77 m²',
    price: '3.200.000 ₺',
    gradient: 'from-green-700 via-emerald-600 to-teal-700',
  },
  {
    id: 2,
    title: 'Ahşap Ev',
    size: '94 m²',
    price: '4.500.000 ₺',
    gradient: 'from-amber-700 via-orange-600 to-yellow-700',
  },
  {
    id: 3,
    title: 'Ahşap Ev',
    size: '65 m²',
    price: '2.800.000 ₺',
    gradient: 'from-sky-700 via-blue-600 to-indigo-700',
  },
  {
    id: 4,
    title: 'Ahşap Ev',
    size: '60 m²',
    price: '2.500.000 ₺',
    gradient: 'from-rose-700 via-pink-600 to-red-700',
  },
]

export default function CatalogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeSlide, setActiveSlide] = useState(0)

  const next = () => setActiveSlide((p) => Math.min(p + 1, houses.length - 4))
  const prev = () => setActiveSlide((p) => Math.max(p - 1, 0))

  const visibleHouses = houses.slice(activeSlide, activeSlide + 4)

  return (
    <section id="catalog" ref={ref} className="py-20 md:py-28 bg-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
              2024 Yılı Projelerimiz
            </h2>
            <p className="text-[14px] text-muted-foreground">
              Karkas teknolojisi ile ahşap ev inşaatı
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex gap-2"
          >
            <button
              onClick={prev}
              disabled={activeSlide === 0}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-foreground hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              disabled={activeSlide >= houses.length - 4}
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-foreground hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleHouses.map((house, i) => (
            <motion.div
              key={house.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className={`relative h-48 bg-gradient-to-br ${house.gradient}`}>
                {/* House silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-6">
                  <div className="relative flex flex-col items-center">
                    <div className="w-28 h-16 bg-white/15" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                    <div className="w-22 h-14 bg-white/10 border border-white/10 -mt-0.5">
                      <div className="flex gap-1 p-1.5">
                        <div className="w-4 h-4 bg-sky-300/30 rounded-sm" />
                        <div className="w-4 h-4 bg-sky-300/30 rounded-sm" />
                      </div>
                      <div className="w-3 h-5 bg-amber-700/30 rounded-t-sm mx-auto" />
                    </div>
                  </div>
                </div>
                {/* Maximize icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-foreground mb-1">{house.title}</h3>
                <p className="text-[13px] text-muted-foreground mb-3">{house.size}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[16px] font-bold text-accent">{house.price}</span>
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                    başlangıç
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-foreground text-white text-[14px] font-semibold px-8 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Tüm Kataloğu Gör
          </a>
        </motion.div>
      </div>
    </section>
  )
}
