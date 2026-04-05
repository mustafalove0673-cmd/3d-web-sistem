'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguageStore } from '@/lib/language-store';

export default function ContactSection() {
  const { t } = useLanguageStore();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: MapPin, labelKey: 'contact.info.address.label', valueKey: 'contact.info.address' },
    { icon: Phone, labelKey: 'contact.info.phone.label', valueKey: 'contact.info.phone' },
    { icon: Mail, labelKey: 'contact.info.email.label', valueKey: 'contact.info.email' },
    { icon: Clock, labelKey: 'contact.info.hours.label', valueKey: 'contact.info.hours' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute inset-0 bg-blueprint opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-body font-medium tracking-wider uppercase">
            {t('contact.badge')}
          </span>
        </motion.div>

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-text-primary"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-text-secondary font-body text-base md:text-lg max-w-2xl mx-auto mb-4"
        >
          {t('contact.subtitle')}
        </motion.p>

        {/* Gold underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-20 h-0.5 bg-gradient-to-r from-steel-blue to-gold mx-auto mb-12"
        />

        {/* Two Column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-text-secondary text-sm font-body mb-1.5 block">
                  {t('contact.form.name')}
                </label>
                <Input
                  placeholder={t('contact.form.name')}
                  className="bg-card/50 border-white/10 focus:border-steel-blue/50 h-11 text-text-primary placeholder:text-text-secondary/40 font-body"
                  required
                />
              </div>
              <div>
                <label className="text-text-secondary text-sm font-body mb-1.5 block">
                  {t('contact.form.email')}
                </label>
                <Input
                  type="email"
                  placeholder={t('contact.form.email')}
                  className="bg-card/50 border-white/10 focus:border-steel-blue/50 h-11 text-text-primary placeholder:text-text-secondary/40 font-body"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-text-secondary text-sm font-body mb-1.5 block">
                  {t('contact.form.phone')}
                </label>
                <Input
                  type="tel"
                  placeholder={t('contact.form.phone')}
                  className="bg-card/50 border-white/10 focus:border-steel-blue/50 h-11 text-text-primary placeholder:text-text-secondary/40 font-body"
                />
              </div>
              <div>
                <label className="text-text-secondary text-sm font-body mb-1.5 block">
                  {t('contact.form.type')}
                </label>
                <Select>
                  <SelectTrigger className="bg-card/50 border-white/10 focus:border-steel-blue/50 h-11 text-text-primary font-body">
                    <SelectValue placeholder={t('contact.form.typePlaceholder')} />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-lighter border-white/10">
                    <SelectItem value="villa">{t('contact.form.typeVilla')}</SelectItem>
                    <SelectItem value="interior">{t('contact.form.typeInterior')}</SelectItem>
                    <SelectItem value="landscape">{t('contact.form.typeLandscape')}</SelectItem>
                    <SelectItem value="pool">{t('contact.form.typePool')}</SelectItem>
                    <SelectItem value="restoration">{t('contact.form.typeRestoration')}</SelectItem>
                    <SelectItem value="other">{t('contact.form.typeOther')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-text-secondary text-sm font-body mb-1.5 block">
                {t('contact.form.message')}
              </label>
              <Textarea
                placeholder={t('contact.form.messagePlaceholder')}
                rows={5}
                className="bg-card/50 border-white/10 focus:border-steel-blue/50 text-text-primary placeholder:text-text-secondary/40 font-body resize-none"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-dark font-semibold h-12 text-base transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 gap-2"
            >
              {submitted ? (
                <span className="text-green-700">✓ {t('contact.form.submit')}</span>
              ) : (
                <>
                  {t('contact.form.submit')}
                  <Send className="size-4" />
                </>
              )}
            </Button>
          </motion.form>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.labelKey}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className="w-11 h-11 rounded-lg bg-steel-blue/10 flex items-center justify-center shrink-0 group-hover:bg-steel-blue/20 transition-colors">
                  <info.icon className="size-5 text-steel-blue" />
                </div>
                <div>
                  <p className="text-text-secondary text-xs font-body uppercase tracking-wider mb-1">
                    {t(info.labelKey)}
                  </p>
                  <p className="text-text-primary text-sm font-body leading-relaxed">
                    {t(info.valueKey)}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-dark-lighter via-steel-blue/5 to-dark-lighter" />
              <div className="absolute inset-0 bg-blueprint opacity-30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="size-8 text-steel-blue/40 mx-auto mb-2" />
                  <p className="text-text-secondary text-sm font-body">İstanbul, Türkiye</p>
                </div>
              </div>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-gold/30" />
              <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-gold/30" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-gold/30" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-gold/30" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
