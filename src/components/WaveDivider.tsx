'use client';

import { motion } from 'framer-motion';

type WaveVariant = 'pink-gold' | 'dark-cream' | 'cream-dark' | 'dark-pink' | 'pink-dark' | 'gold-dark';

interface WaveDividerProps {
  variant?: WaveVariant;
  flip?: boolean;
}

const gradientMap: Record<WaveVariant, string> = {
  'pink-gold': 'linear-gradient(135deg, var(--salon-pink-light), var(--salon-gold))',
  'dark-cream': 'linear-gradient(135deg, var(--salon-dark), var(--salon-beige))',
  'cream-dark': 'linear-gradient(135deg, var(--salon-cream), var(--salon-dark))',
  'dark-pink': 'linear-gradient(135deg, var(--salon-dark), var(--salon-pink))',
  'pink-dark': 'linear-gradient(135deg, var(--salon-pink), var(--salon-dark))',
  'gold-dark': 'linear-gradient(135deg, var(--salon-gold), var(--salon-dark))',
};

export function WaveDivider({ variant = 'pink-gold', flip = false }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''}`}
      style={{ marginTop: '-1px', marginBottom: '-1px' }}
    >
      {/* Animated shimmer line on top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background: gradientMap[variant],
          backgroundSize: '200% 100%',
        }}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Multi-layer wave SVG */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative w-full h-[60px] sm:h-[80px] md:h-[100px]"
      >
        {/* Back wave - subtle */}
        <motion.path
          d="M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z"
          fill="rgba(139, 34, 82, 0.06)"
          animate={{
            d: [
              'M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z',
              'M0,50 C180,90 360,30 540,70 C720,100 900,40 1080,70 C1260,90 1380,50 1440,70 L1440,120 L0,120 Z',
              'M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Mid wave */}
        <motion.path
          d="M0,70 C240,30 480,100 720,70 C960,40 1200,100 1440,70 L1440,120 L0,120 Z"
          fill="rgba(201, 169, 110, 0.05)"
          animate={{
            d: [
              'M0,70 C240,30 480,100 720,70 C960,40 1200,100 1440,70 L1440,120 L0,120 Z',
              'M0,80 C240,100 480,40 720,80 C960,100 1200,50 1440,80 L1440,120 L0,120 Z',
              'M0,70 C240,30 480,100 720,70 C960,40 1200,100 1440,70 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Front wave */}
        <motion.path
          d="M0,80 C360,50 720,110 1080,80 C1260,65 1380,85 1440,80 L1440,120 L0,120 Z"
          fill="rgba(212, 135, 143, 0.04)"
          animate={{
            d: [
              'M0,80 C360,50 720,110 1080,80 C1260,65 1380,85 1440,80 L1440,120 L0,120 Z',
              'M0,90 C360,110 720,60 1080,90 C1260,100 1380,75 1440,90 L1440,120 L0,120 Z',
              'M0,80 C360,50 720,110 1080,80 C1260,65 1380,85 1440,80 L1440,120 L0,120 Z',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

interface GradientTransitionProps {
  from: string;
  to: string;
  height?: string;
}

export function GradientTransition({ from, to, height = '80px' }: GradientTransitionProps) {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height, marginTop: '-1px', marginBottom: '-1px' }}
    >
      {/* Animated flow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] animate-glow-pulse"
        style={{
          background: `linear-gradient(90deg, transparent, var(--salon-gold), var(--salon-pink-light), var(--salon-gold), transparent)`,
          willChange: 'transform, opacity',
        }}
      />
      {/* Gradient fill */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: `linear-gradient(180deg, ${from} 0%, ${to} 100%)`,
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
}
