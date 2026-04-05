/**
 * useCountUp - greensock/GSAP (#59) animasyonlu sayaç
 * Istatistik bölümleri için sayı saydırma animasyonu
 */
'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpOptions {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function useCountUp(options: CountUpOptions) {
  const { end, duration = 2, suffix = '', prefix = '', decimals = 0 } = options;
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = eased * end;
        setCount(parseFloat(current.toFixed(decimals)));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, decimals]);

  return {
    ref,
    text: `${prefix}${count}${suffix}`,
    count,
    isInView
  };
}
