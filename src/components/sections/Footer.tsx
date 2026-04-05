'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const footerLinks = {
  'Hizmetler': [
    { label: 'Villa İnşaatı', href: '#services' },
    { label: 'İç Mimari', href: '#services' },
    { label: 'Peyzaj Tasarım', href: '#services' },
    { label: 'Mimari Tasarım', href: '#services' },
  ],
  'Şirket': [
    { label: 'Hakkımızda', href: '#about' },
    { label: 'Projeler', href: '#projects' },
    { label: 'Referanslar', href: '#testimonials' },
    { label: 'İletişim', href: '#contact' },
  ],
};

const socialLinks = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(201,169,110,0.08)]">
      {/* Marquee */}
      <div className="py-8 overflow-hidden border-b border-[rgba(201,169,110,0.06)]">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mx-8">
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground/[0.03]">
                MELAKON
              </span>
              <span className="w-2 h-2 rounded-full bg-[rgba(201,169,110,0.15)]" />
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground/[0.03]">
                VILLA
              </span>
              <span className="w-2 h-2 rounded-full bg-[rgba(201,169,110,0.15)]" />
              <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground/[0.03]">
                CONSTRUCTION
              </span>
              <span className="w-2 h-2 rounded-full bg-[rgba(201,169,110,0.15)]" />
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-sm border border-[rgba(201,169,110,0.3)] flex items-center justify-center">
                <span className="font-heading text-sm font-bold text-[#C9A96E]">M</span>
              </div>
              <span className="font-heading text-lg font-semibold tracking-[0.15em] text-foreground">
                MELAKON
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Mimari ihtişam ve mühendislik mükemmelliğiyle premium villa projeleri
              üretiyoruz. Kalite ve güvenin adresi.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-wider uppercase text-muted-foreground hover:text-[#C9A96E] transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#C9A96E] mb-4 font-medium">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[rgba(201,169,110,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MELAKON. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Tasarım & Geliştirme</span>
            <ArrowUpRight className="w-3 h-3 text-[#C9A96E]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
