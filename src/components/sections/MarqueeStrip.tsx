'use client'

import { motion } from 'framer-motion'

const items = ['KONUT YAPIMI', 'TİCARİ YAPILAR', 'VİLLA PROJELERİ', 'DEKORASYON', 'ANAHTAR TESLİM', 'MİMARİ TASARIM', 'YENİLEME', 'ALTYAPI']

export default function MarqueeStrip() {
  return (
    <div className="relative py-6 bg-primary overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-sm font-heading font-bold text-white/90 tracking-wider">
              {item}
            </span>
            <span className="text-white/30">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
