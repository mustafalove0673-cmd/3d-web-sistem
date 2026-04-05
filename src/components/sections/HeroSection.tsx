'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  const words = 'Geleceğin Yapılarını İnşa Ediyoruz'.split(' ')

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* BG */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[120px] float-1" />
        <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] bg-glow-2/[0.05] rounded-full blur-[100px] float-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/[0.03] rounded-full blur-[150px]" />

        {/* Geometric */}
        <div className="absolute top-32 right-[20%] w-28 h-28 border border-accent/10 rounded-2xl float-2" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-40 left-[15%] w-16 h-16 border border-accent/[0.08] rounded-full float-1" />
        <div className="absolute top-[60%] right-[12%] w-3 h-3 bg-accent/20 rounded-full float-3" />
        <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-glow-2/30 rounded-full float-2" />

        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#e8a838" strokeWidth="1" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#e8a838" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#e8a838" strokeWidth="1" />
          <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#e8a838" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-24">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="relative w-2.5 h-2.5 bg-accent rounded-full pulse-dot" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
              1998&apos;den beri • 350+ proje
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[1.08] tracking-tight mb-8">
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, rotateX: -40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="inline-block mr-[0.22em]"
              >
                {w === 'Yapılarını' || w === 'İnşa' ? (
                  <span className="text-gradient-gold">{w}</span>
                ) : w === 'Geleceğin' ? (
                  <span className="text-accent">{w}</span>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
          >
            Konut, ticari ve endüstriyel projelerinizde modern mühendislik, kaliteli malzeme ve zamanında teslim.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="btn-shine magnetic inline-flex items-center justify-center bg-accent text-dark-card font-bold px-8 py-4 rounded-full glow hover:glow-strong transition-shadow text-[15px]"
            >
              Ücretsiz Keşif &amp; Teklif
            </a>
            <a
              href="#projects"
              className="magnetic inline-flex items-center justify-center border border-foreground/15 text-foreground font-semibold px-8 py-4 rounded-full hover:bg-white/[0.04] transition-all text-[15px]"
            >
              Projelerimiz
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
            className="flex flex-wrap gap-10 mt-16 pt-8 border-t border-border/50"
          >
            {[
              { val: '350+', label: 'Proje' },
              { val: '25+', label: 'Yıl Deneyim' },
              { val: '500+', label: 'Müşteri' },
              { val: '28', label: 'Ödül' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-black text-gradient-gold">{s.val}</div>
                <div className="text-[11px] text-muted-foreground font-medium mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-muted-foreground/40">Keşfet</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown className="w-4 h-4 text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
