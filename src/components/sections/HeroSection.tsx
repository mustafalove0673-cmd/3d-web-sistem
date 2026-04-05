'use client'

import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 z-[2] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  ),
})

const words = ['Hayallerinizi', 'Gerçeğe', 'Dönüştürüyoruz']

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden flex items-center">
      {/* 3D BG */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-transparent z-[2]" />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-primary">20+ Yıllık Deneyim</span>
          </motion.div>

          {/* Heading - Word by word reveal */}
          <div className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            {words.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-block mr-4 ${i === 1 ? 'text-gradient' : 'text-foreground'}`}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-lg">
            Modern mimari, kaliteli malzeme ve zamanında teslim garantisiyle
            projelerinizi hayata geçiriyoruz.
          </motion.p>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-4">
            <a href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              Projelerimiz
            </a>
            <a href="#about"
              className="px-8 py-4 border border-border text-foreground rounded-xl font-heading font-semibold text-sm hover:bg-muted transition-all duration-300">
              Daha Fazla
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[11px] text-muted-foreground tracking-widest uppercase">Keşfet</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
