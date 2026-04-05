'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Play, Zap } from 'lucide-react'

const stats = [
  { value: '20', label: 'Video İçerik' },
  { value: '7', label: 'Yüklü Video' },
  { value: '16', label: 'Skills Görsel' },
  { value: '4K+', label: 'Toplam Beğeni' },
]

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated BG Elements */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 30, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-violet-500/8 blur-[120px]"
      />

      {/* Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-accent" />
          <span className="text-xs font-medium text-accent">Teknoloji & Yazılım İçerikleri</span>
        </motion.div>

        {/* Main Heading */}
        <div className="mb-6">
          {['Önceki', 'Videolarını'].map((word, i) => (
            <motion.h1
              key={word}
              initial={{ opacity: 0, y: 80, rotateX: -40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.9, delay: 0.4 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-foreground"
            >
              {word}
              {i === 1 && <span className="text-gradient">.</span>}
            </motion.h1>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          En iyi teknoloji, yazılım ve yapay zeka videolarını tek bir yerde keşfedin.
          Claude Code ipuçlarından AI öğrenme yollarına kadar her şey burada.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#videos"
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px -5px #e4a11b44' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 bg-accent text-background rounded-xl font-semibold text-sm transition-colors"
          >
            <Play className="w-4 h-4 fill-background" />
            Videoları İzle
          </motion.a>
          <motion.a
            href="#categories"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:border-accent/30 transition-colors"
          >
            Kategorilere Göz At
          </motion.a>
        </motion.div>

        {/* Mini Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-muted-foreground tracking-widest uppercase">Aşağı Kaydır</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
