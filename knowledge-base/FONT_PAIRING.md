# 🔤 FONT PAIRING REHBERİ v1.0

> Sektör bazlı premium Google Font eşleşmeleri
> next/font ile optimize edilebilir font kombinasyonları

---

## 📋 KULLIM KURALLARI

```
1. En fazla 2 font ailesi (heading + body)
2. next/font/google ile self-host → daha hızlı
3. font-display: swap → FOIT önle
4. Mobile'da heading boyutu azalt
5. Dark tema için font-weight artır (+100)
```

---

## 🎨 SEKTÖR BAZLI FONT PAIRING'LARI

### 🔴 Lüks & Güzellik (Salon, SPA, Kozmetik, Moda)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Playfair Display | 700, 900 | serif |
| **Body** | Inter | 300, 400 | sans-serif |
| **Accent** | Cormorant Garamond | 300, 600 | serif |

```tsx
// app/layout.tsx
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '900'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['300', '600'],
  display: 'swap',
})
```

**Renk Paleti:** Rose (#C8506F), Gold (#D4A574), Cream (#F5E6D3), Dark (#0A0A0F)

---

### 🟠 İnşaat & Mimari (Villa, Ofis, İç Mimarlık)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Josefin Sans | 600, 700 | sans-serif |
| **Body** | Source Sans 3 | 300, 400 | sans-serif |
| **Accent** | Orbitron (3D kısımlar) | 700 | sans-serif |

```tsx
import { Josefin_Sans, Source_Sans_3, Orbitron } from 'next/font/google'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['600', '700'],
  display: 'swap',
})
```

**Renk Paleti:** Steel Blue (#4A90D9), Gold (#C5A55A), Concrete (#E8E4E0), Dark (#1C1C1C)

---

### 🟢 Teknoloji & Startup (SaaS, AI, FinTech)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Space Grotesk | 600, 700 | sans-serif |
| **Body** | DM Sans | 400, 500 | sans-serif |
| **Code/Tech** | JetBrains Mono | 400 | monospace |

```tsx
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google'
```

**Renk Paleti:** Cyan (#00D4FF), Green (#00FF88), Slate (#0F172A), White

---

### 🔵 Deniz & Yachting (Marina, Tekne, Tur)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Cinzel | 600, 700 | serif |
| **Body** | Raleway | 300, 400 | sans-serif |
| **Accent** | Cormorant Garamond | 400 | serif |

```tsx
import { Cinzel, Raleway, Cormorant_Garamond } from 'next/font/google'
```

**Renk Paleti:** Ocean Blue (#0077B6), Sand (#E6C288), White (#F8F9FA), Dark (#0A1628)

---

### 🟡 Sağlık & Wellness (Hastane, Gym, Yoga)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Fraunces | 600, 700 | serif (soft) |
| **Body** | Work Sans | 300, 400 | sans-serif |
| **Accent** | Outfit | 400, 600 | sans-serif |

```tsx
import { Fraunces, Work_Sans, Outfit } from 'next/font/google'
```

**Renk Paleti:** Mint (#34D399), Soft Blue (#93C5FD), White (#F8FAFC)

---

### 🟣 Sanat & Galeri (Müze, Sergi, Portfolio)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Syne | 700, 800 | sans-serif |
| **Body** | IBM Plex Sans | 300, 400 | sans-serif |
| **Display** | Space Mono | 400 | monospace |

```tsx
import { Syne, IBM_Plex_Sans, Space_Mono } from 'next/font/google'
```

**Renk Paleti:** Deep Purple (#6B21A8), Silver (#C0C0C0), White (#FAFAFA), Dark (#0D0D0D)

---

### ⚫ Otomotiv & Motorspor

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Orbitron | 700, 900 | sans-serif |
| **Body** | Barlow Condensed | 300, 400 | sans-serif |
| **Number/Sport** | Rajdhani | 600, 700 | sans-serif |

```tsx
import { Orbitron, Barlow_Condensed, Rajdhani } from 'next/font/google'
```

**Renk Paleti:** Carbon Black (#1A1A1A), Racing Red (#DC2626), Chrome (#E5E7EB), Yellow

---

### 🟤 Eğitim & Üniversite

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Merriweather | 700, 900 | serif |
| **Body** | Open Sans | 400, 600 | sans-serif |
| **Accent** | Lora | 400, 700 | serif |

```tsx
import { Merriweather, Open_Sans, Lora } from 'next/font/google'
```

**Renk Paleti:** Navy (#1E3A5F), Gold (#D4A017), White (#FAFAFA), Dark (#0D1117)

---

### 🍽️ Restoran & Yemek (Fine Dining, Cafe, Bar)

| Kullanım | Font | Weight | Fallback |
|---------|------|--------|----------|
| **Heading** | Cormorant Garamond | 600, 700 | serif |
| **Body** | Lato | 300, 400 | sans-serif |
| **Menu/Price** | EB Garamond | 400, 500 | serif |

```tsx
import { Cormorant_Garamond, Lato, EB_Garamond } from 'next/font/google'
```

**Renk Paleti:** Warm Orange (#FF8C42), Deep Red (#8B1A1A), Cream (#FFF8E7), Dark (#1A1A1A)

---

## 📏 TİPOGRAFİ SKALASI

### Desktop Boyutları

```css
:root {
  --text-xs: 0.75rem;    /* 12px - caption, meta */
  --text-sm: 0.875rem;   /* 14px - body küçük */
  --text-base: 1rem;     /* 16px - body varsayılan */
  --text-lg: 1.125rem;   /* 18px - body büyük */
  --text-xl: 1.25rem;    /* 20px - section başlık */
  --text-2xl: 1.5rem;    /* 24px - kart başlık */
  --text-3xl: 1.875rem;  /* 30px - alt başlık */
  --text-4xl: 2.25rem;   /* 36px - heading küçük */
  --text-5xl: 3rem;      /* 48px - heading */
  --text-6xl: 3.75rem;   /* 60px - hero */
  --text-7xl: 4.5rem;    /* 72px - hero büyük */
  --text-8xl: 6rem;      /* 96px - display */
}
```

### Mobile Boyutları (responsive)

```css
@media (max-width: 768px) {
  :root {
    --text-hero: clamp(2.5rem, 8vw, 4rem);
    --text-heading: clamp(1.5rem, 5vw, 2.5rem);
    --text-body: 1rem;
  }
}
```

---

## 🎯 TİPOGRAFİ KALİPLARI

### 1. Hero Section
```tsx
<h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-none">
  Premium<br/>
  <span className="text-rose-500">Experience</span>
</h1>
```

### 2. Section Heading
```tsx
<h2 className="text-4xl md:text-5xl font-bold">
  <span className="text-muted-foreground font-light">Our</span> Services
</h2>
```

### 3. Kinetik Tipografi (CSS)
```css
.kinetic-text {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.05em;
}
```

### 4. Gradient Text
```tsx
<h1 className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 text-6xl font-bold">
  Creative Studio
</h1>
```

---

## ⚡ PERFORMANS TÜYOLARI

```
1. ✅ next/font/google → self-host, layout shift yok
2. ✅ variable font → tek dosya, tüm weight'ler
3. ✅ subsets: ['latin'] → sadece gerekli karakterler
4. ✅ display: 'swap' → FOIT önle
5. ✅ preload font → kritik render yolu
6. ❌ Google Fonts CDN'den çağırma → layout shift
7. ❌ font-face ile manuel tanımlama → next/font kullan
```

---

> **v1.0 — 8 Sektör Font Pairing + Tipografi Kılavuzu**
> **Son Güncelleme:** 2026-04-05
