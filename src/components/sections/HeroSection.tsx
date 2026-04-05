'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Play, Sparkles } from 'lucide-react'

const heroStats = [
  { value: '20', label: 'Video', color: 'text-accent' },
  { value: '7', label: 'Yüklü', color: 'text-hot' },
  { value: '16', label: 'Skills', color: 'text-lime' },
  { value: '4K+', label: 'Beğeni', color: 'text-violet' },
]

// Split text animation helper
const letterVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.5 + i * 0.03,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function AnimatedTitle({ text, className }: { text: string; className?: string }) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split('').map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ transformOrigin: 'bottom' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

// Floating thumbnail
function FloatingThumb({ src, delay, className }: { src: string; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 40 }}
      animate={{
        opacity: [0, 0.7, 0.5, 0.7],
        scale: 1,
        y: 0,
      }}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
      }}
      className={`absolute rounded-xl overflow-hidden border border-border/50 ${className}`}
    >
      <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
    </motion.div>
  )
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 250])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2])

  return (
    <section ref={ref} id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* BG layers */}
      <div className="absolute inset-0 grid-pattern" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.8, 1.15, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-hot/5 blur-[150px]"
      />
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 40, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet/3 blur-[120px]"
      />

      {/* Floating thumbnails */}
      <FloatingThumb src="/images/thumbnails/active-theory.jpg" delay={1.2} className="w-28 h-20 md:w-40 md:h-28 -top-8 right-[10%] rotate-6 opacity-60 animate-float" />
      <FloatingThumb src="/images/thumbnails/motion-design-studio.jpg" delay={1.5} className="w-24 h-16 md:w-36 md:h-24 bottom-32 left-[5%] -rotate-6 opacity-50 animate-float-delayed" />
      <FloatingThumb src="/images/thumbnails/aura-3d-website.jpg" delay={1.8} className="w-20 h-14 md:w-32 md:h-20 top-40 left-[8%] rotate-3 opacity-40" />

      {/* Content */}
      <motion.div style={{ y, opacity, scale, rotate }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent animate-glow-pulse" />
          <span className="text-[11px] font-semibold text-accent tracking-wider uppercase">
            Teknoloji & İçerik Arşivi
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="mb-6 perspective-[1000px]">
          <div className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter leading-[0.95]">
            <div className="block">
              <AnimatedTitle text="ÖNCEKİ" className="text-foreground" />
            </div>
            <div className="block">
              <AnimatedTitle text="VİDEOLARINI" className="text-gradient-cyan glow-text-cyan" />
            </div>
            <div className="block mt-1">
              <AnimatedTitle text="KEŞFET" />
              <span className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent ml-3 animate-glow-pulse" />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed"
        >
          Tüm teknoloji, yazılım ve yapay zeka videolarını tek bir platformda bul.
          Web tasarımından Claude Code ipuçlarına kadar her şey burada.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#videos"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px -5px #00f0ff44' }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center gap-2.5 px-7 py-3.5 bg-accent text-background rounded-lg font-bold text-sm tracking-wide overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Play className="w-4 h-4 fill-background" />
              Videoları İzle
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent via-cyan-300 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          <motion.a
            href="#categories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-lg font-bold text-sm tracking-wide hover:border-accent/30 hover:text-accent transition-all duration-300"
          >
            Kategoriler
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-20 grid grid-cols-4 gap-4 md:gap-8 max-w-xl mx-auto"
        >
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + i * 0.1 }}
              className="text-center"
            >
              <div className={`text-xl md:text-3xl font-black tracking-tight ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
