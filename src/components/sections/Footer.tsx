'use client'

import { motion } from 'framer-motion'
import { HardHat, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = {
  'Hizmetler': ['Konut', 'Ticari', 'Endüstriyel', 'Otel', 'Restorasyon', 'Dekorasyon'],
  'Şirket': ['Hakkımızda', 'Projeler', 'Kariyer', 'Blog', 'İletişim'],
}

export default function Footer() {
  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-card overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-accent rounded-lg rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-sm font-black text-dark-card">S</span>
              </div>
              <div>
                <span className="text-lg font-extrabold text-foreground">STRUCTURA</span>
                <div className="text-[8px] font-bold tracking-[0.35em] text-muted-foreground -mt-1">İNŞAAT & MİMARLİK</div>
              </div>
            </div>
            <p className="text-[13px] text-muted-foreground leading-relaxed mb-5 max-w-sm">
              25 yılı aşkın deneyimimizle, modern inşaat ve mimarlık çözümleri sunuyoruz.
            </p>
            <div className="space-y-2">
              <a href="tel:+905551234567" className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" /> 0555 123 45 67
              </a>
              <a href="mailto:info@structura.com.tr" className="flex items-center gap-2 text-[13px] text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@structura.com.tr
              </a>
              <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" /> Atatürk Blv. No:123, Ankara
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <div key={title}>
              <h3 className="text-[13px] font-bold text-foreground mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l}><a href="#" className="text-[13px] text-muted-foreground hover:text-accent transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted-foreground/50">
            © {new Date().getFullYear()} STRUCTURA İnşaat. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-2">
            {['in', 'ig', 'tw', 'fb'].map(s => (
              <a key={s} href="#" className="w-8 h-8 rounded-lg glass flex items-center justify-center text-[10px] font-bold text-muted-foreground hover:bg-accent hover:text-dark-card transition-all duration-300 uppercase">{s}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollUp}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-accent text-dark-card flex items-center justify-center glow hover:glow-strong transition-shadow"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
