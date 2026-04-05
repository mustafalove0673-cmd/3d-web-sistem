'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useLanguageStore } from '@/lib/language-store';

const Scene3D = dynamic(() => import('@/components/three/Scene3D'), {
  ssr: false,
  loading: () => null,
});

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display font-bold text-gold">
      {count}
      {suffix}
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroSection() {
  const { t } = useLanguageStore();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/60 via-dark/30 to-dark" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-dark/40 via-transparent to-dark/40" />

      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 z-[1] bg-blueprint opacity-50" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-steel-blue/30 bg-steel-blue/10 text-steel-blue text-xs font-body font-medium tracking-wider uppercase">
            NOVA Construction
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6"
        >
          <span className="text-text-primary">{t('hero.title').split(' ').slice(0, -1).join(' ')}</span>
          <br />
          <span className="text-gradient-gold">{t('hero.title').split(' ').slice(-1)}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto font-body text-base sm:text-lg text-text-secondary mb-10 leading-relaxed"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gold hover:bg-gold-light text-dark font-semibold px-8 h-12 text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 gap-2"
          >
            {t('hero.cta1')}
            <ChevronRight className="size-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-steel-blue/30 bg-transparent hover:bg-steel-blue/10 text-text-primary font-semibold px-8 h-12 text-base transition-all duration-300 gap-2"
          >
            {t('hero.cta2')}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <div className="text-center">
            <AnimatedCounter target={500} suffix="+" />
            <p className="text-text-secondary text-xs sm:text-sm font-body mt-1">
              {t('hero.stat1.label')}
            </p>
          </div>
          <div className="text-center border-x border-white/10 px-4">
            <AnimatedCounter target={25} suffix="+" />
            <p className="text-text-secondary text-xs sm:text-sm font-body mt-1">
              {t('hero.stat2.label')}
            </p>
          </div>
          <div className="text-center">
            <AnimatedCounter target={100} suffix="%" />
            <p className="text-text-secondary text-xs sm:text-sm font-body mt-1">
              {t('hero.stat3.label')}
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-text-secondary text-xs font-body tracking-wider uppercase">
          {t('hero.scroll')}
        </span>
        <ArrowDown className="size-4 text-gold animate-scroll-indicator" />
      </motion.div>
    </section>
  );
}
