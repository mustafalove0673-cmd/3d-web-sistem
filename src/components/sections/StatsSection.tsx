'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Users, Award, TrendingUp, HardHat, Shield } from 'lucide-react'

const stats = [
  { icon: Building2, val: 350, suf: '+', label: 'Proje' },
  { icon: Users, val: 500, suf: '+', label: 'Müşteri' },
  { icon: Award, val: 28, suf: '', label: 'Ödül' },
  { icon: TrendingUp, val: 25, suf: '+', label: 'Yıl' },
  { icon: HardHat, val: 120, suf: '+', label: 'Ekip' },
  { icon: Shield, val: 100, suf: '%', label: 'Memnuniyet' },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [go, setGo] = useState(false)

  useEffect(() => {
    if (!go) return
    let c = 0
    const step = target / 50
    const t = setInterval(() => {
      c += step
      if (c >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(c))
    }, 30)
    return () => clearInterval(t)
  }, [go, target])

  return <span ref={() => setGo(true)}>{count}{suffix}</span>
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px]" />

      {/* Geometric */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-accent/[0.06] rounded-2xl float-3" />
      <div className="absolute bottom-20 left-20 w-16 h-16 border border-accent/[0.05] rounded-full float-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent">
            Rakamlarla Biz
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black tracking-tight mt-4">
            Güveni <span className="text-gradient-gold">Rakamlarla</span> Kanıtlıyoruz
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="border-gradient rounded-2xl p-6 text-center group hover:glow transition-shadow duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-400">
                <s.icon className="w-6 h-6 text-accent group-hover:text-dark-card transition-colors duration-400" />
              </div>
              <div className="text-3xl font-black text-gradient-gold mb-1">
                {inView ? <Counter target={s.val} suffix={s.suf} /> : '0'}
              </div>
              <div className="text-[11px] text-muted-foreground font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
