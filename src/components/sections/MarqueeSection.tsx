'use client'

import { motion } from 'framer-motion'

const marqueeItems = [
  'Active Theory', 'Motion Design', 'Hero Section', 'Color Palette',
  'Wonder AI', '3D Website', 'Claude Code', 'Remotion',
  'GSAP', 'Three.js', 'Framer Motion', 'Lenis',
]

const marqueeItems2 = [
  'UI/UX', 'Web Design', 'Animation', 'Interactive',
  'React', 'Next.js', 'TypeScript', 'Tailwind',
  'Claude', 'AI Tools', 'GitHub', 'Open Source',
]

function MarqueeRow({ items, speed = 'normal', reverse = false, className = '' }: {
  items: string[]; speed?: 'slow' | 'normal'; reverse?: boolean; className?: string
}) {
  const doubled = [...items, ...items]
  const animClass = speed === 'slow'
    ? (reverse ? 'animate-marquee-slow' : 'animate-marquee-slow')
    : (reverse ? 'animate-marquee-reverse' : 'animate-marquee')
  const style = reverse ? { animationDirection: 'reverse' } : {}

  return (
    <div className={`relative overflow-hidden py-4 ${className}`}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      <motion.div
        initial={{ x: 0 }}
        className={`flex gap-8 whitespace-nowrap ${animClass}`}
        style={style}
      >
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="text-lg md:text-xl font-black tracking-tight text-foreground/10 hover:text-accent/40 transition-colors duration-500 cursor-default">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/20" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function MarqueeSection() {
  return (
    <section className="py-8 md:py-12 border-y border-border/50 overflow-hidden">
      <MarqueeRow items={marqueeItems} className="border-b border-border/30" />
      <MarqueeRow items={marqueeItems2} speed="slow" reverse className="pt-4" />
    </section>
  )
}
