'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

const navSections = ['home', 'services', 'booking', 'gallery', 'contact'];

export default function Navbar() {
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language].navbar;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 shadow-lg shadow-black/5'
            : 'py-5'
        }`}
        style={{
          background: isScrolled
            ? 'rgba(255, 248, 240, 0.85)'
            : 'rgba(255, 248, 240, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: isScrolled
            ? '1px solid rgba(139, 34, 82, 0.08)'
            : '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex flex-col items-start group cursor-pointer"
            >
              <span
                className="font-playfair text-xl sm:text-2xl font-bold tracking-wide"
                style={{ color: 'var(--salon-pink)' }}
              >
                {t.logo}
              </span>
              <span
                className="text-[10px] sm:text-xs tracking-[0.3em] uppercase -mt-0.5"
                style={{ color: 'var(--salon-gold)' }}
              >
                {t.navTagline}
              </span>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {t.links.map((link, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(navSections[i])}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-300 cursor-pointer hover:opacity-80"
                  style={{ color: 'var(--salon-dark)' }}
                >
                  {link}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: 'var(--salon-pink)' }}
                  />
                </button>
              ))}

              {/* Language Toggle */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider cursor-pointer transition-all duration-300 border"
                style={{
                  backgroundColor: 'var(--salon-cream)',
                  borderColor: 'var(--salon-pink-light)',
                  color: 'var(--salon-pink)',
                }}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 lg:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider cursor-pointer border"
                style={{
                  backgroundColor: 'var(--salon-cream)',
                  borderColor: 'var(--salon-pink-light)',
                  color: 'var(--salon-pink)',
                }}
              >
                <Globe className="w-3 h-3" />
                <span>{language === 'tr' ? 'EN' : 'TR'}</span>
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 rounded-xl cursor-pointer transition-colors duration-300"
                style={{ color: 'var(--salon-dark)' }}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-40 w-72 shadow-2xl"
              style={{ backgroundColor: 'var(--salon-cream)' }}
            >
              <div className="pt-20 px-6">
                <div className="flex flex-col gap-1">
                  {t.links.map((link, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => scrollToSection(navSections[i])}
                      className="text-left py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 cursor-pointer hover:bg-white/60"
                      style={{ color: 'var(--salon-dark)' }}
                    >
                      {link}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
