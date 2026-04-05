'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenisSmoothScroll } from '@/hooks/use-lenis';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import Preloader from '@/components/sections/Preloader';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useLenisSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {!isLoaded && (
          <Preloader key="preloader" onComplete={() => setIsLoaded(true)} />
        )}
      </AnimatePresence>

      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="noise-overlay relative min-h-screen flex flex-col"
        >
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <AboutSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <ServicesSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <ProjectsSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <StatsSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <TestimonialsSection />
            <div className="section-divider mx-auto max-w-7xl" />
            <ContactSection />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
