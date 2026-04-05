'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmet Yılmaz',
    role: 'İş İnsanı',
    location: 'Bodrum',
    rating: 5,
    text: 'MELAKON ile çalışmak tam bir ayrıcalıktı. Hayalimdeki villayı kusursuz bir şekilde hayata geçirdiler. Her detay özenle düşünülmüş, kalite standartları beklentimin çok üzerindeydi.',
  },
  {
    id: 2,
    name: 'Elif Kaya',
    role: 'Mimar',
    location: 'İstanbul',
    rating: 5,
    text: 'Profesyonel yaklaşımları ve teknik bilgi birikimleri sayesinde projemiz zamanında ve bütçesinde tamamlandı. Ekibin her üyesi işini ciddiye alıyor.',
  },
  {
    id: 3,
    name: 'Mehmet Demir',
    role: 'Girişimci',
    location: 'Antalya',
    rating: 5,
    text: 'İkinci villamızı da MELAKON\'a yaptırdık. İlk deneyimimizden bu yana kalite ve hizmet anlayışlarında hiç bir değişiklik yok. İşlerindeki tutku gerçekten takdire şayan.',
  },
  {
    id: 4,
    name: 'Zeynep Arslan',
    role: 'Doktor',
    location: 'Ankara',
    rating: 5,
    text: 'İç mekan tasarımından peyzaja kadar her aşamada profesyonel destek aldık. Sonuç tam olarak istediğimiz gibi oldu. MELAKON\'u herkese tavsiye ederim.',
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [current, setCurrent] = useState(0);

  const fadeUp = (delay: number) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  });

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 md:py-40" ref={ref}>
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
            Referanslar
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.h2
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          >
            Müşterilerimiz
            <br />
            <span className="text-gradient-gold">Ne Diyor?</span>
          </motion.h2>
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex items-center gap-3 lg:pt-4"
          >
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-[rgba(201,169,110,0.15)] hover:border-[#C9A96E] text-muted-foreground hover:text-[#C9A96E] transition-all duration-300"
              aria-label="Önceki"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-[rgba(201,169,110,0.15)] hover:border-[#C9A96E] text-muted-foreground hover:text-[#C9A96E] transition-all duration-300"
              aria-label="Sonraki"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative min-h-[300px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16"
            >
              {/* Quote */}
              <div className="lg:col-span-3">
                <Quote className="w-8 h-8 text-[rgba(201,169,110,0.2)] mb-6" />
                <p className="text-xl sm:text-2xl font-heading font-light leading-relaxed text-foreground">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="lg:col-span-2 flex flex-col justify-center lg:border-l lg:border-[rgba(201,169,110,0.1)] lg:pl-8 sm:pl-10">
                {/* Avatar placeholder */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#1A1714] mb-4 flex items-center justify-center">
                  <span className="font-heading text-lg font-bold text-[#050505]">
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonials[current].role} — {testimonials[current].location}
                </p>
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-[#C9A96E]'
                  : 'w-1.5 bg-[rgba(201,169,110,0.2)] hover:bg-[rgba(201,169,110,0.4)]'
              }`}
              aria-label={`Referans ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
