'use client'

import { motion } from 'framer-motion'
import { categories } from '@/lib/video-data'

interface Props {
  active: string
  onChange: (cat: string) => void
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <section id="categories" className="py-12 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-accent" />
          <span className="text-[11px] font-bold text-accent tracking-[0.2em] uppercase">Kategoriler</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black tracking-tight">
          İçerikleri Filtrele
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-2.5">
        {categories.map((cat, i) => {
          const isActive = active === cat.name
          return (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(cat.name)}
              className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-300 cursor-pointer overflow-hidden ${
                isActive
                  ? 'text-background'
                  : 'text-muted-foreground border border-border hover:text-foreground hover:border-accent/20'
              }`}
            >
              {/* BG gradient for active */}
              {isActive && (
                <motion.div
                  layoutId="activeCat"
                  className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-400 to-accent"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 text-base">{cat.icon}</span>
              <span className="relative z-10">{cat.name}</span>
              <span className={`relative z-10 text-[10px] px-1.5 py-0.5 rounded-md font-bold ${
                isActive ? 'bg-background/20' : 'bg-muted/50'
              }`}>
                {cat.count}
              </span>

              {/* Hover glow */}
              {!isActive && (
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity"
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
