'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Clock, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguageStore } from '@/lib/language-store';

const values = [
  {
    icon: Award,
    titleKey: 'about.value1.title',
    descKey: 'about.value1.desc',
    color: 'text-gold',
    borderColor: 'border-gold/20',
    hoverBg: 'hover:bg-gold/5',
  },
  {
    icon: Shield,
    titleKey: 'about.value2.title',
    descKey: 'about.value2.desc',
    color: 'text-steel-blue',
    borderColor: 'border-steel-blue/20',
    hoverBg: 'hover:bg-steel-blue/5',
  },
  {
    icon: Lightbulb,
    titleKey: 'about.value3.title',
    descKey: 'about.value3.desc',
    color: 'text-gold',
    borderColor: 'border-gold/20',
    hoverBg: 'hover:bg-gold/5',
  },
  {
    icon: Clock,
    titleKey: 'about.value4.title',
    descKey: 'about.value4.desc',
    color: 'text-steel-blue',
    borderColor: 'border-steel-blue/20',
    hoverBg: 'hover:bg-steel-blue/5',
  },
];

export default function AboutSection() {
  const { t } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Blueprint Background */}
      <div className="absolute inset-0 bg-blueprint opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase">
            {t('about.badge')}
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
        >
          {t('about.title')}
        </motion.h2>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-0.5 bg-gradient-to-r from-steel-blue to-gold mx-auto mb-12"
        />

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-steel-blue/10 to-dark-lighter" />
              <div className="absolute inset-0 bg-blueprint opacity-40" />
              {/* Construction graphic */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-8xl font-bold text-steel-blue/10 mb-2">25+</div>
                  <div className="font-body text-text-secondary text-sm tracking-wider">YEARS OF EXCELLENCE</div>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-gold/40" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-gold/40" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 glass-gold rounded-xl p-4 md:p-5"
            >
              <div className="text-gold font-display text-3xl font-bold">500+</div>
              <div className="text-text-secondary text-xs font-body">
                {t('hero.stat1.label')}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed">
              {t('about.p2')}
            </p>

            {/* Signature line */}
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              <span className="font-display text-gold text-sm font-semibold tracking-wider">NOVA</span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.titleKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <Card className={`bg-card/50 border ${value.borderColor} ${value.hoverBg} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group py-0`}>
                <CardContent className="p-5 md:p-6">
                  <div className={`w-12 h-12 rounded-lg bg-dark flex items-center justify-center mb-4 ${value.color} group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="size-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-primary mb-2">
                    {t(value.titleKey)}
                  </h3>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">
                    {t(value.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
