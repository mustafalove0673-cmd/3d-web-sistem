'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Shield, Zap, Award, ArrowUpRight } from 'lucide-react'

const stats = [
  { number: 250, suffix: '+', label: 'Proje Tamamlandı', icon: Shield },
  { number: 20, suffix: '+', label: 'Yıl Deneyim', icon: Zap },
  { number: 98, suffix: '%', label: 'Müşteri Memnuniyeti', icon: Award },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let v = 0
    const timer = setInterval(() => {
      v += end / 60
      if (v >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(v))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-16 h-[2px] bg-primary" />
          <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] font-heading">Hakkımızda</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Big Statement */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight mb-8"
            >
              <span className="text-foreground">20 yıldır</span>
              <br />
              <span className="text-gradient">daha fazlasını</span>
              <br />
              <span className="text-foreground">inşa ediyoruz</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-md"
            >
              Sadece bina değil, hayat inşa ediyoruz. Her projede kalite, estetik ve güveni
              bir araya getirerek sınırları zorluyoruz.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              href="#services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all duration-300 group"
            >
              Hizmetlerimizi Gör
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Right — Visual + Stats */}
          <div className="space-y-6">
            {/* Image placeholder with parallax */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ y: imgY }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-white/[0.04]"
            >
              {/* Geometric building illustration */}
              <div className="absolute inset-0 flex items-end justify-center pb-8">
                <div className="relative">
                  {/* Main tower */}
                  <div className="w-32 h-52 md:w-40 md:h-64 rounded-t-lg bg-white/[0.03] border border-white/[0.06] relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-8 gap-1.5 p-3">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: Math.random() > 0.4 ? 0.15 : 0.05 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.02 }}
                          className="bg-primary/20 rounded-sm"
                        />
                      ))}
                    </div>
                    {/* Antenna */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-white/10" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary/40" />
                  </div>
                  {/* Side building */}
                  <div className="absolute -bottom-0 -right-10 md:-right-14 w-20 h-32 md:w-24 md:h-40 rounded-t-lg bg-secondary/[0.05] border border-secondary/[0.08]">
                    <div className="absolute inset-2 grid grid-cols-3 grid-rows-6 gap-1.5">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: Math.random() > 0.3 ? 0.2 : 0.06 } : {}}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.02 }}
                          className="bg-secondary/25 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Small building */}
                  <div className="absolute -bottom-0 -left-8 w-14 h-20 rounded-t-lg bg-primary/[0.04] border border-primary/[0.06]">
                    <div className="absolute inset-2 grid grid-cols-2 grid-rows-4 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 0.12 } : {}}
                          transition={{ duration: 0.3, delay: 1 + i * 0.03 }}
                          className="bg-white/10 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                  {/* Ground */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/[0.06]" />
                </div>
              </div>
              {/* Overlay corner badge */}
              <div className="absolute top-5 left-5 px-3 py-2 rounded-lg bg-[#0A0A0A]/80 backdrop-blur-md border border-white/[0.06]">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Since 2004</span>
              </div>
            </motion.div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.15 }}
                  className="p-5 rounded-xl bg-card border border-white/[0.04] text-center group hover:border-primary/20 transition-colors duration-500"
                >
                  <stat.icon className="w-5 h-5 text-primary/60 mx-auto mb-2" />
                  <div className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
