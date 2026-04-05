'use client'

import { motion } from 'framer-motion'

export default function MarqueeSection() {
  const items = [
    'İNŞAAT', 'MİMARLık', 'KALİTE', 'GÜVEN', 'DENEYİM',
    'PROFESYONELLİK', 'İNOVASYON', 'MÜKEMMELLİK', 'DAYANIKLILIK', 'ESTETİK',
  ]

  return (
    <section className="relative bg-accent py-5 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-6 mx-6">
            <span className="text-sm font-black tracking-[0.15em] text-white/90 uppercase">
              {item}
            </span>
            <div className="w-2 h-2 bg-white/30 rounded-full" />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
