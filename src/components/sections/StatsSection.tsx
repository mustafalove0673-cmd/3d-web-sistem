'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Users, Award, HardHat, TrendingUp, Shield } from 'lucide-react'

const stats = [
  { icon: Building2, value: 350, suffix: '+', label: 'Tamamlanan Proje', color: 'text-accent' },
  { icon: Users, value: 500, suffix: '+', label: 'Mutlu Müşteri', color: 'text-gold' },
  { icon: Award, value: 28, suffix: '', label: 'Ödül & Sertifika', color: 'text-accent' },
  { icon: TrendingUp, value: 25, suffix: '+', label: 'Yıllık Deneyim', color: 'text-gold' },
  { icon: HardHat, value: 120, suffix: '+', label: 'Profesyonel Ekip', color: 'text-accent' },
  { icon: Shield, value: 100, suffix: '%', label: 'Müşteri Memnuniyeti', color: 'text-gold' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started) return
    let current = 0
    const step = target / 60
    const timer = setInterval(() => {
      current += step
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 25)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <span ref={() => setStarted(true)}>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern-dark" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/[0.06] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/[0.04] rounded-full blur-[100px]" />

      {/* Geometric shapes */}
      <div className="absolute top-16 right-16 w-24 h-24 border border-white/[0.04] rounded-xl animate-rotate-slower" />
      <div className="absolute bottom-16 left-16 w-16 h-16 border border-accent/10 rounded-full animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
              Rakamlarla Biz
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-5"
          >
            Güveni Rakamlarla{' '}
            <span className="text-gradient-gold">Kanıtlıyoruz</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-base leading-relaxed"
          >
            25 yılı aşkın inşaat tecrübemizle sektörde fark yaratıyoruz
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-accent/20 transition-all duration-500 text-center"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `0 0 40px -15px ${stat.color === 'text-accent' ? 'rgba(200,121,65,0.15)' : 'rgba(184,134,11,0.15)'}` }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl md:text-4xl font-black text-white mb-1">
                  {isInView ? <AnimatedCounter target={stat.value} suffix={stat.suffix} /> : '0'}
                </div>
                <div className="text-xs text-white/40 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
