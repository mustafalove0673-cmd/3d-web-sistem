'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import { AuroraOverlay, FloatingBokeh, AnimatedGradientOrbs } from '@/components/AnimatedBackground';

export default function BookingSection() {
  const { language } = useLanguageStore();
  const t = translations[language].booking;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="booking"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--salon-dark)' }}
    >
      {/* Animated aurora background */}
      <AuroraOverlay variant="pink" />

      {/* Animated gradient orbs */}
      <AnimatedGradientOrbs variant="pink" />

      {/* Floating bokeh */}
      <FloatingBokeh count={5} variant="dark" />

      {/* Animated glow ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-ring-expand pointer-events-none z-0" style={{ border: '1px solid rgba(139,34,82,0.1)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full animate-ring-expand pointer-events-none z-0" style={{ border: '1px solid rgba(201,169,110,0.08)', animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl p-8 sm:p-12 md:p-16 text-center glass-dark"
        >
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            {t.title}
          </motion.h2>

          {/* Gold divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ backgroundColor: 'var(--salon-gold)' }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            {t.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/905551234567?text=Merhaba%2C%20randevu%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -4,
                boxShadow: '0 14px 45px rgba(37, 211, 102, 0.4)',
              }}
              whileTap={{ y: 2, boxShadow: '0 4px 15px rgba(37, 211, 102, 0.2)' }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base tracking-wide animate-pulse-glow cursor-pointer transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
              }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.cta}</span>
            </motion.a>

            {/* Phone Button */}
            <motion.a
              href="tel:+905551234567"
              whileHover={{
                y: -4,
                boxShadow: '0 14px 45px rgba(139, 34, 82, 0.35)',
              }}
              whileTap={{ y: 2, boxShadow: '0 4px 15px rgba(139, 34, 82, 0.2)' }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base tracking-wide border-2 cursor-pointer transition-all duration-300"
              style={{
                borderColor: 'var(--salon-pink)',
                backgroundColor: 'rgba(139, 34, 82, 0.15)',
              }}
            >
              <Phone className="w-5 h-5" />
              <span>{t.phone}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
