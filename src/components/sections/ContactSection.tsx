'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Atatürk Blv. No:123, Çankaya, Ankara', href: '#' },
  { icon: Phone, label: 'Telefon', value: '0555 123 45 67', href: 'tel:+905551234567' },
  { icon: Mail, label: 'E-posta', value: 'info@yapipro.com.tr', href: 'mailto:info@yapipro.com.tr' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt-Cmt: 08:00 - 18:00', href: '#' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-[2px] bg-accent" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent">
              İletişim
            </span>
            <div className="w-10 h-[2px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-5"
          >
            Bizimle{' '}
            <span className="text-gradient-gold">İletişime</span> Geçin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-base leading-relaxed"
          >
            Projeniz hakkında konuşmak veya teklif almak için formu doldurun
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-lg hover:shadow-accent/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-1">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="relative h-48 rounded-2xl bg-muted border border-border overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-accent/30 mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Harita Görseli</p>
                  <p className="text-[10px] text-muted-foreground/60">Çankaya, Ankara</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg shadow-black/[0.02]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Mesajınız Alındı!</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-2 block">
                        Adınız
                      </label>
                      <Input
                        required
                        placeholder="Adınız Soyadınız"
                        className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent/30 focus:ring-accent/10"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-2 block">
                        Telefon
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="05XX XXX XX XX"
                        className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent/30 focus:ring-accent/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-2 block">
                      E-posta
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="ornek@email.com"
                      className="h-12 rounded-xl bg-muted/50 border-border focus:border-accent/30 focus:ring-accent/10"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-2 block">
                      Proje Türü
                    </label>
                    <select
                      required
                      className="w-full h-12 px-4 rounded-xl bg-muted/50 border border-border text-sm text-foreground focus:outline-none focus:border-accent/30 focus:ring-1 focus:ring-accent/10 transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Proje türü seçin...</option>
                      <option>Konut İnşaatı</option>
                      <option>Ticari Yapı</option>
                      <option>Endüstriyel Tesis</option>
                      <option>Otel & Turizm</option>
                      <option>Restorasyon</option>
                      <option>Dekorasyon</option>
                      <option>Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold tracking-wide uppercase text-muted-foreground mb-2 block">
                      Mesajınız
                    </label>
                    <Textarea
                      required
                      placeholder="Projeniz hakkında kısaca bilgi verin..."
                      rows={4}
                      className="rounded-xl bg-muted/50 border-border focus:border-accent/30 focus:ring-accent/10 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full magnetic-btn bg-accent hover:bg-accent/90 text-white rounded-xl h-13 text-base font-bold shadow-lg shadow-accent/20"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Mesaj Gönder
                  </Button>

                  <p className="text-[11px] text-muted-foreground text-center">
                    Mesajınız güvenle iletilmektedir. Bilgileriniz üçüncü şahıslarla paylaşılmaz.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
