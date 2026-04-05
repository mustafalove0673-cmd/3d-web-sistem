'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { useLanguageStore } from '@/lib/language-store';

const navLinks = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.about', href: '#about' },
  { key: 'nav.services', href: '#services' },
  { key: 'nav.projects', href: '#projects' },
  { key: 'nav.contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wider">
              NOV
            </span>
            <span className="font-display text-2xl md:text-3xl font-bold tracking-wider text-gold">
              A
            </span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.key}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-body text-sm tracking-wide text-text-secondary hover:text-text-primary transition-colors duration-300 relative group"
                whileHover={{ y: -1 }}
              >
                {t(link.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-text-secondary hover:text-text-primary gap-1.5 px-3"
            >
              <Globe className="size-4" />
              <span className="text-xs font-bold uppercase">{language}</span>
            </Button>

            <Button
              onClick={() => handleNavClick('#contact')}
              className="bg-gold hover:bg-gold-light text-dark font-semibold text-sm px-5 h-9 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              size="sm"
            >
              {t('nav.quote')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="text-text-secondary hover:text-text-primary"
            >
              <Globe className="size-4" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-text-primary"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-dark-lighter border-dark-lighter w-72">
                <SheetTitle className="text-gold font-display text-xl font-bold">
                  NOVA
                </SheetTitle>
                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.key}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-center justify-between px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors font-body text-base"
                    >
                      {t(link.key)}
                      <ChevronDown className="size-4 rotate-[-90deg] opacity-50" />
                    </motion.a>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-4 px-4"
                  >
                    <Button
                      onClick={() => handleNavClick('#contact')}
                      className="w-full bg-gold hover:bg-gold-light text-dark font-semibold"
                    >
                      {t('nav.quote')}
                    </Button>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
