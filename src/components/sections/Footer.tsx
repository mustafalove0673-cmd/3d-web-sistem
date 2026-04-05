'use client'

import { motion } from 'framer-motion'
import { Command, Github, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border relative">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 via-hot/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
                <Command className="w-4 h-4 text-accent" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-black text-lg tracking-tighter">VIDEO</span>
                <span className="font-black text-lg tracking-tighter text-accent">VAULT</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Teknoloji videoları, Claude Code skills ve web tasarım ilhamı. Tek bir platform.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigasyon</h4>
            <div className="space-y-2">
              {[
                { label: 'Videolar', href: '#videos' },
                { label: 'Kategoriler', href: '#categories' },
                { label: 'Skills', href: '#skills' },
                { label: 'Popüler', href: '#popular' },
                { label: 'İstatistikler', href: '#stats' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">Kaynaklar</h4>
            <div className="space-y-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="https://instagram.com/selahattin.unlu/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground/50 tracking-wide">
            © 2026 VIDEOVAULT. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground/50">
            Sevildiyle yapıldı
            <Heart className="w-3 h-3 text-hot fill-hot" />
          </p>
        </div>
      </div>
    </footer>
  )
}
