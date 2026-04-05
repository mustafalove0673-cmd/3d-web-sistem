'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { HardHat, MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const footerLinks = {
  'Hizmetler': [
    'Konut İnşaatı',
    'Ticari Yapılar',
    'Endüstriyel Tesisler',
    'Otel & Turizm',
    'Restorasyon',
    'Dekorasyon',
  ],
  'Şirket': [
    'Hakkımızda',
    'Projelerimiz',
    'Referanslar',
    'Kariyer',
    'Blog',
    'İletişim',
  ],
  'Destek': [
    'Sıkça Sorulan Sorular',
    'Proje Süreci',
    'Garanti Koşulları',
    'Gizlilik Politikası',
    'KVKK',
  ],
}

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer ref={ref} className="relative bg-dark overflow-hidden">
      {/* Top divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 grid-pattern-dark opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-lg font-black text-white">
                    YAPI<span className="text-accent">PRO</span>
                  </span>
                  <div className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase -mt-0.5">
                    İnşaat & Mimarlık
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-sm">
                25 yılı aşkın deneyimimizle, Türkiye genelinde konut, ticari ve endüstriyel 
                projelerinizde güvenilir çözüm ortağınız.
              </p>
              <div className="space-y-3">
                <a href="tel:+905551234567" className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>0555 123 45 67</span>
                </a>
                <a href="mailto:info@yapipro.com.tr" className="flex items-center gap-2 text-sm text-white/50 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@yapipro.com.tr</span>
                </a>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin className="w-4 h-4" />
                  <span>Atatürk Blv. No:123, Çankaya, Ankara</span>
                </div>
              </div>
            </motion.div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links], colIdx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * (colIdx + 1) }}
              >
                <h3 className="text-sm font-bold text-white mb-5 tracking-wide">{title}</h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/40 hover:text-accent transition-colors duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} YAPIPRO İnşaat & Mimarlık. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-3">
            {/* Social icons placeholder */}
            {['Li', 'Ig', 'Tw', 'Fb'].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-[10px] font-bold text-white/40 hover:bg-accent hover:text-white transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-shadow"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
