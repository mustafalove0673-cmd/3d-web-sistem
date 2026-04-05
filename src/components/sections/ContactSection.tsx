'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock } from 'lucide-react'

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let v = 0
    const t = setInterval(() => {
      v += end / 60
      if (v >= end) { setCount(end); clearInterval(t) }
      else setCount(Math.floor(v))
    }, 16)
    return () => clearInterval(t)
  }, [inView, end])
  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { number: 15000, suffix: '+m²', label: 'İnşaat Alanı' },
  { number: 8, suffix: '+', label: 'Şehir' },
  { number: 100, suffix: '%', label: 'Zamanında Teslim' },
]

const contactInfo = [
  { icon: MapPin, label: 'Atatürk Cad. No:123, Çankaya, Ankara', value: '' },
  { icon: Phone, label: '+90 312 000 00 00', value: '' },
  { icon: Mail, label: 'info@ozkanyapi.com.tr', value: '' },
  { icon: Clock, label: 'Pzt - Cmt: 09:00 - 18:00', value: '' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-40">
      {/* BG accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[120px]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-[2px] bg-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-[0.25em] font-heading">İletişim</span>
            <div className="w-16 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-foreground">Projenizi </span>
            <span className="text-gradient">Konuşalım</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Ücretsiz keşif ve teklif için bize ulaşın. Hayalinizdeki projeyi birlikte planlayalım.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-card border border-white/[0.04]">
              <div className="font-heading text-2xl md:text-4xl font-bold text-primary">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-heading font-bold text-xl text-foreground">Bize Ulaşın</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Projeniz hakkında bilgi almak veya ücretsiz keşif randevusu 
              oluşturmak için aşağıdaki kanallardan bize ulaşabilirsiniz.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-card border border-white/[0.04] space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-[11px] text-muted-foreground mb-2 block uppercase tracking-wider font-semibold">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3.5 bg-muted/50 border border-white/[0.06] rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all duration-300 text-foreground"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-muted-foreground mb-2 block uppercase tracking-wider font-semibold">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+90 555 000 00 00"
                    className="w-full px-4 py-3.5 bg-muted/50 border border-white/[0.06] rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all duration-300 text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground mb-2 block uppercase tracking-wider font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="info@example.com"
                  className="w-full px-4 py-3.5 bg-muted/50 border border-white/[0.06] rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all duration-300 text-foreground"
                />
              </div>
              <div>
                <label className="text-[11px] text-muted-foreground mb-2 block uppercase tracking-wider font-semibold">Proje Detayı</label>
                <textarea
                  rows={4}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className="w-full px-4 py-3.5 bg-muted/50 border border-white/[0.06] rounded-xl text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all duration-300 resize-none text-foreground"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-heading font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(230,57,70,0.2)]"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    Gönderildi!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
