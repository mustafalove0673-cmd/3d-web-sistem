'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Ana Sayfa', href: '#hero' },
  { label: 'Hizmetler', href: '#services' },
  { label: 'Projeler', href: '#projects' },
  { label: 'İstatistik', href: '#stats' },
  { label: 'İletişim', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-accent rounded-lg rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
              <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-dark-card">S</span>
            </div>
            <div>
              <span className="text-lg font-extrabold tracking-tight text-foreground">STRUCTURA</span>
              <div className="text-[8px] font-bold tracking-[0.35em] text-muted-foreground -mt-1">İNŞAAT</div>
            </div>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className="relative px-4 py-2 text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-accent to-glow-2 rounded-full transition-all duration-300 group-hover:w-5" />
              </motion.a>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+905551234567" className="flex items-center gap-2 text-[13px] font-semibold text-foreground/70 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              0555 123 45 67
            </a>
            <a
              href="#contact"
              className="btn-shine magnetic relative bg-accent text-dark-card text-[13px] font-bold px-6 py-2.5 rounded-full glow hover:glow-strong transition-shadow"
            >
              Teklif Al
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl glass">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="py-4 text-lg font-semibold text-foreground border-b border-border/50 flex items-center justify-between"
                >
                  {l.label}
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
