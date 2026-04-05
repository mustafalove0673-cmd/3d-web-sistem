'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Paintbrush, TreePine, Home, Waves, Hammer } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguageStore } from '@/lib/language-store';

const services = [
  {
    icon: Building2,
    titleKey: 'services.s1.title',
    descKey: 'services.s1.desc',
    gradient: 'from-steel-blue/20 to-steel-blue/5',
    iconColor: 'text-steel-blue',
    borderColor: 'border-steel-blue/20',
    hoverBorder: 'hover:border-steel-blue/40',
  },
  {
    icon: Paintbrush,
    titleKey: 'services.s2.title',
    descKey: 'services.s2.desc',
    gradient: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
    borderColor: 'border-gold/20',
    hoverBorder: 'hover:border-gold/40',
  },
  {
    icon: TreePine,
    titleKey: 'services.s3.title',
    descKey: 'services.s3.desc',
    gradient: 'from-steel-blue/20 to-steel-blue/5',
    iconColor: 'text-steel-blue',
    borderColor: 'border-steel-blue/20',
    hoverBorder: 'hover:border-steel-blue/40',
  },
  {
    icon: Home,
    titleKey: 'services.s4.title',
    descKey: 'services.s4.desc',
    gradient: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
    borderColor: 'border-gold/20',
    hoverBorder: 'hover:border-gold/40',
  },
  {
    icon: Waves,
    titleKey: 'services.s5.title',
    descKey: 'services.s5.desc',
    gradient: 'from-steel-blue/20 to-steel-blue/5',
    iconColor: 'text-steel-blue',
    borderColor: 'border-steel-blue/20',
    hoverBorder: 'hover:border-steel-blue/40',
  },
  {
    icon: Hammer,
    titleKey: 'services.s6.title',
    descKey: 'services.s6.desc',
    gradient: 'from-gold/20 to-gold/5',
    iconColor: 'text-gold',
    borderColor: 'border-gold/20',
    hoverBorder: 'hover:border-gold/40',
  },
];

export default function ServicesSection() {
  const { t } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-steel-blue/30 bg-steel-blue/10 text-steel-blue text-xs font-body font-medium tracking-wider uppercase">
            {t('services.badge')}
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
        >
          {t('services.title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          {t('services.subtitle')}
        </motion.p>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-0.5 bg-gradient-to-r from-steel-blue to-gold mx-auto mb-12"
        />

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Card
                className={`bg-card/40 border ${service.borderColor} ${service.hoverBorder} transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group py-0 overflow-hidden`}
              >
                <CardContent className="p-6 md:p-7 relative">
                  {/* Gradient bg on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-dark flex items-center justify-center mb-5 ${service.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="size-7" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-semibold text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                      {t(service.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-text-secondary text-sm leading-relaxed">
                      {t(service.descKey)}
                    </p>

                    {/* Bottom accent line */}
                    <div className={`mt-5 h-px w-0 group-hover:w-full transition-all duration-500 ${
                      service.iconColor === 'text-gold'
                        ? 'bg-gold/40'
                        : 'bg-steel-blue/40'
                    }`} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
