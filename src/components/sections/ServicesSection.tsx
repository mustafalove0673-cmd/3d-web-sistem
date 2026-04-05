'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowUpRight,
  Building2,
  Paintbrush,
  Home,
  Building,
  Hammer,
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Architecture Design',
    description:
      'Award-winning architectural design that transforms your vision into stunning, functional spaces.',
    tag: 'Popular',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'Bespoke interior solutions creating personalized, aesthetic, and functional living environments.',
    tag: null,
  },
  {
    icon: Home,
    title: 'Villa Construction',
    description:
      'Turnkey luxury villa projects from foundation to finishing, built with premium materials.',
    tag: null,
  },
  {
    icon: Building,
    title: 'Commercial Projects',
    description:
      'Large-scale commercial constructions including office buildings, retail, and hospitality spaces.',
    tag: null,
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description:
      'Comprehensive renovation solutions modernizing existing structures to contemporary standards.',
    tag: null,
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    description:
      'Expert consulting services for project planning, budget optimization, and construction management.',
    tag: null,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  });

  return (
    <section id="services" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="glow-orb absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px]"
          style={{
            background:
              'radial-gradient(ellipse, rgba(201,169,110,0.04), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#C9A96E] to-transparent" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
            Our Services
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          >
            Comprehensive
            <br />
            <span className="text-gradient-gold">Solutions</span>
          </motion.h2>
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-muted-foreground leading-relaxed text-base sm:text-lg lg:pt-4 max-w-lg"
          >
            From initial architectural vision to final construction, we deliver
            end-to-end premium services that bring your dream space to life.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={fadeUp(0.1 + i * 0.08)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="card-glow card-lift group relative p-6 sm:p-8 border border-[rgba(201,169,110,0.06)] hover:border-[rgba(201,169,110,0.2)] transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Hover glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 30% 20%, rgba(201,169,110,0.06), transparent 60%)',
                }}
              />

              {/* Tag */}
              {service.tag && (
                <div className="absolute top-5 right-5 px-3 py-1 text-[10px] tracking-wider uppercase bg-[rgba(201,169,110,0.12)] text-[#C9A96E] border border-[rgba(201,169,110,0.1)]">
                  {service.tag}
                </div>
              )}

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center border border-[rgba(201,169,110,0.12)] mb-5 group-hover:border-[#C9A96E] group-hover:bg-[rgba(201,169,110,0.05)] group-hover:shadow-lg group-hover:shadow-[rgba(201,169,110,0.08)] transition-all duration-500">
                  <service.icon className="w-5 h-5 text-[#C9A96E] group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Number */}
                <div className="absolute top-6 right-5 text-[10px] tracking-wider text-[rgba(201,169,110,0.2)] font-heading font-light">
                  {!service.tag && `0${i + 1}`}
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-foreground mb-3 group-hover:text-[#C9A96E] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-muted-foreground group-hover:text-[#C9A96E] transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E] via-[#E8D5B5] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
