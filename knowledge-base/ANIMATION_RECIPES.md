# 🎬 ANİMASYON REÇETE KİTABI v1.0

> GSAP, Framer Motion, CSS hazır animasyon kodları
> Her snippet doğrudan projeye kopyalanıp kullanılabilir
> Sektör bazlı öneriler dahil

---

## 📋 İÇİNDEKİLER

```
GSAP ANİMASYONLARI
├── 1. Hero Text Reveal          → Başlık belirme animasyonu
├── 2. Scroll Trigger Sections  → Scroll tetiklemeli bölüm geçişi
├── 3. Magnetic Button           → Mouse takipli manyetik buton
├── 4. Counter Animation         → Sayaç animasyonu (stats)
├── 5. Image Parallax            → Parallax görsel efekti
├── 6. Stagger Grid              → Grid öğeleri sıralı giriş
├── 7. Smooth Page Transition    → Sayfa geçiş animasyonu
├── 8. Horizontal Scroll         → Yatay scroll bölümü

FRAMER MOTION ANİMASYONLARI
├── 9. Section Fade In           → Bölüm yumuşak giriş
├── 10. Card Hover Effect        → Kart hover efekti
├── 11. Navbar Scroll Hide       → Navbar scroll'da gizle
├── 12. Accordion/Collapse       → Açılır-kapanır
├── 13. Modal/Dialog Animation   → Modal animasyonu
├── 14. Marquee/Ticker           → Sonsuz kayan metin

CSS ANİMASYONLARI
├── 15. Gradient Background      → Animasyonlu gradient arka plan
├── 16. Loading Spinner          → Premium yükleme animasyonu
├── 17. Hover Micro-Interaction  → Hover mikro etkileşimler
├── 18. Noise Overlay            → Film tanesi overlay
```

---

## GSAP ANİMASYONLARI

### 1. 🎯 Hero Text Reveal

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function HeroTextReveal() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-line', {
        y: 100,
        opacity: 0,
        rotationX: -90,
        stagger: 0.15,
        duration: 1.2,
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.6')
      .from('.hero-cta', {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, '-=0.4')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-screen">
      <div className="overflow-hidden">
        <h1 className="hero-line text-6xl font-bold">Premium</h1>
      </div>
      <div className="overflow-hidden">
        <h1 className="hero-line text-6xl font-bold text-rose-500">Experience</h1>
      </div>
      <p className="hero-subtitle mt-6 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet
      </p>
      <button className="hero-cta mt-8 px-8 py-4 bg-rose-500 rounded-full">
        Get Started
      </button>
    </div>
  )
}
```

---

### 2. 📜 Scroll Trigger Sections

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollSections() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.scroll-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        })
      })

      // Parallax effect
      gsap.utils.toArray<HTMLElement>('.parallax-img').forEach((img) => {
        gsap.to(img, {
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -100,
          ease: 'none',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef}>
      <section className="scroll-section min-h-screen flex items-center p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold">Section 1</h2>
            <p className="mt-4 text-muted-foreground">Content here</p>
          </div>
          <div className="parallax-img h-96 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-2xl" />
        </div>
      </section>
    </div>
  )
}
```

---

### 3. 🧲 Magnetic Button

```tsx
'use client'
import { useRef, useState } from 'react'
import gsap from 'gsap'

export function MagneticButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!btnRef.current) return
    const { left, top, width, height } = btnRef.current.getBoundingClientRect()
    const x = e.clientX - left - width / 2
    const y = e.clientY - top - height / 2

    gsap.to(btnRef.current, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    if (!btnRef.current) return
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.5)' })
    setHovered(false)
  }

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${
        hovered ? 'bg-rose-500 text-white scale-110' : 'bg-white/10 text-white'
      }`}
    >
      {children}
    </button>
  )
}
```

---

### 4. 🔢 Counter Animation

```tsx
'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function CounterAnimation({ end, label }: { end: number; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({ val: 0 }, {
        val: end,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        onUpdate: (e) => setCount(Math.round(e.targets[0].val)),
      })
    }, ref)

    return () => ctx.revert()
  }, [end])

  return (
    <div ref={ref} className="text-center">
      <span className="text-5xl font-bold">{count}</span>
      <p className="mt-2 text-muted-foreground">{label}</p>
    </div>
  )
}
```

---

### 5. 📸 Image Parallax

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
        y: -80,
        scale: 1.1,
        ease: 'none',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="overflow-hidden rounded-2xl h-96">
      <div
        ref={imgRef}
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-label={alt}
      />
    </div>
  )
}
```

---

### 6. 📊 Stagger Grid

```tsx
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function StaggerGrid() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.grid-item', {
        y: 60,
        opacity: 0,
        stagger: {
          each: 0.1,
          from: 'random',
        },
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
        },
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="grid-item p-6 bg-white/5 rounded-2xl backdrop-blur">
          <div className="h-48 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl mb-4" />
          <h3 className="text-lg font-semibold">Card {i + 1}</h3>
          <p className="text-sm text-muted-foreground mt-2">Description text</p>
        </div>
      ))}
    </div>
  )
}
```

---

## FRAMER MOTION ANİMASYONLARI

### 7. 📑 Section Fade In

```tsx
'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

### 8. 🃏 Card Hover Effect

```tsx
'use client'
import { motion } from 'framer-motion'

export function HoverCard({ title, description }: { title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl cursor-pointer"
    >
      <motion.h3
        whileHover={{ color: '#f43f5e' }}
        className="text-xl font-semibold"
      >
        {title}
      </motion.h3>
      <p className="mt-3 text-muted-foreground">{description}</p>
      <motion.div
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        className="h-0.5 bg-rose-500 mt-4"
      />
    </motion.div>
  )
}
```

---

### 9. 📱 Navbar Scroll Hide

```tsx
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function ScrollNavbar() {
  const [hidden, setHidden] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastY && currentY > 100)
      setLastY(currentY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold">Brand</span>
        <div className="hidden md:flex gap-8">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="text-sm text-muted-foreground hover:text-white transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
```

---

### 10. 🎭 Accordion/Collapse

```tsx
'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AccordionItem {
  title: string
  content: string
}

export function Accordion({ items }: { items: AccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full p-4 text-left font-medium flex justify-between items-center"
          >
            {item.title}
            <motion.span
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              className="text-2xl"
            >
              +
            </motion.span>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="px-4 pb-4 text-muted-foreground">{item.content}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
```

---

### 11. 🏃 Marquee / Ticker

```tsx
'use client'
import { motion } from 'framer-motion'

export function Marquee({ items, speed = 20 }: { items: string[]; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: items.length * 0.5, repeat: Infinity, ease: 'linear' }}
        className="inline-flex"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-4xl font-bold text-white/20">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
```

---

## CSS ANİMASYONLARI

### 12. 🌈 Gradient Background Animation

```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-bg {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
}
```

### 13. ⏳ Loading Spinner

```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes pulse-ring {
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}

.loader {
  position: relative;
  width: 40px;
  height: 40px;
}

.loader::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-top-color: #f43f5e;
  border-radius: 50%;
  animation: spin-slow 1s linear infinite;
}

.loader::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid transparent;
  border-top-color: rgba(244, 63, 94, 0.3);
  border-radius: 50%;
  animation: spin-slow 1.5s linear infinite reverse;
}
```

### 14. 🖱️ Hover Micro-Interactions

```css
/* Magnetic Hover */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

/* Glow Effect */
.hover-glow {
  position: relative;
  transition: all 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(244, 63, 94, 0.5),
              0 0 60px rgba(244, 63, 94, 0.2);
}

/* Underline Animation */
.hover-underline {
  position: relative;
}

.hover-underline::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #f43f5e;
  transition: width 0.3s ease;
}

.hover-underline:hover::after {
  width: 100%;
}

/* Scale + Glow */
.hover-premium {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hover-premium:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
  box-shadow: 0 0 30px rgba(244, 63, 94, 0.4);
}
```

---

## 🎨 SEKTÖR BAZLI ÖNERİLER

| Sektör | Önerilen Animasyonlar | Karakteristik |
|--------|----------------------|---------------|
| Lüks & Güzellik | Hero Reveal, Magnetic Button, Glassmorphism | Yumuşak, zarif, premium |
| İnşaat | Scroll Sections, Counter, Parallax | Güçlü, dramatik, geometrik |
| Teknoloji | Stagger Grid, Marquee, Glow | Hızlı, keskin, neon |
| Restoran | Image Parallax, Fade In, Gradient | Sıcak, davetkar, sinematik |
| Sanat | Dissolve, Aurora Shader, Distortion | Deneysel, cesur, sanatsal |
| Sağlık | Fade In, Smooth Scroll, Counter | Temiz, sakin, güvenilir |
| Otomotiv | Speed Scroll, God Rays, Fire Shader | Agresif, hızlı, dramatik |
| Eğitim | Section Fade, Accordion, Marquee | Güvenilir, organize, sıcak |

---

> **v1.0 — 18 Hazır Animasyon Reçete | GSAP + Framer Motion + CSS**
> **Son Güncelleme:** 2026-04-05
