import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import BookingSection from '@/components/sections/BookingSection';
import GallerySection from '@/components/sections/GallerySection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingButtons from '@/components/sections/FloatingButtons';
import { WaveDivider, GradientTransition } from '@/components/WaveDivider';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--salon-cream)' }}>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        
        {/* Hero → Services: animated wave transition */}
        <WaveDivider variant="pink-gold" />

        <ServicesSection />

        {/* Services → Booking: gradient transition */}
        <GradientTransition
          from="var(--salon-beige)"
          to="var(--salon-dark)"
          height="100px"
        />

        <BookingSection />

        {/* Booking → Gallery: wave transition */}
        <WaveDivider variant="gold-dark" />

        <GallerySection />

        {/* Gallery → Contact: gradient transition */}
        <GradientTransition
          from="#1A1A2E"
          to="var(--salon-cream)"
          height="100px"
        />

        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
