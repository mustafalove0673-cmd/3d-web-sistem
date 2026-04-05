'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Award,
  Clock,
  Users,
  CheckCircle2,
  TrendingUp,
  Shield,
} from 'lucide-react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  });

  const fadeLeft = (delay: number) => ({
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  });

  const stats = [
    { icon: Clock, value: '120+', label: 'Projects Completed' },
    { icon: Users, value: '250+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
  ];

  const features = [
    { icon: Shield, text: 'Premium quality materials & craftsmanship' },
    { icon: TrendingUp, text: 'Innovative architectural solutions' },
    { icon: CheckCircle2, text: 'On-time project delivery guarantee' },
    { icon: Award, text: 'Award-winning design team' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="glow-orb absolute -top-40 right-0 w-[400px] h-[400px]"
          style={{
            background:
              'radial-gradient(circle, rgba(201,169,110,0.04), transparent 70%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section label */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-12 sm:mb-16"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#C9A96E] to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
            About MELAKON
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image area */}
          <motion.div
            variants={fadeLeft(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden group img-reveal">
              {/* Placeholder gradient for image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A1714] via-[#0C0C0C] to-[#1A1714]" />

              {/* Architectural blueprint pattern */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A96E' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />

              {/* Diagonal accent lines */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[rgba(201,169,110,0.08)] via-transparent to-transparent" />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[rgba(201,169,110,0.15)] flex items-center justify-center group-hover:scale-110 group-hover:border-[rgba(201,169,110,0.3)] transition-all duration-500">
                  <Award className="w-8 h-8 text-[rgba(201,169,110,0.25)] group-hover:text-[rgba(201,169,110,0.5)] transition-colors duration-500" />
                </div>
              </div>

              {/* Corner frame */}
              <div className="absolute top-5 left-5 w-10 h-10">
                <div className="absolute top-0 left-0 w-full h-px bg-[#C9A96E]" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#C9A96E]" />
              </div>
              <div className="absolute bottom-5 right-5 w-10 h-10">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#C9A96E]" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#C9A96E]" />
              </div>
            </div>

            {/* Floating badge - bottom right */}
            <motion.div
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-dark p-4 sm:p-5 z-10"
            >
              <div className="text-2xl sm:text-3xl font-heading font-bold text-gradient-gold">
                15+
              </div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 tracking-wider uppercase">
                Years Experience
              </div>
            </motion.div>

            {/* Floating badge - top left */}
            <motion.div
              variants={fadeUp(0.6)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 glass-dark px-4 py-3 z-10"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse-gold" />
                <span className="text-[10px] sm:text-xs tracking-wider uppercase text-[#C9A96E] font-medium">
                  Est. 2010
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div className="lg:pt-4">
            <motion.h2
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Crafting
              <br />
              <span className="text-gradient-gold">Extraordinary</span>
              <br />
              Spaces
            </motion.h2>

            <motion.p
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              Since 2010, MELAKON has been at the forefront of luxury villa
              construction, creating exceptional living spaces that blend modern
              architectural vision with timeless craftsmanship. Every project we
              undertake is a testament to our commitment to excellence.
            </motion.p>

            <motion.p
              variants={fadeUp(0.5)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-4 text-muted-foreground leading-relaxed text-base sm:text-lg"
            >
              Our passionate attention to detail, use of premium materials, and
              experienced team push boundaries to deliver results that exceed
              expectations every time.
            </motion.p>

            {/* Features list */}
            <motion.div
              variants={fadeUp(0.55)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 group"
                >
                  <feature.icon className="w-4.5 h-4.5 text-[#C9A96E] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={fadeUp(0.65)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center sm:text-left p-3 sm:p-4 border border-[rgba(201,169,110,0.06)] hover:border-[rgba(201,169,110,0.15)] transition-all duration-500 group"
                >
                  <stat.icon className="w-5 h-5 text-[#C9A96E] mx-auto sm:mx-0 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Gold accent line */}
            <motion.div
              variants={fadeUp(0.75)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-8 sm:mt-10 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-[rgba(201,169,110,0.3)] to-transparent" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] font-medium">
                Quality & Trust
              </span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-[rgba(201,169,110,0.3)]" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
