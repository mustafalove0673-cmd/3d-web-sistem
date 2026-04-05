'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CheckCircle2, Clock, Users, Target } from 'lucide-react'

const features = [
  { icon: Clock, title: '25+ Yıllık Tecrübe', desc: 'Türkiye genelinde yüzlerce başarılı proje' },
  { icon: Users, title: 'Uzman Kadro', desc: 'Mühendis, mimar ve usta ekibimiz' },
  { icon: Target, title: 'Zamanında Teslim', desc: 'Projeleri söz verilen tarihte teslim ediyoruz' },
  { icon: CheckCircle2, title: 'Kalite Garantisi', desc: 'EN ve ISO standartlarında üretim' },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-[80px]" />
      <div className="absolute inset-0 dot-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left - Title */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[2px] bg-accent" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
                  Hakkımızda
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-[1.15] mb-6">
                Kalite ve{' '}
                <span className="text-gradient-gold">Güven</span>{' '}
                ile İnşa Ediyoruz
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-8">
                1998&rsquo;den bu yana Türkiye&rsquo;nin dört bir yanında, konut, ticari ve endüstriyel 
                alanlarda projeler gerçekleştirdik. Her projemizde mühendislik hassasiyeti, estetik 
                tasarım ve sürdürülebilirlik ilkelerini bir araya getiriyoruz.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-accent/60 to-gold/60 flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {['AY', 'MK', 'SB', 'EK'][i]}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">120+ Profesyonel</div>
                  <div className="text-xs text-muted-foreground">Mühendis, mimar ve usta</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Features Grid */}
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/[0.05] transition-all duration-500"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <feat.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                  </div>

                  {/* Corner decoration */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-accent/0 group-hover:border-accent/20 rounded-tr-lg transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-accent/0 group-hover:border-accent/20 rounded-bl-lg transition-all duration-500" />
                </motion.div>
              ))}
            </div>

            {/* Experience bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 rounded-2xl bg-dark text-white"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-white/60">Deneyim Süremiz</span>
                <span className="text-2xl font-black text-accent">25+ Yıl</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '92%' } : {}}
                  transition={{ duration: 2, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="h-full bg-gradient-to-r from-accent to-gold rounded-full"
                />
              </div>
              <p className="text-xs text-white/40 mt-3">
                1998&rsquo;den bu yana kesintisiz hizmet vermekteyiz
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
