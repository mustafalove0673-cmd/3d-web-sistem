'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" ref={ref} className="relative py-28 md:py-36 bg-surface overflow-hidden">
      <div className="absolute inset-0 dot-bg" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}>
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent">İletişim</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4 mb-5">
              Projenizi <span className="text-gradient-gold">Konuşalım</span>
            </h2>
            <p className="text-muted-foreground text-[15px] leading-relaxed mb-10 max-w-md">
              Ücretsiz keşif ve detaylı teklif için formu doldurun. En kısa sürede dönüş yapacağız.
            </p>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Adres', val: 'Atatürk Blv. No:123, Çankaya, Ankara' },
                { icon: Phone, label: 'Telefon', val: '0555 123 45 67' },
                { icon: Mail, label: 'E-posta', val: 'info@structura.com.tr' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 border-gradient rounded-xl group hover:glow transition-shadow duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-accent group-hover:text-dark-card transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-wider uppercase text-muted-foreground">{item.label}</div>
                    <div className="text-[14px] font-semibold text-foreground">{item.val}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border-gradient-animated rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Ücretsiz Teklif Formu</h3>
              <form className="space-y-5" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="float-label">
                    <input type="text" placeholder=" " required className="w-full h-12 px-4 rounded-xl bg-muted border border-border text-foreground text-[14px] focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all" />
                    <label>Adınız Soyadınız</label>
                  </div>
                  <div className="float-label">
                    <input type="tel" placeholder=" " required className="w-full h-12 px-4 rounded-xl bg-muted border border-border text-foreground text-[14px] focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all" />
                    <label>Telefon</label>
                  </div>
                </div>

                <div className="float-label">
                  <input type="email" placeholder=" " required className="w-full h-12 px-4 rounded-xl bg-muted border border-border text-foreground text-[14px] focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all" />
                  <label>E-posta</label>
                </div>

                <div className="float-label">
                  <select required className="w-full h-12 px-4 rounded-xl bg-muted border border-border text-foreground text-[14px] focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all appearance-none cursor-pointer">
                    <option value="">Proje türü seçin...</option>
                    <option>Konut İnşaatı</option>
                    <option>Ticari Yapı</option>
                    <option>Endüstriyel</option>
                    <option>Otel & Turizm</option>
                    <option>Restorasyon</option>
                  </select>
                  <label className="!top-[18px]">Proje Türü</label>
                </div>

                <div className="float-label">
                  <textarea placeholder=" " rows={3} required className="w-full px-4 pt-4 pb-2 rounded-xl bg-muted border border-border text-foreground text-[14px] focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all resize-none" />
                  <label>Mesajınız</label>
                </div>

                <button
                  type="submit"
                  className="btn-shine magnetic w-full bg-accent text-dark-card font-bold py-3.5 rounded-xl glow hover:glow-strong transition-shadow text-[14px] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
