'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Bodrum Yalısı',
    category: 'Lüks Villa',
    location: 'Bodrum, Muğla',
    year: '2024',
    area: '650 m²',
    description: 'Ege denizine nazır, modern minimalist çizgilerle tasarlanmış premium villa projesi.',
    gradient: 'from-[#1a1a2e] via-[#0f1923] to-[#1a1714]',
  },
  {
    id: 2,
    title: 'Kapadokya Kaya Ev',
    category: 'Özel Tasarım',
    location: 'Ürgüp, Nevşehir',
    year: '2024',
    area: '420 m²',
    description: 'Doğal kaya oluşumlarıyla entegre, eşsiz bir yaşam deneyimi sunan proje.',
    gradient: 'from-[#2d1b0e] via-[#1a1714] to-[#0f1923]',
  },
  {
    id: 3,
    title: 'İstanbul Panorama',
    category: 'Penthouse Villa',
    location: 'Beykoz, İstanbul',
    year: '2023',
    area: '780 m²',
    description: 'Boğaz manzaralı, çift katlı teraslarıyla İstanbul\'un siluetini izleyen rezidans.',
    gradient: 'from-[#0f1923] via-[#1a1714] to-[#2d1b0e]',
  },
  {
    id: 4,
    title: 'Antalya Bahçe Ev',
    category: 'Aile Villası',
    location: 'Konyaaltı, Antalya',
    year: '2023',
    area: '380 m²',
    description: 'Akdeniz iklimine uygun, geniş bahçeli ve yüzme havuzlu aile villası.',
    gradient: 'from-[#1a1714] via-[#2d1b0e] to-[#1a1a2e]',
  },
  {
    id: 5,
    title: 'Fethiye Deniz Köşk',
    category: 'Premium Villa',
    location: 'Fethiye, Muğla',
    year: '2023',
    area: '520 m²',
    description: 'Özel iskelenin bulunduğu, lüks yaşam alanlarıyla donatılmış deniz köşk.',
    gradient: 'from-[#0f1923] via-[#2d1b0e] to-[#1a1714]',
  },
  {
    id: 6,
    title: 'Ankara Modern',
    category: 'Şehir Villası',
    location: 'Çankaya, Ankara',
    year: '2022',
    area: '450 m²',
    description: 'Modern çizgileriyle şehrin kalbinde huzurlu bir yaşam alanı.',
    gradient: 'from-[#2d1b0e] via-[#1a1a2e] to-[#0f1923]',
  },
];

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [selected, setSelected] = useState<number | null>(null);

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
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
            Projeler
          </span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-12 sm:mb-16">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Seçkin
            <br />
            <span className="text-gradient-gold">Projelerimiz</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-muted-foreground text-base sm:text-lg max-w-md"
          >
            Her biri özenle tasarlanmış ve inşa edilmiş projelerimize göz atın.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="group cursor-pointer"
              onClick={() => setSelected(project.id)}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden border border-[rgba(201,169,110,0.08)] group-hover:border-[rgba(201,169,110,0.2)] transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: `linear-gradient(45deg, rgba(201,169,110,0.3) 25%, transparent 25%, transparent 75%, rgba(201,169,110,0.3) 75%), linear-gradient(45deg, rgba(201,169,110,0.3) 25%, transparent 25%, transparent 75%, rgba(201,169,110,0.3) 75%)`,
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#050505]/0 group-hover:bg-[#050505]/60 transition-all duration-500" />

                {/* Hover content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-14 h-14 rounded-full border border-[#C9A96E] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-6 h-6 text-[#C9A96E]" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 text-[10px] tracking-wider uppercase glass-dark text-muted-foreground">
                  {project.category}
                </div>

                {/* Corner frame */}
                <div className="absolute bottom-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 right-0 w-full h-px bg-[#C9A96E]" />
                  <div className="absolute bottom-0 right-0 h-full w-px bg-[#C9A96E]" />
                </div>
              </div>

              {/* Info */}
              <div className="mt-4 sm:mt-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-[#C9A96E] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground">{project.year}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-[rgba(201,169,110,0.3)]" />
                  <span>{project.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-2xl w-full glass-dark p-8 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {(() => {
                const project = projects.find(p => p.id === selected);
                if (!project) return null;
                return (
                  <>
                    <div className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-4">
                      {project.category}
                    </div>
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                      <span>{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-[rgba(201,169,110,0.3)]" />
                      <span>{project.area}</span>
                      <span className="w-1 h-1 rounded-full bg-[rgba(201,169,110,0.3)]" />
                      <span>{project.year}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-8 pt-6 border-t border-[rgba(201,169,110,0.1)]">
                      <button className="magnetic-btn inline-flex items-center gap-3 px-6 py-3 border border-[rgba(201,169,110,0.3)] text-sm font-medium tracking-wide text-foreground">
                        <span>Proje Detayları</span>
                        <ArrowUpRight className="w-4 h-4 relative z-10 text-[#C9A96E]" />
                      </button>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
