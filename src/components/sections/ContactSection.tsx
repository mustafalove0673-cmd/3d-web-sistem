'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Adres', value: 'Çankaya, Ankara, Türkiye', href: '#' },
    { icon: Phone, label: 'Telefon', value: '+90 (312) 000 00 00', href: 'tel:+903120000000' },
    { icon: Mail, label: 'E-posta', value: 'info@melakon.com', href: 'mailto:info@melakon.com' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex items-center gap-3 mb-4 sm:mb-6"
        >
          <div className="h-px w-8 bg-[#C9A96E]" />
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-body">
            İletişim
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div>
            <motion.h2
              variants={fadeUp(0.1)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
            >
              Projenizi
              <br />
              <span className="text-gradient-gold">Konuşalım</span>
            </motion.h2>

            <motion.p
              variants={fadeUp(0.2)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-6 text-muted-foreground leading-relaxed text-base sm:text-lg max-w-lg"
            >
              Hayalinizdeki projeyi gerçekleştirmek için ilk adımı atın.
              Uzman ekibimiz size özel çözümler sunmak için hazır.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={fadeUp(0.3)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 space-y-6"
            >
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="group flex items-start gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[rgba(201,169,110,0.15)] group-hover:border-[#C9A96E] transition-colors duration-300">
                    <info.icon className="w-4 h-4 text-[#C9A96E]" />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-sm sm:text-base text-foreground group-hover:text-[#C9A96E] transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Bottom accent */}
            <motion.div
              variants={fadeUp(0.4)}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mt-10 flex items-center gap-4"
            >
              <div className="h-px flex-1 bg-gradient-to-r from-[rgba(201,169,110,0.3)] to-transparent" />
              <span className="text-xs tracking-[0.2em] uppercase text-[#C9A96E]">
                Ücretsiz Danışmanlık
              </span>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full bg-transparent border border-[rgba(201,169,110,0.1)] focus:border-[#C9A96E] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full bg-transparent border border-[rgba(201,169,110,0.1)] focus:border-[#C9A96E] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300"
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  value={formState.phone}
                  onChange={(e) => setFormState(s => ({ ...s, phone: e.target.value }))}
                  className="w-full bg-transparent border border-[rgba(201,169,110,0.1)] focus:border-[#C9A96E] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300"
                  placeholder="+90 (5XX) XXX XX XX"
                />
              </div>

              <div>
                <label className="block text-xs tracking-wider uppercase text-muted-foreground mb-2">
                  Mesajınız
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  rows={5}
                  className="w-full bg-transparent border border-[rgba(201,169,110,0.1)] focus:border-[#C9A96E] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors duration-300 resize-none"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>

              <button
                type="submit"
                className="magnetic-btn w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 border border-[rgba(201,169,110,0.3)] text-sm font-medium tracking-wide text-foreground"
              >
                <span>Gönder</span>
                <Send className="w-4 h-4 relative z-10 text-[#C9A96E]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
