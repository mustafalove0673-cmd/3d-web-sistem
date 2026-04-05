'use client'

import Navbar from '@/components/sections/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import TechSection from '@/components/sections/TechSection'
import CatalogSection from '@/components/sections/CatalogSection'
import PaymentSection from '@/components/sections/PaymentSection'
import StepsSection from '@/components/sections/StepsSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <TechSection />
      <CatalogSection />
      <PaymentSection />
      <StepsSection />
      <Footer />
    </main>
  )
}
