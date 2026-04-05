'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Film, Grid3X3, Star } from 'lucide-react'

const statsData = [
  { icon: Film, label: 'Toplam Video', value: 20, suffix: '', color: 'text-accent', glow: 'shadow-accent/20' },
  { icon: TrendingUp, label: 'Toplam Beğeni', value: 4876, suffix: '+', color: 'text-hot', glow: 'shadow-hot/20' },
  { icon: Grid3X3, label: 'Skills Görsel', value: 16, suffix: '', color: 'text-lime', glow: 'shadow-lime/20' },
  { icon: Star, label: 'GitHub Repo', value: 7, suffix: '', color: 'text-violet', glow: 'shadow-violet/20' },
]

function useCountUp(end: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, inView])
  return count
}

function StatCard({ stat, index }: { stat: typeof statsData[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(stat.value, 2000, inView)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative group bg-card border border-border rounded-xl p-5 md:p-6 overflow-hidden transition-all duration-300 hover:border-accent/20"
    >
      {/* BG gradient glow */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 ${
        stat.color === 'text-accent' ? 'from-accent/40 to-transparent' :
        stat.color === 'text-hot' ? 'from-hot/40 to-transparent' :
        stat.color === 'text-lime' ? 'from-lime/40 to-transparent' :
        'from-violet/40 to-transparent'
      }`} />

      <div className="relative">
        <div className={`w-10 h-10 rounded-lg bg-muted/30 border border-border flex items-center justify-center mb-4 ${stat.color}`}>
          <Icon className="w-4.5 h-4.5" />
        </div>
        <motion.div
          className="text-3xl md:text-4xl font-black tracking-tight mb-0.5"
          key={inView ? 'visible' : 'hidden'}
        >
          <span className={stat.color}>{count.toLocaleString('tr-TR')}</span>
          <span className="text-lg text-muted-foreground">{stat.suffix}</span>
        </motion.div>
        <div className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">{stat.label}</div>
      </div>

      {/* Top accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent ${
          stat.color === 'text-accent' ? 'via-accent/60' :
          stat.color === 'text-hot' ? 'via-hot/60' :
          stat.color === 'text-lime' ? 'via-lime/60' :
          'via-violet/60'
        } to-transparent origin-left`}
      />
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-12 md:py-20 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-[2px] bg-lime" />
          <span className="text-[11px] font-bold text-lime tracking-[0.2em] uppercase">İstatistikler</span>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black tracking-tight">
          Rakamlarla
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {statsData.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
