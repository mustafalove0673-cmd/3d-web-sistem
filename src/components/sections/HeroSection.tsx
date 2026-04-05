'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const orbY1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const orbY2 = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const titleVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.8 },
    },
  };

  const lineVariants = {
    hidden: { y: '110%', opacity: 0 },
    visible: {
      y: '0%',
      opacity: 1,
      transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const wordReveal = {
    hidden: { y: '100%', rotateX: -40 },
    visible: {
      y: '0%',
      rotateX: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const words1 = ['Building', 'Dreams'];
  const words2 = ['Into', 'Reality'];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: orbY1 }}
          className="glow-orb absolute -top-32 -right-32 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] animate-float-slow"
        />
        <motion.div
          style={{ y: orbY2 }}
          className="glow-orb absolute -bottom-40 -left-40 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] animate-float-delayed"
        />
        <div
          className="glow-orb absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] animate-float"
          style={{
            background:
              'radial-gradient(circle, rgba(232,213,181,0.04), transparent 70%)',
          }}
        />
        {/* Small accent orb */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="glow-orb absolute top-[20%] right-[15%] w-[200px] h-[200px]"
          style={{
            background:
              'radial-gradient(circle, rgba(201,169,110,0.06), transparent 70%)',
          }}
        />
      </div>

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(201,169,110,0.3) 80px, rgba(201,169,110,0.3) 81px)`,
        }}
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 sm:px-8 w-full"
      >
        {/* Experience badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="flex justify-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 glass-gold rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
            <span className="text-xs sm:text-sm tracking-[0.15em] uppercase text-[#C9A96E] font-body font-medium">
              25+ Years of Excellence
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-pulse-gold" />
          </div>
        </motion.div>

        {/* Main heading with per-word reveal */}
        <motion.h1
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="font-heading font-bold tracking-tight leading-[0.95]"
          style={{ perspective: '1000px' }}
        >
          <div className="overflow-hidden mb-2 sm:mb-3">
            <div className="flex flex-wrap justify-center gap-x-[0.25em] sm:gap-x-[0.3em]">
              {words1.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    variants={wordReveal}
                    className="block text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-foreground"
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center gap-x-[0.25em] sm:gap-x-[0.3em]">
              {words2.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden">
                  <motion.span
                    variants={wordReveal}
                    className="block text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-gradient-gold"
                    style={{ transformOrigin: 'bottom center' }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </div>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.4}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
        >
          Premium Villa Construction &amp; Architectural Excellence
          <br className="hidden sm:block" />
          Where vision meets craftsmanship, building the extraordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1.7}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="magnetic-btn group flex items-center gap-3 px-8 py-4 border border-[rgba(201,169,110,0.3)] text-sm sm:text-base font-medium tracking-wide text-foreground hover:border-[#C9A96E]"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 relative z-10 text-[#C9A96E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-3 px-8 py-4 text-sm sm:text-base font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <span>Get a Quote</span>
            <div className="w-9 h-9 rounded-full border border-[rgba(201,169,110,0.2)] flex items-center justify-center group-hover:border-[#C9A96E] group-hover:bg-[rgba(201,169,110,0.05)] transition-all duration-300">
              <ArrowDown className="w-3.5 h-3.5" />
            </div>
          </a>
        </motion.div>

        {/* Client logos / trust badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2.2}
          className="mt-14 sm:mt-20 flex items-center justify-center gap-8 sm:gap-12 opacity-40"
        >
          {['ISO 9001', 'LEED Gold', 'ISO 14001', 'Green Build'].map(
            (badge) => (
              <div
                key={badge}
                className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-body"
              >
                {badge}
              </div>
            ),
          )}
        </motion.div>
      </motion.div>

      {/* Bottom decorative line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.5,
          delay: 1.8,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,110,0.2)] to-transparent origin-center"
      />

      {/* Side scroll indicator - left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="hidden lg:flex absolute left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[rgba(201,169,110,0.3)]" />
        <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground [writing-mode:vertical-lr] rotate-180">
          Scroll to explore
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-[rgba(201,169,110,0.3)] to-transparent" />
      </motion.div>

      {/* Year badge - right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="hidden lg:flex absolute right-8 xl:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[rgba(201,169,110,0.2)]" />
        <div className="text-center">
          <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
            Est.
          </div>
          <div className="font-heading text-lg font-bold text-gradient-gold">
            2010
          </div>
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-[rgba(201,169,110,0.2)] to-transparent" />
      </motion.div>

      {/* Animated corner frames */}
      {[
        { top: '24px', left: '24px' },
        { top: '24px', right: '24px' },
        { bottom: '24px', left: '24px' },
        { bottom: '24px', right: '24px' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 opacity-20"
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
        >
          <div
            className={`absolute w-full h-px bg-[#C9A96E] ${pos.top ? 'top-0' : 'bottom-0'}`}
          />
          <div
            className={`absolute h-full w-px bg-[#C9A96E] ${pos.left ? 'left-0' : 'right-0'}`}
          />
        </motion.div>
      ))}
    </section>
  );
}
