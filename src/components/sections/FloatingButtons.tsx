'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const buttons = [
  {
    icon: MessageCircle,
    href: 'https://wa.me/905551234567',
    bgColor: '#25D366',
    hoverShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
    ariaLabel: 'WhatsApp',
  },
  {
    icon: Phone,
    href: 'tel:+905551234567',
    bgColor: 'var(--salon-pink)',
    hoverShadow: '0 8px 25px rgba(139, 34, 82, 0.45)',
    ariaLabel: 'Phone',
  },
  {
    icon: MapPin,
    href: 'https://www.google.com/maps/search/Pursaklar,+Ankara',
    bgColor: 'var(--salon-green)',
    hoverShadow: '0 8px 25px rgba(45, 80, 22, 0.45)',
    ariaLabel: 'Location',
  },
];

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {buttons.map((btn, i) => {
        const Icon = btn.icon;
        return (
          <motion.a
            key={i}
            href={btn.href}
            target={btn.href.startsWith('http') ? '_blank' : undefined}
            rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={btn.ariaLabel}
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 1.5 + i * 0.15,
              duration: 0.4,
              type: 'spring',
              stiffness: 200,
              damping: 15,
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: btn.hoverShadow,
            }}
            whileTap={{ scale: 0.9, y: 2 }}
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-shadow duration-300 cursor-pointer"
            style={{ backgroundColor: btn.bgColor }}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}
