'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Thermometer, Ruler } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Yüksek Dayanıklılık',
    desc: 'Teknolojimiz yapıların dayanıklılığını ve uzun ömürlülüğünü garanti eder.',
  },
  {
    icon: Thermometer,
    title: 'Isı Yalıtımı',
    desc: 'Soğuktan etkili koruma ve ısıyı muhafaza eden yüksek performanslı yalıtım.',
  },
  {
    icon: Ruler,
    title: 'Oturma Dengesizliği Yok',
    desc: 'Zamanla deformasyon yaşamayan, stabil ve güvenli yapılar inşa ediyoruz.',
  },
]

export default function TechSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tech" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-stone-200 to-stone-300 aspect-[4/3]"
          >
            {/* Construction frame visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Frame structure */}
              <div className="relative w-[75%] h-[80%] border-2 border-amber-800/30">
                {/* Vertical studs */}
                <div className="absolute top-0 left-[20%] w-[4%] h-full bg-amber-800/20" />
                <div className="absolute top-0 left-[40%] w-[4%] h-full bg-amber-800/20" />
                <div className="absolute top-0 left-[60%] w-[4%] h-full bg-amber-800/20" />
                <div className="absolute top-0 left-[80%] w-[4%] h-full bg-amber-800/20" />
                {/* Horizontal nogs */}
                <div className="absolute top-[30%] left-0 w-full h-[3%] bg-amber-800/15" />
                <div className="absolute top-[60%] left-0 w-full h-[3%] bg-amber-800/15" />
                {/* Bottom plate */}
                <div className="absolute bottom-0 left-0 w-full h-[5%] bg-amber-800/25" />
                {/* Top plate */}
                <div className="absolute top-0 left-0 w-full h-[5%] bg-amber-800/25" />
              </div>
              {/* Tools indicator */}
              <div className="absolute bottom-4 right-4 bg-amber-800/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[11px] font-semibold text-amber-900/60">
                Karkas Teknolojisi
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
                Karkas Teknolojisi ile{' '}
                <span className="text-gradient-accent">Ev İnşa Ediyoruz</span>
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                Karkas teknolojisi üzerinde kurulan kalite ve hız. Modern malzemeler ve teknolojiler kullanarak evinizi hızlı ve kaliteli bir şekilde inşa ediyoruz.
              </p>
            </motion.div>

            <div className="space-y-4">
              {features.map((feat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-dark-card rounded-xl p-5 text-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-white mb-1">{feat.title}</h3>
                      <p className="text-[13px] text-white/50 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
