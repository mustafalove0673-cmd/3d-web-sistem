'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Scissors, Palette, Sparkles, Heart, ArrowRight } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';

const services = [
  {
    image: '/images/service-haircut.png',
    tr: { name: 'Saç Kesimi & Styling', desc: 'Son trendlere uygun, yüz hatlarınızı en iyi şekilde yansıtan saç kesimi ve styling hizmetleri.' },
    en: { name: 'Hair Cutting & Styling', desc: 'Hair cutting and styling that best reflects your facial features, tailored to the latest trends.' },
    icon: Scissors,
    color: 'from-rose-deep/20 to-rose/10',
  },
  {
    image: '/images/service-ombre.png',
    tr: { name: 'Ombre & Renk', desc: 'Doğal ve canlı görünümlü ombre, balyaj ve renk uygulamalarıyla saçlarınıza hayat katın.' },
    en: { name: 'Ombre & Color', desc: 'Bring your hair to life with natural and vibrant ombre, balayage, and color applications.' },
    icon: Palette,
    color: 'from-gold/20 to-gold-light/10',
  },
  {
    image: '/images/service-skincare.png',
    tr: { name: 'Cilt Bakımı', desc: 'Profesyonel cilt bakımı hizmetleriyle cildinizi yenileyin ve ışıldatın.' },
    en: { name: 'Skin Care', desc: 'Rejuvenate and illuminate your skin with professional skin care treatments.' },
    icon: Sparkles,
    color: 'from-rose/20 to-rose-light/10',
  },
  {
    image: '/images/service-beauty.png',
    tr: { name: 'Bölgesel Güzellik', desc: 'Kaş, kirpik, makyaj ve bölgesel bakım hizmetleriyle mükemmel görünümünüzü tamamlayın.' },
    en: { name: 'Beauty Treatments', desc: 'Complete your perfect look with eyebrow, eyelash, makeup, and regional beauty services.' },
    icon: Heart,
    color: 'from-rose-deep/15 to-gold/10',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });
  const { language } = useLanguageStore();
  const t = translations[language];

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [dragScroll, setDragScroll] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    return () => el?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart(e.clientX);
    setDragScroll(0);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    const diff = e.clientX - dragStart;
    setDragScroll(diff);
    const el = scrollContainerRef.current;
    if (el) el.scrollLeft -= diff * 0.5;
    setDragStart(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 0.8], [60, 0]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative section-padding overflow-hidden bg-gradient-dark"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          style={{ opacity: sectionOpacity, y: sectionY }}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.span
                className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body mb-4 block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                {language === 'tr' ? 'Hizmetlerimiz' : 'Our Services'}
              </motion.span>
              <motion.h2
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {language === 'tr' ? 'Profesyonel' : 'Professional'}{' '}
                <span className="text-gradient-gold italic font-light">{language === 'tr' ? 'Hizmetler' : 'Services'}</span>
              </motion.h2>
            </div>

            {/* Scroll buttons */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-cream/50 hover:text-cream hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-cream/50 hover:text-cream hover:bg-white/[0.08] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
              >
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="w-16 h-[1px] bg-gradient-to-r from-gold/40 to-transparent mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 cursor-grab select-none"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const s = service[language];
            return (
              <motion.div
                key={i}
                className="flex-shrink-0 w-[320px] md:w-[380px] group"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              >
                <div className="perspective-1000 h-full">
                  <div className="glass glow-border rounded-2xl overflow-hidden h-full premium-card" data-cursor-hover>
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden img-reveal">
                      <Image
                        src={service.image}
                        alt={s.name}
                        fill
                        className="object-cover"
                        sizes="380px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                      {/* Icon overlay */}
                      <div className={`absolute top-4 right-4 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} backdrop-blur-md flex items-center justify-center`}>
                        <Icon size={18} className="text-cream/80" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-cream mb-3 group-hover:text-gradient-rose transition-all">
                        {s.name}
                      </h3>
                      <p className="text-cream/40 font-body text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      <div className="flex items-center gap-2 text-gold/50 text-xs tracking-wider uppercase font-body group-hover:text-gold/80 transition-colors">
                        <span>{language === 'tr' ? 'Detaylar' : 'Details'}</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scroll progress bar */}
        <div className="mt-4 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rose to-gold rounded-full"
            style={{
              width: canScrollRight ? '60%' : '100%',
            }}
          />
        </div>
      </div>
    </section>
  );
}
