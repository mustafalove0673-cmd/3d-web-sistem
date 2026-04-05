'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Shield, Target, Award, ArrowUpRight, CheckCircle2 } from 'lucide-react'

const values = [
  { icon: Shield, title: 'Güvenilir Yapı', desc: 'En yüksek standartlarda malzeme ve işçilik ile güvenilir yapılar.' },
  { icon: Target, title: 'Zamanında Teslim', desc: 'Projelerimizi söz verilen zamanda eksiksiz teslim ediyoruz.' },
  { icon: Award, title: 'Premium Kalite', desc: 'Her detayda mükemmellik odaklı çalışıyoruz.' },
]

const certs = ['EN 1090 Sertifikalı', 'ISO 9001 Kalite', 'LEED Yeşil Bina', 'BIM Modelleme']

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
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

const stats = [
  { number: 250, suffix: '+', label: 'Proje' },
  { number: 20, suffix: '+', label: 'Yıl' },
  { number: 98, suffix: '%', label: 'Memnuniyet' },
  { number: 50, suffix: '+', label: 'Uzman' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="about" ref={containerRef} className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Label */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }} className="flex items-center gap-4 mb-4">
          <div className="divider-line" />
          <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Hakkımızda</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 50 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl md:text-5xl font-bold leading-[1.1] mb-6">
              20 Yıldır <span className="text-gradient">Güvenle</span><br />İnşa Ediyoruz
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
              Sadece bina değil, hayat inşa ediyoruz. Kalite, estetik ve güveni
              bir araya getirerek sınırları zorluyoruz.
            </motion.p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((v, i) => (
                <motion.div key={v.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-0.5">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a href="#services" initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group">
              Hizmetlerimizi Gör
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Right — Image + Certs */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}>
            <motion.div style={{ y: imgY }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
              <div className="absolute inset-0 dot-pattern" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-48 bg-primary/5 rounded-t-lg border border-primary/10 relative overflow-hidden">
                    <div className="absolute inset-3 grid grid-cols-3 grid-rows-6 gap-1.5">
                      {Array.from({ length: 18 }).map((_, i) => (
                        <div key={i} className="bg-primary/10 rounded-sm" />
                      ))}
                    </div>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[2px] h-5 bg-primary/15" />
                  </div>
                  <div className="absolute -bottom-0 -right-8 w-20 h-32 rounded-t-lg bg-secondary/5 border border-secondary/10">
                    <div className="absolute inset-2 grid grid-cols-2 grid-rows-4 gap-1">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="bg-secondary/15 rounded-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Since 2004</span>
              </div>
            </motion.div>

            {/* Certs */}
            <div className="mt-4 p-5 bg-card rounded-xl border border-border shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                {certs.map((c) => (
                  <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 md:p-8 bg-card rounded-2xl border border-border shadow-sm">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i < stats.length - 1 ? 'md:border-r border-border' : ''}`}>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                <Counter end={s.number} suffix={s.suffix} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
