'use client';

import { useRef, useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';
import { AuroraOverlay, FloatingBokeh, LightStreaks, RisingParticles } from '@/components/AnimatedBackground';

function ButterflySVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 40C50 40 30 15 15 20C5 24 8 40 15 45C22 50 38 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M50 40C50 40 70 15 85 20C95 24 92 40 85 45C78 50 62 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M50 40C50 40 28 50 20 60C14 67 20 72 28 68C36 64 48 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M50 40C50 40 72 50 80 60C86 67 80 72 72 68C64 64 52 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.25"
      />
    </svg>
  );
}

export default function HeroSection() {
  const { language } = useLanguageStore();
  const t = translations[language].hero;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const isVisible = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    setMousePos({ x: deltaX, y: deltaY });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const rotateX = mousePos.y * -3;
  const rotateY = mousePos.x * 3;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Image with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt="Melek Yüksel Hair Beauty Salon"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{
              transform: 'scale(1.08)',
              animation: 'gradient-shift 20s ease infinite',
              willChange: 'transform',
            }}
          />
        </div>
        {/* Animated aurora overlay */}
        <AuroraOverlay variant="mixed" />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(26,26,46,0.75) 0%, rgba(139,34,82,0.5) 40%, rgba(26,26,46,0.65) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(139,34,82,0.2) 0%, transparent 60%)',
          }}
        />
      </div>

      {/* Floating Bokeh Particles */}
      <FloatingBokeh count={10} variant="dark" />

      {/* Rising Particles */}
      <RisingParticles count={5} />

      {/* Light Streaks */}
      <LightStreaks count={3} />

      {/* Floating Glass Panels */}
      <div
        className="absolute top-20 right-[10%] w-32 h-32 sm:w-48 sm:h-48 rounded-full glass animate-float opacity-30 z-[2]"
        style={{ animationDelay: '0s' }}
      />
      <div
        className="absolute bottom-32 left-[8%] w-24 h-24 sm:w-40 sm:h-40 rounded-2xl glass animate-float-slow opacity-20 z-[2]"
        style={{ animationDelay: '2s' }}
      />
      <div
        className="absolute top-[40%] left-[15%] w-16 h-16 sm:w-28 sm:h-28 rounded-xl glass animate-float-reverse opacity-25 z-[2]"
        style={{ animationDelay: '4s' }}
      />

      {/* Butterfly Decorations with glowing ring */}
      <div className="absolute top-[16%] right-[11%] z-[2]">
        <div className="absolute inset-0 w-16 h-14 sm:w-20 sm:h-18 rounded-full animate-ring-expand" style={{ border: '1px solid rgba(201,169,110,0.15)' }} />
        <ButterflySVG
          className="relative w-12 h-10 sm:w-16 sm:h-14 text-white animate-butterfly"
        />
      </div>
      <ButterflySVG
        className="absolute bottom-[25%] left-[8%] w-10 h-8 sm:w-14 sm:h-12 text-white animate-butterfly z-[2] opacity-50"
        style={{ animationDelay: '5s' }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="perspective-1200"
          style={{
            transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0px)`,
            transition: 'transform 0.4s ease-out',
            willChange: 'transform',
          }}
        >
          {/* Sparkle icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <Sparkles
              className="w-8 h-8"
              style={{ color: 'var(--salon-gold)' }}
            />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase mb-4"
            style={{ color: 'var(--salon-gold)' }}
          >
            {t.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg text-white/70 mb-10 max-w-xl mx-auto"
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{
                y: -4,
                boxShadow: '0 12px 40px rgba(139, 34, 82, 0.5)',
              }}
              whileTap={{ y: 2, boxShadow: '0 4px 15px rgba(139, 34, 82, 0.3)' }}
              onClick={() => scrollToSection('booking')}
              className="px-8 py-3.5 rounded-full text-white font-semibold text-base tracking-wide cursor-pointer transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, var(--salon-pink), var(--salon-red))',
                boxShadow: '0 6px 25px rgba(139, 34, 82, 0.4)',
              }}
            >
              {t.cta1}
            </motion.button>

            {/* Secondary CTA */}
            <motion.button
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderColor: 'rgba(255,255,255,0.5)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('services')}
              className="px-8 py-3.5 rounded-full font-semibold text-base tracking-wide text-white border-2 cursor-pointer transition-all duration-300"
              style={{
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
            >
              {t.cta2}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-scroll-down" />
        </button>
      </motion.div>
    </section>
  );
}
