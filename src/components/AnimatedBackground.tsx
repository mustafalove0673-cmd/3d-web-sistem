'use client';

import { useMemo } from 'react';

interface BokehParticle {
  id: number;
  left: string;
  top: string;
  size: number;
  color: string;
  animClass: string;
  delay: string;
}

interface FloatingBokehProps {
  count?: number;
  colors?: string[];
  variant?: 'light' | 'dark' | 'pink' | 'gold';
}

export function FloatingBokeh({ count = 8, variant = 'light' }: FloatingBokehProps) {
  const colorMap: Record<string, string[]> = {
    light: [
      'rgba(212, 135, 143, 0.15)',
      'rgba(201, 169, 110, 0.12)',
      'rgba(255, 255, 255, 0.1)',
      'rgba(139, 34, 82, 0.08)',
    ],
    dark: [
      'rgba(139, 34, 82, 0.2)',
      'rgba(201, 169, 110, 0.15)',
      'rgba(212, 135, 143, 0.12)',
      'rgba(255, 255, 255, 0.06)',
    ],
    pink: [
      'rgba(139, 34, 82, 0.12)',
      'rgba(212, 135, 143, 0.18)',
      'rgba(196, 30, 58, 0.1)',
      'rgba(201, 169, 110, 0.08)',
    ],
    gold: [
      'rgba(201, 169, 110, 0.15)',
      'rgba(232, 200, 122, 0.12)',
      'rgba(139, 34, 82, 0.08)',
      'rgba(212, 135, 143, 0.1)',
    ],
  };

  const animClasses = [
    'animate-bokeh-1',
    'animate-bokeh-2',
    'animate-bokeh-3',
    'animate-float',
    'animate-float-slow',
    'animate-float-reverse',
  ];

  const particles: BokehParticle[] = useMemo(() => {
    const colors = colorMap[variant];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 13.7 + 5) % 90 + 2}%`,
      top: `${(i * 17.3 + 10) % 80 + 5}%`,
      size: Math.floor((i * 7 + 12) % 35 + 8),
      color: colors[i % colors.length],
      animClass: animClasses[i % animClasses.length],
      delay: `${i * 1.3}s`,
    }));
  }, [count, variant]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full ${p.animClass}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color}, transparent 70%)`,
            animationDelay: p.delay,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}

interface AuroraOverlayProps {
  colors?: string[];
  variant?: 'pink' | 'gold' | 'mixed';
}

export function AuroraOverlay({ variant = 'pink' }: AuroraOverlayProps) {
  const configs = {
    pink: {
      aurora1: 'radial-gradient(ellipse 60% 40% at 30% 40%, rgba(139,34,82,0.3) 0%, transparent 70%)',
      aurora2: 'radial-gradient(ellipse 50% 50% at 70% 60%, rgba(212,135,143,0.2) 0%, transparent 70%)',
    },
    gold: {
      aurora1: 'radial-gradient(ellipse 60% 40% at 60% 30%, rgba(201,169,110,0.25) 0%, transparent 70%)',
      aurora2: 'radial-gradient(ellipse 50% 50% at 30% 70%, rgba(232,200,122,0.15) 0%, transparent 70%)',
    },
    mixed: {
      aurora1: 'radial-gradient(ellipse 55% 45% at 40% 35%, rgba(139,34,82,0.25) 0%, rgba(201,169,110,0.15) 50%, transparent 70%)',
      aurora2: 'radial-gradient(ellipse 50% 50% at 65% 65%, rgba(212,135,143,0.2) 0%, transparent 70%)',
    },
  };

  const cfg = configs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      <div
        className="absolute inset-[-10%] animate-aurora"
        style={{ background: cfg.aurora1, willChange: 'transform, opacity' }}
      />
      <div
        className="absolute inset-[-10%] animate-aurora-2"
        style={{ background: cfg.aurora2, willChange: 'transform, opacity' }}
      />
    </div>
  );
}

interface LightStreaksProps {
  count?: number;
}

export function LightStreaks({ count = 3 }: LightStreaksProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute animate-light-streak"
          style={{
            top: `${20 + i * 25}%`,
            left: 0,
            width: '40%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.4), transparent)',
            animationDelay: `${i * 3}s`,
            animationDuration: `${8 + i * 2}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}

interface AnimatedGradientOrbsProps {
  variant?: 'pink' | 'gold' | 'green';
}

export function AnimatedGradientOrbs({ variant = 'pink' }: AnimatedGradientOrbsProps) {
  const orbConfigs = {
    pink: [
      { color: 'rgba(139, 34, 82, 0.08)', size: 300, position: 'top-[-5%] right-[-5%]' },
      { color: 'rgba(212, 135, 143, 0.06)', size: 250, position: 'bottom-[10%] left-[-8%]' },
      { color: 'rgba(201, 169, 110, 0.05)', size: 200, position: 'top-[40%] right-[20%]' },
    ],
    gold: [
      { color: 'rgba(201, 169, 110, 0.08)', size: 280, position: 'top-[-5%] left-[10%]' },
      { color: 'rgba(232, 200, 122, 0.06)', size: 220, position: 'bottom-[-5%] right-[5%]' },
      { color: 'rgba(139, 34, 82, 0.04)', size: 180, position: 'top-[30%] left-[50%]' },
    ],
    green: [
      { color: 'rgba(45, 80, 22, 0.06)', size: 260, position: 'top-[-3%] right-[-5%]' },
      { color: 'rgba(201, 169, 110, 0.05)', size: 200, position: 'bottom-[5%] left-[-5%]' },
      { color: 'rgba(139, 34, 82, 0.04)', size: 160, position: 'top-[50%] right-[30%]' },
    ],
  };

  const orbs = orbConfigs[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, i) => (
        <div
          key={i}
          className={`absolute ${orb.position} rounded-full ${i % 2 === 0 ? 'animate-orb-drift' : 'animate-orb-drift-2'}`}
          style={{
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animationDelay: `${i * 2}s`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  );
}

export function RisingParticles({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-rise"
          style={{
            left: `${10 + i * 15}%`,
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
            background: i % 2 === 0
              ? 'rgba(201, 169, 110, 0.5)'
              : 'rgba(212, 135, 143, 0.4)',
            animationDelay: `${i * 1.4}s`,
            animationDuration: `${7 + i * 1.5}s`,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
}
