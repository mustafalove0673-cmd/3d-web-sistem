'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const info = [
    { icon: MapPin, text: 'Atatürk Cad. No:123, Çankaya, Ankara' },
    { icon: Phone, text: '+90 312 000 00 00' },
    { icon: Mail, text: 'info@ozkanyapi.com.tr' },
    { icon: Clock, text: 'Pzt - Cmt: 09:00 - 18:00' },
  ]

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }} className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="divider-line" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">İletişim</span>
            <div className="divider-line" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Projenizi <span className="text-gradient">Konuşalım</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            Ücretsiz keşif ve teklif için bize ulaşın.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-5">
            <h3 className="font-heading font-bold text-lg">Bize Ulaşın</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Projeniz hakkında bilgi almak için bize ulaşabilirsiniz.
            </p>
            <div className="space-y-4">
              {info.map((item) => (
                <div key={item.text} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2.5">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="p-7 md:p-8 bg-card rounded-2xl border border-border shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] text-muted-foreground mb-1.5 block font-semibold uppercase tracking-wider">Ad Soyad</label>
                  <input type="text" placeholder="Adınız"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all" />
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground mb-1.5 block font-semibold uppercase tracking-wider">Telefon</label>
                  <input type="tel" placeholder="+90 555 000 00 00"
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all" />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground mb-1.5 block font-semibold uppercase tracking-wider">Email</label>
                <input type="email" placeholder="info@example.com"
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all" />
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground mb-1.5 block font-semibold uppercase tracking-wider">Mesaj</label>
                <textarea rows={4} placeholder="Projeniz hakkında..."
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all resize-none" />
              </div>
              <button type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/15">
                {sent ? <><CheckCircle2 className="w-4 h-4" /> Gönderildi!</> : <><Send className="w-4 h-4" /> Mesaj Gönder</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
