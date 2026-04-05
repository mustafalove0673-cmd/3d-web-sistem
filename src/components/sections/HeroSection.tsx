'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const titleVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.8 }
    }
  };

  const letterVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -80 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    })
  };

  const line1 = "Hayalinizdeki";
  const line2 = "Villayı";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="glow-orb absolute -top-40 -right-40 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.08), transparent 70%)' }}
        />
        <div
          className="glow-orb absolute -bottom-40 -left-40 w-[600px] h-[600px]"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.05), transparent 70%)' }}
        />
        <div
          className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(232,213,181,0.04), transparent 70%)' }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 sm:px-8"
      >
        {/* Top label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-[#C9A96E]" />
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase text-muted-foreground font-body">
            Premium Villa İnşaatı
          </span>
          <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-[#C9A96E]" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-heading font-bold tracking-tight leading-[0.9]"
        >
          <div className="overflow-hidden" style={{ perspective: '600px' }}>
            <motion.span
              variants={letterVariants}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground"
            >
              {line1}
            </motion.span>
          </div>
          <div className="overflow-hidden mt-1 sm:mt-2" style={{ perspective: '600px' }}>
            <motion.span
              variants={letterVariants}
              className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-gold"
            >
              {line2}
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.2}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto font-light leading-relaxed"
        >
          Mimari ihtişam ve mühendislik mükemmelliğiyle,
          <br className="hidden sm:block" />
          hayalinizdeki yaşam alanını inşa ediyoruz.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="magnetic-btn group flex items-center gap-3 px-8 py-4 border border-[rgba(201,169,110,0.3)] text-sm sm:text-base font-medium tracking-wide text-foreground"
          >
            <span>Projelerimiz</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 text-[#C9A96E]" />
          </a>
          <a
            href="#about"
            className="group flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Daha Fazla</span>
            <div className="w-8 h-8 rounded-full border border-[rgba(201,169,110,0.2)] flex items-center justify-center group-hover:border-[#C9A96E] transition-colors duration-300">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent origin-center"
      />

      {/* Side decorations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[rgba(201,169,110,0.3)]" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[rgba(201,169,110,0.3)] to-transparent" />
      </motion.div>

      {/* Year badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
      >
        <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Est. 2010
        </div>
      </motion.div>
    </section>
  );
}
