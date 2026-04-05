'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Hammer, Home } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    num: '01',
    title: 'Danışmanlık ve Proje',
    desc: 'Taleplerinizi görüşür ve projenizi hazırlarız.',
  },
  {
    icon: Hammer,
    num: '02',
    title: 'İnşaat',
    desc: 'Modern ekipman ve malzemelerle inşaat sürecini başlatırız.',
  },
  {
    icon: Home,
    num: '03',
    title: 'Teslim ve Bitiş',
    desc: 'Evınızı anahtar teslim size teslim ediyoruz.',
  },
]

export default function StepsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="steps" ref={ref} className="py-20 md:py-28 bg-muted">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
            Yeni Evinize <span className="text-gradient-accent">3 Adımda</span> Ulaşın
          </h2>
          <p className="text-[14px] text-muted-foreground">
            Basit ve şeffaf süreç ile hayalinizdeki eve kavuşun
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
              className="relative bg-white rounded-2xl p-8 border border-border text-center group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-white text-[11px] font-bold w-7 h-7 rounded-full flex items-center justify-center">
                {step.num}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-[16px] font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{step.desc}</p>

              {/* Connector line (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
