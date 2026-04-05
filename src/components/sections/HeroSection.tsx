'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Building2, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const titleWords = 'Hayalinizdeki Yapıyı Gerçeğe Dönüştürüyoruz'.split(' ')

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Animated Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern-dark opacity-60" />
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-breathe" />
        <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-gold/8 rounded-full blur-[100px] animate-breathe" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] animate-glow-pulse" />

        {/* Geometric shapes */}
        <div className="absolute top-32 right-[15%] w-32 h-32 border border-white/[0.06] rounded-2xl animate-rotate-slower" />
        <div className="absolute bottom-40 left-[10%] w-20 h-20 border border-accent/10 rounded-lg animate-float-slow" />
        <div className="absolute top-[60%] right-[8%] w-16 h-16 bg-accent/5 rounded-full animate-float-delayed" />

        {/* Construction lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="33%" x2="100%" y2="33%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="66%" x2="100%" y2="66%" stroke="white" strokeWidth="1" />
          <line x1="25%" y1="0" x2="25%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="75%" y1="0" x2="75%" y2="100%" stroke="white" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-white/70">
              25+ Yıllık Deneyim
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word === 'Gerçeğe' ? (
                  <span className="text-gradient-gold">{word}</span>
                ) : word === 'Yapıyı' ? (
                  <span className="text-accent">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            Konut, ticari ve endüstriyel projelerinizde kaliteli malzeme, uzman kadromuz ve modern mühendislik çözümleriyle yanınızdayız.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="magnetic-btn bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-base font-bold shadow-lg shadow-accent/20"
            >
              <a href="#contact">
                Ücretsiz Keşif & Teklif
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="magnetic-btn rounded-full px-8 h-14 text-base font-bold border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
            >
              <a href="#projects">
                Projelerimiz
              </a>
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/[0.06]"
          >
            {[
              { icon: Building2, label: 'Tamamlanan Proje', value: '350+' },
              { icon: Shield, label: 'Mutlu Müşteri', value: '500+' },
              { icon: Award, label: 'Ödül', value: '28' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/[0.06] flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
