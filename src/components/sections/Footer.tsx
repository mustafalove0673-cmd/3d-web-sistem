'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer id="contact" className="bg-foreground text-white">
      {/* CTA Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Hayalinizdeki Evi Mi İstiyorsunuz?
              </h2>
              <p className="text-white/50 text-[14px] leading-relaxed">
                Ücretsiz danışmanlık için hemen iletişime geçin. Size en uygun projeyi birlikte belirleyelim.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a
                href="tel:+905551234567"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-4 h-4" />
                0555 123 45 67
              </a>
              <a
                href="mailto:info@ahsapvilla.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white text-[14px] font-semibold px-7 py-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4" />
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 21V7l9-4 9 4v14H3zm2-2h14V8.2l-7-3.1-7 3.1V19z"/>
                  <rect x="9" y="13" width="6" height="6" rx="0.5"/>
                </svg>
              </div>
              <span className="text-base font-bold">Ahşap<span className="text-accent">Villa</span></span>
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed mb-4 max-w-xs">
              Modern ahşap ev teknolojisi ile Türkiye genelinde hizmet veriyoruz.
            </p>
            <div className="space-y-2">
              <a href="tel:+905551234567" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5" /> 0555 123 45 67
              </a>
              <a href="mailto:info@ahsapvilla.com" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-accent transition-colors">
                <Mail className="w-3.5 h-3.5" /> info@ahsapvilla.com
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-white/70 mb-4">Hizmetler</h3>
            <ul className="space-y-2.5">
              {['Ahşap Ev İnşaatı', 'Prefabrik Evler', 'Karkas Teknolojisi', 'İç Dekorasyon', 'Proje Tasarımı', 'Bakım & Onarım'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[13px] text-white/40 hover:text-accent transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-white/70 mb-4">İletişim</h3>
            <div className="flex items-start gap-2 mb-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-[13px] text-white/40 leading-relaxed">
                Atatürk Blv. No:123, Çankaya, Ankara
              </span>
            </div>
            <p className="text-[12px] text-white/30">
              Pzt - Cmt: 09:00 - 18:00
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} AhşapVilla. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
