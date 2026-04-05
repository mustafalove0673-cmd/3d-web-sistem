'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const letterVariants = {
  hidden: { y: 100, opacity: 0, rotateX: -80 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.8 + i * 0.04,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
}

const line1 = 'YAPILAR'
const line2 = 'GELECEĞİ'
const line3 = 'İNŞA EDİYORUZ'

function AnimatedText({ text }: { text: string }) {
  return (
    <span className="inline-flex overflow-hidden">
      {text.split('').map((char, i) => (
        <motion.span
          key={`${text}-${i}`}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block"
          style={{ perspective: '500px' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  return (
    <section id="hero" ref={ref} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Animated bg gradient */}
      <motion.div
        animate={{
          background: [
            'radial-gradient(ellipse at 20% 50%, rgba(230,57,70,0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 80% 50%, rgba(230,57,70,0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 50%, rgba(230,57,70,0.08) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0"
      />

      {/* Diagonal lines */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 100px, rgba(255,255,255,0.1) 100px, rgba(255,255,255,0.1) 101px)',
      }} />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/4 right-[15%] w-[300px] h-[300px] border border-white/[0.03] rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-1/4 left-[10%] w-[200px] h-[200px] border border-primary/[0.06] rounded-full"
      />
      <motion.div
        animate={{ rotate: 180 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[20%] left-[25%] w-[4px] h-[4px] rounded-full bg-primary/30"
      />
      <motion.div
        animate={{ rotate: -180 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-[30%] right-[20%] w-[6px] h-[6px] rounded-full bg-secondary/20"
      />

      {/* Main Content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center px-6">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-12 h-[1px] bg-primary" />
          <span className="text-xs font-semibold text-primary uppercase tracking-[0.3em]">
            ÖZKAN YAPI — 2004&apos;den Beri
          </span>
          <div className="w-12 h-[1px] bg-primary" />
        </motion.div>

        {/* Big Typography */}
        <div className="font-heading font-bold leading-[0.9] tracking-tighter mb-8">
          <div className="text-[clamp(3rem,10vw,9rem)] text-foreground/90">
            <AnimatedText text={line1} />
          </div>
          <div className="text-[clamp(3rem,10vw,9rem)] text-gradient mt-1">
            <AnimatedText text={line2} />
          </div>
          <div className="text-[clamp(3rem,10vw,9rem)] text-foreground/90 mt-1">
            <AnimatedText text={line3} />
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Sinematik mimari, dayanıklı yapılar ve zamanında teslim garantisiyle
          hayalinizdeki projeyi birlikte inşa ediyoruz.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-primary text-white rounded-full text-sm font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(230,57,70,0.3)]"
          >
            <span className="relative z-10">Projeleri Keşfet</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </a>
          <a
            href="#about"
            className="px-10 py-4 border border-white/10 text-foreground rounded-full text-sm font-semibold hover:border-white/25 hover:bg-white/5 transition-all duration-300"
          >
            Hakkımızda
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </motion.div>
      </motion.div>

      {/* Bottom reveal */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </section>
  )
}
