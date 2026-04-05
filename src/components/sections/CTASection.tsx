'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 diagonal-lines" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-gold" />
          <div className="absolute inset-0 grid-pattern-dark opacity-30" />

          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.06] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/[0.04] rounded-full translate-y-1/3 -translate-x-1/4" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
            >
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-wide uppercase text-white/90">
                Ücretsiz Danışmanlık
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6"
            >
              Projenizi Konuşalım
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-lg text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Hayalinizdeki projeyi birlikte planlayalım. Ücretsiz keşif ve detaylı proje teklifi için hemen iletişime geçin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="magnetic-btn bg-white text-accent hover:bg-white/90 rounded-full px-8 h-14 text-base font-bold shadow-2xl"
              >
                <a href="#contact">
                  <Phone className="w-5 h-5 mr-2" />
                  0555 123 45 67
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="magnetic-btn rounded-full px-8 h-14 text-base font-bold border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <a href="#contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Teklif İste
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
