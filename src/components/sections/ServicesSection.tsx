'use client';

import { useRef, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';
import { AnimatedGradientOrbs, FloatingBokeh } from '@/components/AnimatedBackground';

const serviceImages = [
  '/images/service-haircut.png',
  '/images/service-ombre.png',
  '/images/service-skincare.png',
  '/images/service-beauty.png',
];

function ServiceCard({
  image,
  name,
  description,
  index,
  lang,
}: {
  image: string;
  name: string;
  description: string;
  index: number;
  lang: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxRotation = 5;
    const deltaX = ((e.clientX - centerX) / (rect.width / 2)) * maxRotation;
    const deltaY = -((e.clientY - centerY) / (rect.height / 2)) * maxRotation;
    setTilt({ x: deltaY, y: deltaX });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="perspective-1200"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group rounded-3xl overflow-hidden cursor-default transition-all duration-300 ease-out"
        style={{
          backgroundColor: 'var(--salon-white)',
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
          willChange: 'transform',
          boxShadow: isHovered
            ? '0 20px 50px rgba(139, 34, 82, 0.15), 0 8px 20px rgba(0,0,0,0.08)'
            : '0 4px 15px rgba(0,0,0,0.06)',
        }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'linear-gradient(to top, rgba(139,34,82,0.3) 0%, transparent 60%)',
            }}
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3
            className="font-playfair text-lg sm:text-xl font-bold mb-2"
            style={{ color: 'var(--salon-dark)' }}
          >
            {name}
          </h3>
          <p
            className="text-sm leading-relaxed"
            style={{ color: 'var(--salon-gray)' }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { language } = useLanguageStore();
  const t = translations[language].services;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--salon-beige)' }}
    >
      {/* Animated gradient orbs */}
      <AnimatedGradientOrbs variant="pink" />

      {/* Floating bokeh particles */}
      <FloatingBokeh count={6} variant="pink" />

      {/* Animated gradient line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] animate-glow-pulse z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--salon-pink-light), var(--salon-gold), var(--salon-pink-light), transparent)',
          backgroundSize: '200% 100%',
          willChange: 'opacity',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--salon-dark)' }}
          >
            {t.title}
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: 'var(--salon-gold)' }}
          />
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--salon-gray)' }}
          >
            {t.description}
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {t.items.map((service, i) => (
            <ServiceCard
              key={i}
              image={serviceImages[i]}
              name={service.name}
              description={service.description}
              index={i}
              lang={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
