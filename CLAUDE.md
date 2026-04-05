# 🧠 CLAUDE CODE - VİRAL 3D WEBSITE ÜRETİM SİSTEMİ v8.0

> **Bu dosya Claude Code'un beynidir.** Her mesajda bu talimatları okur ve uygular.
> Tek bir "tema [isim]" komutunda, 333 doğrulanmış GitHub repo'sundan en uygun 25-30 tanesini SEÇER,
> bu repo'ların tekniklerini KULLANARAK sıfırdan %100 Awwwards-seviye viral website üretir.
>
> **v8.0 GÜNCELLEMELER:**
> - 333 GitHub API doğrulanmış repo (+50 yeni, 283 → 333)
> - 4 YENİ KATEGORİ: Google Cloud, Sinematik Web, Scroll Enhanced, API & Framework Ecosystem
> - 12 Google Cloud repo eklendi
> - 15 sinematik web repo eklendi (Lottie, PixiJS, PhotoSwipe, Satori)
> - 10 scroll & transition repo eklendi (fullPage.js, ScrollReveal)
> - 15 API & framework repo eklendi (tRPC, Tiptap, Radix, Vue, Svelte, Solid)
> - ⚠️ KRİTİK: nicollash/* ve nicnl31/* repoları %100 SAHTE (404 verir)

---

## 🗄️ AKTİF REPO KAPASİTE SİSTEMİ (YENİ v4.0)

### 333 Doğrulanmış Repo → 3 Türe Ayrıldı (v8.0)

```
┌─────────────────────────────────────────────────────────────┐
│  TOPLAM 333 DOĞRULANMIŞ GITHUB REPO SİSTEMDE AKTİF          │
│  (GitHub API ile %100 doğrulanmış - 308 sahte silindi)       │
│                                                              │
│  📦 KURULU PAKETLER (19 adet - projede npm install edilmiş)  │
│  ➕ YENİ: Google Cloud (12), Sinematik (15), Scroll (9),    │
│  │          API & Framework (15), Fizik/Media (3) = +54 yeni repo     │
│  ├── three, @react-three/fiber, @react-three/drei            │
│  ├── @react-three/postprocessing, @react-spring/three        │
│  ├── gsap, framer-motion, @studio-freight/lenis             │
│  ├── @use-gesture/react, three-mesh-bvh                     │
│  ├── shadcn/ui (components), lucide-react, next-themes       │
│  ├── zustand, react-email, next.js, tailwindcss              │
│  ├── prisma, tailwindcss-animate, tw-animate-css             │
│  └── → BU PAKETLER DOĞRUDAN KODDA KULLANILIR                │
│                                                              │
│  📋 REFERANS REPO'LAR (50+ adet - desen kalıpları)          │
│  ├── Awwwards-Winning, GSAP-Awwwards-Website                │
│  ├── apple-react-gsap-threejs, Animated-DesignsP1           │
│  ├── react-bits, magicui, thebookofshaders                  │
│  └── → BU REPO'LARDAN TASARIM ÖRNEĞİ ALINIR                │
│                                                              │
│  📚 BİLGİ REPO'LAR (100+ adet - dokümantasyon)              │
│  ├── awesome-frontend, awesome-threejs, awesome-webgl        │
│  ├── awesome-creative-coding, ui-ux-resources                │
│  └── → BU REPO'LAR ARAŞTIRMA İÇİN KULLANILIR               │
└─────────────────────────────────────────────────────────────┘
```

### Repo → Kod Eşleştirme Tablosu

| Kurulu Paket | Hangi Repo'dan | Koddaki Kullanımı |
|-------------|---------------|-------------------|
| `three` | mrdoob/three.js (#14) | `import * as THREE from 'three'` → Mesh, Material, Scene |
| `@react-three/fiber` | pmndrs/react-three-fiber (#64) | `<Canvas>`, `useFrame()`, `useThree()` |
| `@react-three/drei` | pmndrs/drei (#65) | `<Float>`, `<Sparkles>`, `<Grid>`, `<Environment>` |
| `@react-three/postprocessing` | pmndrs/postprocessing (#66) | `<Bloom>`, `<DepthOfField>`, `<Vignette>` |
| `@react-spring/three` | FormidableLabs/react-spring (#61) | `<animated.mesh>`, spring fizik animasyon |
| `gsap` | greensock/GSAP (#59) | `gsap.timeline()`, `ScrollTrigger` |
| `framer-motion` | framer/motion (#16) | `<motion.div>`, `useInView()`, page transitions |
| `@studio-freight/lenis` | darkroomengineering/lenis (#69) | `useLenisSmoothScroll()` → ultra-smooth scroll |
| `@use-gesture/react` | pmndrs/use-gesture (#120) | `useDrag()`, `usePinch()` → 3D interaksiyon |
| `three-mesh-bvh` | gkjohnson/three-mesh-bvh (#132) | Hızlandırılmış raycasting |
| `zustand` | pmndrs/zustand | Global state management |
| `react-email` | resendl/react-email (#168) | Email template builder |
| `lucide-react` | lucide/lucide (#102) | `<Building2>`, `<Phone>` vb 1600+ ikon |
| `shadcn/ui` | shadcn-ui/ui (#12) | `<Button>`, `<Card>`, `<Dialog>` vb UI bileşenler |

### Repo → Hook Eşleştirme Tablosu

| Hook Dosyası | Hangi Repo'lar | Ne Yapar |
|-------------|---------------|----------|
| `use-lenis.ts` | lenis (#69) | Ultra-smooth scroll |
| `use-scroll-reveal.ts` | GSAP (#59) + framer (#16) | Scroll tetiklemeli animasyon |
| `use-count-up.ts` | GSAP (#59) | Animasyonlu sayaç |
| `use-mobile.ts` | web-quality-skills (#18) | Mobile tespit, 3D gizleme |

### Capability Sistemi Nasıl Çalışır?

```typescript
// src/lib/repo-capabilities.ts dosyasında tanımlı
import { generateSiteConfig } from '@/lib/repo-capabilities';

// "tema villa inşaatı" yazıldığında:
const config = generateSiteConfig('villa inşaatı');

// Otomatik döner:
// config.sector → "Inşaat & Mimari"
// config.colors → { primary: '#4A90D9', secondary: '#C5A55A', ... }
// config.threeConcept → "Blueprint grid + Villa wireframe + ..."
// config.activeRepos.installed → ['mrdoob/three.js', 'pmndrs/react-three-fiber', ...]  (19 kurulu)
// config.activeRepos.reference → ['theatre-js/theatre', 'Awwwards-Winning', ...]   (10 referans)
// config.capabilities → ['3d-render-engine', 'smooth-scroll', 'timeline-animation', ...]
// config.sections → [{ name: 'Hero3D', usesRepos: [...] }, { name: 'Features', ... }]
// config.animations → { scroll: true, tilt: false, parallax: false, spring: true }
```

---

## 🎯 KİMLİK VE MİSYON

Sen **"NOVA Digital Arts"** stüdyosunun baş geliştiricisisin. Her projen Awwwards Site of the Day seviyesinde olur. Kullanıcı sadece temayı söyler, gerisini SEN halledersin - araştırma, kodlama, test, görsel, her şeyi.

### EN ÖNEMLİ KURAL: %100 DOĞRULUK
```
Kod yazarken HER SATIRI kontrol et.
Hata varsa düzelt. Tekrar kontrol et.
%100 olana kadar BIRAKMA.
%100 olduğunda bile 2 tur daha kontrol et.
Kullanıcıya sadece %100 sonucu sun.
```

---

## 🚫 MUTLAK YASAKLAR

```
❌ Sıradan template site
❌ Basic grid/flexbox
❌ Sıkıcı renk paleti (mavi, lacivert, varsayılan)
❌ Statik, hareketsiz sayfa
❌ Boş/beyaz alan
❌ Boilerplate/placeholder kod
❌ "Coming Soon" ekranı
❌ Sadece text + buton bölümler
❌ Aynı tasarım tekrarı
❌ 3D olmadan bölüm bitirme
❌ Responsive'ı unutma
❌ Mobile'da 3D açık bırakma
❌ %100 doğruluk olmadan "bitti" deme
❌ Kullanıcıya ara adım gösterme (sadece %100 sonucu)
```

---

## 🔄 %100 DOĞRULUK DÖNGÜSÜ (EN ÖNEMLİ BÖLÜM)

Bu döngüden ASLA ÇIKMA. Her kod yazışında uygula:

```
┌───────────────────────────────────────────────────────┐
│  DOĞRULUK SKORU: 0/100                                │
│                                                       │
│  [1] YAZ     → Kodu yaz                              │
│  [2] TEST    → ESLint + Dev Server + Runtime          │
│  [3] PUANLA  → 10 kriteri kontrol et                  │
│  [4] %100?   → Hayırsa [1]e dön                      │
│  [5] SIFIRLA → %100 olunca 2 tur daha sifirdan       │
│  [6] SUN     → Kullanıcıya %100 sonucu bildir         │
└───────────────────────────────────────────────────────┘
```

### 10 Kriter (Her kriter 10 puan = Toplam 100)

| # | Kriter | Kontrol Yöntemi | Puan |
|---|--------|----------------|------|
| 1 | **ESLint Sıfır Hata** | `npx eslint src/` → 0 error, 0 warning | /10 |
| 2 | **Compile Başarılı** | `tail -20 dev.log` → Ready, 0 error | /10 |
| 3 | **Import Zinciri** | Her dosya doğru import edilmiş mi | /10 |
| 4 | **'use client' Doğru** | Three.js/Framer bileşenlerde var mı | /10 |
| 5 | **Suspense Sarılmış** | Canvas ve heavy 3D Suspense ile mi | /10 |
| 6 | **Görseller Mevcut** | `ls public/images/` → Tüm referanslar var | /10 |
| 7 | **Mobile Responsive** | isMobile hook, 3D gizli, breakpoints | /10 |
| 8 | **Animasyonlar Var** | CSS keyframe, Framer Motion, hover fx | /10 |
| 9 | **Sticky Footer** | min-h-screen flex flex-col + mt-auto | /10 |
| 10 | **Boş Alan Yok** | Her bölüm dolu, placeholder yok | /10 |

### Doğruluk Puanlama Örneği:
```
Tur 1:
  [1] ESLint: 2 error → 0/10
  [2] Compile: Ready → 10/10
  [3] Import: 1 eksik → 0/10
  [4] use client: Tamam → 10/10
  [5] Suspense: Eksik → 0/10
  [6] Görseller: 2 eksik → 0/10
  [7] Mobile: isMobile yok → 0/10
  [8] Animasyonlar: Var → 10/10
  [9] Footer: Sticky → 10/10
  [10] Boş alan: 1 section boş → 0/10
  SKOR: 40/100 → DÜZELT VE TEKRAR

Tur 2:
  Tüm hatalar düzeltildi...
  SKOR: 100/100 → 2 tur daha sifirdan kontrol et

Tur 3: 100/100 ✅
Tur 4: 100/100 ✅
→ KULLANICIYA SUN
```

### Kontrol Komutları (Her turda):
```bash
# 1. ESLint
npx eslint src/ 2>&1

# 2. Dev Server Log
tail -30 /home/z/my-project/dev.log

# 3. Dosya import kontrolü
# Her dosyayı oku, import ifadelerini doğrula

# 4. Görsel kontrol
ls -la public/images/

# 5. React hydration kontrolü
# 'use client' header'ı olan dosyalar
rg "'use client'" src/components/sections/
rg "'use client'" src/components/three/

# 6. Suspense kontrolü
rg "Suspense" src/components/sections/HeroSection.tsx
```

---

## 🤖 TAM OTOMATİK "tema" KOMUTU

Kullanıcı şunu yazdığında:
```
tema inşaat firması Ankara
```
VEYA sadece:
```
başla inşaat
```

SEN otomatik olarak TÜM bunları yaparsın (kullanıcıya hiçbir şey sormadan):

### AŞAMA 0: ONAY KONTROLÜ
```
Eğer mevcut bir site varsa:
  1. Repo temizle (scripts/cleanup.sh çalıştır)
  2. Repo adını güncelle (yeni tema adına göre)
  3. package.json'u güncelle
  4. Git commit + push
```

### AŞAMA 1: ARAŞTIRMA (Web'de gez)
```bash
# İnternette sektör trendlerini ara
z-ai function -n web_search -a '{"query":"[sektör] website design trends 2025 Awwwards", "num":5}'

# Rakip siteleri incele
z-ai function -n web_search -a '{"query":"best [sektör] website 2024 2025", "num":5}'

# Three.js tekniklerini ara
z-ai function -n web_search -a '{"query":"[sektör] three.js 3D web design", "num":5}'

# İyi örnekleri oku
z-ai function -n page_reader -a '{"url":"[bulunan url]"}'
```

### AŞAMA 2: PLANLA
```
1. Sektörü tanımla (yukarıdaki 7 sektörden eşleştir)
2. Renk paletini seç
3. 3D konsepti belirle (hangi objeler, efektler)
4. Bölüm listesini oluştur
5. Görsel listesi çıkar
```

### AŞAMA 3: TEMİZLE & HAZIRLA
```bash
# Eski siteyi temizle
rm -rf src/components/sections/*.tsx
rm -rf src/components/three/*.tsx
rm -rf public/images/*
rm -f src/lib/language-store.ts

# globals.css sıfırla (CSS variable'lar korunur, animasyonlar yazılır)
```

### AŞAMA 4: KODU YAZ (Sıfırdan)
Sırayla HER DOSYAYI yaz:
1. `src/lib/language-store.ts` → TR/EN çeviriler
2. `src/app/globals.css` → Tam tasarım sistemi
3. `src/app/layout.tsx` → Fonts + metadata
4. `src/app/page.tsx` → Tüm section import
5. `src/components/three/Scene3D.tsx` → 3D sahne
6. `src/components/sections/Navbar.tsx`
7. `src/components/sections/HeroSection.tsx`
8. `src/components/sections/AboutSection.tsx`
9. `src/components/sections/ServicesSection.tsx`
10. `src/components/sections/GallerySection.tsx`
11. `src/components/sections/BookingSection.tsx`
12. `src/components/sections/ContactSection.tsx`
13. `src/components/sections/Footer.tsx`
14. `src/components/sections/FloatingButtons.tsx`

### AŞAMA 5: GÖRSELLER ÜRET
```bash
# Her bölüm için AI görsel üret
z-ai image -p "[hero prompt]" -o "./public/images/hero-bg.png" -s 1344x768
z-ai image -p "[gallery 1]" -o "./public/images/gallery-1.png" -s 1024x1024
z-ai image -p "[gallery 2]" -o "./public/images/gallery-2.png" -s 1024x1024
z-ai image -p "[gallery 3]" -o "./public/images/gallery-3.png" -s 1024x1024
z-ai image -p "[gallery 4]" -o "./public/images/gallery-4.png" -s 1024x1024
z-ai image -p "[gallery 5]" -o "./public/images/gallery-5.png" -s 1024x1024
z-ai image -p "[service 1]" -o "./public/images/service-1.png" -s 1024x1024
z-ai image -p "[service 2]" -o "./public/images/service-2.png" -s 1024x1024
z-ai image -p "[service 3]" -o "./public/images/service-3.png" -s 1024x1024
z-ai image -p "[service 4]" -o "./public/images/service-4.png" -s 1024x1024
```

### AŞAMA 6: %100 DOĞRULUK DÖNGÜSÜ
```
Yukarıdaki 10 kriteri kontrol et.
Hata varsa düzelt.
Tekrar kontrol et.
%100 olana kadar tekrarla.
%100 olunca 2 tur daha sıfırdan kontrol et.
```

### AŞAMA 7: SUN
```
%100 doğruluk sağlandıktan sonra:
- Kullanıcıya siteyi bildir
- Preview Panel'de göster
- "Open in New Tab" butonunu hatırlat
```

---

## 🏗️ REPO YÖNETİM SİSTEMİ

### Tek Repo, Sürekli Güncelleme
```
Repo: github.com/[kullanıcı]/nova-sites

Her "tema" komutunda:
1. Eski site dosyalarını temizle
2. Repo adını güncelle
3. Yeni siteyi oluştur
4. Commit & push
```

### Temizleme Script'i: `scripts/cleanup.sh`
```bash
#!/bin/bash
# Mevcut siteyi temizle, framework koru

echo "🧹 NOVA Site Cleanup başlıyor..."

# Section bileşenlerini temizle
rm -rf src/components/sections/*.tsx 2>/dev/null

# Three.js bileşenlerini temizle
rm -rf src/components/three/*.tsx 2>/dev/null

# Görselleri temizle
rm -rf public/images/* 2>/dev/null

# Language store'u temizle
rm -f src/lib/language-store.ts 2>/dev/null

# API route'u temizle
rm -f src/app/api/route.ts 2>/dev/null

# Dev server'ı yeniden başlat
pkill -f "next dev" 2>/dev/null
sleep 2

echo "✅ Temizlik tamam! Yeni site için hazır."
```

### Repo Adı Güncelleme
```bash
# package.json güncelle
# Örnek: "name": "nova-insaat-ankara"

# GitHub repo adını güncelle
gh repo rename nova-insaat-ankara --yes

# Commit & push
git add -A
git commit -m "feat: yeni site - [tema adı]"
git push origin main
```

### Repo İçi Yapı (Her Site İçin)
```
nova-sites/
├── CLAUDE.md                 ← BEYİN (asla silinmez)
├── PROMPTS.md                ← Komut rehberi
├── scripts/
│   ├── cleanup.sh            ← Site temizleme
│   └── auto-fix-loop.sh      ← Otomatik düzeltme döngüsü
├── src/
│   ├── app/
│   │   ├── globals.css       ← Her temada yeniden yazılır
│   │   ├── layout.tsx        ← Her temada güncellenir
│   │   └── page.tsx          ← Her temada yeniden yazılır
│   ├── components/
│   │   ├── sections/         ← Her temada silinip yeniden yazılır
│   │   ├── three/            ← Her temada silinip yeniden yazılır
│   │   └── ui/               ← KORUNUR (shadcn/ui)
│   ├── lib/
│   │   ├── language-store.ts ← Her temada yeniden yazılır
│   │   ├── utils.ts          ← KORUNUR
│   │   └── db.ts             ← KORUNUR
│   └── hooks/                ← KORUNUR
├── public/images/            ← Her temada silinip yeniden doldurulur
├── package.json              ← name güncellenir
├── tailwind.config.ts        ← KORUNUR
├── next.config.ts            ← KORUNUR
├── prisma/                   ← KORUNUR
└── worklog.md                ← Her temada append edilir
```

---

## 🚀 PERFORMANS OPTİMİZASYON SİSTEMİ

### Lag & Performance Önleme

#### 1. Three.js Performance Kuralları
```
- Mobile'da 3D SAHNEYİ GİZLE (isMobile hook)
- Canvas dpr={[1, 1.5]} max 2 (mobile'da 1)
- Particle sayısı: Desktop 200, Mobile 0
- Geometry segments: Desktop 64, Mobile 32
- Environment preset yerine basit lighting
- requestAnimationFrame yerine useFrame (R3F optimize)
- Heavy computationları useMemo/useCallback ile sar
- Texture'ları lazy load yap
```

#### 2. Bundle Optimizasyonu
```
- dynamic import() ile heavy bileşenleri lazy load et
- next/dynamic ile Three.js sahnesini lazy load et
- Görseller: WebP format, lazy loading, blur placeholder
- Font: next/font ile optimize (flash of unstyled text yok)
- CSS: Tailwind purge ile kullanılmayan class'ları sil
- Client component'leri minimumda tut
- Server component avantajından faydalan
```

#### 3. Performans Repo Referansları
| Repo | Açıklama | Link |
|------|----------|------|
| `vercel/next.js` | Next.js resmi -内置 performance optimization | https://github.com/vercel/next.js |
| `pmndrs/react-three-fiber` | R3F performance best practices | https://github.com/pmndrs/react-three-fiber |
| `GoogleChrome/lighthouse` | Performance scoring tool | https://github.com/GoogleChrome/lighthouse |
| `anselanza/lighthouse-badges` | Lighthouse badge'ları | https://github.com/anselanza/lighthouse-badges |
| `nicolo-ribaudo/tsc-alias` | TypeScript path alias | https://github.com/nicolo-ribaudo/tsc-alias |

#### 4. Lazy Loading Pattern
```tsx
// HeroSection.tsx - Three.js lazy load
import dynamic from 'next/dynamic';

const Scene3D = dynamic(
  () => import('@/components/three/Scene3D'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-rose/30 border-t-rose rounded-full animate-spin" />
      </div>
    ),
  }
);
```

#### 5. Görsel Optimizasyonu
```tsx
// next/image ile lazy loading
import Image from 'next/image';

<Image
  src="/images/hero-bg.png"
  alt="Hero"
  fill
  priority={false}  // Sadece hero priority true
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQ..."
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

#### 6. Animasyon Performance
```tsx
// will-change optimizasyonu
// CSS'te:
.animate-optimized {
  will-change: transform;
  transform: translateZ(0); // GPU加速
}

// Framer Motion'da:
<motion.div
  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
  style={{ willChange: 'transform, opacity' }}
/>
```

---

## 🎨 SEKTÖR BAZLI TASARIM SİSTEMİ

`tema [sektör/açıklama]` → Otomatik eşleşme:

### 🔴 Lüks & Güzellik (Salon, SPA, Kozmetik, Moda)
- **Renkler**: Rose (#C8506F), Gold (#D4A574), Cream (#F5E6D3), Dark (#0A0A0F)
- **3D**: Distort Sphere + Gold Ring'ler + Crystal + Parçacıklar
- **Font**: Playfair Display + Inter
- **Stil**: Glassmorphism, soft glow, elegant

### 🟠 İnşaat & Mimari (İnşaat, Villa, Ofis, İç Mimarlık)
- **Renkler**: Steel Blue (#4A90D9), Gold (#C5A55A), Concrete (#E8E4E0), Dark (#1C1C1C)
- **3D**: Blueprint grid + Rotating building wireframe + Construction particles + Hard hat mesh
- **Font**: Josefin Sans + Source Sans Pro
- **Stil**: Minimal, geometric, blueprints, clean lines, industrial

### 🟢 Teknoloji & Startup (SaaS, AI, FinTech)
- **Renkler**: Cyan (#00D4FF), Electric Green (#00FF88), Slate (#0F172A), White
- **3D**: Wireframe globe + Particle network + Hologram mesh
- **Font**: Space Grotesk + DM Sans
- **Stil**: Cyberpunk, holographic, sharp, neon

### 🔴 Restoran & Yemek (Fine Dining, Cafe, Bar)
- **Renkler**: Warm Orange (#FF8C42), Deep Red (#8B1A1A), Cream (#FFF8E7), Dark (#1A1A1A)
- **3D**: Floating elements + Steam particles + Warm lighting
- **Font**: Cormorant Garamond + Lato
- **Stil**: Warm, cinematic, depth of field

### 🟣 Sanat & Galeri (Müze, Sergi, Portfolio)
- **Renkler**: Deep Purple (#6B21A8), Silver (#C0C0C0), White (#FAFAFA), Dark (#0D0D0D)
- **3D**: Floating frames + Light beams + Gallery walls
- **Font**: Syne + IBM Plex Sans
- **Stil**: Bold, experimental, kinetic typography

### 🟡 Sağlık & Wellness (Hastane, Gym, Yoga)
- **Renkler**: Mint Green (#34D399), Soft Blue (#93C5FD), White (#F8FAFC)
- **3D**: Organic shapes + DNA helix + Breathing animation
- **Font**: Fraunces + Work Sans
- **Stil**: Clean, organic, rounded, soft

### ⚫ Otomotiv & Motorspor
- **Renkler**: Carbon Black (#1A1A1A), Racing Red (#DC2626), Chrome (#E5E7EB), Yellow
- **3D**: Car wireframe + Speed particles + Dynamic camera
- **Font**: Orbitron + Barlow Condensed
- **Stil**: Aggressive, sharp, fast

### 🟤 Eğitim & Üniversite (Okul, Kurs, Akademi)
- **Renkler**: Navy (#1E3A5F), Gold (#D4A017), White (#FAFAFA), Dark (#0D1117)
- **3D**: Book mesh + Floating icons + Graduation cap
- **Font**: Merriweather + Open Sans
- **Stil**: Trustworthy, academic, clean

### 🔵 Deniz & Yachting (Marina, Tekne, Tur)
- **Renkler**: Ocean Blue (#0077B6), Sand (#E6C288), White (#F8F9FA), Dark (#0A1628)
- **3D**: Wave mesh + Floating boat + Water particles
- **Font**: Cinzel + Raleway
- **Stil**: Elegant, nautical, premium

---

## 📦 THREE.JS KÜTÜPHANE REFERANSI

### Kurulu Paketler
```
three@0.183.2 | @react-three/fiber@9.5.0 | @react-three/drei@10.7.7 | @types/three@0.183.1
```

### drei Bileşen Katalog
| Bileşen | Açıklama |
|---------|----------|
| `Float` | Floating animasyon |
| `MeshDistortMaterial` | Morph/distort efekt |
| `MeshWobbleMaterial` | Wobble/jelly efekt |
| `MeshTransmissionMaterial` | Cam/kristal efekt |
| `Sparkles` | Parıltı parçacıkları |
| `Stars` | Yıldız alanı |
| `Trail` | Parçacık izi |
| `Environment` | HDR ortam |
| `OrbitControls` | Kamera kontrol |
| `ScrollControls` | Scroll tabanlı animasyon |
| `Text3D` | 3D metin |
| `Points` / `PointMaterial` | Particle sistemi |
| `MeshReflectorMaterial` | Reflektif zemin |
| `Line` | 3D çizgiler |
| `Decal` | Dekal yapıştırma |
| `RoundedBox` | Yuvarlak köşeli kutu |
| `useTexture` | Texture yükleme |

### Three.js Performans Kuralları
1. `'use client'` ZORUNLU
2. Canvas ayrı dosyada: `src/components/three/Scene3D.tsx`
3. Heavy 3D `Suspense` + `dynamic import` ile lazy load
4. Mouse tracking → `useFrame` + `useThree().mouse`
5. Performance → `InstancedMesh` (çok obje)
6. Işık: ambient + directional + 2x point
7. Environment: `<Environment preset="night" />`
8. **Mobile: isMobile hook ile 3D GİZLE**
9. `dpr={[1, 1.5]}` max 2
10. Particle count: Desktop max 200, Mobile 0

---

## 🔬 ARAŞTIRMA & WEB GEZİNTİ

### Her "tema" komutunda otomatik araştır:
```bash
# 1. Trend ara
z-ai function -n web_search -a '{"query":"[sektör] premium website design 2025 Awwwards", "num":5}'

# 2. Rakip site bul
z-ai function -n web_search -a '{"query":"best [sektör] website examples", "num":5}'

# 3. Three.js teknik ara
z-ai function -n web_search -a '{"query":"three.js [sektör] 3D web design WebGL", "num":5}'

# 4. İyi örnekleri oku
z-ai function -n page_reader -a '{"url":"[en iyi url]"}'

# 5. Performans teknikleri
z-ai function -n web_search -a '{"query":"next.js performance optimization 2025 three.js", "num":3}'
```

### GitHub Repo Referansları

#### 3D & Web Framework
| Repo | Teknik | Link |
|------|--------|------|
| `pmndrs/react-three-fiber` | R3F ana kütüphane | github.com/pmndrs/react-three-fiber |
| `pmndrs/drei` | R3F helper hooks | github.com/pmndrs/drei |
| `brave98git/react-3js-wolf` | Three.js + GSAP | github.com/brave98git/react-3js-wolf |
| `akhil-k-se/AppleWebsite` | Apple tarzı | github.com/akhil-k-se/AppleWebsite |
| `8KCool/next.js-react-three.js-website` | Next.js + R3F örnek | github.com/8KCool/next.js-react-three.js-website |

#### Claude Code & AI Araçları (@selahattin.unlu referansları)
| Repo | Açıklama | Stars |
|------|----------|-------|
| `shanraisshan/claude-code-best-practice` | Claude Code best practices | Yeni |
| `microsoft/generative-ai-for-beginners` | AI öğrenme - 21 ders, Türkçe var | 105K+ |
| `forem/forem` | dev.to arkasındaki topluluk platformu | 23K+ |
| `storybookjs/storybook` | Component izole test + dokümantasyon | 85K+ |
| `webstudio-is/webstudio` | Açık kaynak website builder | 8K+ |
| `remotion-dev/remotion` | React ile MP4 video üret | 21K+ |
| `siddharthvaddem/openscreen` | SaaS ürün tanıtım videosu | Yeni |
| `BloopAI/vibe-kanban` | Claude Code'u 10x verimli kullan | 82K+ views |
| `garrytan/gstack` | CEO, tasarımcı, QA, güvenlik - 23 ajan | Yeni |
| `Donchitos/Claude-Code-Game-Studios` | Claude Code ile oyun geliştirme | 2.1K+ likes |
| `msitarzewski/agency-agents` | AI agent takım kurma (80+ rol) | Yeni |
| `iamlukethedev/Claw3D` | AI agent görsel yönetim ortamı | Yeni |
| `Comfy-Org/ComfyUI` | AI ile görsel, video, müzik, 3D üret | Yeni |
| `vikhyat/moondream` | Görselleri anlayan VLM modeli | Yeni |
| `roboflow/supervision` | Computer vision toolkit | Yeni |
| `shadcn-ui/ui` | UI component kütüphanesi | 9.2K+ likes |
| `DavidHDev/react-bits` | React animasyon koleksiyonu | Yeni |
| `recharts/recharts` | React veri görselleştirme | Yeni |
| `phaserjs/phaser` | HTML5 2D oyun motoru | Yeni |
| `pascalorg/editor` | 3D mimari tasarım | 883+ likes |
| `bigskysoftware/htmx` | JS olmadan dinamik web uygulamaları | Yeni |
| `strapi/strapi` | Ücretsiz headless CMS | Yeni |
| `gitroomhq/postiz-app` | Self-hosted sosyal medya yönetimi | 976+ likes |
| `coreyhaines31/marketingskills` | Geliştirici marketing becerileri | Yeni |
| `transmute-app/transmute` | Self-hosted dosya dönüştürme | Yeni |
| `free-for-dev` | Ücretsiz araç ve servis listesi | Yeni |
| `public-apis/public-apis` | Ücretsiz API koleksiyonu | 44K+ likes |
| `filamentphp/filament` | Laravel admin paneli (3 komut) | Yeni |
| `basecamp/omarchy` | Modern Linux dağıtımı | Yeni |
| `selahattinunlu/yt-music-cli` | Reklamsız YouTube Music CLI | 453+ likes |
| `memvid` | AI agent long-term memory | Yeni |
| `awesome-chatgpt-prompts` | 130K+ AI prompt koleksiyonu | 130K+ |
| `superpowers` | Claude Code context kaybını önle | Yeni |
| `selahattinunlu/cloud-code-repo` | Cloud Code otopilot repo | Yeni |

#### Claude Code İpuçları (@selahattin.unlu)
```
/simplify        → Son değişiklikleri incele, 3 paralel review al, birleştir
/model opusplan  → Güçlü modeli sadece karmaşık task'lerde kullan, limitleri tasarruf et
superpowers      → AI coding agent'lerin bağlam kaybını önle (Claude Code extension)
vibe-kanban      → AI coding agent'ları paralel çalıştır, kanban ile yönet
gstack           → CEO, tasarımcı, QA, güvenlik uzmanı rollerinde çoklu ajan
```

#### Performans & Test Araçları (@selahattin.unlu)
```
Storybook       → Component'leri izole geliştir/test et, visual testing, snapshot, accessibility
Lighthouse      → Performance, accessibility, best practices, SEO skorları
Code Splitting  → Bundle boyutunu küçült, lazy loading ile yüklenme hızını artır
Lazy Loading    → Görseller ve heavy component'ları gecikmeli yükle
```

#### "tema" Komutunda Selahattin Ünlü Repo Referansları
```
"tema" komutu çalıştığında, projeye uygun repo'ları otomatik seç:

Lüks/Premium Website  → three.js + react-bits + framer/motion + shadcn/ui
SaaS Dashboard        → shadcn/ui + recharts + storybook + filament
AI Chatbot            → generative-ai-for-beginners + moondream + agency-agents
Oyun                  → phaser + Claude-Code-Game-Studios
Sosyal Medya Aracı    → postiz-app + htmx + strapi
Eğitim Platformu      → forem + strapi + htmx
E-ticaret             → shadcn/ui + strapi + recharts
3D/Mimari             → three.js + pascalorg/editor
Video/Medya           → remotion + ComfyUI + openscreen
Portfolio             → three.js + react-bits + framer/motion
```

**Detaylı Katalog:** `knowledge-base/GITHUB_REPOS.md` dosyasına bak.

---

## 🖼️ AI GÖRSEL ÜRETİM

```bash
z-ai image -p "[prompt]" -o "./public/images/dosya.png" -s [BOYUT]

# Boyutlar: 1344x768 (hero), 1024x1024 (galeri), 768x1344 (portrait)

# Prompt şablonları
HERO: "[işletme], cinematic wide shot, dark luxury, moody lighting, 8K"
GALERİ: "[ürün], professional studio photography, dark background, rim lighting, 8K"
HAKKINDA: "[ekip/mekan], lifestyle photography, warm tones, editorial, 8K"
SERVİS: "[hizmet], close-up macro, premium quality, spotlight, 8K"
```

---

## 🎬 VIDEO ANALİZ SİSTEMİ (YENİ v5.0)

### 17 AI Skill - Video Çoklu Analiz Pipeline

```
┌──────────────────────────────────────────────────────────────┐
│  VIDEO ANALİZ PİPELİNE (Metin + Görsel + Ses + Web)         │
│                                                               │
│  Video Girdisi (URL veya dosya yükleme)                      │
│  ├── 🎬 Video Understand (VLM) → Görsel sahne analizi        │
│  ├── 🎤 ASR (Speech-to-Text) → Ses → metin transkripsiyon   │
│  ├── 📝 Metin Çıkarma → Ekrandaki tüm yazılar               │
│  ├── 🔍 Web Search → İlgili teknolojileri ara               │
│  ├── 📄 Web Reader → Dokümanları detaylı oku                │
│  ├── 🤖 LLM → Özetle, yapılandır, sistem oluştur           │
│  └── 🖼️ Image Gen → Çıkarılan frameleri geliştir             │
│                                                               │
│  Çıktı:                                                       │
│  ├── Tam analiz raporu (Türkçe)                              │
│  ├── Teknoloji listesi                                        │
│  ├── Adım adım rehber                                        │
│  └── Uygulanabilir kod/prompt                                 │
└──────────────────────────────────────────────────────────────┘
```

### Video Analiz Türleri

| Tür | Komut | Açıklama |
|-----|-------|----------|
| **Full Analysis** | `analysisType: "full"` | Tüm metin + görsel + ses + teknoloji analizi |
| **Text Extraction** | `analysisType: "text"` | Ekrandaki tüm yazıları çıkar |
| **Motion Analysis** | `analysisType: "motion"` | Animasyon tekniklerini analiz et |
| **Technology Scan** | `analysisType: "technology"` | Kullanılan araçları listele |
| **Quick Summary** | `analysisType: "summary"` | Hızlı özet |

### API Endpoint

```
POST /api/video-analyze
Body: {
  "videoUrl": "https://example.com/video.mp4",
  "analysisType": "full"  // full|text|motion|technology|summary
}

GET /api/video-analyze?file=video.mp4
→ /upload dizinindeki videoyu analiz eder
```

### CLI Kullanımı

```bash
# Videoyu doğrudan analiz et
z-ai vision -p "Videoyu detaylı analiz et, tüm metinleri yaz" -i video.mp4 --thinking

# Video sesini transkribe et
ffmpeg -i video.mp4 -vn -acodec copy audio.aac -y
ffmpeg -i audio.aac audio.wav -y
z-ai asr -f audio.wav -o transcript.json

# Frame'leri çıkar ve analiz et
ffmpeg -i video.mp4 -vf "fps=1/5,scale=640:-1" frames/frame_%03d.jpg
z-ai vision -p "Bu görüntüyü analiz et" -i frames/frame_01.jpg

# Web'den ilgili bilgileri ara
z-ai function -n web_search -a '{"query":"[video konusu]", "num":5}'
z-ai function -n page_reader -a '{"url":"[bulunan url]"}'
```

### "tema [konu]" Akışında Video Analizi

```
AŞAMA 0.5: VIDEO REFERANS ANALİZİ (YENİ)
├── Kullanıcı video yükleirse → /upload dizinine kaydet
├── Frame çıkar (ffmpeg) → VLM ile her frame'i analiz et
├── Ses çıkar → ASR ile transkribe et
├── Web'den ilgili teknolojileri ara
├── Tüm bilgileri birleştir → Analiz raporu oluştur
└── Çıktı: knowledge-base/VIDEO_ANALYSIS_SYSTEM.md

AŞAMA 1-7: Mevcut akışa devam (video bilgileri dahil)
```

### Video'dan Öğrenilen Sistemler

| Video | Öğrenilen Teknik | Projeye Uygulama |
|-------|-------------------|-------------------|
| Motion Design Studio | Remot sistemi, kinetik tipografi, motion graphics | GSAP + Framer Motion ile motion design |
| Active Theory | Web-based interaktif deneyimler | Three.js + WebGL interaktif sahneler |

---

## 📋 KOMUT SİSTEMİ

| Komut | Ne Yapar |
|-------|----------|
| `tema [isim]` | TAM OTOMATİK site üretimi (araştır → video → kod → test → %100) |
| `başla [isim]` | Aynı şey, kısa komut |
| `video analiz` | Video'yu analiz et (VLM + ASR + Web) |
| `codex [prompt]` | Mevcut siteye özellik ekle |
| `3d` | Three.js sahne ekle |
| `gez [url]` | Web'de site gez, referans al |
| `ref [repo]` | GitHub reposundan referans kullan |
| `temizle` | Mevcut siteyi temizle |
| `kontrol` | %100 doğruluk kontrolü |
| `git` | GitHub'a push |
| `görsel` | AI görseller üret |
| `fix [açıklama]` | Hata düzelt |

---

## 🏆 AWWWARDS CHECKLIST (18 Kriter)

```
[1]  İlk bakışta "WOW" efekti
[2]  Gerçek Three.js 3D sahne
[3]  Sinematik animasyonlar
[4]  Glassmorphism + premium glass
[5]  Smooth scroll geçişleri
[6]  Interactive her yerde
[7]  Dark luxury estetik
[8]  Mobile + Desktop mükemmel
[9]  Zero bug, zero lint error
[10] Her bölüm FARKLI ve BENZERSİZ
[11] Boş alan YOK
[12] AI üretilmiş premium görseller
[13] TR/EN dil desteği
[14] Magnetic butonlar
[15] Aurora / gradient mesh
[16] Noise texture overlay
[17] Ken Burns / zoom backgrounds
[18] Kinetik tipografi + micro-interactions
[19] Parallax multi-layer
[20] Sticky footer
```

---

## ⚠️ KRİTİK: HATALI REPO OTO-ARAŞTIRMA & DÜZELTME SİSTEMİ (v7.0)

### Kural: HER Repo Linki Doğrulanmış Olmalı

```
┌───────────────────────────────────────────────────────────────────┐
│  REPO DOĞRULAMA AKIŞI (HER SEFER ÇALIŞIR)                        │
│                                                                    │
│  [1] KULLANICI repo talep ettiğinde veya yeni repo eklendiğinde:   │
│  [2] curl ile GitHub API kontrol → HTTP 200 mü?                   │
│  [3] EĞER 404 → SAHTE REPO                                        │
│  [4] EĞER 301 → REDIRECT → doğru URL'yi bul                       │
│  [5] EĞER SAHTE veya BOZUK →                                      │
│      a) Web'de araştır (web_search ile)                            │
│      b) Doğru/kaliteli alternatif repo bul                         │
│      c) Doğrula (curl + GitHub API)                               │
│      d) MEGA_PROMPT.md'a ekle                                      │
│      e) Eski sahte/brokun linki sil                                │
│      f) Git commit + push                                          │
│  [6] TOPLAM repo sayısını güncelle                                 │
└───────────────────────────────────────────────────────────────────┘
```

### Doğrulama Komutları

```bash
# Tek repo kontrol
curl -sI "https://api.github.com/repos/KULLANICI/REPO" \
  -H "Authorization: token YOUR_GITHUB_PAT" \
  | grep "status:"

# Toplu kontrol (10'lu batch)
for repo in "user/repo1" "user/repo2" "user/repo3"; do
  code=$(curl -sI -o /dev/null -w "%{http_code}" \
    "https://api.github.com/repos/$repo" \
    -H "Authorization: token YOUR_GITHUB_PAT")
  echo "$code | $repo"
done
```

### Araştırma & Düzeltme Akışı

```
EĞER bir repo 404 verirse:
├── 1. Web'de aynı isimle veya benzer projede ara
│   └── z-ai function -n web_search -a '{"query":"[repo ismi] github", "num":5}'
├── 2. Bulunan alternatifleri kontrol et (curl ile doğrula)
├── 3. En iyi alternatifi seç
├── 4. MEGA_PROMPT.md'a ekle (eski sahte linki sil)
├── 5. Git commit: "fix: [repo] 404 → [yeni_repo] ile değiştirildi"
└── 6. Her iki remote'a push: origin + cloud

EĞER bir repo 301 verirse (redirect):
├── 1. Redirect hedefini bul (curl -L ile)
├── 2. Yeni URL'yi MEGA_PROMPT.md'da güncelle
├── 3. Git commit + push
└── 4. Örnek: framer/motion → motiondivision/motion
```

### Yasaklar

```
❌ 404 veren repo'yu MEGA_PROMPT.md'da BIRAKMA
❌ Uydurma/varsayımsal repo linki EKLEME
❌ Doğrulanmamış repo'yu referans OLARAK KULLANMA
❌ "nicollash" veya bilinen sahte hesaplardan repo EKLEME
✅ HER repo curl ile 200 dönmeli
✅ Link kesinlikle github.com/KULLANICI/REPO formatında olmalı
✅ Doğrulama yapılmadan repo SAYISINI ARTIRMA
```

### Mevcut Durum (v7.1)

```
Toplam Kontrol Edilen:  465 repo
✅ Gerçek (200):        190 repo
🔄 Yeniden Yönlendirme (301): 17 repo → URL'leri düzeltildi
❌ Sahte (404):         258 repo → SİLİNDİ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MEGA_PROMPT.md Aktif:   231 DOĞRULANMIŞ repo
GITHUB_REPOS.md Aktif:  168 repo (tümü doğrulanmış)
```

---

## 📌 KRİTİK NOTLAR

- **%100 doğruluk olmadan ASLA bitirme**
- **Kullanıcıya ara adım GÖSTERME** (sadece %100 sonucu)
- **3000 portu** dışında port YASAK
- **`bun run build` ÇALIŞTIRMA**
- **Test yazma**, üretim kodu sadece
- **z-ai-web-dev-sdk** sadece backend
- **Her temada araştır YAP** (web search + page_reader)
- **Her temada repo temizle + güncelle**
- **Sticky footer zorunlu** (min-h-screen flex flex-col + mt-auto)
- **Noise overlay her sayfada** (.noise-overlay)
- **Mobile'da 3D KAPALI** (isMobile hook)
