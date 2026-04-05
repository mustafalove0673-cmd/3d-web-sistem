'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Building2, Paintbrush, Ruler, Shield, TreePine, Wrench } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Villa İnşaatı',
    description: 'Sıfırdan anahtar teslim villa projeleri. Modern mimari ve premium malzeme kullanımı.',
    tag: 'Popüler',
  },
  {
    icon: Paintbrush,
    title: 'İç Mimari',
    description: 'Yaşam alanlarınızı kişiselleştiren, estetik ve fonksiyonel iç mekan tasarımları.',
    tag: null,
  },
  {
    icon: TreePine,
    title: 'Peyzaj Tasarım',
    description: 'Bahçe ve peyzaj düzenlemeleri ile doğayla uyumlu dış mekanlar oluşturma.',
    tag: null,
  },
  {
    icon: Ruler,
    title: 'Mimari Tasarım',
    description: 'Benzersiz villa projelerinizi hayata geçiren ödüllü mimari tasarım hizmeti.',
    tag: null,
  },
  {
    icon: Wrench,
    title: 'Renovasyon',
    description: 'Mevcut yapılarınızı modern standartlara yenileyen kapsamlı renovasyon çözümleri.',
    tag: null,
  },
  {
    icon: Shield,
    title: 'Proje Yönetimi',
    description: 'Baştan sona profesyonel proje yönetimi ile zamanında ve bütçede teslimat.',
    tag: null,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  return (
    <section id="services" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="h-px w-8 bg-[#C9A96E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
            Hizmetler
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Kapsamlı
            <br />
            <span className="text-gradient-gold">Çözümler</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:pt-4"
          >
            Her projemizde uçtan uca hizmet sunarak, hayalinizdeki yaşam alanını
            kusursuz bir şekilde hayata geçiriyoruz.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group relative p-6 sm:p-8 border border-[rgba(201,169,110,0.08)] hover:border-[rgba(201,169,110,0.25)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,169,110,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Tag */}
              {service.tag && (
                <div className="absolute top-4 right-4 px-2.5 py-1 text-[10px] tracking-wider uppercase bg-[rgba(201,169,110,0.15)] text-[#C9A96E]">
                  {service.tag}
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[rgba(201,169,110,0.15)] mb-5 group-hover:border-[#C9A96E] group-hover:bg-[rgba(201,169,110,0.05)] transition-all duration-500">
                  <service.icon className="w-5 h-5 text-[#C9A96E]" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground group-hover:text-[#C9A96E] transition-colors duration-300">
                  <span>Detaylı Bilgi</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
