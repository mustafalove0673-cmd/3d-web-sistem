'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Instagram, Heart } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

const marqueeItems = [
  'Melek Yüksel',
  'Hair Beauty',
  'Pursaklar',
  'Ankara',
  'Saç Kesimi',
  'Ombre',
  'Cilt Bakımı',
  'Güzellik',
];

const quickLinks = [
  { href: '#hero', tr: 'Ana Sayfa', en: 'Home' },
  { href: '#services', tr: 'Hizmetler', en: 'Services' },
  { href: '#gallery', tr: 'Galeri', en: 'Gallery' },
  { href: '#booking', tr: 'Randevu', en: 'Booking' },
  { href: '#contact', tr: 'İletişim', en: 'Contact' },
];

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark overflow-hidden mt-auto">
      {/* Marquee */}
      <div className="relative py-6 border-t border-b border-white/5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-5xl md:text-7xl font-display font-bold text-white/[0.03] select-none"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <h3 className="font-display text-2xl font-bold text-cream">Melek Yüksel</h3>
                <span className="text-xs tracking-[0.3em] uppercase text-gradient-gold font-body">
                  Hair Beauty
                </span>
              </div>
              <p className="text-cream/30 font-body text-sm leading-relaxed mb-6">
                {t.tagline}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-cream/40 hover:text-rose hover:bg-rose/10 transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://wa.me/905551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-cream/40 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.587l-.332-.213-2.791.936.936-2.791-.213-.332A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-cream/50 font-body mb-5">
                {t.quickLinks}
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-cream/30 font-body text-sm hover:text-cream/70 transition-colors duration-300 text-left"
                    >
                      {language === 'tr' ? link.tr : link.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs tracking-[0.2em] uppercase text-cream/50 font-body mb-5">
                {translations[language].contact.title}
              </h4>
              <div className="space-y-3">
                <p className="text-cream/30 font-body text-sm">
                  Pursaklar, Ankara
                </p>
                <a
                  href="tel:+905551234567"
                  className="block text-cream/30 font-body text-sm hover:text-cream/60 transition-colors"
                >
                  +90 555 123 4567
                </a>
                <p className="text-cream/30 font-body text-sm">
                  {language === 'tr' ? 'Pzt - Cmt: 09:00 - 19:00' : 'Mon - Sat: 09:00 - 19:00'}
                </p>
              </div>
            </div>

            {/* Back to Top */}
            <div className="flex flex-col items-start lg:items-end justify-between">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-cream/40 hover:text-cream hover:bg-white/[0.08] transition-all duration-300 mb-6"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={18} />
              </motion.button>
              <p className="text-[10px] text-cream/20 font-body text-left lg:text-right">
                {t.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-cream/20 font-body">
            {t.rights}
          </p>
          <p className="text-[10px] text-cream/15 font-body flex items-center gap-1">
            Made with <Heart size={10} className="text-rose/40" /> {language === 'tr' ? 'İstanbul\'da' : 'in Istanbul'}
          </p>
        </div>
      </div>
    </footer>
  );
}
