'use client'

import { motion } from 'framer-motion'
import { Building2, Calendar, Users, Phone } from 'lucide-react'

const stats = [
  { icon: Building2, value: '65+', label: 'Tamamlanan Proje' },
  { icon: Calendar, value: '7+', label: 'Yıllık Deneyim' },
  { icon: Users, value: '180+', label: 'Mutlu Müşteri' },
]

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-background pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-[44px] lg:text-[52px] font-extrabold text-foreground leading-[1.15] tracking-tight mb-5">
              Hazır Ahşap Ev{' '}
              <span className="text-gradient-accent">100 m²</span>{' '}
              Üzeri Anahtar Teslim{' '}
              <span className="text-gradient-accent">2 Ayda</span>
            </h1>

            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Modern teknolojiler ve yüksek kaliteli malzemeler kullanarak hayalinizdeki ahşap evi en kısa sürede inşa ediyoruz.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-foreground text-white text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Ücretsiz Teklif Al
              </a>
              <a
                href="tel:+905551234567"
                className="inline-flex items-center gap-2 border-2 border-foreground text-foreground text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-foreground hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
                0555 123 45 67
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white border border-border rounded-xl p-4"
                >
                  <stat.icon className="w-5 h-5 text-accent mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* House image placeholder with gradient */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-800 via-green-700 to-amber-900 aspect-[4/3]">
              {/* Simulated house image */}
              <div className="absolute inset-0 flex items-end justify-center">
                {/* Sky gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-sky-400/30 via-transparent to-green-900/40" />
                
                {/* Tree silhouettes */}
                <div className="absolute bottom-0 left-[5%] w-16 h-32 bg-green-900/40 rounded-t-full" />
                <div className="absolute bottom-0 left-[12%] w-12 h-24 bg-green-800/30 rounded-t-full" />
                <div className="absolute bottom-0 right-[8%] w-20 h-36 bg-green-900/40 rounded-t-full" />
                <div className="absolute bottom-0 right-[20%] w-14 h-28 bg-green-800/30 rounded-t-full" />
                
                {/* House shape */}
                <div className="relative w-[70%] h-[75%] flex flex-col items-center justify-end">
                  {/* Roof */}
                  <div className="w-[110%] h-[30%] bg-amber-800/60" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                  {/* Wall */}
                  <div className="w-[85%] h-[55%] bg-amber-100/70 rounded-sm relative border border-amber-200/30">
                    {/* Windows */}
                    <div className="absolute top-[15%] left-[15%] w-[25%] h-[35%] bg-sky-300/40 border border-sky-400/30 rounded-sm" />
                    <div className="absolute top-[15%] right-[15%] w-[25%] h-[35%] bg-sky-300/40 border border-sky-400/30 rounded-sm" />
                    {/* Door */}
                    <div className="absolute bottom-0 left-[38%] w-[24%] h-[40%] bg-amber-700/50 rounded-t-sm" />
                  </div>
                  {/* Ground */}
                  <div className="w-[120%] h-[8%] bg-green-800/30 rounded-full" />
                </div>
              </div>

              {/* Top right badge */}
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="#contact" className="bg-white/95 backdrop-blur-sm text-foreground text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white transition-colors">
                  Teklif Al
                </a>
                <a href="tel:+905551234567" className="bg-white/95 backdrop-blur-sm text-foreground text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-sm hover:bg-white transition-colors">
                  0555 123 45 67
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
