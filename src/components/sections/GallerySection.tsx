'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguageStore } from '@/lib/language-store';

type FilterKey = 'all' | 'villa' | 'apartment' | 'commercial' | 'restoration';

interface Project {
  id: number;
  titleTR: string;
  titleEN: string;
  locationTR: string;
  locationEN: string;
  category: FilterKey;
  gradient: string;
}

const projects: Project[] = [
  {
    id: 1,
    titleTR: 'Zeytinlik Villa',
    titleEN: 'Zeytinlik Villa',
    locationTR: 'Beykoz, İstanbul',
    locationEN: 'Beykoz, Istanbul',
    category: 'villa',
    gradient: 'from-steel-blue/30 via-dark-lighter to-gold/20',
  },
  {
    id: 2,
    titleTR: 'Deniz Manzaralı Villa',
    titleEN: 'Sea View Villa',
    locationTR: 'Kınalıada, İstanbul',
    locationEN: 'Kınalıada, Istanbul',
    category: 'villa',
    gradient: 'from-gold/20 via-dark-lighter to-steel-blue/30',
  },
  {
    id: 3,
    titleTR: 'Modern Yaşam Kompleksi',
    titleEN: 'Modern Living Complex',
    locationTR: 'Ataşehir, İstanbul',
    locationEN: 'Ataşehir, Istanbul',
    category: 'apartment',
    gradient: 'from-dark-lighter via-steel-blue/20 to-dark-lighter',
  },
  {
    id: 4,
    titleTR: 'Tarihi Yalı Restorasyonu',
    titleEN: 'Historical Mansion Restoration',
    locationTR: 'Boğaziçi, İstanbul',
    locationEN: 'Bosphorus, Istanbul',
    category: 'restoration',
    gradient: 'from-gold/30 via-dark-lighter to-concrete/10',
  },
  {
    id: 5,
    titleTR: 'Akıllı Villa Projesi',
    titleEN: 'Smart Villa Project',
    locationTR: 'Sarıyer, İstanbul',
    locationEN: 'Sarıyer, Istanbul',
    category: 'villa',
    gradient: 'from-steel-blue/20 via-dark-lighter to-gold/30',
  },
  {
    id: 6,
    titleTR: 'Ofis Kulesi',
    titleEN: 'Office Tower',
    locationTR: 'Levent, İstanbul',
    locationEN: 'Levent, Istanbul',
    category: 'commercial',
    gradient: 'from-dark-lighter via-gold/10 to-steel-blue/20',
  },
];

const filters: { key: FilterKey; labelKey: string }[] = [
  { key: 'all', labelKey: 'projects.filter.all' },
  { key: 'villa', labelKey: 'projects.filter.villa' },
  { key: 'apartment', labelKey: 'projects.filter.apartment' },
  { key: 'commercial', labelKey: 'projects.filter.commercial' },
  { key: 'restoration', labelKey: 'projects.filter.restoration' },
];

export default function GallerySection() {
  const { t, language } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-blueprint opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase">
            {t('projects.badge')}
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
        >
          {t('projects.title')}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto mb-8"
        >
          {t('projects.subtitle')}
        </motion.p>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-0.5 bg-gradient-to-r from-steel-blue to-gold mx-auto mb-10"
        />

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                  : 'bg-white/5 text-text-secondary hover:bg-white/10 hover:text-text-primary border border-white/10'
              }`}
            >
              {t(filter.labelKey)}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
              >
                {/* Gradient placeholder bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                <div className="absolute inset-0 bg-blueprint opacity-30" />

                {/* Construction pattern overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center opacity-20">
                    <div className="w-16 h-16 border-2 border-current border-t-transparent rounded-full animate-rotate-slow mx-auto mb-3" style={{ color: '#4A90D9' }} />
                    <div className="font-display text-2xl font-bold text-steel-blue">NOVA</div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/60 transition-all duration-500 flex items-end p-5">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {language === 'tr' ? project.titleTR : project.titleEN}
                    </h3>
                    <p className="font-body text-text-secondary text-sm mt-1">
                      {language === 'tr' ? project.locationTR : project.locationEN}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-gold text-sm font-body font-medium">
                      <span>{language === 'tr' ? 'Detaylar' : 'Details'}</span>
                      <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10"
        >
          <Button
            variant="outline"
            className="border-gold/30 text-gold hover:bg-gold/10 hover:text-gold font-semibold px-8 h-11 transition-all duration-300 gap-2"
          >
            {t('projects.viewAll')}
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
