import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BookingSection from '@/components/sections/BookingSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--salon-cream)' }}>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <BookingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
