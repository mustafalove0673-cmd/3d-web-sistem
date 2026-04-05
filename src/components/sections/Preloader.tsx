'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'bars' | 'exit'>('counting');
  const hasCalled = useRef(false);

  const handleComplete = useCallback(() => {
    if (hasCalled.current) return;
    hasCalled.current = true;
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const duration = 2200;
    const interval = 16;
    const step = 100 / (duration / interval);
    let current = 0;

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.3;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setCount(100);
        setTimeout(() => setPhase('bars'), 400);
      }
      setCount(Math.floor(current));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (phase === 'bars') {
      const timer = setTimeout(() => {
        setPhase('exit');
        setTimeout(handleComplete, 900);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [phase, handleComplete]);

  const barHeights = [35, 55, 70, 90, 100, 90, 70, 55, 35];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505]"
      initial={{ y: 0 }}
      animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Grain overlay */}
      <div
        className="absolute inset-0 animate-grain opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top & Bottom gold lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: 'center' }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        style={{ transformOrigin: 'center' }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] text-foreground">
            MELAKON
          </h1>
        </motion.div>

        {/* Counter */}
        <motion.div
          className="mt-6 sm:mt-8 font-heading text-7xl sm:text-8xl md:text-9xl font-extralight tracking-[0.05em] text-gradient-gold tabular-nums"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          {String(count).padStart(3, '0')}
        </motion.div>

        {/* Progress line */}
        <div className="mt-6 sm:mt-8 mx-auto w-40 sm:w-56 h-px bg-[rgba(201,169,110,0.1)] overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#C9A96E] via-[#E8D5B5] to-[#C9A96E]"
            initial={{ width: '0%' }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.08, ease: 'linear' }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-[10px] sm:text-xs tracking-[0.4em] uppercase text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === 'bars' ? 0 : 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Premium Villa Construction
        </motion.p>
      </div>

      {/* Reveal bars */}
      <AnimatePresence>
        {phase === 'bars' && (
          <div className="absolute inset-0 flex flex-col pointer-events-none">
            {barHeights.map((height, i) => (
              <motion.div
                key={i}
                className="w-full bg-gradient-to-r from-[#C9A96E] via-[#E8D5B5] to-[#C9A96E]"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.04,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  height: `${height}%`,
                  transformOrigin: i < 5 ? 'top' : 'bottom',
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Corner decorations */}
      {[
        'top-5 left-5',
        'top-5 right-5',
        'bottom-5 left-5',
        'bottom-5 right-5',
      ].map((pos, i) => (
        <motion.div
          key={pos}
          className={`absolute ${pos} w-4 h-4 opacity-30`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: phase === 'bars' ? 0 : 0.3, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
        >
          <div className="absolute top-0 left-0 w-full h-px bg-[#C9A96E]" />
          <div className="absolute top-0 left-0 h-full w-px bg-[#C9A96E]" />
        </motion.div>
      ))}

      {/* Side lines */}
      <motion.div
        className="absolute left-8 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-[rgba(201,169,110,0.2)] to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{ height: '40%' }}
      />
      <motion.div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-px bg-gradient-to-b from-transparent via-[rgba(201,169,110,0.2)] to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        style={{ height: '40%' }}
      />
    </motion.div>
  );
}
