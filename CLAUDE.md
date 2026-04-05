# 🧠 CLAUDE CODE - AKILLI PROJE ASİSTANI

## TEMEL KURALLAR (Her zaman uygula)

Bu bir **Awwwards-seviye ultra premium website** üretim sistemidir. Sıradan website ÜRETMEZSİN.

### 🚫 YASAKLAR
- Asla template tarzı dikey bölümlü sıradan site yapma
- Asla basic grid layout kullanma
- Asla sıkıcı renk paleti kullanma (mavi, lacivert yasak)
- Asla statik, hareketsiz sayfa yapma
- Asla boilerplate kod yazma

### ✅ ZORUNLULAR
- Her sayfa **VİRAL, İMMERSIVE, 3D** olmalı
- Three.js ile gerçek 3D sahneler eklemelisin
- GSAP/Framer Motion ile sinematik animasyonlar
- Glassmorphism, gradient, glow, cinematic lighting
- Scroll-triggered geçişler ve parallax
- Her bölüm FARKLI ve BENZERSİZ olmalı
- Hover, micro-interaction her yerde olmalı
- Dark luxury tema (#0A0A0F arka plan)

---

## 🔄 ÇALIŞMA DÖNGÜSÜ (MUTLAKA UYLA)

Kullanıcı her mesaj gönderdiğinde şu döngüyü SIFIRDAN uygula:

```
1. ANLA  → Kullanıcının ne istediğini tam olarak kavramayı çalış
2. PLANLA → Hangi bileşenleri nereye koyacağını düşün
3. YAP    → Kodu yaz ve dosyaları oluştur/güncelle
4. KONTROL ET:
   a. `npx eslint src/` çalıştır → hata varsa düzelt
   b. `bun run dev` çalıştır → compile hatası varsa düzelt
   c. dev.log dosyasını oku → runtime hataları varsa düzelt
   d. Tüm importlar eksiksiz mi kontrol et
   e. Tüm bileşenler doğru import edilmiş mi kontrol et
   f. Görseller var mı kontrol et (gerekirse z-ai ile üret)
5. EKSİK VAR MI? → Varsa 3. adıma dön ve tekrar yap
6. TAMAM MI? → Herşey temizse kullanıcıya bildir
7. TEKRAR KONTROL → En az 2 tur daha kontrol et
```

**ÖNEMLİ**: Bu döngüden ÇIKMA. Her şey çalışana kadar tekrarla. Kullanıcıya "bitti" deme, gerçekten bittiğinde söyle.

---

## 📦 THREE.JS REFERANS REPOLARI

İlham almak ve kod referansı için bu repoları incele:

### Ana Kütüphaneler
| Repo | Stars | Açıklama | Link |
|------|-------|----------|------|
| `pmndrs/react-three-fiber` | 30.4K | React renderer for Three.js | https://github.com/pmndrs/react-three-fiber |
| `pmndrs/drei` | 9.5K | R3F helper hooks ve bileşenler | https://github.com/pmndrs/drei |
| `pmndrs/react-postprocessing` | - | R3F post-processing efektleri | https://github.com/pmndrs/react-postprocessing |
| `pmndrs/uikit` | - | R3F user interface bileşenleri | https://github.com/pmndrs/uikit |
| `mrdoob/three.js` | 107K+ | Three.js ana kütüphane | https://github.com/mrdoob/three.js |

### 3D Website & Portfolio
| Repo | Açıklama | Link |
|------|----------|------|
| `VinayMatta63/threejs-portfolio` | 3D game-like portfolio, karakter hareketli | https://github.com/VinayMatta63/threejs-portfolio |
| `Shivam-Sharma-1/3D-Portfolio` | Next.js + Three.js portfolio, dark/light | https://github.com/Shivam-Sharma-1/3D-Portfolio |
| `brave98git/react-3js-wolf` | Three.js + WebGL + GSAP + ScrollTrigger | https://github.com/brave98git/react-3js-wolf |
| `akhil-k-se/AppleWebsite` | Apple tarzı Three.js website | https://github.com/akhil-k-se/AppleWebsite |
| `Orpheus-MM/3d-virtual-store` | 3D virtual store, immersive alışveriş | https://github.com/Orpheus-MM/3d-virtual-store |
| `TomPast/artwork-3D-museum` | 3D müze, çizim sergi | https://github.com/TomPast/artwork-3D-museum |
| `theringsofsaturn/3D-ai-school-threejs` | 3D AI sınıf, R3F + OpenAI | https://github.com/theringsofsaturn/3D-ai-school-threejs |
| `IamNishant51/Three.JS-Book` | 3D sliding book, interaktif | https://github.com/IamNishant51/Three.JS-Book |
| `YazanKittaneh/world.yazan.io` | Nuxt 3 + Three.js immersive globe | https://github.com/YazanKittaneh/world.yazan.io |
| `MartinsHolding/3DCyberGlobe` | 3D Cyberpunk visualizer, 60FPS | https://github.com/MartinsHolding/3DCyberGlobe |
| `8KCool/next.js-react-three.js-website` | Next.js + R3F website tam örnek | https://github.com/8KCool/next.js-react-three.js-website |

### Claude Code Araçları
| Repo | Açıklama | Link |
|------|----------|------|
| `hesreallyhim/awesome-claude-code` | Claude Code skills, hooks, plugins listesi | https://github.com/hesreallyhim/awesome-claude-code |
| `affaan-m/everything-claude-code` | Claude Code performans ve agent sistemi | https://github.com/affaan-m/everything-claude-code |
| `garrytan/gstack` | Garry Tan'ın Claude Code setup (23 tool) | https://github.com/garrytan/gstack |
| `gsd-build/get-shit-done` | Claude Code meta-prompting sistemi | https://github.com/gsd-build/get-shit-done |
| `thedotmack/claude-mem` | Claude Code otomatik memory plugin | https://github.com/thedotmack/claude-mem |

### Web Gezinme (MCP Browser)
| Repo | Açıklama | Link |
|------|----------|------|
| `microsoft/playwright-mcp` | Microsoft'ın Playwright MCP server'ı | https://github.com/microsoft/playwright-mcp |
| `cloudflare/playwright-mcp` | Cloudflare browser rendering MCP | https://github.com/cloudflare/playwright-mcp |
| `merajmehrabi/puppeteer-mcp-server` | Puppeteer MCP browser automation | https://github.com/merajmehrabi/puppeteer-mcp-server |
| `Saik0s/mcp-browser-use` | Browser-use MCP entegrasyonu | https://github.com/Saik0s/mcp-browser-use |
| `steipete/claude-code-mcp` | Claude Code'u MCP server olarak kullanma | https://github.com/steipete/claude-code-mcp |

### Kurulum Komutları (Claude Code'dan)
```bash
# Playwright MCP kurulumu
claude mcp add playwright -- npx @playwright/mcp@latest

# Puppeteer MCP kurulumu
claude mcp add puppeteer -- npx puppeteer-mcp-server

# Browser-use MCP kurulumu
claude mcp add browser-use -- npx mcp-browser-use

# İnternetten sayfa okuma
claude mcp add fetch -- npx @anthropic-ai/mcp-fetch
```

---

## 🎨 TEKNOLOJİ STACK

### Core
- **Next.js 16** (App Router) - ZORUNLU
- **TypeScript 5** - ZORUNLU
- **Tailwind CSS 4** - ZORUNLU
- **Three.js** + **@react-three/fiber** + **@react-three/drei** - 3D sahneler için

### Animasyonlar
- **Framer Motion** - Scroll animasyonları, geçişler
- **Three.js** - 3D modeller, sahneler, efektler
- **CSS Keyframes** - Hafif animasyonlar

### UI
- **shadcn/ui** (New York style) - Varsayılan bileşenler
- **Lucide React** - İkonlar
- **Zustand** - State yönetimi

### Tasarım Sistemi
- **Arka plan**: `#0A0A0F` (dark)
- **Kart**: `#12121A` (dark-card)
- **Rose**: `#C8506F` (primary)
- **Gold**: `#D4A574` (accent)
- **Cream**: `#F5E6D3` (text)
- **Font Display**: Playfair Display (serif, başlıklar)
- **Font Body**: Inter (sans-serif, metin)

---

## 📋 KOMUT KILAVUZU

Kullanıcı şu kelimelerden birini yazdığında:

### `tema [açıklama]` veya `theme [açıklama]`
→ Yeni bir website tasarla. Açıklamadaki sektöre göre:
1. İşletme bilgilerini ve sektörü anla
2. Renk paletini sektör'e uyarla
3. Three.js ile 3D hero sahnesi oluştur
4. Tüm bölümleri sıfırdan premium tasarla
5. AI görseller üret (`z-ai image` CLI kullan)
6. Döngüyü uygula, herşey çalışana kadar kontrol et

### `codex [prompt]` veya `code [prompt]`
→ Mevcut projeye yeni özellik/bölüm ekle:
1. Mevcut kodu oku ve yapısını anla
2. Yeni özelliği mevcut stile uygun ekle
3. Three.js 3D elementler ekle
4. Eksik görselleri üret
5. Döngüyü uygula

### `3d` veya `three`
→ Mevcut sayfaya Three.js 3D sahne ekle:
1. @react-three/fiber ile Canvas oluştur
2. 3D geometri, ışıklandırma, kamera ayarla
3. Interactive (mouse tracking) yap
4. Scroll ile 3D sahne etkileşimi ekle
5. Döngüyü uygula

### `gez [url]` veya `browse [url]`
→ İnternette bir siteyi gez ve referans al:
1. Playwright MCP veya fetch ile siteye git
2. Sayfa yapısını, tasarımını, animasyonlarını analiz et
3. İlgili kod örneklerini çıkar
4. Mevcut projeye uygula
5. Döngüyü uygula

### `referans [repo]` veya `ref [repo]`
→ GitHub reposunu referans olarak kullan:
1. `gh repo clone` ile reposu geçici klonla
2. Kod yapısını incele
3. İlgili Three.js sahnelerini, animasyonlarını, tasarımlarını çıkar
4. Mevcut projeye adapte et
5. Döngüyü uygula

### `düzenle [açıklama]` veya `fix [açıklama]`
→ Mevcut kodu düzenle/fix et:
1. Sorunlu dosyayı bul
2. Düzelt
3. Kontrol et
4. Döngüyü uygula

### `görsel` veya `image`
→ AI görseller üret:
1. Hangi görseller eksik kontrol et
2. `z-ai image -p "prompt" -o "./path.png" -s 1024x1024` ile üret
3. Dev server'ı kontrol et

### `kontrol` veya `check`
→ Tüm projeyi kontrol et:
1. ESLint çalıştır
2. Dev server loglarını kontrol et
3. Tüm importları kontrol et
4. Eksik dosya/görsel var mı kontrol et
5. Döngüyü uygula

### `git` veya `github` veya `push`
→ Tüm değişiklikleri GitHub'a push et:
1. `git add -A`
2. `git commit -m "açıklama"`
3. `git push origin main`
4. Repo linkini göster

---

## 🌐 THREE.JS ENTEGRASYON KILAVUZU

### Three.js Referans Kodları (GitHub'dan)

#### 1. Distort Sphere (pmndrs/drei'den)
```tsx
import { Float, MeshDistortMaterial } from '@react-three/drei';

<Float speed={2} rotationIntensity={1} floatIntensity={2}>
  <mesh scale={2}>
    <sphereGeometry args={[1, 64, 64]} />
    <MeshDistortMaterial
      color="#C8506F"
      speed={3}
      distort={0.4}
      roughness={0.2}
      metalness={0.8}
    />
  </mesh>
</Float>
```

#### 2. Particle System ( FloatingShapes'ten)
```tsx
import { Points, PointMaterial } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

function Particles({ count = 500 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        size={0.02}
        color="#D4A574"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </Points>
  );
}
```

#### 3. Animated Torus Ring (threejs-portfolio'dan)
```tsx
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function GoldRing({ radius = 3 }: { radius?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial color="#D4A574" emissive="#D4A574" emissiveIntensity={0.3} metalness={0.9} roughness={0.1} />
    </mesh>
  );
}
```

#### 4. Scroll-driven 3D (react-3js-wolf'tan)
```tsx
import { useScroll, useTransform } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ScrollScene() {
  const ref = useRef<THREE.Group>(null);
  const scroll = useScroll();
  const rotation = useTransform(scroll.offset, [0, 1], [0, Math.PI * 2]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y = rotation.get();
    }
  });

  return <group ref={ref}>{/* 3D objeler buraya */}</group>;
}
```

#### 5. Glass Cube (3D-virtual-store'dan)
```tsx
import { MeshWobbleMaterial, Float } from '@react-three/drei';

<Float speed={2} rotationIntensity={0.3}>
  <mesh scale={0.8}>
    <boxGeometry args={[1, 1, 1]} />
    <MeshWobbleMaterial
      color="#1A1A2E"
      transparent
      opacity={0.3}
      metalness={0.9}
      roughness={0.1}
      factor={0.2}
    />
  </mesh>
</Float>
```

### Three.js Kullanım Kuralları
1. Her zaman `'use client'` kullan
2. Canvas component'i ayrı dosyada tut (`src/components/three/`)
3. Heavy 3D işlemleri `Suspense` ile sar
4. Mouse tracking için `useFrame` kullan
5. Performance için `instancedMesh` kullan (çok obje varsa)
6. Işıklandırma: ambient + directional + point lights
7. Environment map kullan (`<Environment />`)
8. Mobile'da 3D sahneyi gizle (performance için)

### drei'den Kullanılabilir Bileşenler
- `Float` - Floating animasyon
- `MeshDistortMaterial` - Morph efekt
- `MeshWobbleMaterial` - Wobble efekt
- `MeshTransmissionMaterial` - Cam efekt
- `Sparkles` - Parıltı parçacıkları
- `Stars` - Yıldız arka plan
- `Environment` - HDR environment
- `OrbitControls` - Kamera kontrol
- `ScrollControls` - Scroll tabanlı animasyon
- `Text3D` - 3D metin
- `Center` - Objeyi ortala
- `Decal` - Dekal yapıştırma
- `Trail` - Parçacık izi

---

## 🖼️ AI GÖRSEL ÜRETİM

CLI kullanarak görsel üret:
```bash
z-ai image -p "detaylı açıklama, dark luxury, cinematic, 8K" -o "./public/images/dosya.png" -s 1024x1024
```

**Desteklenen boyutlar:** 1024x1024, 768x1344, 864x1152, 1344x768, 1152x864

**Prompt yapısı:** `[konu], [stil], [aydınlatma], [renk tonu], high quality, detailed, 8K photography`

---

## 📁 PROJE YAPISI

```
src/
├── app/
│   ├── globals.css          # Ana tasarım sistemi
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa (tek route)
├── components/
│   ├── sections/            # Bölüm bileşenleri
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── BookingSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingButtons.tsx
│   ├── three/               # Three.js 3D sahneler
│   │   ├── Scene3D.tsx
│   │   ├── Hero3D.tsx
│   │   └── FloatingShapes.tsx
│   └── ui/                  # shadcn/ui bileşenleri
├── lib/
│   ├── language-store.ts    # TR/EN dil yönetimi
│   └── utils.ts
└── hooks/                   # Custom hooks
public/images/               # AI üretilmiş görseller
```

---

## 🔧 KONTROL KOMUTLARI

```bash
# Lint kontrol
npx eslint src/

# Dev server başlat
bun run dev

# Dev log oku
tail -50 dev.log

# Dev server durdur
pkill -f "next dev"

# Dev server yeniden başlat
pkill -f "next dev"; sleep 2; bun run dev > dev.log 2>&1 &

# Port kontrol
ss -tlnp | rg 3000

# GitHub repo klonla (referans için)
gh repo clone PMNDRS/react-three-fiber /tmp/r3f-ref

# GitHub'da ara
gh search repos "three.js" --sort stars --limit 10
```

---

## ⚡ HIZLI İPUÇLARI

1. **Her yeni bölüm** eklediğinde page.tsx'e import et
2. **Her yeni görsel** public/images/ klasörüne koy
3. **Three.js Canvas** her zaman Suspense ile sar
4. **Responsive** tasarım: mobile-first, sm/md/lg breakpointler
5. **Framer Motion** initial/animate/exit kullan
6. **Zustand** store'da TR/EN çevirileri tut
7. **Dev server log** her değişiklikten sonra kontrol et
8. **ESLint** sıfır hata zorunlu
9. **3000 portu** tek port, asla değiştirme
10. **next.config.ts** allowedDevOrigins ekle
11. **Three.js referans** almak için GitHub repolarını incele
12. **Web gezinme** için Playwright MCP kullan

---

## 🏆 KALİTE STANDARDI

Bu proje Awwwards, Webflow Awards, FWA seviyesinde OLMALI:

- ✅ İlk bakışta "WOW" efekti
- ✅ Gerçek Three.js 3D sahne
- ✅ Sinematik animasyonlar
- ✅ Glassmorphism ve premium glass efektler
- ✅ Smooth scroll geçişleri
- ✅ Interactive her yerde
- ✅ Dark luxury estetik
- ✅ Mobile ve desktop mükemmel
- ✅ Zero bug, zero lint error
