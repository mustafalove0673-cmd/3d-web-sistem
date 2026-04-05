/**
 * useScrollReveal - greensock/GSAP (#59) + framer/motion (#16)
 * Scroll tetiklemeli animasyon hook'u.
 * GSAP ScrollTrigger + Framer Motion Intersection Observer
 * Kurulu: gsap@3.14.2, framer-motion@12.23.2
 */
'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useInView } from 'framer-motion';

interface ScrollRevealOptions {
  threshold?: number;
  once?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.15,
    once = true,
    delay = 0,
    direction = 'up'
  } = options;

  const ref = useRef<T>(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const getTransform = useCallback(() => {
    switch (direction) {
      case 'up': return { y: 40, x: 0, scale: 1 };
      case 'down': return { y: -40, x: 0, scale: 1 };
      case 'left': return { x: 60, y: 0, scale: 1 };
      case 'right': return { x: -60, y: 0, scale: 1 };
      case 'scale': return { x: 0, y: 0, scale: 0.8 };
      case 'fade': return { x: 0, y: 0, scale: 1 };
      default: return { y: 40, x: 0, scale: 1 };
    }
  }, [direction]);

  const initial = getTransform();
  const animate = isInView ? { y: 0, x: 0, scale: 1, opacity: 1 } : { ...initial, opacity: 0 };

  return {
    ref,
    isInView,
    animate,
    initial: { ...initial, opacity: 0 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  };
}

/**
 * useStaggerChildren - animejs/animejs (#60) tarzı stagger efekt
 * Children'ları sırayla animasyonla göster
 */
export function useStaggerChildren(baseDelay = 0.1) {
  const containerRef = useRef<HTMLDivElement>(null);

  const stagger = {
    container: {
      animate: { transition: { staggerChildren: baseDelay } }
    },
    item: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    }
  };

  return { containerRef, stagger };
}
