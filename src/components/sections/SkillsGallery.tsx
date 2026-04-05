'use client'

import { motion } from 'framer-motion'
import { skillImages } from '@/lib/video-data'
import { useState, useRef } from 'react'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function SkillsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-[2px] bg-violet" />
            <span className="text-[11px] font-bold text-violet tracking-[0.2em] uppercase">Galeri</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-black tracking-tight mb-2">
            Claude Code Skills
          </h2>
          <p className="text-muted-foreground text-sm max-w-md">
            16 beceri ve araç koleksiyonu. Kaydırarak keşfet veya tıklayarak büyüt.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {skillImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              onClick={() => setSelectedImage(img.id)}
              className="flex-shrink-0 w-64 md:w-72 snap-start group relative rounded-xl overflow-hidden border border-border cursor-pointer hover:border-violet/30 transition-all duration-500 hover:shadow-xl hover:shadow-violet/5"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-background/60 backdrop-blur-sm border border-border flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </div>
                </div>

                {/* Index */}
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-0.5 rounded bg-violet/80 backdrop-blur-sm text-[10px] font-bold text-white">
                    #{String(img.id).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-lg bg-muted/30 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                const idx = skillImages.findIndex(s => s.id === selectedImage)
                setSelectedImage(idx > 0 ? skillImages[idx - 1].id : skillImages[skillImages.length - 1].id)
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 w-10 h-10 rounded-lg bg-muted/30 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                const idx = skillImages.findIndex(s => s.id === selectedImage)
                setSelectedImage(idx < skillImages.length - 1 ? skillImages[idx + 1].id : skillImages[0].id)
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 w-10 h-10 rounded-lg bg-muted/30 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <img
              src={skillImages.find(s => s.id === selectedImage)?.src}
              alt=""
              className="w-full rounded-xl border border-border shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
