'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import { AnimatedGradientOrbs, FloatingBokeh, RisingParticles } from '@/components/AnimatedBackground';

export default function ContactSection() {
  const { language } = useLanguageStore();
  const t = translations[language].contact;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  const contactItems = [
    {
      icon: MapPin,
      label: t.addressLabel,
      value: t.address,
      color: 'var(--salon-green)',
      link: 'https://www.google.com/maps/search/Pursaklar,+Ankara',
    },
    {
      icon: Phone,
      label: t.phoneLabel,
      value: t.phone,
      color: 'var(--salon-pink)',
      link: 'tel:+905551234567',
    },
    {
      icon: Clock,
      label: t.hoursLabel,
      value: t.hours,
      color: 'var(--salon-gold)',
      link: null,
    },
    {
      icon: Mail,
      label: t.emailLabel,
      value: t.email,
      color: 'var(--salon-pink-light)',
      link: 'mailto:info@melekyuksel.com',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--salon-cream)' }}
    >
      {/* Animated gradient orbs */}
      <AnimatedGradientOrbs variant="gold" />

      {/* Floating bokeh */}
      <FloatingBokeh count={5} variant="gold" />

      {/* Rising particles */}
      <RisingParticles count={4} />

      {/* Animated gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] animate-glow-pulse z-10"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--salon-gold), var(--salon-pink-light), var(--salon-gold), transparent)',
          willChange: 'opacity',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: 'var(--salon-dark)' }}
          >
            {t.title}
          </h2>
          <div
            className="w-16 h-0.5 mx-auto"
            style={{ backgroundColor: 'var(--salon-gold)' }}
          />
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {contactItems.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.link ? motion.a : motion.div;
            const wrapperProps = item.link
              ? {
                  href: item.link,
                  target: item.link.startsWith('http') ? '_blank' : undefined,
                  rel: item.link.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 35px rgba(139, 34, 82, 0.12)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-start gap-4 p-6 rounded-2xl glass-light cursor-pointer"
                  style={{ textDecoration: 'none' }}
                >
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      backgroundColor: `${item.color}15`,
                      color: item.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-1"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-base font-medium"
                      style={{ color: 'var(--salon-dark)' }}
                    >
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
