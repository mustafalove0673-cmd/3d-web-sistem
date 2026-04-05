'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Building2, Clock, Users, Award } from 'lucide-react'

const stats = [
  { icon: Building2, number: 250, suffix: '+', label: 'Tamamlanan Proje' },
  { icon: Clock, number: 20, suffix: '+', label: 'Yıllık Deneyim' },
  { icon: Users, number: 1200, suffix: '+', label: 'Mutlu Müşteri' },
  { icon: Award, number: 98, suffix: '%', label: 'Memnuniyet' },
]

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let v = 0
    const t = setInterval(() => {
      v += end / 80
      if (v >= end) { setCount(end); clearInterval(t) }
      else setCount(Math.floor(v))
    }, 16)
    return () => clearInterval(t)
  }, [inView, end])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function StatsStrip() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <stat.icon className="w-6 h-6 text-white/40 mx-auto mb-3" />
              <div className="font-heading text-3xl md:text-4xl font-bold text-white mb-1">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
