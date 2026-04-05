'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 120, suffix: '+', label: 'Tamamlanan Proje', description: 'Türkiye genelinde' },
  { value: 250, suffix: '+', label: 'Mutlu Müşteri', description: 'Güvenilir iş ortaklığı' },
  { value: 15, suffix: '+', label: 'Yıllık Deneyim', description: 'Sektör lideri' },
  { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti', description: 'Referansla büyüyoruz' },
];

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  return (
    <section className="relative py-20 sm:py-28 md:py-32" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="glow-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(201,169,110,0.06), transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="h-px w-8 bg-[#C9A96E]" />
            <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
              Rakamlarla Biz
            </span>
            <div className="h-px w-8 bg-[#C9A96E]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Güven <span className="text-gradient-gold">İnşa Edilir</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isInView={isInView} fadeUp={fadeUp} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isInView,
  fadeUp,
}: {
  stat: { value: number; suffix: string; label: string; description: string };
  index: number;
  isInView: boolean;
  fadeUp: (delay: number) => object;
}) {
  const count = useCountUp(stat.value, isInView, 2500);

  return (
    <motion.div
      variants={fadeUp(0.1 + index * 0.1)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className="text-center p-6 sm:p-8 border border-[rgba(201,169,110,0.08)] hover:border-[rgba(201,169,110,0.2)] transition-all duration-500"
    >
      <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-gold">
        {count}
        <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-sm sm:text-base font-medium text-foreground tracking-wide">
        {stat.label}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">
        {stat.description}
      </div>
    </motion.div>
  );
}
