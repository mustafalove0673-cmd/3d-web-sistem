'use client';

import { motion } from 'framer-motion';
import { useLanguageStore } from '@/lib/language-store';

const quickLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];

const serviceLinks = [
  { key: 'services.s1.title', href: '#services' },
  { key: 'services.s2.title', href: '#services' },
  { key: 'services.s3.title', href: '#services' },
  { key: 'services.s4.title', href: '#services' },
  { key: 'services.s5.title', href: '#services' },
];

export default function Footer() {
  const { t } = useLanguageStore();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-lighter border-t border-white/5">
      {/* Blueprint accent */}
      <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="inline-block mb-4">
              <span className="font-display text-2xl font-bold tracking-wider text-text-primary">
                NOV<span className="text-gold">A</span>
              </span>
            </a>
            <p className="font-body text-text-secondary text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
            {/* Gold line */}
            <div className="w-16 h-0.5 bg-gradient-to-r from-steel-blue to-gold mt-6" />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-5">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-5">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-body text-text-secondary text-sm hover:text-text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {t(link.key)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-5">
              {t('footer.contact')}
            </h3>
            <div className="space-y-3">
              <p className="font-body text-text-secondary text-sm">
                {t('contact.info.phone')}
              </p>
              <p className="font-body text-text-secondary text-sm">
                {t('contact.info.email')}
              </p>
              <p className="font-body text-text-secondary text-sm">
                {t('contact.info.hours')}
              </p>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {t('contact.info.address')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-text-secondary/60 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} NOVA Construction. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1">
            <span className="font-display text-xs text-text-secondary/40 tracking-wider">
              BUILT WITH
            </span>
            <span className="font-display text-xs text-gold/60 tracking-wider ml-1">
              PRECISION
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
