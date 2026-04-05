'use client';

import { Suspense, useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Scene3D from '@/components/three/Scene3D';

function ThreeJSCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <Suspense fallback={
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-rose/30 border-t-rose rounded-full animate-spin" />
      </div>
    }>
      {!isMobile && <Scene3D />}
    </Suspense>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguageStore();
  const t = translations[language];
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const layer1X = useTransform(springX, [-0.5, 0.5], isMobile ? [-8, 8] : [-15, 15]);
  const layer1Y = useTransform(springY, [-0.5, 0.5], isMobile ? [-5, 5] : [-10, 10]);
  const layer2X = useTransform(springX, [-0.5, 0.5], isMobile ? [-15, 15] : [-30, 30]);
  const layer2Y = useTransform(springY, [-0.5, 0.5], isMobile ? [-10, 10] : [-20, 20]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [mouseX, mouseY]);

  const textVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const title = t.hero.title;
  const subtitle = t.hero.subtitle;

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-dark"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Ken Burns */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: heroScale, y: heroY }}
      >
        <div
          className="absolute inset-0 animate-ken-burns"
          style={{
            backgroundImage: 'url(/images/hero-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/60 via-transparent to-dark/40" />
      </motion.div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-mesh opacity-60" />

      {/* Aurora blobs - Layer 1 (slow parallax) */}
      <motion.div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ x: layer1X, y: layer1Y }}
      >
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-rose/10 blur-[120px] animate-aurora" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-gold/8 blur-[100px] animate-aurora-2" />
      </motion.div>

      {/* Floating orbs - Layer 2 (medium parallax) */}
      <motion.div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{ x: layer2X, y: layer2Y }}
      >
        <div className="absolute top-[15%] right-[15%] w-32 h-32 md:w-48 md:h-48 border border-rose/15 rounded-full animate-rotate-slow" />
        <div className="absolute top-[15%] right-[15%] w-24 h-24 md:w-36 md:h-36 border border-gold/10 rounded-full animate-rotate-reverse-slow" />
        <div className="absolute top-[25%] left-[20%] w-3 h-3 bg-rose/30 rotate-45 animate-float-slow" />
        <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-gold/40 rounded-full animate-float" />
        <div className="absolute top-[20%] left-[60%] w-1.5 h-1.5 bg-rose/40 rounded-full animate-float-reverse" />
        <div className="absolute bottom-[20%] right-[30%] w-2.5 h-2.5 bg-gold/25 rounded-full animate-float-slow" />
      </motion.div>

      {/* THREE.JS 3D SCENE */}
      <ThreeJSCanvas />

      {/* Main Content */}
      <motion.div
        ref={containerRef}
        className="relative z-[10] h-full flex flex-col items-center justify-center px-6 text-center"
        style={{ opacity: heroOpacity }}
      >
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="perspective-1500"
        >
          {/* Top tag */}
          <motion.div
            className="mb-6 md:mb-8"
            variants={letterVariants}
          >
            <span className="inline-block px-5 py-2 text-xs md:text-sm tracking-[0.3em] uppercase glass rounded-full text-cream/70 font-body">
              {t.hero.description}
            </span>
          </motion.div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] mb-4 md:mb-6 preserve-3d">
            <motion.span
              className="block text-cream"
              variants={letterVariants}
            >
              {title}
            </motion.span>
          </h1>

          {/* Subtitle with gold gradient */}
          <motion.h2
            className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic tracking-wide text-gradient-gold mb-6 md:mb-8"
            variants={letterVariants}
          >
            {subtitle}
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mb-8"
            variants={letterVariants}
          />

          {/* CTA Buttons - Premium Magnetic Style */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={letterVariants}
          >
            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="magnetic-btn glow-border group relative px-10 py-4 bg-gradient-to-r from-rose-deep to-rose rounded-full text-white font-body text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 data-cursor-hover"
              data-cursor-hover
            >
              <span className="relative z-10">{t.hero.cta1}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-rose to-rose-light opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-px bg-gradient-to-r from-rose/50 to-gold/30 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
            </a>
            <a
              href="#services"
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="px-10 py-4 glass rounded-full text-cream/80 font-body text-sm tracking-wider uppercase hover:text-cream hover:border-gold/30 hover:bg-white/[0.06] transition-all duration-500 data-cursor-hover"
              data-cursor-hover
            >
              {t.hero.cta2}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/30 font-body">
          {language === 'tr' ? 'Keşfet' : 'Explore'}
        </span>
        <motion.div className="animate-scroll-indicator">
          <ChevronDown size={20} className="text-cream/30" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[15]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 z-[16] noise-overlay pointer-events-none" />
    </motion.section>
  );
}
