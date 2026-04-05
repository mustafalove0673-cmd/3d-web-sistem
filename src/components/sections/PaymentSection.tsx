'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard, Baby, Landmark, Wallet } from 'lucide-react'

const methods = [
  {
    icon: CreditCard,
    title: 'Kredi ile Ev',
    desc: 'Bankalarla iş birliği yaparak size en uygun koşulları sunuyoruz.',
  },
  {
    icon: Baby,
    title: 'Devlet Desteği',
    desc: 'Devlet destekli konut kredisi programlarından faydalanın.',
  },
  {
    icon: Landmark,
    title: 'Subsidyeler',
    desc: 'Ev inşaatı için devlet teşvikleri ve hibe programları hakkında bilgi veriyoruz.',
  },
  {
    icon: Wallet,
    title: 'Havale / EFT',
    desc: 'Bireysel ve kurumsal müşteriler için uygun ödeme yöntemleri.',
  },
]

export default function PaymentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="payment" ref={ref} className="py-20 md:py-28 bg-background">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
            Ödeme Yöntemleri
          </h2>
          <p className="text-[14px] text-muted-foreground">
            Size en uygun ödeme seçeneğini sunuyoruz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-dark-card rounded-xl p-6 text-white group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <method.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-[15px] font-bold text-white mb-2">{method.title}</h3>
              <p className="text-[13px] text-white/45 leading-relaxed">{method.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
