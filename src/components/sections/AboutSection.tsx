'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Users } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  const fadeRight = (delay: number) => ({
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  const stats = [
    { icon: Award, value: '15+', label: 'Yıllık Deneyim' },
    { icon: Users, value: '250+', label: 'Mutlu Müşteri' },
    { icon: Clock, value: '120+', label: 'Tamamlanan Proje' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <div className="h-px w-8 bg-[#C9A96E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
            Hakkımızda
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image area */}
          <motion.div
            variants={fadeRight(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden group">
              {/* Placeholder gradient for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1714] via-[#0C0C0C] to-[#1A1714]" />
              {/* Architectural pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* Corner frame */}
              <div className="absolute top-4 left-4 w-8 h-8">
                <div className="absolute top-0 left-0 w-full h-px bg-[#C9A96E]" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#C9A96E]" />
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#C9A96E]" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#C9A96E]" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute -bottom-6 -right-4 sm:-right-6 glass-dark p-4 sm:p-5"
            >
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient-gold">15+</div>
              <div className="text-xs text-muted-foreground mt-1 tracking-wide">Yıllık Deneyim</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:pt-8">
            <motion.h2
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Mükemmelliğe
              <br />
              <span className="text-gradient-gold">Adanmışlık</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              MELAKON olarak, 2010&apos;dan bu yana premium villa inşaat sektöründe fark yaratıyoruz.
              Her projemizde modern mimari anlayış ile geleneksel zanaatkarlığı bir araya getirerek,
              müşterilerimize sadece bir ev değil, bir yaşam tarzı sunuyoruz.
            </motion.p>

            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              Detaylara olan tutkumuz, kaliteli malzeme kullanımımız ve deneyimli ekibimizle,
              her projede sınırları zorluyor ve beklentilerin ötesinde sonuçlar elde ediyoruz.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <stat.icon className="w-5 h-5 text-[#C9A96E] mx-auto sm:mx-0 mb-2" />
                  <div className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Bottom line accent */}
            <motion.div
              variants={fadeUp(0.7)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-8 sm:mt-10 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-[rgba(201,169,110,0.3)] to-transparent" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]">
                Kalite & Güven
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
