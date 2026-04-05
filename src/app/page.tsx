import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dark noise-overlay relative">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
