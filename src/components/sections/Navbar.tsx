'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Teknoloji', href: '#tech' },
  { label: 'Projeler', href: '#catalog' },
  { label: 'Ödeme', href: '#payment' },
  { label: 'Süreç', href: '#steps' },
  { label: 'İletişim', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-foreground rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 21V7l9-4 9 4v14H3zm2-2h14V8.2l-7-3.1-7 3.1V19z"/>
                <rect x="9" y="13" width="6" height="6" rx="0.5"/>
                <rect x="5" y="9" width="4" height="4" rx="0.5"/>
                <rect x="15" y="9" width="4" height="4" rx="0.5"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">Ahşap<span className="text-accent">Villa</span></span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+905551234567" className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
              <Phone className="w-3.5 h-3.5" />
              0555 123 45 67
            </a>
            <a
              href="#contact"
              className="bg-foreground text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
            >
              Teklif Al
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden w-9 h-9 flex items-center justify-center">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-[72px] px-6 lg:hidden">
          <div className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-foreground border-b border-border"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <a href="#contact" onClick={() => setMobileOpen(false)} className="block w-full text-center bg-foreground text-white font-semibold py-3 rounded-lg">
              Teklif Al
            </a>
          </div>
        </div>
      )}
    </>
  )
}
