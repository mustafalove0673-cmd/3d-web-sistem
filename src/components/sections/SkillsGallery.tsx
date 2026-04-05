'use client'

import { motion } from 'framer-motion'
import { skillImages } from '@/lib/video-data'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function SkillsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="skills" className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Claude Code Skills
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg">
          &quot;Want the complete list? Comment skills&quot; — Claude Code için en kapsamlı
          beceri ve araç koleksiyonu.
        </p>
      </motion.div>

      {/* Masonry-like grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {skillImages.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.03, y: -4 }}
            onClick={() => setSelectedImage(img.id)}
            className="group relative break-inside-avoid rounded-xl overflow-hidden border border-border cursor-pointer hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-[10px] font-medium">
                #{img.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-xl p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                const idx = skillImages.findIndex(s => s.id === selectedImage)
                const prev = idx > 0 ? skillImages[idx - 1].id : skillImages[skillImages.length - 1].id
                setSelectedImage(prev)
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                const idx = skillImages.findIndex(s => s.id === selectedImage)
                const next = idx < skillImages.length - 1 ? skillImages[idx + 1].id : skillImages[0].id
                setSelectedImage(next)
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 -translate-x-[-3.5rem] w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-foreground hover:bg-muted transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <img
              src={skillImages.find(s => s.id === selectedImage)?.src}
              alt=""
              className="w-full rounded-xl border border-border"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
