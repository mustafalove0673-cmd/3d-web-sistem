'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Gallery 1' },
  { src: '/images/gallery-2.png', alt: 'Gallery 2' },
  { src: '/images/gallery-3.png', alt: 'Gallery 3' },
  { src: '/images/gallery-4.png', alt: 'Gallery 4' },
  { src: '/images/gallery-5.png', alt: 'Gallery 5' },
];

export default function GallerySection() {
  const { language } = useLanguageStore();
  const t = translations[language].gallery;
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #2A1A2E 50%, #1A1A2E 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            {t.title}
          </h2>
          <div
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: 'var(--salon-gold)' }}
          />
        </motion.div>

        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex justify-end gap-3 mb-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('left')}
            className="p-2.5 rounded-full border cursor-pointer transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('right')}
            className="p-2.5 rounded-full border cursor-pointer transition-all duration-300 hover:bg-white/10"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>

        {/* Gallery Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto hide-scrollbar pb-4 snap-x snap-mandatory"
          style={{
            scrollPaddingLeft: '1rem',
            scrollPaddingRight: '1rem',
          }}
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] snap-center"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
                style={{
                  transform: hoveredIndex === i ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  boxShadow:
                    hoveredIndex === i
                      ? '0 20px 50px rgba(139, 34, 82, 0.3)'
                      : '0 4px 15px rgba(0,0,0,0.2)',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    opacity: hoveredIndex === i ? 1 : 0,
                    background:
                      'linear-gradient(to top, rgba(139,34,82,0.4) 0%, rgba(26,26,46,0.1) 50%, transparent 100%)',
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
