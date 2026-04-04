'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

function FooterButterflySVG() {
  return (
    <svg
      viewBox="0 0 100 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-10 h-8 opacity-15"
    >
      <path
        d="M50 40C50 40 30 15 15 20C5 24 8 40 15 45C22 50 38 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M50 40C50 40 70 15 85 20C95 24 92 40 85 45C78 50 62 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M50 40C50 40 28 50 20 60C14 67 20 72 28 68C36 64 48 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M50 40C50 40 72 50 80 60C86 67 80 72 72 68C64 64 52 42 50 40Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
      <line
        x1="50"
        y1="15"
        x2="50"
        y2="75"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

export default function Footer() {
  const { language } = useLanguageStore();
  const t = translations[language].footer;

  const navSections = ['home', 'services', 'booking', 'gallery', 'contact'];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/melekyuksel',
      label: 'Instagram',
    },
    {
      icon: Facebook,
      href: 'https://facebook.com/melekyuksel',
      label: 'Facebook',
    },
  ];

  return (
    <footer
      className="relative mt-auto"
      style={{ backgroundColor: 'var(--salon-dark)' }}
    >
      {/* Top gradient line */}
      <div
        className="h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--salon-gold), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Butterfly */}
          <div className="mb-6 text-white">
            <FooterButterflySVG />
          </div>

          {/* Logo & Tagline */}
          <h3
            className="font-playfair text-2xl sm:text-3xl font-bold mb-2"
            style={{ color: 'var(--salon-pink-light)' }}
          >
            Melek Yüksel
          </h3>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--salon-gold)' }}
          >
            {t.tagline}
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            {t.links.map((link, i) => (
              <motion.button
                key={i}
                whileHover={{ color: 'var(--salon-pink-light)' }}
                onClick={() => {
                  const el = document.getElementById(navSections[i]);
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-white/60 hover:text-white/90 transition-colors duration-300 cursor-pointer"
              >
                {link}
              </motion.button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-8">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{
                    scale: 1.1,
                    color: 'var(--salon-pink-light)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white/80 hover:border-white/20 transition-all duration-300 cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-white/10 mb-6" />

          {/* Copyright */}
          <p className="text-xs text-white/40">
            {t.copyright} | {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
