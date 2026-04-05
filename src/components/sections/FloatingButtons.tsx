'use client';

import { motion } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
      >
        <Button
          size="icon"
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/30 transition-all duration-300 hover:scale-110"
          asChild
        >
          <a
            href="https://wa.me/902125550123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle className="size-5 text-white" />
          </a>
        </Button>
      </motion.div>

      {/* Back to Top */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showTop ? 1 : 0, opacity: showTop ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Button
          size="icon"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 rounded-full bg-dark-lighter/80 backdrop-blur-md border border-white/10 hover:bg-dark-lighter shadow-lg transition-all duration-300 hover:scale-110 hover:border-steel-blue/30"
          aria-label="Back to top"
        >
          <ArrowUp className="size-5 text-gold" />
        </Button>
      </motion.div>
    </div>
  );
}
